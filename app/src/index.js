import React from 'react';
import { createRoot } from "react-dom/client";
import App from './componentes/App';
import reportWebVitals from './componentes/reportWebVitals';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();