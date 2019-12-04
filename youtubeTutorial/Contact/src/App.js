import React from "react"
import ContactCard from "./ContactCard"

function App(){
    return(
        <div className="contacts">
            <ContactCard 
                contact={{name:"Lisa", imgUrl:"contact1.jpeg", phone:"06567689", email:"lisa@gmail.com"}}
            />
        </div>
    )
}


export default App
