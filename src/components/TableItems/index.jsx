import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useItem } from '@/context/ItemContext';
import Link from 'next/link';
import { actions } from '@/utils/actionsArray';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Index = ({ endpoint, title }) => {

    const router = useRouter()
    const { item } = useItem();
    const [rows, setRows] = useState([]);
    const [alert, setAlert] = useState('');
    const [warning, setWarning] = useState('');
    const [loaderActive, setLoaderActive  ] = useState(false);
    const [keys, setKeys] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/${endpoint}`);
                setRows(response.data.data);
                // Calculate keys after data is fetched
                const allKeys = response.data.data.flatMap(row => Object.keys(row));
                const uniqueKeys = [...new Set(allKeys)];
                setKeys(uniqueKeys);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [endpoint]); // Dependencia modificada para que el efecto se dispare solo cuando cambie `endpoint`

    const eventSubmit = (response) => {
        setLoaderActive(false)
        setAlert(response?.data?.message)
        setTimeout(() => {
            router.push('/main')
        }, 300);
    }
    
    const eventSubmitFailed = (error) => {
        setLoaderActive(false)
        setWarning(error?.response?.data?.message)
    }

    const onFormatSubmit = (id) => {
        setAlert('')
        setWarning('')
        setLoaderActive(true)
        axios.delete(`${process.env.BACK_LINK}/api/${endpoint}/${id}`)
        .then((response) => eventSubmit(response))
        .catch((error) => eventSubmitFailed(error))
    }

    return (
        <div className="bg-primary max-w-5xl overflow-auto max-h-[80vh] py-1 rounded-md">
            <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">Mis {title}s</h1>
            <table className="table table-hover bg-auxiliar">
                <thead className='bg-secondary text-white'>
                    <tr>
                        {keys.map(key => (
                            <th className='border px-2 font-bold' key={key}>{key}</th>
                        ))}
                        <th className='border px-2 font-bold'>Editar</th>
                        <th className='border px-2 font-bold'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, id) => (
                        <tr key={id} className="hover:bg-slate-300 cursor-pointer">
                            {keys.map(key => (
                                <td className='border px-2 text-center text-sm' key={`${key}-${id}`}>
                                    {row[key] || ''}
                                </td>
                            ))}
                            <td className='border px-2 text-center text-sm'>
                                <Link key={id} href={`${actions[item]?.name}/editar/${id}`}>
                                    <Image src='/assets/edit.svg' alt={'/edit.svg'} width={15} height={15} className='mx-auto'/>            
                                </Link>
                            </td>
                            <td className='border px-2 text-center text-sm'>
                                <Image src='/assets/delete.svg' alt={'/delete.svg'} width={15} height={15} className='mx-auto'  onClick={() => onFormatSubmit(row[`${keys[0]}`])} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="bg-primary text-white rounded-md text-center my-1">
                <b>Total {title}s:</b> {rows.length}
            </div>
        </div>
    );
};

export default Index;
