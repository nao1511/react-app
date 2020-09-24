import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Nao", age: 28 },
    { name: "Ai", age: 8 },
    { name: "NoName", age: 123 },
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>I am {props.name}, and {props.age} years old. </div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
