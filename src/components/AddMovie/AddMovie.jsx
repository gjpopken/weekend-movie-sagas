import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

// MUI Imports
import {
    TextField,
    Typography,
    MenuItem,
    Button,
    Container
} from "@mui/material";

export default function AddMovie() {
    const [input, setInput] = useState({ title: '', poster: '', decription: '', genre_id: '' })

    const genres = useSelector(store => store.genres)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: "GET_GENRES" })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('in handle submit');
        dispatch({ type: "POST_MOVIE", payload: input })
        dispatch({ type: "FETCH_MOVIES" })
        history.push('/')
    }

    const updateInput = (value, key) => {
        if (key === 'genre_id') {
            setInput({ ...input, [key]: +value })
        } else {
            setInput({ ...input, [key]: value })
        }

    }

    const options = () => {
        if (genres) {
            return (

                genres.map(genre => {
                    return <MenuItem value={genre.id} key={genre.id}>{genre.name}</MenuItem>
                })

            )
        }
        return <option value="">Nothing</option>
    }

    return (
        <>
            <h2>Add a Movie</h2>
            {/* <p>{JSON.stringify(input)}</p> */}
            <form onSubmit={handleSubmit}>
                <Typography component={'label'} variant="h6" htmlFor="titleInput" display={'block'}>Enter Movie Title</Typography>
                <TextField required label={'Enter Movie Title'} id="titleInput" display={'block'} onChange={(event) => updateInput(event.target.value, 'title')} value={input.title} />
                <Typography component={'label'} variant="h6" htmlFor="urlInput" display={'block'} >Enter Movie Poster Image URL</Typography>
                <TextField required label={'Enter Image URL'} id="urlInput" display={'block'} onChange={(event) => updateInput(event.target.value, 'poster')} value={input.poster} />

                <Typography component={'label'} variant="h6" htmlFor="genreInput" id='genreLabel' display={'block'}>Select Genre</Typography>
                <TextField sx={{ width: '195px' }} select required display='block' id="genreInput" label={'--Genre--'} value={input.genre_id} onChange={(event) => updateInput(event.target.value, 'genre_id')}>
                    {options()}
                </TextField>
                <Typography component={'label'} variant="h6" htmlFor="descInput" display={'block'}>Enter Description</Typography>
                <TextField required id="descInput" multiline label="Description" rows={5} onChange={(event) => updateInput(event.target.value, 'description')}></TextField>
                <Container sx={{marginTop: 5}}>
                    <Button sx={{margin: "5px"}} type="submit" variant="contained">Add Movie</Button>
                    <Button sx={{margin: "5px"}} type="reset" variant="outlined" onClick={() => history.push('/')}>Cancel</Button>
                </Container>

            </form>
        </>
    )
}