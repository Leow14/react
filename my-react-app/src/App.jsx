import List from "./list.jsx";

function App() {
    
    const fruits = [{id: 1, name:"lime",       calories: 95},
                    {id: 2, name:"blueberry",  calories: 105},
                    {id: 3, name:"peach",      calories: 36},
                    {id: 4, name:"pineapple",  calories: 37}, 
                    {id: 5, name:"kiwi",       calories: 50}];

    const vegetables = [{id: 6, name:"potato",       calories: 125},
                        {id: 7, name:"onion",  calories: 10},
                        {id: 8, name:"garlic",      calories: 12},
                        {id: 9, name:"cucumber",  calories: 56}, 
                        {id: 10, name:"spinach",       calories: 5}];


    return(
        <>
        {fruits.length     > 0 && <List items={fruits}    />}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
        </>
    );
}

export default App
