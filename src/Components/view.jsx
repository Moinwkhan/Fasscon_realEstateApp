import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function View() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apiestate21.onrender.com/api/getproperty/${id}`
        );
        setProperty(response.data.property);
      } catch (error) {
        console.log(error.message);
        setProperty(null);
      }
    };
    fetchData();
  }, [id]);

  if (!property) {
    return <div></div>;
  }

  const handelSubmit = () => {
    Navigate("/property");
  };

  return (
    <div>
      <div>
        <section className="view-property">
          <div className="details">
            <div className="thumb">
              <div className="big-image">
                <img src={property.image} alt={property.title} />
              </div>
              <div className="small-images">
                {/* Add small images if available */}
              </div>
            </div>
            <h3 className="name">{property.title}</h3>
            <p className="location">
              <i className="fas fa-map-marker-alt" />
              <span>{property.location}</span>
            </p>
            <div className="info">
              <p>
                <i className="fas fa-tag" />
                <span>Rs. {property.price}/-</span>
              </p>
              <p>
                <i className="fas fa-user" />
                <span>{property.owner}</span>
              </p>
              <p>
                <i className="fas fa-phone" />
                <a href={`tel:${property.contact}`}>{property.contact}</a>
              </p>
              <p>
                <i className="fas fa-building" />
                <span>{property.type}</span>
              </p>
              <p>
                <i className="fas fa-house" />
                <span>{property.status}</span>
              </p>
              <p>
                <i className="fas fa-calendar" />
                <span>{property.date}</span>
              </p>
            </div>
            <h3 className="title">details</h3>
            <div className="flex">
              <div className="box">
                <p>
                  <i>rooms :</i>
                  <span>{property.bedrooms}</span>
                </p>
                <p>
                  <i>deposit amount :</i>
                  <span>Atleast 40%</span>
                </p>
                <p>
                  <i>status :</i>
                  <span>{property.title}</span>
                </p>
                {/* Add more details */}
              </div>
              {/* Add more details boxes */}
            </div>
            <h3 className="title">description</h3>
            <p className="description">{property.description}</p>
            <button onClick={handelSubmit} className="inline-btn">
              ~ Back
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default View;
