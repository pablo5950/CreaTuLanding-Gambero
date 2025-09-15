import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda online!" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer mensajeBienvenida="Filtrando por categoría..." />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
