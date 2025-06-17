export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        marginTop: "30px",
      }}
    >
      <div
        className="mainf"
        style={{
          backgroundColor: "#f8f8f8",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid #ccc",
        }}
      >
        <h2>
          © {new Date().getFullYear()} Binisha Basnet. All rights reserved.
        </h2>
      </div>
    </div>
  );
}
