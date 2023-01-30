import styled from "styled-components";

export const PrintContainer = styled.div`
  display: none;

  padding: 1mm;
  width: 79mm;

  font-size: 200%;
  text-align: center;

  margin-top: 15px;
`;

export const Log = styled.div`
  border: 1px solid black;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TitleInfos = styled.div`
  display: flex;

  border-bottom: 1px solid black;
  font-size: 80%;
  margin: 10px 0px;

  #one {
    width: 30%;
    text-align: left;
    margin-left: 5px;
  }

  #two {
    width: 20%;
  }

  #three {
    width: 20%;
  }

  #four {
    width: 30%;
    text-align: right;
    margin-right: 5px;
  }
`;

export const ProductsInfo = styled.div`
  display: flex;
  font-size: 70%;

  #one {
    width: 30%;
    text-align: left;
    margin-left: 5px;
  }

  #two {
    width: 20%;
  }

  #three {
    width: 20%;
  }

  #four {
    width: 30%;
    text-align: right;
    margin-right: 5px;
  }
`;

export const Total = styled.div`
  border: 1px solid black;
  border-top: 0;

  border-end-end-radius: 10px;
  border-end-start-radius: 10px;

  padding: 10px;
`;

export const SecundaryInfos = styled.div`
  font-size: 60%;
  margin-bottom: 15px;
`;
