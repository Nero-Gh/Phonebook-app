import React, { useState } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router";
import { useParams, useNavigate } from "react-router-dom";

const DeleteNumber = () => {
  const [newPhone, setNewPhone] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const deletePhone = () => {
    Axios.delete(`http://localhost:8080/get-phone/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return deletePhone();
};

export default DeleteNumber;
