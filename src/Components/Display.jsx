import React from "react";
import { Link } from "react-router-dom";
import View from "./view";

function Display({ listings, loading }) {
  if (loading) {
    return <div className="loads">Loading...</div>;
  }

  return (
    <div>
      <section className="listings" id="listings">
        <h1 className="heading">All Listings</h1>
        <div className="box-container">
          {listings &&
            listings.properties.map((listing, index) => (
              <div className="box" key={index}>
                <div className="thumb">
                  <p className="type">
                    <span>{listing.title}</span>
                    <span>sale</span>
                  </p>
                  <h1 className="save">Rs. {listing.price}/-</h1>
                  <img src={listing.image} alt={listing.name} />
                </div>
                <h3 className="name">{listing.description}</h3>
                <p className="location">
                  <i className="fas fa-map-marker-alt" />
                  <span>{listing.location}</span>
                </p>
                <div className="flex">
                  <p>
                    <i className="fas fa-maximize" />
                    <span>{listing.area} sq. Feet</span>
                  </p>
                </div>
                <Link to={`/details/${listing._id}`} className="btn">
                  View Property
                </Link>
                <View id={listing._id} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Display;
