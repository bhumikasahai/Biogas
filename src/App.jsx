import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <h1>Welcome to My Website</h1>
      </main>

      <Footer />
    </>
  );
}

export default App;