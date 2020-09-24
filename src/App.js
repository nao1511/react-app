import React from 'react';

const App = () => {
  const profiles = [
    { name: "Nao", age: 28 },
    { name: "Ai", age: 8 },
    { name: "NoName" },
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

User.defaultProps = {
  age: 0
}

export default App;
