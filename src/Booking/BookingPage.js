import "../App.css";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

export function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [
    "10:00",
    "19:00",
    "21:00",
  ]);

  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      ></BookingForm>
    </div>
  );
  function updateTimes() {
    return ["10:00", "19:00", "21:00"];
  }
}

export default BookingPage;
