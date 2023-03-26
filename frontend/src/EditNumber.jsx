import React, { useEffect, useState } from "react";
import Axios from "axios";

const EditNumber = () => {
  // const [newPhone, setNewPhone] = useState([]);
  //  const [phonebook, setPhonebook] = useState([]);
  // const updatePhone = (id) => {
  //   Axios.put("http://localhost:5000/update-phone", { id, newPhone });
  // };
  // return (
  //   <div className="container">
  //     {newPhone.map((val, key) => {
  //       return (
  //         <div key={key} className="phone">
  //           <h1>{val.name}</h1>
  //           <h1>{val.phone}</h1>
  //           <input
  //             type="number"
  //             placeholder="update Phone..."
  //             onChange={(e) => {
  //               setNewPhone(e.target.value);
  //             }}
  //           />
  //           <button
  //             className="update-btn"
  //             onClick={() => {
  //               updatePhone(val._id);
  //             }}
  //           >
  //             Update
  //           </button>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  /**
   * First set useState to hold the fetch data
   */
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  /**
   * Update data to the backend function when the form is submitted
   */

  // const updateData = () => {
  //   Axios.get(`http://localhost:5000/get-phone/${id}`)
  //     .then((res) => {
  //       console.log(res.data.data.phoneNumbers._id);
  //       setName(res.data.data.phoneNumbers);
  //       setPhone(res.data.data.phoneNumbers);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   updateData();
  // }, [id]);

  Axios.patch(`http://localhost:5000/update-phone/${id}`, { name, phone })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label name="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label name="phone">Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </p>
        <button>Update Record</button>
      </form>
    </div>
  );
};

export default EditNumber;
