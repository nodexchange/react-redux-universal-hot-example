/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line import/extensions
import * as surveyActions from 'redux/modules/survey';
import surveyValidation from './surveyValidation';

function asyncValidate(data, dispatch, { isValidEmail }) {
  if (!data.email) {
    return Promise.resolve({});
  }
  return isValidEmail(data);
}
@connect(() => ({}),
  dispatch => bindActionCreators(surveyActions, dispatch)
)
@reduxForm({
  form: 'survey',
  fields: ['name', 'email', 'occupation', 'currentlyEmployed', 'sex'],
  validate: surveyValidation,
  asyncValidate,
  asyncBlurFields: ['email']
})
export default class SurveyForm extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired
  };

  render() {
    const {
      asyncValidating,
      dirty,
      fields: { name, email, occupation, currentlyEmployed, sex },
      active,
      handleSubmit,
      invalid,
      reset,
      pristine,
      valid
      } = this.props;
    // eslint-disable-next-line global-require
    const styles = require('./SurveyForm.scss');

    const renderInput = (field, label, showAsyncValidating) =>
      <div className={`form-group ${(field.error && field.touched ? ' has-error' : '')}`}>
        <label htmlFor={field.name} className="col-sm-2">{label}</label>
        <div className={`col-sm-8 ${styles.inputGroup}`}>
          {showAsyncValidating && asyncValidating && <i className={`fa fa-cog fa-spin ${styles.cog}`} />}
          <input type="text" className="form-control" id={field.name} {...field} />
          {field.error && field.touched && <div className="text-danger">{field.error}</div>}
          <div className={styles.flags}>
            {field.dirty && <span className={styles.dirty} title="Dirty">D</span>}
            {field.active && <span className={styles.active} title="Active">A</span>}
            {field.visited && <span className={styles.visited} title="Visited">V</span>}
            {field.touched && <span className={styles.touched} title="Touched">T</span>}
          </div>
        </div>
      </div>;

    return (
      <div>
        <form className="form-horizontal" onSubmit={this.props.handleSubmit(handleSubmit)}>
          {renderInput(name, 'Full Name')}
          {renderInput(email, 'Email', true)}
          {renderInput(occupation, 'Occupation')}
          <div className="form-group">
            <label htmlFor="currentlyEmployed" className="col-sm-2">Currently Employed?</label>
            <div className="col-sm-8">
              <input type="checkbox" id="currentlyEmployed" {...currentlyEmployed} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2">Sex</label>
            <div className="col-sm-8">
              <input type="radio" id="sex-male" {...sex} value="male" checked={sex.value === 'male'} />
              <label htmlFor="sex-male" className={styles.radioLabel}>Male</label>
              <input type="radio" id="sex-female" {...sex} value="female" checked={sex.value === 'female'} />
              <label htmlFor="sex-female" className={styles.radioLabel}>Female</label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane" /> Submit
              </button>
              <button
                className="btn btn-warning"
                onClick={reset}
                style={{ marginLeft: 15 }}
              >
                <i className="fa fa-undo" /> Reset
              </button>
            </div>
          </div>
        </form>

        <h4>Props from redux-form</h4>

        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Active Field</th>
              <td>{active}</td>
            </tr>
            <tr>
              <th>Dirty</th>
              <td className={dirty ? 'success' : 'danger'}>{dirty ? 'true' : 'false'}</td>
            </tr>
            <tr>
              <th>Pristine</th>
              <td className={pristine ? 'success' : 'danger'}>{pristine ? 'true' : 'false'}</td>
            </tr>
            <tr>
              <th>Valid</th>
              <td className={valid ? 'success' : 'danger'}>{valid ? 'true' : 'false'}</td>
            </tr>b
            <tr>
              <th>Invalid</th>
              <td className={invalid ? 'success' : 'danger'}>{invalid ? 'true' : 'false'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
