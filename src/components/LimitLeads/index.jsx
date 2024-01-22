import React from 'react'
import LoginSection from '@/components/LoginSection'
import Button from '@/components/Button'

const Index = ({ setState }) => {

    // Crear la lógica para obtener minValue y maxValue

    const [value, setValue] = React.useState(null)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e, value) => {
        e.preventDefault()
        console.log(value)
        setState(false)
    }

  return (
    <form className="form-limits" onSubmit={handleSubmit}>
        <LoginSection 
            type="number"
            id="lead-limit"
            className={{label: 'flex justify-center', input: 'w-1/3 my-2'}}
            placeholder="Ej: 10"
            label="Límite mensual de leads"
            onChange={handleChange}
            value={value}
            minValue={20}
            maxValue={30}
        />
        <Button type="submit" className="bg-primary text-auxiliar flex justify-center">
            Actualizar
        </Button>
    </form>
  )
}

export default Index