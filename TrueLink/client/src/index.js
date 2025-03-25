import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import AuthContextProvider from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter>
            <Provider store={store}>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </Provider>
        </BrowserRouter>
);
