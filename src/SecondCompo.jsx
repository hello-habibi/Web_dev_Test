function SecondComp({data}){


    return (
        <div>
            <h5>Name : {data.strMeal}</h5>
            <img width={200} src={data.strMealThumb} alt="" />
            <p>Cagagory: {data.strCategory}</p>
            <p>About : <a href={data.strYoutube}>Click to See the video :</a> <br />{data.strInstructions} </p>

        </div>
    )
}

export default SecondComp