import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './stores/rootStore';

const container = document.getElementById('root'); // Reference container element
const root = createRoot(container); // Create root using container

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
