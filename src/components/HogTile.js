
function HogTile({hog}) {
    return (
        <>
        <h3>{hog.name}</h3>
        <img src = {hog.image} style={{width:'100px'}, {height: '100px'}}/>
        </>
    )
}

export default HogTile;