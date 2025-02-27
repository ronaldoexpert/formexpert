// import React from 'react';
// import ReactDOM from 'react-dom';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Certifique-se de ter configurado o Tailwind CSS

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     {/* //<App /> */}
//     <>
//       <p>Teste</p>
//     </>
//   </React.StrictMode>,
//   document.getElementById('root')
// );