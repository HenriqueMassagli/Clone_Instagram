// Importações essencias para o projeto funcionar 
import React from 'react'; // importar react
import ReactDOM from 'react-dom/client';

// Importação do componente App
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
