import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useItem } from '@/context/ItemContext';
import Link from 'next/link';
import { actions } from '@/utils/actionsArray';
import Image from 'next/image';
import ModalGeneral from '@/containers/ModalGeneral';
import DeleteContent from '@/components/DeleteContent';

const Index = ({ endpoint, title }) => {

    const { item } = useItem();
    const [deleteId, setDeleteId] = useState();
    const [rows, setRows] = useState([]);
    const [keys, setKeys] = useState([]);
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/${endpoint}`);
                setRows(response?.data?.data);
                const allKeys = response?.data?.data?.flatMap(row => Object.keys(row));
                const uniqueKeys = [...new Set(allKeys)];
                setKeys(uniqueKeys);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [endpoint, openModal]); // Dependencia modificada para que el efecto se dispare solo cuando cambie `endpoint`

    const openDeleteModal = (id) => {
        setOpenModal(!openModal)
        setDeleteId(id)
    }

    return (
        <div className="bg-primary min-w-[40rem] max-w-5xl overflow-auto max-h-[80vh] py-1 rounded-md">
            <ModalGeneral state={openModal} setState={setOpenModal}>
                <DeleteContent endpoint={endpoint} id={deleteId} state={openModal} setState={setOpenModal} />
            </ModalGeneral>
            <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">Mis {title}s</h1>
            <table className="table table-hover bg-auxiliar">
                <thead className='bg-secondary text-white'>
                    <tr>
                        {keys.map(key => (
                            <th className='border px-2 font-bold' key={key}>{key
                                .split("_")
                                .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
                                .join(' ')}
                            </th>
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
                                <Link key={row[keys[0]]} href={`${actions[item]?.name}/editar/${row[keys[0]]}`}>
                                    <Image src='/assets/edit.svg' alt={'/edit.svg'} width={15} height={15} className='mx-auto'/>            
                                </Link>
                            </td>
                            <td className='border px-2 text-center text-sm'>
                                {/* <Image src='/assets/delete.svg' alt={'/delete.svg'} width={15} height={15} className='mx-auto'  onClick={() => onFormatSubmit(row[keys[0]])} /> */}
                                <Image src='/assets/delete.svg' alt={'/delete.svg'} width={15} height={15} className='mx-auto'  onClick={() => openDeleteModal(row[keys[0]])} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            { error && <p> Hubo un error mostrando la información </p>}
            <div className="bg-primary text-white rounded-md text-center my-1">
                <b>Total {title}s:</b> {rows.length}
            </div>
        </div>
    );
};

export default Index;
