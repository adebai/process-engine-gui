import '../App.css'

const Person = (props) => {
    return (
        <>
            <h1>First Name: {props.name || "John"}</h1>
            <h2>Last Name: {props.lastName || "Doe"}</h2>
            <h2>Age: {props.age || 30}</h2>
        </>
    )
}

export default Person;