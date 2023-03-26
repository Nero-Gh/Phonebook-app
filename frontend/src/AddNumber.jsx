import React, { useEffect, useState } from "react";
import Axios from "axios";

const AddNumber = () => {
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState(0);

  // const addNewNumber = () => {
  //   Axios.post("http://localhost:5000/add-phone", { name, phone });
  // };

  // return (
  //   <div className="container">
  //     <label htmlFor="">Name: </label>
  //     <input
  //       type="text"
  //       onChange={(e) => {
  //         setName(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <br />
  //     <label htmlFor="">Phone: </label>
  //     <input
  //       type="number"
  //       onChange={(e) => {
  //         setPhone(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <br />

  //     <button onClick={addNewNumber}>Add New Number</button>
  //   </div>

  /**
   * First set useState to hold the fetch data
   */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  /**
   * Add data to the backend
   */

  const addData = () => {
    Axios.post("http://localhost:5000/api/add-phone", { name, phone })
      .then((response) => {
        console.log(response.data.data.phoneNumber);
      })
      .catch((error) => {
        console.log("Some Error Occured When submitting: ", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label name="name">Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label name="phone">Phone:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </p>
        <button>Add Number</button>
      </form>
    </div>
  );
};

export default AddNumber;
