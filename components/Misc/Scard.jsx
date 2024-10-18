import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-icon">
          <h1 style={{fontSize: '69px'}}>nexAR</h1>
        </div>
        <span className="card-body">
          Elevate user experience with our Augmented Reality software, blending real and virtual worlds for innovative engagement in marketing, education, and media.
        </span>
      </div>
      <div className="card">
        <div className="card-icon">
        <h1 style={{fontSize: '69px'}}>nexNet</h1>
        </div>
        <span className="card-body">
          Enhance your online presence with our custom web and software development. We deliver responsive, SEO-optimized websites and tailored software solutions that effectively communicate your brand.
        </span>
      </div>
      <div className="card">
        <div className="card-icon">
        <h1 style={{fontSize: '69px'}}>nexAi</h1>
        </div>
        <span className="card-body">
          Improve efficiency with our AI-powered Object Detection systems, ideal for retail, security, and automation, enabling smart inventory, surveillance, and process automation.
        </span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjusts spacing between cards */
  
  
  .card {
    width: 300px;
    height: 300px;
    background: #e4e3e3da;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1em 1.5em;
    transition: all 0.5s ease;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    margin: 2.5em 0; /* Adds margin to the top and bottom */

    &:hover {
      background: #f1f1f1;
      color: red;
    }
  }

  .card-icon svg {
    height: 4rem;
    width: 4rem;
  }

  .card-body {
    text-align: start; /* Change to start for better alignment */
  }
  @media (max-width: 600px) {
    .card {
      width: 100%; /* Make cards full-width on small screens */
      height: auto; /* Allow height to adjust based on content */
    }

    display: block; /* Stack cards vertically */
  }
`;

export default Card;
