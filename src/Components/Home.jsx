import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import video from "../images/video.mp4";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apiestate21.onrender.com/api/getproperty"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setData([]);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="home">
        {/* <Filter /> */}
        <div className="center">
          <video
            id="homeVideo"
            src={video}
            autoPlay
            playsInline
            loop
            preload="auto"
            controlsList="nodownload nofullscreen"
            disablePictureInPicture
            muted
            className="myvideo"
          ></video>
        </div>
        <section className="services" style={{ width: "80vw" }}>
          <h1 className="heading">our services</h1>
          <div>
            <ul
              style={{
                fontSize: "2rem",
                marginLeft: "10%",
                display: "grid",
                gap: "30px",
              }}
            >
              <li>
                <h2>Property Management</h2>
              </li>
              <p className="para">
                We offer comprehensive property management services including
                tenant screening, rent collection, maintenance coordination, and
                financial reporting.
              </p>
              <li>
                <h2>Property Listings</h2>
              </li>
              <p className="para">
                List your property with us to reach a wide audience of potential
                buyers and renters. We provide detailed listings and marketing
                support.
              </p>
              <li>
                <h2>Consultation Services</h2>
              </li>
              <p className="para">
                Our real estate experts are available for consultation on
                property investment strategies, market trends, and regulatory
                compliance.
              </p>
            </ul>
          </div>
        </section>

        <section className="listings">
          <h1 className="heading">latest listings</h1>
          <div className="box-container">
            {loading ? (
              <p className="loading">Loading...</p>
            ) : (
              data &&
              data.properties.slice(0, 6).map((property, index) => (
                <div className="box" style={{ fontSize: "15px" }} key={index}>
                  <img src={property.image} alt="" width={310} height={250} />
                  <p style={{ fontWeight: 900 }}>{property.title}</p>
                  <p>{property.description}</p>
                  <p>Location: {property.location}</p>
                  <p>Rs. {property.price}</p>
                  <p>Area: {property.area} sq. feet</p>
                </div>
              ))
            )}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link to="/property" className="inline-btn">
              view all
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
