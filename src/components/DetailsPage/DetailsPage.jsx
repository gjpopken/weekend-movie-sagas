import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Typography, Button, Box, Paper, Icon } from "@mui/material";

const DetailsPage = () => {
    const details = useSelector(store => store.details)
    const history = useHistory()
    console.log(details);

    if (details.genres) {
        return (
            <Container data-testid="movieDetails">
                <div style={{
                    margin: '10px',
                    position: 'relative'
            }}>
                    <Button onClick={() => history.push('/')} data-testid="toList" sx={{position: 'absolute', top: '5px', left: '10px'}} startIcon={<Icon>arrow_back_ios</Icon>}>Back to movies</Button>
                </div>
                <Paper sx={{ p: 5 }}>
                    <div><img src={details.poster} alt="" data-testid="toDetails" style={{ borderRadius: '25px' }} /></div>

                    <Typography variant="h5">{details.title}</Typography>

                    <Typography variant="h6">{details.genres.map(element => { return element.name }).join(', ')}</Typography>
                    <Box component='div' >
                        <Typography variant="body1">{details.description}</Typography>
                    </Box>
                </Paper>
            </Container>
        )
    }
    return <p>Nothing to see here!</p>
}

export default DetailsPage