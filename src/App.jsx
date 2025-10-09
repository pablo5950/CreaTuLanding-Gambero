import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import NotFound from './components/NotFound';
import Footer from './components/Footer'; // 👈 Importamos el Footer
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
            path="/item/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/checkout"
            element={<CheckoutForm />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
      <Footer /> {}
    </>
  );
}

export default App;
