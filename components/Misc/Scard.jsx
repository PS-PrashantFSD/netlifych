import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="front">
            <h3 className="title">nexAR</h3>
            <p className="subtitle">AR and XR</p>
          </div>

          <div className="back">
            <p className="description">
              Elevate user experience with our Augmented Reality software,
              blending real and virtual worlds for innovative engagement in
              marketing, education, and media.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="front">
            <h3 className="title">nexNET</h3>
            <p className="subtitle">Web and Custom Software</p>
          </div>

          <div className="back">
            <p className="description">
              Enhance your online presence with our custom web and software
              development. We deliver responsive, SEO-optimized websites and
              tailored software solutions that effectively communicate your
              brand.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="front">
            <h3 className="title">NexAi</h3>
            <p className="subtitle">-</p>
          </div>

          <div className="back">
            <p className="description">
              Improve efficiency with our AI-powered Object Detection systems,
              ideal for retail, security, and automation, enabling smart
              inventory, surveillance, and process automation.
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute space evenly */
  gap: 2rem; /* Equal gap between cards */
  margin: 100px 0px 200px 0px;
  
  .card {
    width: 18rem; /* Increased card width */
    height: 12rem; /* Increased card height */
    cursor: pointer;
  }

  .content {
    text-align: center;
    position: relative;
    transition: all 2.25s;
    background-color: #3e3e3e;
    padding: 2em; /* Adjust padding if needed */
    transform-style: preserve-3d;
    height: 100%; /* Ensure content takes full height */
  }

  .card:hover .content {
    transform: rotateY(0.5turn);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 2em;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .title {
    transform: translateZ(5rem);
    font-size: 2rem;
  }

  .subtitle {
    transform: translateZ(2rem);
  }

  .back {
    transform: rotateY(0.5turn);
    background-color: ${({ theme }) => theme.colors.red};;
  }

  .description {
    transform: translateZ(3rem);
  }
`;

export default Card;
