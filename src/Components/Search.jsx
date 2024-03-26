import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Search() {
  const { location } = useParams();
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apiestate21.onrender.com/api/getproperty?location=${location}`
        );
        setSearch(response.data.properties);
      } catch (error) {
        console.log(error.message);
        setSearch([]);
      }
    };
    fetchData();
  }, [location]);

  if (search.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      <p>Location: {location}</p>
      {/* <p>Property Type: {title}</p>
      <p>BHK: {bhk}</p>
      <p>Maximum Budget: {maximum}</p> */}

      <h2>Properties</h2>
      <div className="box-container">
        {search.map((property) => (
          <div className="box" key={property._id}>
            <img src={property.image} alt="" width={200} />
            <p style={{ fontWeight: 900 }}>{property.title}</p>
            <p>{property.description}</p>
            <p>Location: {property.location}</p>
            <p>Rs. {property.price}</p>
            <p>Area: {property.area} sq. feet</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
