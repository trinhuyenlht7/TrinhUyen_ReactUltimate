import { Input } from "antd";
import "./UserForm.css";
import { useState } from "react";

const UserForm = () => {
  const [userName, setUserName] = useState([]);
  const [userPhone, setUserPhone] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [userPass, setUserPass] = useState([]);

  const handleOnClickAddUser = () => {
    console.log({ userName, userPass, userPhone, userEmail });
  };

  return (
    <div className="user-form">
      <div>
        <span>Full Name</span>
        <Input
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Phone Number</span>
        <Input
          value={userPhone}
          onChange={(event) => {
            setUserPhone(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Email</span>
        <Input
          value={userEmail}
          onChange={(event) => {
            setUserEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Password</span>
        <Input.Password
          value={userPass}
          onChange={(event) => {
            setUserPass(event.target.value);
          }}
        />
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            handleOnClickAddUser();
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserForm;
