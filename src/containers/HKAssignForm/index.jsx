"use client"
// import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
// import Loader from '@/components/Loader';
import FormSection from '@/components/FormSection';

const Index = () => {

    const [alert, setAlert] = React.useState('')
    const [warning, setWarning] = React.useState('')
    const [formData, setFormData] = React.useState({
        roomNumber: ''
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
        axios.post(`${process.env.BACK_LINK}/api/autoAssignHouseKeeper`, formData)
    }

    return (
        <form className="flex flex-col bg-auxiliar p-4 rounded-lg" onSubmit={(e) => handleSubmitForm(e)}>
            <h1 className="text-center text-3xl my-2 font-bold text-primary">Actualizar estado de una habitación</h1>
            <FormSection type="text" id="roomNumber" placeholder="101" label="Número habitación" onChange={handleInputChange} value={formData.roomNumber} />
            <p className='text-xs my-2 text-primary text-center'> {alert} </p>
            <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
            <Button type="submit" className="bg-secondary" onClick={() => {}}> Asignar HouseKeeper </Button>
        </form>
    )
}

export default Index