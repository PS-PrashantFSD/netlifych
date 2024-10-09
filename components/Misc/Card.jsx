import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="parent">
        <div className="card">
          <div className="logo">
            <span className="circle circle1" />
            <span className="circle circle2" />
            <span className="circle circle3" />
            <span className="circle circle4" />
            <span className="circle circle5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 40"
                className="svg"
              >
                <text
                  x="10"
                  y="30"
                  fontFamily="Arial"
                  fontSize="50"
                  fill="white"
                >
                  nex
                </text>
              </svg>
            </span>
          </div>
          <div className="glass" />
          <div className="content">
            <span className="title">nexAR</span>
            <span className="text">
              Innovate, Eliminate, Dominate
            </span>
          </div>
          <div className="bottom">
            <div className="social-buttons-container"></div>
            <div className="view-more">
              <button className="view-more-button">View more</button>
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .parent {
    width: 290px;
    height: 300px;
    perspective: 1000px;
  }

  .card {
    height: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(50, 50, 50) 0%, rgb(30, 30, 30) 100%);
    transition: all 0.5s ease-in-out;
    transform-style: preserve-3d;
    box-shadow: rgba(0, 0, 0, 0.5) 40px 50px 25px -40px, rgba(0, 0, 0, 0.2) 0px 25px 25px -5px;
  }

  .glass {
    transform-style: preserve-3d;
    position: absolute;
    inset: 8px;
    border-radius: 55px;
    border-top-right-radius: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate3d(0px, 0px, 25px);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease-in-out;
  }

  .content {
    padding: 100px 60px 0px 30px;
    transform: translate3d(0, 0, 26px);
  }

  .content .title {
    display: block;
    color: #e0e0e0;
    font-weight: 900;
    font-size: 20px;
    margin-top: 50px;
  }

  .content .text {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    margin-top: 20px;
  }

  .bottom {
    padding: 10px 12px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: translate3d(0, 0, 26px);
  }

  .bottom .view-more {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .bottom .view-more:hover {
    transform: translate3d(0, 0, 10px);
  }

  .bottom .view-more .view-more-button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.red};;
    font-weight: bolder;
    font-size: 12px;
  }

  .bottom .view-more .svg {
    fill: none;
    stroke: ${({ theme }) => theme.colors.red};;
    stroke-width: 3px;
    max-height: 15px;
  }

  .bottom .social-buttons-container {
    display: flex;
    gap: 10px;
    transform-style: preserve-3d;
  }

  .bottom .social-buttons-container .social-button {
    width: 30px;
    aspect-ratio: 1;
    padding: 5px;
    background: rgb(50, 50, 50);
    border-radius: 50%;
    border: none;
    display: grid;
    place-content: center;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 7px 5px -5px;
  }

  .bottom .social-buttons-container .social-button:hover {
    background: #333;
  }

  .bottom .social-buttons-container .social-button:active {
    background: rgb(255, 234, 0);
  }

  .logo {
    position: absolute;
    right: 0;
    top: 0;
    transform-style: preserve-3d;
  }

  .logo .circle {
    display: block;
    position: absolute;
    aspect-ratio: 1;
    border-radius: 50%;
    top: 0;
    right: 0;
    box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
    transition: all 0.5s ease-in-out;
  }

  .logo .circle1 {
    width: 170px;
    background: linear-gradient(135deg, rgba(255, 0, 0, 0.8), rgba(150, 0, 0, 0.6));
    transform: translate3d(0, 0, 20px);
    top: 8px;
    right: 8px;
  }

  .logo .circle2 {
    width: 140px;
    background: linear-gradient(135deg, rgba(255, 50, 50, 0.7), rgba(180, 0, 0, 0.6));
    transform: translate3d(0, 0, 40px);
    top: 10px;
    right: 10px;
    transition-delay: 0.4s;
  }

  .logo .circle3 {
    width: 110px;
    background: linear-gradient(135deg, rgba(255, 100, 100, 0.6), rgba(210, 0, 0, 0.6));
    transform: translate3d(0, 0, 60px);
    top: 17px;
    right: 17px;
    transition-delay: 0.8s;
  }

  .logo .circle4 {
    width: 80px;
    background: linear-gradient(135deg, rgba(255, 150, 150, 0.5), rgba(220, 0, 0, 0.6));
    transform: translate3d(0, 0, 80px);
    top: 23px;
    right: 23px;
    transition-delay: 1.2s;
  }

  .logo .circle5 {
    width: 50px;
    background: linear-gradient(135deg, rgba(255, 200, 200, 0.4), rgba(230, 0, 0, 0.6));
    transform: translate3d(0, 0, 100px);
    top: 30px;
    right: 30px;
    display: grid;
    place-content: center;
    transition-delay: 1.6s;
  }

  .logo .circle5 .svg {
    width: 20px;
    fill: white;
  }

  .parent:hover .card {
    transform: rotate3d(1, 1, 0, 30deg);
    box-shadow: rgba(0, 0, 0, 0.5) 30px 50px 25px -40px, rgba(0, 0, 0, 0.1) 0px 25px 30px 0px;
  }

  .parent:hover .card .bottom .social-buttons-container .social-button {
    transform: translate3d(0, 0, 50px);
  }

  .parent:hover .card .logo .circle2 {
    transform: translate3d(0, 0, 60px);
  }

  .parent:hover .card .logo .circle3 {
    transform: translate3d(0, 0, 80px);
  }

  .parent:hover .card .logo .circle4 {
    transform: translate3d(0, 0, 100px);
  }

  .parent:hover .card .logo .circle5 {
    transform: translate3d(0, 0, 120px);
  }
`;

export default Card;

