import React, { useState } from "react";
import Axios from "axios";

const DeleteNumber = () => {
  const [newPhone, setNewPhone] = useState([]);

  // const deletePhone = (id) => {
  //   Axios.delete(`http://localhost:8080/delete-phone/${id}`);
  // };
  return (
    <div className="container">
      <h1>PhoneBook List</h1>
      {/* {newPhone.map((val, key) => {
        return (
          <div key={key} className="phone">
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>
            <input
              type="number"
              placeholder="update Phone..."
              onChange={(e) => {
                setNewPhone(e.target.value);
              }}
            />
            <button
              className="update-btn"
              onClick={() => {
                updatePhone(val._id);
              }}
            >
              Update
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                deletePhone(val._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })} */}
    </div>
  );
};

export default DeleteNumber;
