import './drink.css'
function Drink(props) {
    console.log(props)

    return(
        <div className="beverages" >
            <img src={props.bev.image_url} alt={props.bev.name}/>
            <h4>Name: {props.bev.name}</h4>
            <p>Description: {props.bev.description}</p>
            <p>ABV: {props.bev.abv}</p>
            {/* <p>Ingredients: {props.bev.ingredients}</p> */}
        </div>
    )
}

export default Drink