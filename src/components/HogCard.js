import HogTile from "./HogTile";
import HogDetails from "./HogDetails";

function HogCard({hog}) {
    return (
        <div className = "ui eight wide column">
        <HogTile hog = {hog}/>
        <HogDetails />
        </div>
    )
}

export default HogCard;