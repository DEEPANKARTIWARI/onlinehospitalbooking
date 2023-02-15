import logo from "./logo.svg";
import "./App.css";
import Plans from "./component/Plans";
import BookingSlots from "./component/BookingSlots";
import BookingDisplay from "./component/BookingDisplay";

function App() {
  return (
    <div className="App">
      <Plans />
      <BookingSlots />
      <BookingDisplay />
    </div>
  );
}

export default App;
