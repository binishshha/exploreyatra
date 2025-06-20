export default function RoadTransport() {
  const buses = [
    {
      id: 1,
      name: "Greenline Express",
      image: "https://example.com/images/greenline.jpg",
      ticketType: "Deluxe",
    },
    {
      id: 2,
      name: "Mountain Rider",
      image: "https://example.com/images/mountainrider.jpg",
      ticketType: "Economy",
    },
    {
      id: 3,
      name: "Everest Travels",
      image: "https://example.com/images/everest.jpg",
      ticketType: "VIP",
    },
    {
      id: 4,
      name: "Himalayan Deluxe",
      image: "https://example.com/images/himalayan.jpg",
      ticketType: "Deluxe",
    },
    {
      id: 5,
      name: "Skyline Tours",
      image: "https://example.com/images/skyline.jpg",
      ticketType: "Super VIP",
    },
  ];

  return (
    <>
      <div className="bus-container">
        {buses.map((bus) => {
          return (
            <div className="bus-card">
              <img src={bus.image} alt={bus.name} />
              <p>{bus.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
