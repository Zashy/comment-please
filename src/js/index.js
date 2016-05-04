// Style Sheets//
import '../scss/_colors.scss';
import '../scss/_responsive.scss';

// JS
import 'es6-promise';
import assign from 'object-assign';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';

Object.assign = Object.assign || assign;

const store = configureStore(window.__INITIAL_STATE__);

render(
  <Root store={store} />,
  document.getElementById('root')
);
