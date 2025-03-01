import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My React Calendar</h1>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default App;
