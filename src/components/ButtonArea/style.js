import styled from 'styled-components';

export const Footer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  
  margin-top: 30px;

    button{
        cursor: pointer;
    }

    button:nth-child(1){
    background-color: #fff;
    color:#ca2430;
    
    border:none;
  }

  div button:nth-child(1){
      color: #BBB;
  }

  div button:nth-child(2){
      color:white;
      font-weight: bold;

      padding: 10px 50px;
      margin-left: 20px;

      border:none;
      background-color: #ca2430;
  }
`
