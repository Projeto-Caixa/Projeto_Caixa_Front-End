import styled from "styled-components";

export const Full = styled.div`
  margin: 0;
  padding: 0;
  @media print {
    /* #1 {
      display: none;
    } */
    #print {
      display: block;
      margin: 0;
    }
  }
`;

export const PrintCOmponent = styled.div`
  /* break-after: auto; */
  display: none;
  page-break-before: always;

  width: 80mm;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

export const ProdInfo = styled.div`
  border-bottom: 2px solid black;

  img {
    height: 120px;
  }
`;

export const ValueProd = styled.div`
  border-bottom: 2px solid black;
  padding: 10px;
`;

export const InfoAll = styled.div`
  font-size: 25px;
  height: 50px;
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
