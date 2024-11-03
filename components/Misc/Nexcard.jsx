import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Card One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae justo vel lorem tincidunt ultrices at non nunc.',
      imageUrl: 'https://via.placeholder.com/40', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Card Two',
      description: 'Donec in sapien viverra, tincidunt augue id, efficitur massa. Suspendisse ac lorem non erat luctus commodo.',
      imageUrl: 'https://via.placeholder.com/40', // Replace with your image URL
    },
    {
      id: 3,
      title: 'Card Three',
      description: 'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Pellentesque in ipsum id orci porta dapibus.',
      imageUrl: 'https://via.placeholder.com/40', // Replace with your image URL
    },
  ];

  return (
    <StyledWrapper>
      {cardsData.map((card) => (
        <section key={card.id} className="card">
          <img src={card.imageUrl} alt={`${card.title} icon`} className="card__icon" />
          <div className="card__content">
            <p className="card__title">{card.title}</p>
            <p className="card__description">{card.description}</p>
          </div>
        </section>
      ))}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;

  section.card {
    position: relative;
    width: 350px;
    height: 200px;
    background-color: #474dc3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card__icon {
    width: 40px;
    height: 40px;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 3px;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #000000;
    background-color: #474dc3;
    color: #ffffff;
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #474dc3;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    padding-left: 5px;
    font-size: 24px;
    color: var(--white);
    font-weight: 700;
  }

  .card:hover .card__icon {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #ffffff;
    line-height: 1.4;
  }
`;

export default Card;
