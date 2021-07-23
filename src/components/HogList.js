import HogCard from "./HogCard";
import {useState} from "react";

function Hoglist({hogs}) {
    
    const hogList = hogs.map((hogObj) => {
        return (
            <HogCard key = {hogObj.name} hog = {hogObj}/>
        )
    })

    const [showGreased, setShowGreased] = useState(false)

    // Define greasedList using hogList.filter()
    const greasedListArr = hogs.filter((hog)=> hog.greased ===true)

    const greasedList = greasedListArr.map((hogObj) => {
        return (
            <HogCard key = {hogObj.name} hog = {hogObj}/>
        )
    })

    function toggleGreased() {
        setShowGreased(!showGreased)
    }

    return (
        <>
		<button onClick= {toggleGreased}>Greased/Ungreased</button>
        <hr></hr>
            <div className = "ui grid container">
                {/* ternary to show hogList or greasedList based on showGreased useState */}
                {showGreased ? greasedList : hogList}
            </div>
          </>

    )
}


export default Hoglist;