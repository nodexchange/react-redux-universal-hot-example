import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'multireducer';

// eslint-disable-next-line import/extensions
import { increment } from 'redux/modules/counter';

const mapStateToProps = (state, { as }) => ({ count: state.multireducer[as].count });

const mapDispatchToProps = (dispatch, { as }) => bindActionCreators({ increment }, dispatch, as);

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class CounterButton extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  props = {
    className: ''
  };

  render() {
    const { count, increment } = this.props; // eslint-disable-line no-shadow
    let { className } = this.props;
    className += ' btn btn-default';
    return (
      <button className={className} onClick={increment}>
        You have clicked me {count} time{count === 1 ? '' : 's'}.
      </button>
    );
  }
}

