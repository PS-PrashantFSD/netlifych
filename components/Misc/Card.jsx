import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div data-position="top" className="carousel">
          <span className="carousel__text">
            &bullet; card component &bullet; card component &bullet; card
            component &bullet; card component &bullet; card component &bullet;
            card component
          </span>
        </div>
        <div className="image">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
          </svg>
        </div>
        <span className="title">Highlight Curation</span>
        <p className="paragraph">
          Works autonomously through artificial intelligent and hundred of
          micro-services
        </p>
        <div data-direction="right" data-position="bottom" className="carousel">
          <span className="carousel__text">
            &bullet; card component &bullet; card component &bullet; card
            component &bullet; card component &bullet; card component &bullet;
            card component
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
  background-color: black;

  border-radius: 0.25rem;
}

.card .image svg {
  width: 1.5rem;
  fill: white;
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
