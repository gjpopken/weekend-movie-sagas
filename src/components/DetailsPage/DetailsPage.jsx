import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
    Container,
    Typography,
    Button,
    Box,
    Paper,
    Icon,
    TableContainer,
    Table,
    TableRow,
    TableBody,
    TableCell
} from "@mui/material";

const DetailsPage = () => {
    const details = useSelector(store => store.details)
    const history = useHistory()
    console.log(details);

    if (details.genres) {
        return (
            <Container data-testid="movieDetails" sx={{ mb: 10 }}>
                <div style={{
                    margin: '10px',
                    position: 'relative',
                    height: '30px'
                }}>
                    <Button onClick={() => history.push('/')} data-testid="toList" sx={{ position: 'absolute', left: 0 }} startIcon={<Icon>arrow_back_ios</Icon>}>Back to movies</Button>
                </div>
                <TableContainer component={Paper} elevation={5}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <img src={details.poster} alt="" data-testid="toDetails" style={{ borderRadius: '25px' }} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">{details.title}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h6">{details.genres.map(element => { return element.name }).join(', ')}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="body1">{details.description}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        )
    }
    return <p>Nothing to see here!</p>
}

export default DetailsPage