import React          from 'react';
import PropTypes      from 'prop-types';
import { connect }    from 'react-redux';
import CreateBtn      from '../CreateBtn/CreateBtn';
import CreateForm     from '../CreateForm/CreateForm';
import List           from '../List/List';
import './App.css';

export const App = ({ create }) => (
  <div className="app">
    {create ?
      <CreateForm /> :
      <CreateBtn />}
    <List />
  </div>
);

App.propTypes = {
  create: PropTypes.bool.isRequired
};

const mapStateToProps = ({ create }) => {
  return  ({ create })
};

export default connect(mapStateToProps)(App);
