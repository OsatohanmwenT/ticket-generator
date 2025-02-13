interface TickType {
  id: string;
  title: string;
  price: string;
  availableCopies: number;
}

export const ticketTypes: TickType[] = [
  {
    id: "free",
    title: "Regular access",
    price: "Free",
    availableCopies: 20,
  },
  {
    id: "vip",
    title: "VIP access",
    price: "$50",
    availableCopies: 20,
  },
  {
    id: "vvip",
    title: "VVIP access",
    price: "$150",
    availableCopies: 20,
  },
];

export const formTitle: string[] = [
  "Ticket Selection",
  "Attendee Details",
  "Ready",
];
