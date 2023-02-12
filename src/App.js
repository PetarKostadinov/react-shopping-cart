//feature-1

import React, { useState } from 'react';
import { Filter } from './components/Filter';
import { Products } from './components/Products';
import  data  from "./data.json";

function App() {

  const [state, setState] = useState({ products: data.products, size: "", sort: ""});
  
  const sortProducts = (event) => {
    const sort = event.target.value;

    setState((state) => ({
      sort: sort,
      products: state.products
      .slice()
      .sort((a, b) => 
        sort === "lowest" 
        ? a.price > b.price 
          ? 1 
          : -1 
        : sort === "highest"
        ? a.price < b.price 
          ? 1 
          : -1 
        : a._id < b._id
          ? 1 
          : -1
      )
    }))
  }

  const filterProducts = (event) => {
    if(event.target.value === "") {
      setState({size: event.target.value, products: data.products});
    }else{
      setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
          ),
      })
    }
  }

    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
              />
              <Products products={state.products}/>
            </div>
            <div className='sidebar'>
              Cart Items
            </div>
          </div>
        </main>
        <footer>
          All right reserved.  Code - Petar Kostadinov
        </footer>
      </div>
    );
}

export default App;
