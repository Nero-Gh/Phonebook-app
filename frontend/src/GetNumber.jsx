import React, { useEffect, useState } from "react";
import Axios from "axios";

const GetNumber = () => {
  const [phonebook, setPhonebook] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);

  return (
    <div className="container">
      <h1>PhoneBook List</h1>
      {phonebook.map((val, key) => {
        return (
          <div key={val._id} className="phone">
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default GetNumber;
