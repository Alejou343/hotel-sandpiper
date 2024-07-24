"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import FormSection from '@/components/FormSection';

const Index = () => {

    const [alert, setAlert] = React.useState<string>('')
    const [warning, setWarning] = React.useState<string>('')
    const [formData, setFormData] = React.useState<{ roomNumber: string }>({
        roomNumber: ''
    });   

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const handleSubmitForm = (e: any): void => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        axios.post(`${process.env.BACK_LINK}/api/pocki/autoAssignHouseKeeper`, formData)
        .then((response) => setAlert(response.data.message))
        .catch((err) => setWarning(err.response.data.message))
    }

    return (
        <form className="flex flex-col bg-auxiliar p-4 rounded-lg" onSubmit={(e) => handleSubmitForm(e)}>
            <h1 className="text-center text-3xl my-2 font-bold text-primary">Asignar Personal a una habitación</h1>
            <FormSection type="text" id="roomNumber" placeholder="101" label="Número habitación" onChange={handleInputChange} value={formData.roomNumber} />
            <p className='text-xs my-2 text-primary text-center'> {alert} </p>
            <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
            <Button type="submit" className="bg-secondary" onClick={() => {}}> Asignar HouseKeeper </Button>
        </form>
    )
}

export default Index