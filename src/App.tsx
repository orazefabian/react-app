import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0);
  let items = ["New York", "Chicago", "Buffalo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>mighty</span> World
      </Alert>
    </div>
  );
}

export default App;
