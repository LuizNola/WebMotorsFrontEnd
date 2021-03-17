import {
    Footer
} from './style'
import React from 'react';

const ButtonArea = () => {
    return (
        <Footer>
          <button> <strong> {'>'} Busca Avançada</strong> </button>

            <div>
                <button>Limpar filtros</button>
                <button>Ver Ofertas</button>
            </div>
        </Footer>

    )
}

export default ButtonArea;