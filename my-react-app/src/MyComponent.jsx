import { func } from "prop-types";
import React, {useState} from "react";

function MyComponent(){
    const [foods, setFoods] = useState(["Pizza", "Hamburuger", "Salad"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(previousFoods => [...previousFoods, newFood]);
    }

    function handleRemoveFood(index){
        
        setFoods(foods.filter((_, currentIndex) => index !== currentIndex));
    }

    return(
       <div>
            <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>)}
                </ul>
                <input type="text" id="foodInput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add food</button>
       </div>
    );
}

export default MyComponent