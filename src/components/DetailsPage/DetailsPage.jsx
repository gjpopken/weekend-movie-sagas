import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DetailsPage = () => {
    const details = useSelector(store => store.details)
    const history = useHistory()
    console.log(details);

    if (details.genres) {
        return (
            <div data-testid="movieDetails">
                <div><img src={details.poster} alt="" data-testid="toDetails"/></div>
                <div>
                    <h2>{details.title}</h2>
                    <div>
                        <h3>{details.genres.map(element => {return element.name}).join(', ')}</h3>   
                        <p>{details.description}</p>
                    </div>
                    <div>
                        <button onClick={() => history.push('/')} data-testid="toList">Back to movies</button>
                    </div>
                </div>
            </div>
        )
    }
    return <p>Nothing to see here!</p>
}

export default DetailsPage