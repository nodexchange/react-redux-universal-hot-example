import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { initializeWithKey } from 'redux-form';
import { asyncConnect } from 'redux-async-connect';

// eslint-disable-next-line import/extensions
import * as widgetActions from 'redux/modules/widgets';
// eslint-disable-next-line import/extensions, no-duplicate-imports
import { isLoaded, load as loadWidgets } from 'redux/modules/widgets';
// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
import { WidgetForm } from 'components';


@asyncConnect([{
  deferred: true,
  // eslint-disable-next-line consistent-return
  promise: ({ store: { dispatch, getState } }) => {
    if (!isLoaded(getState())) {
      return dispatch(loadWidgets());
    }
  }
}])
@connect(
  state => ({
    widgets: state.widgets.data,
    editing: state.widgets.editing,
    error: state.widgets.error,
    loading: state.widgets.loading
  }),
  { ...widgetActions, initializeWithKey })
export default class Widgets extends Component {
  static propTypes = {
    widgets: PropTypes.array, // eslint-disable-line react/forbid-prop-types
    error: PropTypes.string,
    loading: PropTypes.bool,
    // initializeWithKey: PropTypes.func.isRequired,
    editing: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func.isRequired,
    editStart: PropTypes.func.isRequired
  };

  render() {
    const handleEdit = (widget) => {
      const { editStart } = this.props; // eslint-disable-line no-shadow
      return () => editStart(String(widget.id));
    };
    const { widgets, error, editing, loading, load } = this.props;
    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }
    // eslint-disable-next-line global-require
    const styles = require('./Widgets.scss');

    return (
      <div className={`${styles.widgets} container`}>
        <h1>
          Widgets
          <button className={`${styles.refreshBtn} btn btn-success`} onClick={load}>
            <i className={refreshClassName} /> {' '} Reload Widgets
          </button>
        </h1>
        <Helmet title="Widgets" />
        <p>
          If you hit refresh on your browser, the data loading will take place on the server before the page is
          returned. If you navigated here from another page, the data was fetched from the client after the route
          transition. This uses the decorator method <code>@asyncConnect</code> with the <code>deferred: true</code>
          flag. To block a route transition until some data is loaded, remove the <code>deffered: true</code> flag.
          To always render before loading data, even on the server, use <code>componentDidMount</code>.
        </p>
        <p>
          This widgets are stored in your session, so feel free to edit it and refresh.
        </p>
        {error &&
        <div className="alert alert-danger" role="alert">
          <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
          {' '}
          {error}
        </div>}
        {widgets && widgets.length &&
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={styles.idCol}>ID</th>
              <th className={styles.colorCol}>Color</th>
              <th className={styles.sprocketsCol}>Sprockets</th>
              <th className={styles.ownerCol}>Owner</th>
              <th className={styles.buttonCol} />
            </tr>
          </thead>
          <tbody>
            {
            // eslint-disable-next-line no-confusing-arrow
            /* eslint-disable */
            widgets.map(widget => editing[widget.id] ?
              <WidgetForm formKey={String(widget.id)} key={String(widget.id)} initialValues={widget} /> :
                <tr key={widget.id}>
                  <td className={styles.idCol}>{widget.id}</td>
                  <td className={styles.colorCol}>{widget.color}</td>
                  <td className={styles.sprocketsCol}>{widget.sprocketCount}</td>
                  <td className={styles.ownerCol}>{widget.owner}</td>
                  <td className={styles.buttonCol}>
                    <button className="btn btn-primary" onClick={handleEdit(widget)}>
                      <i className="fa fa-pencil" /> Edit
                    </button>
                  </td>
                </tr>)
              /* eslint-enabled */
            }
          </tbody>
        </table>}
      </div>
    );
  }
}

