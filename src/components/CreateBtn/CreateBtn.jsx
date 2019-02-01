import React          from 'react';
import PropTypes      from 'prop-types';
import { connect }    from 'react-redux';
import { openCreate } from '../../redux/actions';
import './CreateBtn.css';

export const CreateBtn = ({ openCreate }) => (
  <button type="button"
          className="btn btn-primary create-question-btn"
          onClick={openCreate}>
    Ask a new question
  </button>
);

CreateBtn.propTypes = {
  openCreate: PropTypes.func.isRequired
};

export default connect(
  null,
  { openCreate }
)(CreateBtn);