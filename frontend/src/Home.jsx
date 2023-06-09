import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  /**
   * First set useState to hold the fetch data
   */

  const [myVar, setMyVar] = useState([]);

  /**
   * Fetch Data from the backend
   */
  const fetchData = () => {
    axios
      .get("http://localhost:5000/get-phone")
      .then((res) => {
        setMyVar(res.data.data.phoneNumbers);
      })
      .catch((error) => {
        console.log("Some Error Occured: ", error);
      });
  };

  /**
   * Assign the fetched data to the useState Variable
   */
  useEffect(() => fetchData(), []);

  /**
   * Deleting Data from the backend
   */

  const deleteData = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log("Deleted");
      })
      .catch((err) => console.log(err));

    // window.location.reload();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myVar.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <button>
                    <Link to={`/update/${item._id}`}>Edit</Link>
                  </button>
                  <button onClick={() => deleteData(item._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
