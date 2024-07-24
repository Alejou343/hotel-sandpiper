"use client"
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import SideHeader from '@/components/SideHeader';
import LoginSection from '@/components/LoginSection';
import CheckSection from '@/components/CheckSection';
import PasswordSection from '@/components/PasswordSection';

interface FormDataProps {
    user_name: string
    user_password: string
}

const Index = () => {

    const router = useRouter()
    const [alert, setAlert] = React.useState<string>('')
    const [state, setState] = React.useState<boolean>(false)
    const [loaderActive, setLoaderActive] = React.useState<boolean>(false)
    
    const [formData, setFormData] = React.useState<FormDataProps>({
        user_name: '',
        user_password: '',
    });     

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    React.useEffect(() => {

        if (localStorage.getItem('USERNAME') && localStorage.getItem('USERPASSWORD')) {
            
            setState(true)
            setFormData({
                user_name: localStorage.getItem('USERNAME') || '',
                user_password: localStorage.getItem('USERPASSWORD') || ''
            })
        }
    }, [])

    const eventLogin = (response: any): void => {
        if (state) {
            localStorage.setItem('USERNAME', formData.user_name)
            localStorage.setItem('USERPASSWORD', formData.user_password)
        } else {
            localStorage.clear()
        }
        router.push('/main')
        Cookies.set('SessionInfo', JSON.stringify(response.data))
        setLoaderActive(false)
    }

    const eventLoginFailed = (error: any): void => {
        setLoaderActive(false)
        setAlert(error?.response?.data?.message)
    }

    const onLoginSubmit = (e: any): void => {
        e.preventDefault()
        return router.push('/main')
        setAlert('')
        setLoaderActive(true)
        // axios.post(`${process.env.BACK_LINK}/api/login`, formData)
        // .then((response) => eventLogin(response))
        // .catch((error) => eventLoginFailed(error))
    }

  return (
    <form className="flex flex-col gap-4 bg-auxiliar p-4 rounded-lg" onSubmit={onLoginSubmit}>
        <Loader active={loaderActive} />
        <SideHeader to="/" />
        <LoginSection  
            label="Nombre de usuario"
            type="text"
            id="user_name"
            placeholder="Nombre de usuario"
            className={{ div: '', input: '', label: '' }}
            onChange={handleInputChange}
            defaultValue={formData.user_name}
            />
        <PasswordSection  
            id="user_password"
            label="Contraseña"
            placeholder="**********"
            onChange={handleInputChange}
            defaultValue={formData.user_password}
        />
        <CheckSection name="Recuérdame" checked={state} handleChecked={() => setState(!state)} />
        <p className='text-xs my-2 text-red-500 text-center'> {alert} </p>
        <Button 
            type="submit" 
            className="bg-secondary"
            onClick={() => {}}
        >
            Ingresar
        </Button>
        <Link href="/forgot" className='text-sm text-center my-3'>
            <p><u>Olvidé mi contraseña</u></p>
        </Link>
    </form>
  )
}

export default Index