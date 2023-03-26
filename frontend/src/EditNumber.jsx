import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

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

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  /**
   * Update data to the backend function when the form is submitted
   */
  Axios.put(`http://localhost:5000/update-phone/${id}`, formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));

  const updateData = () => {
    // Axios.get(`http://localhost:5000/get-phone/${id}`)
    //   .then((res) => {
    //     console.log(res.data.data.phoneNumbers._id);
    //     setName(res.data.data.phoneNumbers);
    //     setPhone(res.data.data.phoneNumbers);
    //   })
    //   .catch((err) => console.log(err));

    Axios.patch(`http://localhost:5000/update-phone/${id}`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </p>
        <p>
          <label name="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </p>
        <button>Update Record</button>
      </form>
    </div>
  );
};

export default EditNumber;
