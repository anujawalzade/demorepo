import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState([
    { name: "Abhishek", age: 23 },
    { name: "Anuja", age: 22 },
    { name: "Akadh", age: 24 },
    { name: "Radha", age: 33 },
  ]);

  const [fullName,setFullName]=useState('')
  const [age,setAge]=useState(18)

  const renderUser = userName.map((user, index) => {
    return (
      <li key={index}>
        <p>{user.name}</p>
      </li>
    );
  });

 const handleClick = () =>{
      // console.log("form submited");

      // setUserName({fullName,age})     
 }

 const submitHandler = (e) =>{
      e.preventDefault();
      const newuser = {fullName,age}
      console.log(newuser);
      setFullName('')
      setAge('')
      
 }

  return (
    <div>
      <div>
        <h1>Register User</h1>
        <form action="" onSubmit={submitHandler}>

        <input placeholder="name" onChange={(e) =>{setFullName(e.target.value)}} value={fullName} type="text" />

        <input placeholder="Age" onChange={(e) =>{setAge(e.target.value)}} value={age} type="text" />

        <button onClick={handleClick}>Submit</button>
        </form>
      </div>

      <hr />
      <ol>
        {renderUser}
      </ol>

    </div>
  );
}

export default App;
