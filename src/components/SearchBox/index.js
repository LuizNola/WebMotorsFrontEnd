import { 
    SearchContainer, 
    CheckArea,
    InfoArea, 
    WhereArea, 
    BrandArea, 
    ModelArea,
    RangeArea,
    StateArea, 
    Year,
    Price,
    VersionArea 
} from './style'
import React, {useEffect, useState} from 'react';

import ButtonArea from '../ButtonArea';

import MotorsAPI from '../../helpers/MotorsAPI'

const SearchBox = () => {
    const api = MotorsAPI

    const [makeList, setMakeList] = useState([])
    const [makeIdSelect, setmakeIdSelect] = useState(0)

    const [modelList, setModelList] = useState([])

    const getMakes = async () => {
        let json = await api.getMake()
        console.log(json)
        setMakeList(json)
    }

    const getModel = async () => {
        let json = await api.getModel(makeIdSelect)
        console.log(json)
        setModelList(json)
    }

    const registerMarkerId = (id) => {
        setmakeIdSelect(id)
        getModel()
    }

    useEffect(() =>{
        getMakes()
    },[])

    return(
        <SearchContainer>
            <form>

                <CheckArea>

                <label>
                    <input type="checkbox"/>
                    Novos
                </label>

                <label>
                    <input type="checkbox"/>
                    Usados
                </label>
                </CheckArea>

                <InfoArea>
                    <WhereArea>
                        <StateArea>
                            <img src=""/>
                            Onde: 
                            <select>
                                <option value="">Todos</option>
                                <option value="">São Paulo-SP</option>
                            </select>
                        </StateArea>
                    
                    <RangeArea>
                         Raio: 
                        <select>
                            <option value=""> 1000KM</option>
                            <option value=""> 500KM</option>
                            <option value=""> 100KM</option>
                            <option value=""> 10KM</option>

                        </select>
                    </RangeArea>

                </WhereArea>

                    <BrandArea>
                        Marca: 
                        <select onChange={e=>registerMarkerId(e.target.value)}>
                            <option value="">Selecione</option>
                            {makeList.map((i, k)=>{
                                return (
                                    <option key={k} value={i.ID}>{i.Name}</option>
                                )
                            })}
                        </select>
                    </BrandArea>

                    <ModelArea>
                        Modelo: 
                        <select>
                            <option value="">Todos</option>
                            {modelList.map((i, k)=>{
                                return (
                                    <option key={k} value={i.Id}>{i.Name}</option>
                                )
                            })}
                        </select>
                    </ModelArea>

                    <Year>
                        <option value="">Ano Desejado</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                        <option value="">2018</option>

                    </Year>

                    <Price>
                        <option value="">Faixa de Preço</option>
                    </Price>

                    <VersionArea>
                        Versão: 
                        <select>
                            <option value=""> 1000KM</option>
                            <option value=""> 500KM</option>
                            <option value=""> 100KM</option>
                            <option value=""> 10KM</option>
                        </select>
                    </VersionArea>
                </InfoArea>

                <ButtonArea/>
            </form>
        </SearchContainer>
    )
}

export default SearchBox;