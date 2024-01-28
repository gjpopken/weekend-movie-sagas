import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddMovie() {
    const [input, setInput] = useState({})

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submit');
    }

    const updateInput = (value, key) => {
        if (key === 'genre_id') {
            setInput({ ...input, [key]: +value })
        } else {
            setInput({ ...input, [key]: value })
        }

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
                    <option value={1}>Adventure</option>
                    <option value={2}>Animated</option>
                    <option value={3}>Biographical</option>
                    <option value={4}>Comedy</option>
                    <option value={5}>Disaster</option>
                    <option value={6}>Drama</option>
                    <option value={7}>Epic</option>
                    <option value={8}>Fantasy</option>
                    <option value={9}>Musical</option>
                    <option value={10}>Romantic</option>
                    <option value={11}>Science Fiction</option>
                    <option value={12}>Space-Opera</option>
                    <option value={13}>Superhero</option>
                </select>
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