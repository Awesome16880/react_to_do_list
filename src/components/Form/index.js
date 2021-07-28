const Form = ({ handleInput, inputValue, handleSubmit }) => {
    return (
        <div>
            <input value={inputValue} onChange={handleInput} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Form;