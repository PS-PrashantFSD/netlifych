import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-icon">
          <h1 style={{ fontSize: "69px" }}>nexAR</h1>
        </div>
        <span className="card-body">
          Elevate user experience with our Augmented Reality software, blending real and virtual worlds for innovative engagement in marketing, education, and media.
        </span>
      </div>
      <div className="card">
        <div className="card-icon">
          <h1 style={{ fontSize: "69px" }}>nexNet</h1>
        </div>
        <span className="card-body">
          Enhance your online presence with our custom web and software development. We deliver responsive, SEO-optimized websites and tailored software solutions that effectively communicate your brand.
        </span>
      </div>
      <div className="card">
        <div className="card-icon">
          <h1 style={{ fontSize: "69px" }}>nexAi</h1>
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
  justify-content: space-between;

  .card {
    width: 300px;
    height: 300px;
    background: black;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center-aligns content */
    padding: 1em 1.5em;
    transition: all 0.5s ease;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    color: gray;
    margin: 2em 0;

    &:hover {
      background: black;
      color: red;
    }
  }

  .card-icon {
    display: flex;
    justify-content: center;
    width: 100%; /* Centers icon horizontally */
  }

  .card-body {
    text-align: center; /* Centers text */
    width: 100%; /* Ensures full width for centering */
  }

  @media (max-width: 600px) {
    display: block;

    .card {
      text-align: center;
      width: 80%;
      height: auto;
      margin: 2em auto; /* Center cards in mobile view */
    }

    .card-body {
      text-align: center;
    }
  }
`;

export default Card;
