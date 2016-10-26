import { connect } from 'react-redux';
import React from 'react';

import { MAIN_BUTTON_PRESSED, CANCEL_BUTTON_PRESSED } from './actions';

const App = ({ onStart, onCancel }) => (
  <div className="App">
    <button onClick={onStart}>Start</button>
    <button onClick={onCancel}>Cancel</button>
  </div>
);

export default connect(
  null,
  {
    onStart: () => ({ type: MAIN_BUTTON_PRESSED }),
    onCancel: () => ({ type: CANCEL_BUTTON_PRESSED }),
  }
)(App);
