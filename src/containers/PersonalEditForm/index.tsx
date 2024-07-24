"use client"
import axios from 'axios';
import React from 'react';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter, usePathname } from 'next/navigation';
import { roles } from '@/utils/rolesObj';
import FormSelect from '@/components/FormSelect';
import SideHeader from '@/components/SideHeader';
import FormSection from '@/components/FormSection';

interface FormDataProps {
    fullName: string
    phone: string
    email: string
    role: string
}

const Index = () => {

    const router = useRouter()
    const pathName: string = usePathname()
    const [alert, setAlert] = React.useState<string>('')
    const [warning, setWarning] = React.useState<string>('')
    const [loaderActive, setLoaderActive] = React.useState<boolean>(false)
    const { options, endpoint } = roles[`${pathName?.split('/')[1]}`]
    const [error, setError] = React.useState<any>(null)
    const actualItem = Number(pathName?.split('/')[3])
    const [formData, setFormData] = React.useState<FormDataProps>({
        fullName: '',
        phone: '',
        email: '',
        role: ''
    });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/${endpoint}/${actualItem}`);
                setFormData(response.data.data);
            } catch (err: any) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const eventSubmit = (response: any) => {
        setLoaderActive(false)
        setAlert(response?.data?.data?.message)
        setTimeout(() => {
            router.push('/main')
        }, 300);
    }

    const eventSubmitFailed = (error: any) => {
        setLoaderActive(false)
        setWarning(error?.response?.data?.error)
    }

    const onFormatSubmit = (e: any) => {
        e.preventDefault()
        setAlert('')
        setWarning('')
        setLoaderActive(true)
        axios.put(`${process.env.BACK_LINK}/api/${endpoint}/${actualItem}`, formData)
        .then((response) => eventSubmit(response))
        .catch((error) => eventSubmitFailed(error))
    }

    return (
        <form className="flex flex-col bg-auxiliar p-4 rounded-lg w-[18rem]" onSubmit={onFormatSubmit}>
            <Loader active={loaderActive} />
            <SideHeader to="/" />
            <FormSection type="text" id="fullName" placeholder="John Doe" label="Nombre completo" onChange={handleInputChange} value={formData.fullName} />
            <FormSection type="text" id="phone" placeholder="3001234567" label="Número de celular" onChange={handleInputChange} value={formData.phone} />
            <FormSection type="text" id="email" placeholder="johndoe@mail.com" label="Correo electrónico" onChange={handleInputChange} value={formData.email} />
            <FormSelect list={options} id="role" label="Rol de usuario" onChange={handleInputChange} value={formData.role} className={{select: 'w-1/2'}} />
            <p className='text-xs my-2 text-primary text-center'> {alert} </p>
            <p className='text-xs my-2 text-red-500 text-center'> {warning} </p>
            <Button type="submit" className="bg-secondary" onClick={() => {}}> Actualizar </Button>
        </form>
    )
}

export default Index