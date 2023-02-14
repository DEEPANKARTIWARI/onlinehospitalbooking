import logo from "./logo.svg";
import "./App.css";
import BookingSlots from "./component/BookingSlots";
import BookingDisplay from "./component/BookingDisplay";

function App() {
  return (
    <div className="App">
      {/* <BookingDisplay /> */}
      <BookingSlots />
    </div>
  );
}

export default App;
