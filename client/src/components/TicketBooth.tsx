import Ticket from "./Ticket.tsx";
import toImg from "react-svg-to-image";

interface Props {
  quantity: string;
  selectedTicket: string;
  name: string;
  resetData: () => void;
  image: string
}

const TicketBooth = ({ quantity, selectedTicket, name, resetData, image }: Props) => {
  const handleDownload = async () => {
    await document.fonts.ready;
    toImg("#ticket-svg", "ticket", { scale: 1, download: true })
      .then((dataUrl: any) => console.log("Image generated!", dataUrl))
      .catch((err: any) => console.error("Failed to generate image:", err));
  };

  return (
    <div className="px-2 sm:px-5 flex flex-col w-full gap-5 items-center justify-center">
      <h1 className="font-medium font-alatsi text-2xl sm:text-3xl text-center">
        Your Ticket is Booked!
      </h1>
      <p className="font-roboto max-sm:text-sm text-center">
        You can download or Check your email for a copy
      </p>
      <div>
        <Ticket
          quantity={quantity}
          selectedTicket={selectedTicket}
          name={name}
          image={image}
        />
      </div>
      <div className="px-4 font-serif flex max-sm:flex-col gap-4 rounded-4xl sm:border border-light-green-200 w-full">
        <button onClick={resetData} className="btn max-sm:order-2">
          Book Another Ticket
        </button>
        <button
          className="btn capitalize bg-light-green max-sm:order-1"
          onClick={handleDownload}
        >
          Download Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketBooth;
