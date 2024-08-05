import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Featured Restaurants</h1>
        <article>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="restaurant 1"
            className="img-fluid rounded"
          />
          <h2 className="pt-2">Taste of Italy</h2>
          <p>Italian | Rating: 4.5</p>
          <p>123 Main Street, Anytown, USA</p>
        </article>
        <article>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="restaurant 2"
            className="img-fluid rounded"
          />
          <h2 className="pt-2">Spice Village</h2>
          <p>Indian| Rating: 4.3</p>
          <p>456 Elm Street, Anytown, USA</p>
        </article>
      </main>
      <Footer />
    </>
  );
}
