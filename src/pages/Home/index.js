import { Tamplete } from './style'
import React from 'react';

import SearchBox from '../../components/SearchBox'
import HeaderArea from '../../components/Header'

const Home = () => {
    return(
        <Tamplete>
            <HeaderArea/>
            <SearchBox/>
        </Tamplete>
    )
}

export default Home;