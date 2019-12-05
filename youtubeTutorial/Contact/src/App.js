import React from "react"
import ContactCard from "./ContactCard"
import Jok from "./Jok"
import joksData from "./joksData"
import productsData from "./scholProducts"
import Product from  "./Product"
import todosData from "./todosData"

function App(){
    /*return(
        <div className="contacts">
            <ContactCard 
                contact={{name:"Lisa", imgUrl:"./imgs/contact1.jpeg", phone:"06567689", email:"lisa@gmail.com"}}
            />
            
            <ContactCard 
                contact={{name:"Souzane", imgUrl:"./imgs/contact2.jpeg", phone:"06567689", email:"lisa@gmail.com"}}
            />
            
            <ContactCard 
                contact={{name:"Marc", imgUrl:"./imgs/contact3.jpeg", phone:"06567689", email:"lisa@gmail.com"}}
            />
        </div>
    )
    */

   /* return (
        <div className="joks">
            <Jok
                jok={{punchLine:" sdsqdqsdqdqsds"}} 
            />

            <Jok
                jok={{question:" sdsdsdfffffff", punchLine:" sdsqdqsdqdqsds"}} 
            />

            <Jok
                jok={{question:" sdsdsdfffffff", punchLine:" sdsqdqsdqdqsds"}} 
            />
        </div>
    )
    */

   /* const jokComponents = joksData.map(function(jok) {
        return(
            <Jok key={jok.id} question= {jok.question} punchLine={jok.punchLine} />
        )
    })
    return (
        <div>
            {jokComponents}
        </div>
    )
    */

    const products = productsData.map(function(item){
        return(
            <Product
                key={item.id} 
                product={item}
            />
        )
    })

    return(
        <div className="products">
            {products}
        </div>
    )
}


export default App
