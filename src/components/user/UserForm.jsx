import { Input } from "antd";
import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="user-form">
      <div>
        <span>Full Name</span>
        <Input />
      </div>
      <div>
        <span>Phone Number</span>
        <Input />
      </div>
      <div>
        <span>Email</span>
        <Input />
      </div>
      <div>
        <span>Password</span>
        <Input.Password />
      </div>
      <div className="button-container">
        <button>Create User</button>
      </div>
    </div>
  );
};

export default UserForm;
