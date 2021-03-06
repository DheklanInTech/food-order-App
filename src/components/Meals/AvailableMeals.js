import {useEffect,useState} from 'react';
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () =>{

  const [stateMeals,setStateMeals] = useState([]);
  const [isLoading,setIsloading] = useState(true);
  const [error,setError] = useState(null)

  useEffect(()=>{
   
    const fetchMeals = async() =>{

      
        const response = await fetch('https://food-app-8f812-default-rtdb.firebaseio.com/meals.json').then();

     if(!response.ok){
       throw new Error('something is wrong');
     }
     const responseData = await response.json();

    //  convert object into array 
    const loadedMeals = [];

    for(const key in responseData){
      loadedMeals.push({
        id:key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      })
    }
      setStateMeals(loadedMeals)
      setIsloading(false)
      
      



 
    }
   
    fetchMeals().catch((error)=>{
      setIsloading(false);
      setError(error.message)
    });
     
 
  },[]);


  if(isLoading){
    return(
      <section className={classes.MealsLoading}>
    <p>Loading...</p>
    </section>
    )
    }
    if(error){
    return(
    <section className={classes.MealsLoading}>
    <p>{error}</p>
    </section>
    )
    }
    
 

  const mealsList = stateMeals.map((meal) => (
    <li>
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    </li>
  ));

  



  return (
    <section className={classes.meals}>
      <Card>
     <ul>{mealsList}</ul>
         
      </Card>
    </section>
  );
}


export default AvailableMeals;
