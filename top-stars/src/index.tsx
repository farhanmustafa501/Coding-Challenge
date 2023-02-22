import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as ReactRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { createAppoloClient } from './utils/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactRouter>
        <ApolloProvider client={createAppoloClient(null)}>
          <App />
        </ApolloProvider>
      </ReactRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
