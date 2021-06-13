import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const App = (props) => {
  let [data, setData] = useState([]);
  let [show, setShow] = useState([]);
  let [filter, setFilter] = useState("");

  const api = () => {
    axios
      .get(
        `https://api.publicapis.org/categories`,
        {},
        {
          headers: { "Content-Type": `application/json` }
        }
      )
      .then((response) => {
        let results = response.data;
        setData(results);
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  useEffect(() => {
    api();
  }, []);

  useEffect(() => {
    setShow(
      data.filter((ii) => ii.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter]);

  return (
    <div className="App">
      <div>
        <input
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <div>
        {show.map((ii) => {
          return <p key={ii}>{ii}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
