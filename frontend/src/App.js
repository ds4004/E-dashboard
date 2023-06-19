import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import PrivateComponent from './Components/PrivateComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            {/* <Route> is an element that renders some components when a current URL matches the route's path. <Link> is an element used to navigate through routes. */}
            <Route path='/' element={<h1>Product Listing Component</h1>} />
            <Route path='/add' element={<h1>Add Product Component</h1>} />
            <Route path='/update' element={<h1>Update Product Component</h1>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Profile</h1>} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
