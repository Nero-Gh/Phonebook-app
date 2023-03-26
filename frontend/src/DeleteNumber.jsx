import React, { useState } from "react";
import Axios from "axios";
// import { useNavigate } from "react-router";
import { useParams, useNavigate, Link } from "react-router-dom";

const DeleteNumber = (props) => {
  const [newPhone, setNewPhone] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const deletePhone = () => {
    Axios.delete(`http://localhost:8080/delete-phone/${props.id}`)
      .then((res) => {
        console.log(res.data);
        console.log("Deleted");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={deletePhone} id={props.id}>
        {props.name}
      </button>
    </div>
  );
};

export default DeleteNumber;
