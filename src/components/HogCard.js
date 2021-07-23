import HogHeader from "./HogHeader";
import HogDetails from "./HogDetails";

function HogCard({hog}) {
    return (
        <div className = "ui eight wide column">
        <HogHeader hog = {hog}/>
        <HogDetails />
        </div>
    )
}

export default HogCard;