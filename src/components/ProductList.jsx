import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        { id: 1, name: "Snake Plant", price: 15 },
        { id: 2, name: "Peace Lily", price: 18 },
        { id: 3, name: "Rubber Plant", price: 20 },
        { id: 4, name: "ZZ Plant", price: 22 },
        { id: 5, name: "Pothos", price: 12 },
        { id: 6, name: "Philodendron", price: 16 }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { id: 7, name: "Aloe Vera", price: 10 },
        { id: 8, name: "Jade Plant", price: 14 },
        { id: 9, name: "Echeveria", price: 11 },
        { id: 10, name: "Haworthia", price: 13 },
        { id: 11, name: "Cactus", price: 9 },
        { id: 12, name: "Sedum", price: 8 }
      ]
    },
    {
      category: "Air Purifying Plants",
      plants: [
        { id: 13, name: "Areca Palm", price: 25 },
        { id: 14, name: "Spider Plant", price: 14 },
        { id: 15, name: "Boston Fern", price: 17 },
        { id: 16, name: "Dracaena", price: 19 },
        { id: 17, name: "Bamboo Palm", price: 21 },
        { id: 18, name: "Chinese Evergreen", price: 23 }
      ]
    }
  ];

  return (
    <div>
      <h2>Our Plants</h2>

      {plantsArray.map((category) => (
        <div key={category.category}>
          <h3>{category.category}</h3>

          {category.plants.map((plant) => (
            <div key={plant.id}>
              <p>{plant.name} - ${plant.price}</p>
              <button onClick={() => dispatch(addItem(plant))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
