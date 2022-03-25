
import Toggle from '../Components/Toggle'

export default function ToggleView({ children }) {

  return <Toggle>
    {({ on, toggle }) => (
      <div>
        {on && <h1>Show me {on.toString()} </h1>}
        <button onClick={toggle}>Show / Hide</button>
      </div>
    )}
  </Toggle>
}
