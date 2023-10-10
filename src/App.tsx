import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductModelProp from './props/ProductModelProp';
import ProductNonModelProp from './props/ProductNonModelProp';


function App() {
  return (<>
    <ProductModelProp name={'Kalem'} price={100} stock={10} />
  </>
  );
}

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
