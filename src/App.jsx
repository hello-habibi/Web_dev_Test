import { useEffect, useState } from "react"
import FirstCompo from "../FirstCompo"


function App() {

  const [catagories, setCatagories] = useState([])
  
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


  return (
   <div>
    <h1>Hello world </h1>
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
