import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="content-box">
            <span className="card-title">AR Card</span>
            <p className="card-content">
              AR Business Card, Wedding Card, Sticker and Thanks Card
            </p>
            <span className="see-more">Book Now</span>
          </div>
          <div className="date-box">
            <span className="month">nex</span>
            <span className="date">AR</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 300px;
    padding: 20px;
    perspective: 1000px;
  }

  .card {
    padding-top: 50px;
    border: 3px solid Black;
    transform-style: preserve-3d;
    background-color: transparent; /* Set background to transparent */
    width: 100%;
    box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: rotate3d(0.5, 1, 0, 30deg);
  }

  .content-box {
    background: ${({ theme }) => theme.colors.red};; /* Change background to red */
    transition: all 0.5s ease-in-out;
    padding: 60px 25px 25px 25px;
    transform-style: preserve-3d;
  }

  .content-box .card-title {
    display: inline-block;
    color: white;
    font-size: 25px;
    font-weight: 900;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 50px);
  }

  .content-box .card-title:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .card-content {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #f2f2f2;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 30px);
  }

  .content-box .card-content:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .content-box .see-more {
    cursor: pointer;
    margin-top: 1rem;
    display: inline-block;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
    color: black;
    background: white;
    padding: 1rem 2rem;
    transition: all 0.5s ease-in-out;
    transform: translate3d(0px, 0px, 20px);
  }

  .content-box .see-more:hover {
    transform: translate3d(0px, 0px, 60px);
  }

  .date-box {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 60px;
    width: 60px;
    background: white;
    border: 1px solid white;
    padding: 10px;
    transform: translate3d(0px, 0px, 80px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
  }

  .date-box span {
    display: block;
    text-align: center;
  }

  .date-box .month {
    color: black; /* Change color to black */
    font-size: 9px;
    font-weight: 700;
  }

  .date-box .date {
    font-size: 20px;
    font-weight: 900;
    color: black; /* Change color to black */
  }
`;

export default Card;
