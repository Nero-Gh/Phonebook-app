import React, { useEffect, useState } from "react";
import Axios from "axios";
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
    Axios.get("http://localhost:5000/get-phone")
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
                    <Link to={`/update-phone/${item._id}`}>Edit</Link>
                  </button>
                  <button>
                    <a href="#">Delete</a>
                  </button>
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
