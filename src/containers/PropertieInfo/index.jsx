import React from 'react'
import PropInfo from '@/components/PropInfo'
import PropImage from '@/components/PropImage'


const Index = () => {
  return (
    <div className="inmueble-info flex justify-center items-center">
        <PropImage url="https://i.imgur.com/atudOJE.jpg" />
        <div>
            <PropInfo title="Nombre" value="Casa bonita en Envigado" />
            <PropInfo title="Ubicación" value="Envigado" />
            <PropInfo title="Tipo inmueble" value="Casa" />
            <PropInfo title="Habitaciones" value="3" />
            <PropInfo title="Baños" value="4" />
            <PropInfo title="Parqueaderos" value="2" />
            <PropInfo title="Año construccion" value="2010" />
            <PropInfo title="Tipo servicio" value="Comprar" />
            <PropInfo title="Area construida" value="400" />
            <PropInfo title="Precio" value="3000000000" />
        </div>
    </div>
  )
}

export default Index