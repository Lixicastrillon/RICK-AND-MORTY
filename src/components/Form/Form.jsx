const Form = () => {
    return(
        <div>
<form>
    <label htmlFor="email">Email:</label>
    <input type="text" name="email" ></input>
    <label  htmlFor="password">Password:</label>
    <input type="password" name="password"></input>
    <button type="submit">submit</button>
</form>
        </div>
    )

}

export default Form;