import styled from 'styled-components';

export const Page = styled.div`
  @media print {
    #noPrint {
      display: none;
    }
    #print {
      display: block;
    }
  }
`;

export const Container = styled.div`
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CardLog = styled.div`
  height: 70%;
  width: 70%;

  #one {
    width: 40%;
    margin-left: 40px;
  }

  #two {
    width: 20%;
    text-align: left;
  }

  #three {
    width: 32%;
    text-align: center;
  }

  #four {
    width: 20%;
    text-align: left;
  }
`;

export const LineInfo = styled.div`
  background-color: #5ad6fc;
  height: 10%;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: white;
  font-size: 270%;
`;

export const LogContent = styled.div`
  height: 80%;

  border-left: 1px solid #5ad6fc;
  border-right: 1px solid #5ad6fc;

  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const LineProductInfo = styled.div`
  font-size: 200%;
  display: flex;

  margin: 10px 0px;
`;

export const TotalLine = styled.div`
  background-color: #5ad6fc;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-end-start-radius: 20px;
  border-end-end-radius: 20px;

  color: white;
  font-size: 250%;
`;

export const ButtonPrint = styled.div`
  height: 10%;
  width: 30%;
  display: flex;

  button {
    font-family: 'Minimal';
    font-size: 200%;
    background-color: white;
    border: 1px solid #5ad6fc;
    border-radius: 50px;
    color: #5ad6fc;
    height: 100%;
    width: 100%;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
