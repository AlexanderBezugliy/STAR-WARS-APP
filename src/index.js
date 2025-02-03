import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import App from './App/App';
import store from './store/store';
import './index.css';
import ThemeProvider from './components/context/ThemeProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
        
    </React.StrictMode>
);


