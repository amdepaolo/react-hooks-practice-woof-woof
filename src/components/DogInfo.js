import React from "react";

function DogInfo({dog, onUpdateDogs}){
    if (dog === null) return (<></>);

    const {name, image, isGoodDog, id} = dog;

    function handleGoodClick(){
        const updatedDogMorality = {isGoodDog: !isGoodDog}

        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedDogMorality)
        })
        .then(r => r.json())
        .then(onUpdateDogs);
    }

    return(
        <>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <button onClick={handleGoodClick}>{isGoodDog?'Good Dog!': 'Bad Dog!'}</button>
        </>
    )
}

export default DogInfo;