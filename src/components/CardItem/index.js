import React from 'react';
import './style.css';


const CardItem= (props)=>{
    
    return(
        <div className="containerItem">
           <section>
           <img src={props.img} alt='photoCard' height="100%" width="100%"/>
           </section>
            <p>Name: {props.name}</p>
            <p>Type: {props.types}</p>
            <p>Name of set: {props.setName}</p>
            <p>Colors: {props.colors.map(color=><li>{color}</li>)}</p>
        </div>
        
    )
}

    

export default CardItem;