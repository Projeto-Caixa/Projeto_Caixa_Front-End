import styled from "styled-components";

export const PrintCOmponent = styled.div`
  display: none;

  width: 80mm;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;

  page-break-after: always;
`;

export const ProdInfo = styled.div`
  border-bottom: 2px solid black;

  img {
    height: 130px;
  }
`;

export const ValueProd = styled.div`
  border-bottom: 2px solid black;
  padding: 10px;
`;

export const InfoAll = styled.div`
  font-size: 25px;
  height: 80px;
  margin-top: 30px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  div {
    margin: 10px;
    display: flex;
    justify-content: space-around;
  }
`;
