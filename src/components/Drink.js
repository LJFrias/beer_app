import './drink.css'
function Drink(props) {
    console.log(props)

    return(
        <li className="beverages" key={props.bev.id}>
            <img src={props.bev.image_url} alt={props.bev.name}/>
            <h4>Name: {props.bev.name}</h4>
            <p>Description: {props.bev.description}</p>
            <p>ABV: {props.bev.abv}</p>
            <p>Ingredients: {props.bev.ingredients}</p>
        </li>
    )
}

export default Drink