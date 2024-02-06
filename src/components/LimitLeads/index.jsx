import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Loader from '@/components/Loader'
import Button from '@/components/Button'
import LoginSection from '@/components/LoginSection'

const Index = ({ setState }) => {

    const [value, setValue] = React.useState(null)
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [leads, setLeads] = React.useState([])

    React.useEffect(() => {
        try {
            // Lógica para cuando el componente se monta exitosamente
        } catch (error) {
            // Logica para cuando el componente se monta y no sucede nada
        }
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            // Cuando se envía el formulario
        } catch (error) {
            // Cuando sucede un error al enviar el formulario
        }
    }

  return (
    <form className="form-limits" onSubmit={handleSubmit}>
        <Loader active={loaderActive} />
        <LoginSection 
            type="number"
            id="lead-limit"
            className={{label: 'flex justify-center', input: 'w-1/3 my-2'}}
            placeholder="Ej: 10"
            label="Límite mensual de leads"
            onChange={handleChange}
            value={value}
            minValue={leads.length}
            maxValue={500}
        />
        <Button type="submit" className="bg-primary text-auxiliar flex justify-center">
            Actualizar
        </Button>
    </form>
  )
}

export default Index