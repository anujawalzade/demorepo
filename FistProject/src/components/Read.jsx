import React from "react";

function Read(props) {
  const userName = props.userName;
  // const setUserName=

  const renderUser = userName.map((user, index) => {
    return (
      <li key={index}>
        <p>{user.name}</p>
      </li>
    );
  });
  return (
    <div>
      <ol>{renderUser}</ol>
    </div>
  );
}

export default Read;
