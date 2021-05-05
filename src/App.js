import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox"


function App() {
  return (
    <div >
    <div className="foods-container">
        {foods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </div>
    </div>
  );
}

export default App;
