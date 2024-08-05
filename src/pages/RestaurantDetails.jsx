import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const restaurantId = useParams();

  const restaurants = [
    {
      id: 1,
      title: "The Golden Spoon",
      cuisine: "Italian",
      location: "123 Main Street, CityVille",
      rating: 4.5,
      content: "Experience authentic Italian cuisine in a cozy atmosphere.",
      menu: [
        { name: "Spaghetti Carbonara", price: "$15" },
        { name: "Margherita Pizza", price: "$12" },
        { name: "Tiramisu", price: "$8" },
      ],
    },
    {
      id: 2,
      title: "Spice Junction",
      cuisine: "Indian",
      location: "456 Elm Street, TownsVille",
      rating: 4.2,
      content: "Savor the flavors of India with our traditional dishes.",
      menu: [
        { name: "Chicken Tikka Masala", price: "$14" },
        { name: "Vegetable Biryani", price: "$12" },
        { name: "Gulab Jamun", price: "$8" },
      ],
    },
    {
      id: 3,
      title: "Sushi Delight",
      cuisine: "Japanese",
      location: "789 Oak Avenue, Villageland",
      rating: 4.7,
      content: "Enjoy exquisite Japanese sushi prepared by master chefs.",
      menu: [
        { name: "California Roll", price: "$10" },
        { name: "Sashimi Platter", price: "$18" },
        { name: "Green Tea Ice Cream", price: "$5" },
      ],
    },
  ];

  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id == restaurantId.restaurantId,
  );

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>{restaurantData.title}</h1>
        <p>Cuisine: {restaurantData.cuisine}</p>
        <p>Location: {restaurantData.location}</p>
        <p>Rating: {restaurantData.rating}</p>
        <p>{restaurantData.content}</p>
        <hr />
        <h2>Menu</h2>
        <div className="row">
          {restaurantData.menu.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mt-3">
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>Price: {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
