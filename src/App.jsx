import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { HomePage } from './components/homepage';
import { Booking } from './components/booking';
// import { Reservations } from './components/reservations';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Header /><HomePage /></>
    },
    {
      path: '/booking',
      element: <><Header /><Booking /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}>
        <Header />
        <Footer />
      </RouterProvider>
    </>
  );
}

export default App;
