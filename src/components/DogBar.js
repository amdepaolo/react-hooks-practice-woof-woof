import React from "react";

function DogBar({dogs, handleClick}){
    const dogBar = dogs.map(dog => {
        return(
            <span 
            key={dog.id}
            onClick={()=> handleClick(dog.id)}>
                    {dog.name}
            </span>
        )}
    );

    return(
    <>
        {dogBar}
    </>
        
    )
};

export default DogBar;