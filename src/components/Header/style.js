import styled from 'styled-components';

export const Logo = styled.img`
    width: 200px;
    margin-bottom: 35px;
`

export const Header = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`

export const VehicleArea = styled.div`
  display:flex;
  align-items:center;
 
  
  input{
      display:none;
  }

  label{
    display: flex;
    padding-bottom: 20px;
    color: ${props=>props.isCar ?  "#bbb": "#ca2430"};
    border-bottom:5px solid ${props=>props.isCar ? "#f4f4f4" : "#ca2430"};

    cursor: pointer;
        & img {
            width: 40px;
        }

        & p{
            font-size: 11px;
            margin: 0;
        }

        & h2{
            font-size: 21px;
            margin: 0;
            font-weight: 300;
        }
       
  }

  label:nth-child(2){

    color: ${props=>props.isCar ? "#ca2430": "#bbb"};
    border-bottom:5px solid ${props=>props.isCar ? "#ca2430": "#f4f4f4"};
    margin-right: 50px;
  }

`
export const SellCar = styled.div`
    button{
        border-radius: 3px;
        border: 2px solid #e8c38a;
       
        font-weight: bold;
        color: #e8c38a;

        padding: 10px 20px;
        background: transparent;

        cursor: pointer;
    }
`