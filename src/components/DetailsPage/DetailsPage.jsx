import { useSelector } from "react-redux"
const DetailsPage = () => {
    const details = useSelector(store => store.details)
    console.log(details);

    if (details.genres) {
        return (
            <>
                <div><img src={details.poster} alt="" /></div>
                <div>
                    <h2>{details.title}</h2>
                    <div>
                        <h3>{details.genres.map(element => {return element.name}).join(', ')}</h3>   
                        <p>{details.description}</p>
                    </div>
                </div>
            </>
        )
    }
    return <p>Nothing to see here!</p>
}

export default DetailsPage