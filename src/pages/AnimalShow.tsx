import {useState} from "react";


function AnimalShow({type} : {type:string}){

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };


    return (
    <div className="animal-show" onClick={handleClick}> 
        <img className="heart" src="./heart.svg" alt="heart image" style={{width:10 + 10 * clicks}}/>
        <img className="animal" src={"./"+ type +".svg"} alt="animal image"/>
        
    </div>
    );
}

export default AnimalShow;