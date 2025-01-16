function FirstCompo({data}) {
    console.log(data.strCategory)
    console.log()


    return (
        <div>
            <h3>Name:  {data.strCategory}</h3>
            <img width={300} src={data.strCategoryThumb} alt="" />
            <p>About Item :{data.strCategoryDescription} </p>

        </div>
    )
}

export default FirstCompo;
