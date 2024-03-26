import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Post() {
  const [loading, setLoading] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    image: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setPropertyType(e.target.value);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (propertyType === "plot") {
      setFormData({
        ...formData,
        bedrooms: "",
        bathrooms: "",
      });
    }
    try {
      await axios.post(
        "https://apiestate21.onrender.com/api/createproperty",
        formData
      );
      setLoading(false);
      alert("Successfully post");
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="property-post">
      <h1 id="heads">Post Your Property</h1>
      <form id="post-form" onSubmit={handleSubmit}>
        <div className="postdiv">
          <label>Property Type:</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          >
            <option value="">Select Property Type</option>
            <option value="plot">Plot</option>
            <option value="bungalow">Bungalow</option>
            <option value="flat">Flat</option>
          </select>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="input-field"
            style={{ height: "10rem" }}
            cols={25}
          />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="input-field"
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div style={{ display: "grid", marginTop: "3%" }}>
          {propertyType !== "plot" && (
            <>
              <label>Bedrooms:</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
                className="input-field"
              />
              <label>Bathrooms:</label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
                className="input-field"
              />
            </>
          )}

          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            className="input-field"
          />
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" name="submit" id="btn">
          {loading ? "Posting..." : "Post"}
        </button>
      </form>
      <footer className="footer" id="postfooter">
        <section className="flex">
          <div className="box">
            <Link to="tel:987654321">
              <i className="fas fa-phone" />
              <span>987654321</span>
            </Link>
            <Link to="tel:7279714246">
              <i className="fas fa-phone" />
              <span>7279714246</span>
            </Link>
            <Link to="mailto:shaikhanas@gmail.com">
              <i className="fas fa-envelope" />
              <span>futuroavenueestate@gmail.com</span>
            </Link>
            <Link to="#">
              <i className="fas fa-map-marker-alt" />
              <span>Nagpur,India - 440017</span>
            </Link>
          </div>
          <div className="box"></div>
          <div className="box">
            <Link to="/home">
              <span>home</span>
            </Link>
            <Link to="/about">
              <span>about</span>
            </Link>
            <Link to="/contact">
              <span>contact</span>
            </Link>
            <Link to="/listings">
              <span>all listings</span>
            </Link>
            <Link to="#">
              <span>saved properties</span>
            </Link>
          </div>
        </section>
        <div className="credit">
          © copyright @ 2024 by <span>Moin khan</span> | all rights reserved!
        </div>
      </footer>
    </div>
  );
}

export default Post;
