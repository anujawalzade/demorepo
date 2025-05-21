import React, { useState } from "react";

function Create() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(18);

  const submitHandler = (e) => {
    e.preventDefault();
    const newuser = { fullName, age };
    console.log(newuser);
    setFullName("");
    setAge("");
  };

  return (
    <div>
      <h1>Register User</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          placeholder="name"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          value={fullName}
          type="text"
        />

        <input
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
          type="text"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Create;
