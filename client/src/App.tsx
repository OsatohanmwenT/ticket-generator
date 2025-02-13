import { useState, useEffect } from "react";
import TicketSelection from "./components/TicketSelection";
import { formTitle } from "./constants";
import AttendeeDetails from "./components/AttendeeDetails";
import ControlBtn from "./components/ControlBtn";
import { useFormPersistence } from "./hooks/useFormPersistence.tsx";
import { useTicketSelection } from "./hooks/useTickSelection.tsx";
import { validateFormData } from "../utils.ts";
import TicketBooth from "./components/TicketBooth.tsx";
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [index, setIndex] = useState<number>(
    parseInt(localStorage.getItem("index") || "") || 1,
  );
  const {
    formData,
    updateFormData,
    errorMessage,
    setFormData,
    setErrorMessage,
  } = useFormPersistence();
  const { selectedTicket, setSelectedTicket, quantity, setQuantity } =
    useTicketSelection();

  console.log(formData);

  const handleNext = () => {
    if (index === 1 && !selectedTicket) {
      return;
    }
    if (index === 2) {
      console.log(formData);
      const { isValid, errors } = validateFormData(formData);
      if (!isValid) {
        setErrorMessage(errors);
        return;
      }
    }
    setIndex((prev) => (prev === 3 ? 3 : prev + 1));
  };

  const resetData = () => {
    if (index === 2) {
      setIndex(1);
    } else {
      setQuantity("1");
      setSelectedTicket("free");
      setFormData({
        name: "",
        email: "",
        about: "",
        image: "",
      });
      setIndex(1);
    }
  };

  useEffect(() => {
    if (selectedTicket !== null) {
      localStorage.setItem("selectedTicket", selectedTicket);
    }
  }, [selectedTicket]);

  useEffect(() => {
    localStorage.setItem("ticketQuantity", quantity);
  }, [quantity]);

  useEffect(() => {
    localStorage.setItem("index", `${index}`);
  }, [index]);

  return (
    <main className="main-container">
      <div className="px-2 py-5 xs:p-5 sm:p-8 w-[550px] border rounded-4xl flex flex-col font-roboto text-white gap-4 border-light-green-100 bg-dark-green-100">
        <div className="flex gap-2 justify-between max-sm:flex-col">
          <p className="text-2xl">{formTitle[index - 1]}</p>
          <p>Step {index}/3</p>
        </div>
        <div className="flex relative overflow-hidden h-1 rounded-xl w-full bg-light-green-100">
          <div
            style={{ width: `${(index / 3) * 100}%` }}
            className="absolute left-0 h-full rounded-xl transition-all duration-300 bg-light-green"
          ></div>
        </div>
        <div
          className={`form-container ${index === 3 ? "" : "border border-light-green-100 bg-dark-green-200"}`}
        >
          {index === 1 && (
            <TicketSelection
              quantity={quantity}
              setQuantity={setQuantity}
              selectedTicket={selectedTicket}
              setSelectedTicket={setSelectedTicket}
            />
          )}
          {index === 2 && (
            <AttendeeDetails
              formData={formData}
              updateFormData={updateFormData}
              errorMessage={errorMessage}
            />
          )}
          {index === 3 && (
            <TicketBooth
              resetData={resetData}
              quantity={quantity}
              selectedTicket={selectedTicket}
              name={formData.name}
            />
          )}
          {index !== 3 && (
            <ControlBtn
              resetData={resetData}
              index={index}
              handleNext={handleNext}
              ticketType={selectedTicket}
            />
          )}
        <ToastContainer position="bottom-right" />
        </div>
      </div>
    </main>
  );
};

export default App;
