interface Props {
  index: number;
  handleNext: () => void;
  ticketType: string | null;
  resetData: () => void;
}

const ControlBtn = ({ index, handleNext, ticketType, resetData }: Props) => {
  return (
    <div
      className={`w-full ${index === 1 && "sm:bg-dark-green"} sm:px-5 sm:py-1 gap-2 rounded-3xl flex max-sm:flex-col items-center justify-evenly`}
    >
      <button onClick={resetData} className="btn max-sm:order-2">
        {index === 1 ? "Cancel" : "Back"}
      </button>
      <button
        onClick={handleNext}
        className="btn capitalize bg-light-green max-sm:order-1"
      >
        {index === 1 ? "Next" : `get my ${ticketType} ticket`}
      </button>
    </div>
  );
};

export default ControlBtn;
