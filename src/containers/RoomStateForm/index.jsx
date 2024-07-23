"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import FormSection from '@/components/FormSection';
import FormSelect from '@/components/FormSelect';

const Index = () => {

    const options = ['v/c', 'o', 'v/d', 'ooo', 'clean/in', 'clean/out', 'p/s', 'RM', 'S/O', 'E/CH', 'MT/IN', 'MT/OUT', 'M/P', 'REMO PROJECT']
    
    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [formData, setFormData] = React.useState({
        roomNumber: '',
        message: '',
        profileIdentification: ''
    });   

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(formData)
        setAlert('')
        setWarning('')
        // setLoaderActive(true)
        axios.post(`${process.env.BACK_LINK}/api/pocki`, formData)
        .then((response) => setAlert(response?.data?.message))
        .catch((err) => setWarning(err?.response?.data?.message))
    }

    return (
        <form className="flex flex-col bg-auxiliar p-4 rounded-lg" onSubmit={(e) => handleSubmitForm(e)}>
            <h1 className="text-center text-3xl my-2 font-bold text-primary">Actualizar estado de una habitación</h1>
            <FormSection type="text" id="roomNumber" placeholder="101" label="Número habitación" onChange={handleInputChange} value={formData.roomNumber} />
            <FormSection type="text" id="profileIdentification" placeholder="HK-001" label="Identificación Personal" onChange={handleInputChange} value={formData.profileIdentification} />
            <FormSelect list={options} id="message" label="Categoría" onChange={handleInputChange} value={formData.message} className={{select: 'w-1/2'}} />
            <p className='text-xs my-2 text-primary text-center'> {alert} </p>
            <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
            <Button type="submit" className="bg-secondary"> Actualizar estado </Button>
        </form>
    )
}

export default Index