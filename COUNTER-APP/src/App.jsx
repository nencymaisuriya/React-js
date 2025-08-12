import { useState } from 'react';
import '../public/css/App.css';

const products = [
  {
    id: 1,
    name: 'CHANEL PERFUME',
    price: 2999,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTAFej8aTiiZVIo6EiAeeWDR0MUVJ0AiFVswmS_05U4KNwVK2h3BlfBkpr90AVdI04aNitECzU44ENzae4_d6rxt6TRpGnrkFEDfdlq4RwDNYbJRMKz32_SlA',
  },
  {
    id: 2,
    name: 'VERSACE PERFUME',
    price: 4499,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlw7gq06y7Eqjq91aKqqRFZ-M5ZFYo2bj-YckbkwysEylzvfsDuyndmtD9SUZpkOQV-Ifo7J6uxMN3yE5DoakozjEZATEOpJ_T4GNOGXJk1GfXY0HlSrsqB-Q',
  },
  {
    id: 3,
    name: 'PRADA PERFUME',
    price: 1899,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrUEt5lpI9wRb9qoBwK59DvsnGQUHNbtNBFcv32DVd73OrbVv3q8YHXgvcYrJAp5sAQNgvltYo_RYtk8Ydd4Qi4dAPBq21lRXqAdo1Xn_NVt615lkL6h5Z',
  }
];

function App() {
  const [counts, setCounts] = useState(products.map(() => 0));

  const increment = (index) => {
    setCounts(prev => {
      const newCounts = [...prev];
      if (newCounts[index] < 100) newCounts[index]++;
      return newCounts;
    });
  };

  const decrement = (index) => {
    setCounts(prev => {
      const newCounts = [...prev];
      if (newCounts[index] > 0) newCounts[index]--;
      return newCounts;
    });
  };

  return (
    <div className="app">
      <h1>🛒 Shopping Counter App</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <div className="buttons">
              <button onClick={() => decrement(index)} disabled={counts[index] === 0}>-</button>
              <span>{counts[index]}</span>
              <button onClick={() => increment(index)} disabled={counts[index] === 100}>+</button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
