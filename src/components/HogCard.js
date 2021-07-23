import HogHeader from "./HogHeader";
import HogDetails from "./HogDetails";
import { useState } from "react"


function HogCard({ hog }) {
    const [showDetails, setShowDetails] = useState(false)

    function toggleDetails(){
        setShowDetails(!showDetails)
        console.log(showDetails)
    }
    
    return (
        <div onClick={toggleDetails} className = "ui eight wide column">
        <HogHeader hog = {hog}/>
        <HogDetails hog = {hog} showDetails = {showDetails}/>
        </div>
    )
}

export default HogCard;