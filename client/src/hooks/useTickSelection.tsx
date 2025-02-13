import { useState, useEffect } from "react";

export const useTicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>("free");
  const [quantity, setQuantity] = useState<string>("1");

  useEffect(() => {
    const savedTicket = localStorage.getItem("selectedTicket");
    const savedQuantity = localStorage.getItem("ticketQuantity");
    if (savedTicket) {
      setSelectedTicket(savedTicket);
    }
    if (savedQuantity) {
      setQuantity(savedQuantity);
    }
  }, []);

  useEffect(() => {
    if (selectedTicket !== null) {
      localStorage.setItem("selectedTicket", selectedTicket);
    }
  }, [selectedTicket]);

  useEffect(() => {
    localStorage.setItem("ticketQuantity", quantity);
  }, [quantity]);

  return { selectedTicket, setSelectedTicket, quantity, setQuantity };
};
