import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const attributeList = [];
    const attributeName = new CognitoUserAttribute({Name:"name", value:name});
    const attributeCountry = new CognitoUserAttribute({Name:"custom:country", value:country});
    attributeList.push(attributeName, attributeCountry);

    UserPool.signUp(email, password, attributeList, null, (err,data) => {
        if(err){
            return console.log(err)
        }
        console.log(data)
    })
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="country">Country</label>
        <input
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
