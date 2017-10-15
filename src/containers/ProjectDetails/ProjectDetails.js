import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Divider, Hero } from 'components';

// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies

export default class ProjectDetails extends Component {
  static propTypes = {
    projectName: PropTypes.string,
    params: PropTypes.object // eslint-disable-line react/forbid-prop-types
  }
  state = {
    showKitten: false
  };

  handleToggleKitten = () => this.setState({ showKitten: !this.state.showKitten });

  panelCopyObject = () => {
    const copy = [];
    copy.push({
      smallHeader: 'QUARTILE',
      header: 'Projects',
      // eslint-disable-next-line max-len
      description: 'We are advocates of simplicity and transparency. With over ten years experience in the advertising business, it is safe to say that we gained excellent exposure and grasp on all industry leading solutions. We place the strongest emphasis on immersive experience design, where we collaborate with our clients to deliver comprehensive solutions that meet their even most demanding business goals. Our agency originated in the very heart of London\'s silicon roundabout, where most of our tech talent was acquired. Get in touch with us, see how our award winning service differs from others.',
      buttonText: 'Projects',
      sectionClass: 'projects',
      link: ''
    });
    return copy;
  }

  render() {
    const styles = require('./ProjectDetails.scss');

    return (
      <div className={styles.projectDetails}>
        <Helmet title="Project Detail" />
        <Hero title={this.props.params.projectName} />
        <div className={styles.section}>
          {'.'}
        </div>
        <Divider />
      </div>
    );
  }
}
