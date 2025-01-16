import { useEffect, useState } from "react"
import FirstCompo from "../FirstCompo"
import SecondComp from "./SecondCompo"


function App() {

  const [catagories, setCatagories] = useState([])
  const[id , setId] = useState(null)//this is HW task
  const [singleData , setSingleData] = useState(null)
  
  function show(){

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => setCatagories(data.categories)) //catagories = data;
    .catch(err => console.log(err))

  }
  function hide(){
    setCatagories([]);
  }

  // useEffect(()=>{


  //   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //   .then(res => res.json())
  //   .then(data => setCatagories(data.categories)) //catagories = data;
  //   .catch(err => console.log(err))

  //   console.log("good morning bhaiya")



  // },[])
  // this for the HW task
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    const formData = new FormData(event.target); // Create a FormData object
    const idNumber = formData.get('id_number'); // Get the value of the input with name="id_number"
    setId(idNumber); 
    
    
   // Log the value to the console
  };
  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => setSingleData(data.meals[0])) //catagories = data;
    .catch(err => console.log(err))

    console.log(singleData);

  },[id])

  return (
   <div>
    <h1>Hello , It's Habibi </h1>

      {/* this is hw taks  */}
    <div> 
      <h4>Search by Id of Meal: </h4>
      <form onSubmit={handleSubmit}>
        <input type="number"  placeholder="Put the id here : "name="id_number" id="" />
        <button type="submit">Search </button>
      </form>
      {
        id &&  <SecondComp data = {singleData}></SecondComp>

      }
    </div>
    {/* this is prev task  */}
    <h2>Total catagories: {catagories.length}</h2>

    <button onClick={show}>Show Items </button>
    <button onClick={hide}>Hide</button>

   {
    catagories.map(data => <FirstCompo key = {data.idCategory}  data = {data}></FirstCompo>)
   }
  

   </div>
  )


}

export default App
