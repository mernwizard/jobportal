import { useContext, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout";
import { UserContext } from "./userContext";

function App() {
  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setUserData(data));
  };

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
