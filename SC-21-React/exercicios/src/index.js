import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pais'
import Filho from './componentes/Filhos'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>    
, document.getElementById('root'))