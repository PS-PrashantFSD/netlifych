import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div data-position="top" className="carousel">
          <span className="carousel__text">
            Are you looking innovative marketing solution; we help you!; 
            cAre you looking innovative marketing solution; we help you!; Are you looking innovative marketing solution; we help you!
          </span>
        </div>
        <div className="image">
          <svg
            fill="black"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 001.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 00-1.828 1.829l-.645 1.936a.361.361 0 01-.686 0l-.645-1.937a2.89 2.89 0 00-1.828-1.828l-1.937-.645a.361.361 0 010-.686l1.937-.645a2.89 2.89 0 001.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 01.412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 010 .412l-1.162.387A1.734 1.734 0 004.593 5.69l-.387 1.162a.217.217 0 01-.412 0L3.407 5.69A1.734 1.734 0 002.31 4.593l-1.162-.387a.217.217 0 010-.412l1.162-.387A1.734 1.734 0 003.407 2.31l.387-1.162zM10.863.099a.145.145 0 01.274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 010 .274l-.774.258a1.156 1.156 0 00-.732.732l-.258.774a.145.145 0 01-.274 0l-.258-.774a1.156 1.156 0 00-.732-.732L9.1 2.137a.145.145 0 010-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
          </svg>
        </div>
        <h1 className="title">nexAR - Augmented Reality</h1>
        <p className="paragraph">
        Elevate user experience with our Augmented Reality software - nexAR
        </p>
        <div data-direction="right" data-position="bottom" className="carousel">
          <span className="carousel__text">
            ; In the realm of AR; the only limit is our imagination;  
            In the realm of AR; the only limit is our imagination ;  
            In the realm of AR; the only limit is our imagination 
          </span>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --lime-500: #bdd910;
    --violet-700: #8a07b8;

    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;

    padding: 1rem;
    width: 26rem;
    height: auto;
    min-height: 16rem;
    background-color: var(--lime-500);

    border-radius: 0.5rem;
  }

  .card::before {
    content: "";
    position: absolute;
    top: 7rem;
    right: 2rem;

    width: 1.25rem;
    aspect-ratio: 1 / 1;
    background-color: var(--violet-700);

    border-radius: 9999px;
  }

  .card::after {
    content: "";
    position: absolute;
    top: 8.75rem;
    right: -0.5rem;

    width: 3rem;
    aspect-ratio: 1 / 1;
    background-color: var(--violet-700);

    border-radius: 9999px;
  }

  .card .carousel {
    position: absolute;
    left: 0;

    animation: carousel 10s linear var(--carousel_direction, normal) infinite;
  }

  .card .carousel[data-direction="right"] {
    --carousel_direction: reverse;
  }
  .card .carousel[data-position="top"] {
    top: 0.75rem;
  }
  .card .carousel[data-position="bottom"] {
    bottom: 0.75rem;
  }

  .card .carousel .carousel__text {
    font-size: 0.75rem;
    color: black;
    text-wrap: nowrap;
  }

  @keyframes carousel {
    to {
      transform: translate(-50%);
    }
  }

  .card .image {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.25rem;
    margin-bottom: 0.5rem;
    width: fit-content;
    aspect-ratio: 1 / 1;
    background-color: transparent;

    border-radius: 0.25rem;
  }

  .card .image svg {
    width: 4rem; /* Default size */
    height: 2em;
  }

  .card .title {
    position: relative;
    z-index: 10;

    font-size: 1rem;
    color: black;
    font-weight: bold;
  }

  .card .paragraph {
    position: relative;
    z-index: 10;

    padding-right: 0.25rem;

    font-size: 0.75rem;
    color: black;
  }

  @media (max-width: 600px) {
    .card {
      width: 100%; /* Full width on mobile */
      padding: 0.5rem; /* Adjust padding */
    }

    .card .carousel .carousel__text {
      font-size: 0.65rem; /* Smaller text size on mobile */
    }

    .card .title {
      font-size: 0.9rem; /* Smaller title size on mobile */
    }

    .card .paragraph {
      font-size: 0.65rem; /* Smaller paragraph size on mobile */
    }

    .card .image {
      width: 80%; /* Adjust image width */
    }

    .card .image svg {
      width: 8rem; /* Increased size for mobile */
      height: 8em; /* Adjust height for mobile if needed */
    }

    .card::before {
      top: 5rem; /* Adjust positioning of pseudo-elements */
      right: 1rem;
    }

    .card::after {
      top: 6.5rem; /* Adjust positioning of pseudo-elements */
      right: -0.25rem;
    }
  }
`;

export default Card;
