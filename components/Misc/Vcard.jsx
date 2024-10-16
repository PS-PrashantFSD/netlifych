import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="remove-when-use">
          <label>Hover over me to show details</label>
        </div>
        <div className="details">
          <label>Title</label>
          <p>
            A beautiful place at the shore of XYZ sea.
            <br />
            <i>California, USA</i>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  width: 190px;
  height: 254px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  position: relative;
}

.remove-when-use {
  text-align: center;
  width: 100%;
  position: absolute;
  color: black;
  top: 85px;
  font-weight: bold;
}

.details > p {
  font-size: .8em;
  margin-top: .5em;
}

.details > label {
  font-weight: bold;
}

.details {
  color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  bottom: 0;
  height: 2.6em;
  transition: height .5s ease-in-out;
  padding: 0.6em;
  overflow: hidden;
}

.card:hover > .details {
  height: 6.7em;
}


`;

export default Card;
