import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Typography, Button, Box } from "@mui/material";

const DetailsPage = () => {
    const details = useSelector(store => store.details)
    const history = useHistory()
    console.log(details);

    if (details.genres) {
        return (
            <Container data-testid="movieDetails">
                <div><img src={details.poster} alt="" data-testid="toDetails" style={{ borderRadius: '25px' }} /></div>

                <Typography variant="h5">{details.title}</Typography>
            
                    <Typography variant="h6">{details.genres.map(element => { return element.name }).join(', ')}</Typography>
                    <Box component='div' >
                        <Typography variant="body1">{details.description}</Typography>
                    </Box>
                <div>
                    <button onClick={() => history.push('/')} data-testid="toList">Back to movies</button>
                </div>
            </Container>
        )
    }
    return <p>Nothing to see here!</p>
}

export default DetailsPage