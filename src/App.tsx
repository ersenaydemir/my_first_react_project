import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductModelProp from './props/ProductModelProp';
import ProductNonModelProp from './props/ProductNonModelProp';
import StateIncreaseSample from './states/StateIncreaseSample';
import StateCounterSample from './states/StateCounterSample';
import ButtonDesign from './muiDesign/ButtonDesign';
import AddCategoryDesgin from './muiDesign/AddCategoryDesgin';
import ProductsDataGridDesign from './muiDesign/ProductsDataGridDesign';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import NotFoundPage from './pages/NotFoundPage';


// Pages
function App() {
  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/notFound'>NotFoundPage</Link></li>
    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>

    <p>Footer</p>
  </>
  );
}


// Design
/*
function App() {
  return (<>
    <ProductsDataGridDesign />
  </>
  );
}
*/

/*
function App() {
  return (<>
    <AddCategoryDesgin />
  </>
  );
}
*/

/*
function App() {
  return (<>
    <ButtonDesign />
  </>
  );
}
*/

// Sample
/*
function App() {
  return (<>
    <StateCounterSample />
  </>
  );
}
*/

/*
function App() {
  return (<>
    <StateIncreaseSample />
  </>
  );
}
*/

// Prop
/*
function App() {
  return (<>
    <ProductModelProp name={'Kalem'} price={100} stock={10} />
  </>
  );
}
*/

/*
function App() {
  return (<>
    <ProductNonModelProp name={'Silgi'} price={50} stock={20} />
  </>
  );
}
*/

export default App;
