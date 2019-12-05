import React from "react"

function Product(props){
    return(
        <div className="product">
            <h3>Name :{props.product.name}</h3>
            <h5>Price: {props.product.price.toLocaleString("en-US", {style: "currency", currency:"USD"})}</h5>
            <p>{props.product.description}</p>
            <hr />
        </div>
    )
}



export default Product