import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

const defaultOffset = 300;

const topOfElement = function (element) {
  if (!element) {
    return 0;
  }
  return element.offsetTop + topOfElement(element.offsetParent);
};

const mapStateToProps = (state, {
  as
}) => ({
  count: state.multireducer[as].count
});

const mapDispatchToProps = (dispatch, {
  as
}) => bindActionCreators({
  increment
}, dispatch, as);

@connect(
  mapStateToProps,
  mapDispatchToProps
)

export default class ScrollManager extends Component {
  constructor(props) {
    super(props);
    this.listener = _.throttle(this.scrollListener, 200).bind(this);
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  scrollListener() {
    var el = ReactDOM.findDOMNode(this);
    var offset = this.props.offset || defaultOffset;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (topOfElement(el) + el.offsetHeight - scrollTop - window.innerHeight < offset) {
      this.props.somethingHere;
    }
  }

  attachScrollListener() {
    window.addEventListener('scroll', this.listener);
    window.addEventListener('resize', this.listener);
    this.listener();
  }

  detachScrollListener() {
    window.removeEventListener('scroll', this.listener);
    window.removeEventListener('resize', this.listener);
  }

  render() {
    return ( <div> Scrollmanager </div>)
  }
}