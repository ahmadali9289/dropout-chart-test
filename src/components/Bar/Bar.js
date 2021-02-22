import React from "react";
import styled from "styled-components";
import "./Bar.scss";

const Bar = (props) => {
  return (
    <div className="bar">
      <div style={{ height: "400px", display: "flex", alignItems: "center" }}>
        {/* props.height below in place of height */}
        <BarContent type={props.type} height={props.height}>
          <div className="bar_content">
            <p>{props.label}</p>
          </div>
        </BarContent>
      </div>
      <PercentageContent>
        <PercentageContentText>{props.value}%</PercentageContentText>
      </PercentageContent>
    </div>
  );
};

const BarContent = styled.div`
  display: flex;
  width: 80px;
  height: ${(props) => (props.height ? props.height + "px" : "400px")};
  background-color: ${(props) =>
    props.type == "BASIC" ? "#d7ebff" : "#d4eeea"};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const PercentageContent = styled.div`
  width: 80px;
  margin-top: 10px;
  align-self: flex-end;
`;
const PercentageContentText = styled.span`
  font-size:18px;
  font-weight:bold;
  font-family: 'Rubik';
`;

export default Bar;
