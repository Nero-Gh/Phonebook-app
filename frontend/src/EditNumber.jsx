import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const EditNumber = () => {
  /**
   * First set useState to hold the fetch data
   */

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  /**
   * Update data to the backend function when the form is submitted
   */

  Axios.patch(`http://localhost:5000/api/get-phone/${id}`, formData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));

  const updateData = () => {
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
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </p>
        <p>
          <label name="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
        </p>
        <button>Update Record</button>
      </form>
    </div>
  );
};

export default EditNumber;
