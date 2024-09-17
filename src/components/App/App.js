import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const businesses = [
  {
    imageSrc:
      "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: "Feargals Pizzeria",
    address: "11 Pearse Street",
    city: "Clonakilty",
    state: "Cork",
    zipCode: "P85v200",
    category: "Italian",
    rating: 5,
    reviewCount: 300,
  },

  // Add more businesses here...
];

const App = () => {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
};

export default App;
