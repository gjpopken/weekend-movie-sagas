import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from "@mui/material";

const MovieItem = ({ movie }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <Card sx={{ height: 460, width: 200 }} data-testid='movieItem' elevation={3}>
            <CardMedia sx={{ height: 300 }} image={movie.poster} title={movie.title} component={'img'} />
            <CardContent sx={{ height: 50 }}>
                <Typography variant="h5" gutterBottom textAlign={'left'}>{movie.title}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => { history.push('/details'); dispatch({ type: "GET_DETAILS", payload: movie.id }) }}
                    data-testid="toDetails"
                >More Info</Button>
            </CardActions>
        </Card>
    )
}

export default MovieItem