import React, {useState} from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({searchYelp}) => {
  const [searchRestaurant, setSearchRestaurant] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [sortingOption, setSortingOption] = useState('best_match');
  
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} onClick={() => {
        handleSortByOption(sortByOptionValue);
      }}>{sortByOption}</li>;
    });
  };

  const handleRestaurantSearch = ({target}) => {
    const newRestaurant = target.value;
    if (newRestaurant.length > 0) {
      setSearchRestaurant(newRestaurant);
    }
  }

  const handleLocationSearch = ({target}) => {
    const newLocation = target.value;
    if (newLocation.length > 0) {
      setSearchLocation(newLocation);
    }
  }
 
  const handleSortByOption = (sortByOption) => {
    setSortingOption(sortByOption);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    searchYelp(searchRestaurant, searchLocation, sortingOption);
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={handleSearch}>
        <div className={styles.SearchBarFields}>
          <input placeholder="Search Businesses" onChange={handleRestaurantSearch}/>
          <input placeholder="Where?" onChange={handleLocationSearch}/>
        </div>
        <div className={styles.SearchBarSubmit}>
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
