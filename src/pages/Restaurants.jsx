import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Restaurants() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Restaurants</h1>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                class="img-fluid rounded-start"
                alt="restaurnt 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Taste of India</h5>
                <p class="card-text">
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  variety of delicious dishes from different regions of India.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.7 | Open Now
                  </small>
                </p>
                <Link to="/restaurants/1" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                class="img-fluid rounded-start"
                alt="restaurnt 2"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Pizza Paradise</h5>
                <p class="card-text">
                  Indulge in mouth-watering pizzas at Pizza Paradise. With a
                  variety of toppings and crusts, it's a pizza lover's dream.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.5 | Open Now
                  </small>
                </p>
                <Link to="/restaurants/2" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1c2hpfGVufDB8fDB8fHww"
                class="img-fluid rounded-start"
                alt="restaurnt 3"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Sushi Delight</h5>
                <p class="card-text">
                  Indulge in mouth-watering sushi's at Sushi Delight. With a
                  variety of flavours, it's a sushi lover's dream.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Rating: 4.5 | Open Now
                  </small>
                </p>
                <Link to="/restaurants/3" className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
