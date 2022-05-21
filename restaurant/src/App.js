import { ReastaurantComponent } from "./components/RestaurantDetails";
import data from "./dataset/res.json";
import { useState } from "react";
import { AddNewRestaurant } from "./components/Addnewrestaurant";

function App() {
  const [Restaurants, SetRestaurants] = useState(data);
  const [Input, SetInput] = useState("");
  const [Min, SetMin] = useState("");
  const [Location, Setlocation] = useState("");
  const [votes, setvotes] = useState("");
  const [img, setimg] = useState("");
  const sortbyCashOnly = () => {
    let arr = [];
    for (let i in Restaurants) {
      if (Restaurants[i].cardOnly) {
        arr.push(Restaurants[i]);
      }
    }
    SetRestaurants(arr);
  };

  const sortByLowToHigh = () => {
    let arr = [];
    let tmp = Restaurants.sort(function (a, b) {
      return a.min - b.min;
    });
    for (let i in tmp) arr.push(tmp[i]);
    SetRestaurants(arr);
  };

  return (
    <>
      {Restaurants.map((item) => {
        return (
          <div>
            <ReastaurantComponent
              name={item.name}
              image={item.img}
              addr={item.address}
              totalvotes={item.totalvotes}
              cardOnly={item.cardOnly}
              min={item.min}
            />
          </div>
        );
      })}
      <button onClick={sortbyCashOnly}>Offline</button>
      <button onClick={sortByLowToHigh}>Low to High</button>
      <AddNewRestaurant
        input={Input}
        setInput={SetInput}
        Setrestures={SetRestaurants}
        min={Min}
        setmin={SetMin}
        location={Location}
        setlocation={Setlocation}
        votes={votes}
        setvotes={setvotes}
        img={img}
        setimg={setimg}
      />
    </>
  );
}

export default App;
