import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

export default function AddMovie() {
    const [input, setInput] = useState({})

    const genres = useSelector(store => store.genres)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: "GET_GENRES" })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submit');
        dispatch({ type: "POST_MOVIE", payload: input })
        dispatch({type: "FETCH_MOVIES"})
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
                <>
                    {genres.map(genre => {
                        return <option value={genre.id}>{genre.name}</option>
                    })}
                </>
            )
        }
        return <option value="">Nothing</option>
    }

    return (
        <>
            <h2>Add a Movie</h2>
            <p>{JSON.stringify(input)}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Enter Movie Title</label>
                <input required type="text" id="titleInput" onChange={(event) => updateInput(event.target.value, 'title')} />
                <label htmlFor="urlInput">Enter Image URL</label>
                <input required type="text" id="urlInput" onChange={(event) => updateInput(event.target.value, 'poster')} />
                <label htmlFor="genreInput">Select a genre</label>
                <select required name="" id="genreInput" onChange={(event) => updateInput(event.target.value, 'genre_id')}>
                    <option value={""}>--Genre--</option>
                    {options()}
                </select>
                {/* <p>{JSON.stringify(genres)}</p> */}
                <div>
                    <label htmlFor="descInput">Enter Description</label>
                    <textarea required id="descInput" cols="30" rows="10" onChange={(event) => updateInput(event.target.value, 'description')}></textarea>
                </div>
                <button type="submit">Add Movie</button>
                <button type="reset" onClick={() => history.push('/')}>Cancel</button>
            </form>
        </>
    )
}