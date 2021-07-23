

function HogDetails({ hog, showDetails }) {
    return (
        <>
            {showDetails ? <> 
            <p>{`Weight: ${hog.weight}`}</p> 
            <p>{`Specialty: ${hog.specialty}`}</p>
            {hog.greased ? <p>Greased</p> : <p>Not Greased</p>} 
            </> 
            : null}
        </>
    )
}

export default HogDetails;