import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './views/ControlPanel';
import './index.css';

import store from './Store.js';

ReactDOM.render(
  <ControlPanel store={store} />,
  document.getElementById('root')
);
