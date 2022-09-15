import Person from './Person'
import '../App.css'
const Name = () => {
    const name = null;
    const isNameShowing = false;
    return (
      <div className="Name">
        <h1>Hello, {isNameShowing ? name : "someone"}</h1>
        {name ? (
          <>
            Test
          </>
        ) : (
          <>
            <h1>Hello</h1>
            <h1>Hello</h1>
          </>
        )}
        <Person name="Jackie" lastName="Chan" age="70" /> {/* Reusable component */}
        <Person />
      </div>
    )
  }

  export default Name;