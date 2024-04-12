import { useEffect, useState } from "react";
import "./PlacedStu.css";
import UserData from "./UserData.jsx";

const API = "https://jsonplaceholder.typicode.com/users";

const PlacedStu = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <div className="mainContent">
        <h1 className="titler">Students Placed</h1>
        <table className="tabl">
          <thead className="headd">
            <tr>
              <th className="tabl-headi">ID</th>
              <th className="tabl-headi">Name</th>
              <th className="tabl-headi">Email</th>
              <th className="tabl-headi">Address</th>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlacedStu;
