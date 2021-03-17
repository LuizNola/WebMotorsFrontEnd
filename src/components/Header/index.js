import React, { useState } from 'react';
import { Header, VehicleArea, SellCar, Logo} from './style'


const HeaderArea = () => {

    const [isCar, setIsCar] = useState(true)

    return(
        <>
        <Logo src="./icons/logo.png"/>
        <Header>

            <VehicleArea isCar={isCar}>
                <input 
                type="radio" 
                id="car" 
                name="vehicle" 
                value="car" 
                
                />
                <label onClick={()=>setIsCar(true)} >
                    <img src="https://www.webmotors.com.br/assets/img/icon/icon-search-car.svg?t=979"/> 
                    <div>
                        <p>COMPRAR</p>
                        <h2>CARROS</h2>
                    </div>
                </label>
                <input 
                type="radio" 
                id="motorcycle" 
                name="vehicle" 
                value="motorcycle" 
                />
                <label onClick={()=>setIsCar(false)}>
                    <img src="https://www.webmotors.com.br/assets/img/icon/icon-search-bike.svg?t=979"/> 
                    <div>
                        <p>COMPRAR</p>
                        <h2>MOTOS</h2>
                    </div>
                </label>
            </VehicleArea>

            <SellCar>
                <button>Vender meu carro</button>
            </SellCar>
        </Header>
          </>
    )
}

export default HeaderArea;