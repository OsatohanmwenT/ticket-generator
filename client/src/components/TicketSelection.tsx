import { ticketTypes } from "../constants";
import Separator from "./Separator";

interface Props {
  quantity: string;
  setQuantity: (value: string) => void;
  selectedTicket: string;
  setSelectedTicket: (value: string) => void;
}

const TicketSelection = ({
  quantity,
  setQuantity,
  selectedTicket,
  setSelectedTicket,
}: Props) => {
  return (
    <>
      <div className="ticket-card">
        <h1 className="font-road-rage text-3xl sm:text-6xl text-center">
          Techember Fest " 25
        </h1>
        <p className="max-w-[300px] max-sm:text-sm mx-auto mt-2 text-center">
          Join us for an unforgettable experience at Techember! Secure your spot
          now.
        </p>
        <p className="text-center flex-wrap max-sm:text-sm justify-center mt-2 flex sm:gap-5">
          <span>📍Lekki, Lagos</span> <span className="max-sm:hidden">||</span>{" "}
          <span>March 15,2025 | 7:00PM</span>
        </p>
      </div>
      <Separator />
      <div className="flex gap-2 flex-col">
        <p>Select Ticket Type:</p>
        <form>
          <div className="form-head p-2">
            {ticketTypes.map((ticket) => (
              <button
                onClick={() => setSelectedTicket(ticket.id)}
                type="button"
                key={ticket.id}
                aria-pressed={selectedTicket === ticket.id}
                className={`type-btn ${selectedTicket === ticket.id ? "bg-light-green-300" : ""}`}
              >
                <div className="flex flex-col text-start gap-2">
                  <p className="sm:text-lg">{ticket.title}</p>
                  <p className="text-sm">{ticket.availableCopies} left!</p>
                </div>
                <div className="p-2 rounded-lg border-2 border-light-green bg-dark-green-400">
                  {ticket.price}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-3 flex flex-col gap-2">
            <label htmlFor="quantity" className="text-white">
              Select an option
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              id="quantity"
              className="select-input"
            >
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default TicketSelection;
