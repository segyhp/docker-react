import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    console.log("Cardlist");
    // const cardsArray = robots.map((user, idx) => {
    //     return (<Card 
    //     key={idx} 
    //     id={user.id} 
    //     name={user.name} 
    //     email={user.email} 
    //     />);
    // });

   return(
       <div>
           {
               robots.map((user, idx) => {
                   return(
                       <Card
                            key={idx}
                            id={user.id} 
                            name={user.name} 
                            email={user.email} 
                        />
                   )
               })
           }
       </div>
   );
   
    // return (
    // <div>
    //     {cardsArray}
    // </div> 
    // );
}
export default CardList;