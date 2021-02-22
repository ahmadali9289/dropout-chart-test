import React from "react";
import Bar from "./Bar/Bar";
import styled from "styled-components";
import "./Card.scss";

const Card = (props) => {
  const defaultValue = 400; // Assume 400 == 100%

  const generateDropDownGraph = () => {
    const tree = [];
    for (let i = 0; i < props.tree.length; i++) {
      console.log(props.tree[i]);
      let calculated = (defaultValue / 100) * props.tree[i].value;
      if (i !== 0) {
        tree.push(
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DividerCircle>
              <img
                src="images/left-copy-3.png"
                srcset="images/left-copy-3@2x.png 2x,
         images/left-copy-3@3x.png 3x"
                class="left-copy-3"
              ></img>
            </DividerCircle>
            <DividerText>
              -
              {parseInt(props.tree[i - 1].value) -
                parseInt(props.tree[i].value)}
              %
            </DividerText>
          </div>
        );
      }
      tree.push(
        <Bar
          height={calculated}
          type={props.tree[i].type}
          label={props.tree[i].label}
          value={props.tree[i].value}
        />
      );
    }
    return tree;
  };

  return (
    <>
        <div>
            <Title>
                Flow dropout per step and service
            </Title>
        </div>
      <hr />
      <div className="card">
        {generateDropDownGraph()}
      </div>
    </>
  );
};

const DividerCircle = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #e3e3e3;
  justify-content: center;
  align-items: center;
`;

const DividerText = styled.div`
  margin: 20px 0;
`;

const Title = styled.p`
  font-size:18px;
  text-align: left;
  color: #323a44; 
`;

export default Card;
