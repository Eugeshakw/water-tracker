import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '../src/common/GlobalStyle/GlobalStyle.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store/store.js';
import { PersistGate } from 'redux-persist/lib/integration/react.js';
import { ModalProvider } from 'context/modalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter basename="/water-tracker">
          <ModalProvider>
            <App />
          </ModalProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
