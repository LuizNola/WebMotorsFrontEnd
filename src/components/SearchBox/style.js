import styled from 'styled-components';

export const SearchContainer = styled.div`
    padding: 40px;
    max-height: 312px;

    background-color: #ffffff;
`

export const CheckArea = styled.div`

    margin-bottom: 10px;

    label:nth-child(2){
            input[type="checkbox"]{
                margin-left: 40px;
            }
    }
`

export const InfoArea = styled.div`
    display: grid;
    grid-column-gap: 50px;
    grid-row-gap: 10px;
    grid-template: "where where brand model" 
                   "year price version version" ;

`

export const WhereArea  = styled.div`
    grid-area:  where;
    display: flex;

    border: 1px solid #bbbbbb;
    border-radius: 3px;
`

export const StateArea = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: center;

    padding: 8px;
    select{
        border: none;
        width: 100%;
    }
`
export const RangeArea = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;

    border-left: 1px solid #bbbbbb;
    
    width: 25%;
    padding: 8px;
    select{
        border: none;
        width: 100%;
    }
`

export const BrandArea = styled.div`
    grid-area: brand;
    display: flex;
    align-items:center;
    justify-content: center;

    border: 1px solid #bbbbbb;
    border-radius: 3px;

    padding: 8px 3px; 

    select{
        border: none;
        width: 100%;
    }

    
`

export const ModelArea = styled.div`
    grid-area: model;
    display: flex;
    align-items:center;
    justify-content: center;

    border: 1px solid #bbbbbb;
    border-radius: 3px;

    padding: 8px 3px;
    select{
        border: none;
        width: 100%;
    }
`

export const Year = styled.select`
    grid-area: year;

    border: 1px solid #bbbbbb;
    border-radius: 3px;

    padding: 8px 0px;
`

export const Price = styled.select`
    grid-area: price;

    border: 1px solid #bbbbbb;
    border-radius: 3px;

    padding: 8px 0px;
`

export const VersionArea = styled.div`
    grid-area: version;
    display: flex;
    align-items:center;
    justify-content: center;

    border: 1px solid #bbbbbb;
    border-radius: 3px;

    padding: 8px 3px;
    select{
        border: none;
        width: 100%;
    }
`