import React, { useState } from "react";
import Axios from "axios";

const EditNumber = () => {
  const [newPhone, setNewPhone] = useState(0);
  //   const [phonebook, setPhonebook] = useState([]);

  const updatePhone = (id) => {
    Axios.put("http://localhost:5000/get-phone", { id, newPhone });
  };

  return (
    <div className="container">
      {newPhone.map((val, key) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default EditNumber;
