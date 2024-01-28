import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddMovie() {
    const history = useHistory()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('in handle submit');
    }

    return (
        <>
            <h2>Add a Movie</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titleInput">Enter Movie Title</label>
                <input required type="text" id="titleInput" />
                <label htmlFor="urlInput">Enter Image URL</label>
                <input required type="text" id="urlInput" />
                <div> 
                    <label htmlFor="descInput">Enter Description</label>
                    <textarea required id="descInput" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Add Movie</button>
                <button type="reset" onClick={() => history.push('/')}>Cancel</button>
            </form>
        </>
    )
}