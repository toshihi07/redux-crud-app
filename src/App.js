import React from "react";

const App = () => {
  const profiles = [
    {
      name: "Taro",
    },
    {
      name: "Hanako",
    },
    {
      name: "Kenta",
      age: 15,
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi,Iam {props.name}! and {props.age} years old
    </div>
  );
};

User.defaultProps = {
  age:1
}

export default App;
