import React from 'react';

// const Card = (props) => {
    const Card = ({name, email, id}) => {

    //using destructuring
    // const  {name, email, id} = props;
    return (
        <div className='tc bg-light-green dib br3 pd3 ma2 grow bw2 shadow-5'>
            <h1>Robot Card</h1>
            <img alt='robots' src= {`https://robohash.org/${id}?200x20`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
} 

export default Card;