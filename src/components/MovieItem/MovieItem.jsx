import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

const MovieItem = ({movie}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    
    return (
        <div data-testid='movieItem' key={movie.id}>
            <h3>{movie.title}</h3>
            <img
                src={movie.poster}
                alt={movie.title}
                onClick={() => { history.push('/details'); dispatch({ type: "GET_DETAILS", payload: movie.id }) }}
                data-testid="toDetails" />
        </div>
    )
}

export default MovieItem