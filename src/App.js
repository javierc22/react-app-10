import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
