import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as copyActions from 'redux/modules/copy';
import Helmet from 'react-helmet';
import { Divider, GridBack, Hero, SectionText } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
@connect(
  state => ({ localeCopy: state.copy.localeCopy }),
  copyActions
)

export default class ProjectDetails extends Component {
  static propTypes = {
    loadCopy: PropTypes.func.isRequired, // redux-actions
    localeCopy: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    params: PropTypes.object // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props);
    this.localeCopy = this.props.localeCopy || 'loading...';
  }

  componentDidMount() {
    const section = this.props.params.projectName;
    this.props.loadCopy(section);
  }

  render() {
    const styles = require('./ProjectDetails.scss');

    if (this.localeCopy === 'loading...' || this.props.localeCopy[0].default) {
      return (<p>Loading...</p>);
    }
    const localeCopy = this.props.localeCopy[0];
    console.log('____ ', localeCopy);
    console.log(localeCopy);
    console.log('===========');
    return (
      <div className={styles.projectDetails}>
        <Helmet title="Project Detail" />
        <Hero
          smallHeader={localeCopy.header}
          background={localeCopy['hero image']}
          client={localeCopy.client}
          date={localeCopy.date}
          demo={localeCopy.demo}
        />
        <GridBack link="projects" />
        <SectionText header={localeCopy.header} copy={localeCopy.description} tags={localeCopy.tags} />
        <Divider />
        <Divider />
      </div>
    );
  }
}
