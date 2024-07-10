"use client"
import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import SideHeader from '@/components/SideHeader';
import FormSection from '@/components/FormSection';
import CheckSection from '@/components/CheckSection';
import PasswordSection from '@/components/PasswordSection';

const Index = () => {

    const router = useRouter()
    const [alert, setAlert] = React.useState('')
    const [state, setState] = React.useState(false)
    const [loaderActive, setLoaderActive] = React.useState(false)
    
    const [formData, setFormData] = React.useState({
        user_name: '',
        user_password: '',
    });     

    const handleInputChange = (e) => {
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

    const eventLogin = (response) => {
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

    const eventLoginFailed = (error) => {
        setLoaderActive(false)
        setAlert(error?.response?.data?.message)
    }

    const onLoginSubmit = (e) => {
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
        <FormSection  
            label="Nombre de usuario"
            className={"w-full"}
            type="text"
            id="user_name"
            placeholder="Nombre de usuario"
            onChange={handleInputChange}
            value={formData.user_name}
            defaultValue={formData.user_name}
            />
        <PasswordSection  
            id="user_password"
            label="Contraseña"
            placeholder="**********"
            onChange={handleInputChange}
            value={formData.user_password}
            defaultValue={formData.user_password}
        />
        <CheckSection name="Recuérdame" checked={state} handleChecked={() => setState(!state)} />
        <p className='text-xs my-2 text-red-500 text-center'> {alert} </p>
        <Button 
            type="submit" 
            className="bg-secondary"
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