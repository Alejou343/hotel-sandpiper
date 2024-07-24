import axios from 'axios';
import React from 'react'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation';

interface ComponentProps {
    endpoint: string
    id: number
    state: boolean
    setState: any
}

const Index: React.FC<ComponentProps> = ({ endpoint, id, state, setState }) => {
    
    const router = useRouter()
    const [alert, setAlert] = React.useState<string>('');
    const [name, setName] = React.useState<string>('')
    const [warning, setWarning] = React.useState<string>('');
    const [loaderActive, setLoaderActive  ] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/${endpoint}/${id}`);
                if (endpoint !== 'rooms') {
                    setName(response?.data?.data?.fullName)
                } else {
                    setName(response?.data?.data?.number)
                }
            } catch (err) {
                console.error('ERROR', err)
            }
        };

        fetchData();
    }, [endpoint]);

    const eventSubmit = () => {
        setState(!state)
        setLoaderActive(false)
        setAlert('Se eliminó correctamente')
        setTimeout(() => {
            router.push('/main')
        }, 300);
    }
    
    const eventSubmitFailed = () => {
        setLoaderActive(false)
        setWarning('Hubo un problema eliminando el elemento')
    }

    const onFormatSubmit = (id: number) => {
        setAlert('')
        setWarning('')
        setLoaderActive(true)
        axios.delete(`${process.env.BACK_LINK}/api/${endpoint}/${id}`)
        .then(() => eventSubmit())
        .catch(() => eventSubmitFailed())
    }

    return (
        <div className='Gray flex flex-col min-w-fit min-h-fit items-center p-6 pb-10'>
            <Loader active={loaderActive} />
            <div className='items-center flex flex-col p-6 pb-0 pt-0 text-center'>
                { endpoint !== 'rooms' 
                ? <p>¿Estás seguro de que deseas eliminar a la siguiente persona: <br /> <span className="font-bold">  {name} </span> ? </p>
                : <p>¿Estás seguro de que deseas eliminar la siguiente habitación: <br /> <span className="font-bold">  {name} </span> ? </p>}
                {alert && <p> Ocurrió algo inesperado... </p>}
                {warning && <p> Ocurrió algo inesperado... </p>}
            </div>
            <div className="mt-8 flex gap-6">
                <button className="rounded-full bg-slate-400 px-4 py-2 text-white font-bold" onClick={() => setState(!state)}>CANCELAR</button>
                <button className="rounded-full bg-primary px-4 py-2 text-white font-bold" onClick={() => onFormatSubmit(id)}>CONFIRMAR</button>
            </div>
        </div>
    )
}

export default Index