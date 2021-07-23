import HogCard from "./HogCard";

function Hoglist({hogs}) {

    const hogList = hogs.map((hogObj) => {
        return (
            <HogCard key = {hogObj.name} hog = {hogObj}/>
        )
    })

    return (
        <div className = "ui grid container">
        {hogList}
          </div>

    )
}


export default Hoglist;