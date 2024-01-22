import React from 'react'
import FormSection from '@/components/FormSection'
import Button from '@/components/Button'

const Index = () => {

    const [value, setValue] = React.useState(null)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (value) => {
        console.log(value)
    }

  return (
    <form className="form-limits">
        <FormSection 
            type="number"
            id="lead-limit"
            placeholder="Ej: 10"
            label="Límite mensual de leads"
            onChange={handleChange}
            value={value}
            minValue={20}
            maxValue={30}
        />
        <Button type="submit" onClick={() => handleSubmit(value)} className="bg-auxiliar text-black flex justify-center">
            Actualizar
        </Button>
    </form>
  )
}

export default Index