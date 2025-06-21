import mountainrider from "./mountainrider.jpg"
import everest from "./everest.jpg"
import greenline from "./greenline.jpg"
import "./transport.css"

export default function RoadTransport({addToCart}) {
const buses = [
  {
    id: 1,
    name: "Greenline Express",
    image: greenline,
    ticketType: "Deluxe",
    price: '15',
    description: "Comfortable deluxe coach with spacious seats and onboard amenities."
  },
  {
    id: 2,
    name: "Mountain Rider",
    image: mountainrider,
    ticketType: "Economy",
    price: '10',
    description: "Affordable economy service, perfect for budget travelers."
  },
  {
    id: 3,
    name: "Everest Travels",
    image: everest,
    ticketType: "VIP",
    price: '8',
    description: "Premium VIP service with luxury seating and extra comfort."
  },
];


  return (
    <>
      <div className="bus-container">
        {buses.map((bus) => {
          return (
            <div className="bus-card" key={bus.id}>
              <img src={bus.image} alt={bus.name} />
              <h1>{bus.name}</h1>
              <h4>Ticket type: {bus.ticketType}</h4>
              <p>{bus.description}</p>
              <h3>${bus.price}
                 <button className="book-button" onClick={() => {addToCart(bus)
                alert (`${bus.name} has been booked.`)
              }}>
                Book Now
              </button>
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}
