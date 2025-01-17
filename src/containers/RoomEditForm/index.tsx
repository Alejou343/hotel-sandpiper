"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter, usePathname } from 'next/navigation';
import FormSelect from '@/components/FormSelect';
import SideHeader from '@/components/SideHeader';
import FormSection from '@/components/FormSection';
import { roles } from '@/utils/rolesObj';

const Index = () => {

    const router = useRouter()
    const pathName = usePathname()
    const [alert, setAlert] = useState('')
    const [warning, setWarning] = useState('')
    const [loaderActive, setLoaderActive] = useState(false)
    const { options, endpoint } = roles[`${pathName?.split('/')[1]}`]
    const [error, setError] = useState(null)
    const actualItem = Number(pathName?.split('/')[3])
    const [formData, setFormData] = useState({
        hotelName: '',
        number: '',
        name_category_room: ''
    });
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/rooms/${actualItem}`);
                setFormData(response.data.data);
            } catch (err: any) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    const eventSubmit = (response: any) => {
        setLoaderActive(false)
        setAlert(response?.data?.message)
        setTimeout(() => {
            router.push('/main')
        }, 300);
    }
    
    const eventSubmitFailed = (error: any) => {
        setLoaderActive(false)
        setWarning(error?.response?.data?.message)
    }

    const onFormatSubmit = (e: any) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        // setLoaderActive(true)
        axios.put(`${process.env.BACK_LINK}/api/${endpoint}/${actualItem}`, formData)
        .then((response) => eventSubmit(response))
        .catch((error) => eventSubmitFailed(error))
    }

  return (
    <form className="flex flex-col bg-auxiliar p-4 rounded-lg w-[18rem]" onSubmit={onFormatSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <FormSection type="text" id="hotelName" placeholder="Hotel Sandpiper" label="Nombre Hotel" onChange={handleInputChange} value={formData.hotelName} />
        <FormSection type="text" id="number" placeholder="1001" label="Número habitación" onChange={handleInputChange} value={formData.number} />
        <FormSelect list={options} id="name_category_room" label="Categoría" onChange={handleInputChange} value={formData.name_category_room} className={{select: 'w-1/2'}} />
        <p className='text-xs my-2 text-primary text-center'> {alert} </p>
        <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
        <Button type="submit" className="bg-secondary" onClick={() => {}}> Actualizar </Button>
    </form>
  )
}

export default Index