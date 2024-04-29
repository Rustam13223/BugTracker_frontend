import SlideIn from "../../components/animations/SlideIn";

function Dashboard() {
  const items = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "John Smith" },
    { id: 4, name: "Jane Smith" },
    { id: 5, name: "John Johnson" },
    { id: 6, name: "Jane Johnson" },
    { id: 7, name: "John Brown" },
    { id: 8, name: "Jane Brown" },
    { id: 9, name: "John White" },
    { id: 10, name: "Jane White" },
    { id: 11, name: "John Black" },
    { id: 12, name: "Jane Black" },
  ];
  return (
    <div>
      {items.map((item, index) => (
        <SlideIn from="left" key={item.id} delay={index * 50}>
          <div
            style={{
              height: "100px",
              width: "1000px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid black",
              background: "lightgray",
            }}
          >
            {item.name}
          </div>
        </SlideIn>
      ))}
    </div>
  );
}
export default Dashboard;
