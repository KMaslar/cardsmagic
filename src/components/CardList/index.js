import React from 'react';
import CardItem from '../CardItem/index.js';
import './style.css';

const CardList=({cards})=>{
 
    return(
        <div className="cardsLabel">
           {cards.map((c, i)=>{
                return(
                    <div className="cardslabelItems" >
                        <CardItem  
                            key={cards[i].id}
                            img={cards[i].imageUrl}
                            name={cards[i].name}
                            types={cards[i].types} 
                            setName= {cards[i].setName}
                            colors={cards[i].colors}/>
                    </div>
                );
            })}
        </div>
    )
}
export default CardList;



