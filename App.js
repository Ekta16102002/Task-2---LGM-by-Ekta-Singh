import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);

  const getUsersFromAPI = () => {
    // setLoading(true);
    axios.get("https://reqres.in/api/users?page=1/").then((res) => {
      // setLoading(false);
      setData(res.data.data);
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    isClicked && getUsersFromAPI();
  }, [isClicked]);

  //this function sets the clicked state to 1 to call the api
  const getDataFromAPI = () => {
    setIsClicked(1);
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div className="container-fluid">
                <h2 className="navbar-brand">
                  <i>Ekta Singh</i>
                </h2>
                <button onClick={getDataFromAPI} className="btn btn-info">
                  Users Data
                </button>
              </div>
            </nav>
          </header>

          {/*Card display for users*/}
          <div className="row p-5 m-4 mt-5 card1">
            <br></br>
            <br></br>
            {/* <div className="box2">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div> */}
            {data &&
              data.map((userData) => {
                return (
                  <UserCard
                    className="card2"
                    first_name={userData.first_name}
                    last_name={userData.last_name}
                    email={userData.email}
                    avatar={userData.avatar}
                  />
                );
              })}
          </div>

          {/*footer component */}
          <div>
            <footer className="footer">
              <span className="text">
                Welcome!!
                <br />
                This is task 2!
              </span>
            </footer>
          </div>
        </div>
      )}
      {/*header component */}
    </div>
  );
}

export default App;
