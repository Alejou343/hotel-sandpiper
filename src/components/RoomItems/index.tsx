import React from 'react';
import axios from 'axios';
import { useItem } from '@/context/ItemContext';
import Link from 'next/link';
import { actions } from '@/utils/actionsArray';
import Image from 'next/image';
import ModalGeneral from '@/containers/ModalGeneral';
import DeleteContent from '@/components/DeleteContent';
import RoomCard from '@/components/RoomCard';

interface ComponentProps {
    endpoint: string
    title: string
}

const Index: React.FC<ComponentProps> = ({ endpoint, title }) => {

    const { item } = useItem();
    const [deleteId, setDeleteId] = React.useState<number>(0);
    const [rows, setRows] = React.useState<any[]>([]);
    const [keys, setKeys] = React.useState<any[]>([]);
    const [error, setError] = React.useState<any>(null);
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/${endpoint}`);
                setRows(response?.data?.data);
                const allKeys = response?.data?.data?.flatMap((row: any) => Object.keys(row));
                const uniqueKeys = Array.from(new Set(allKeys));
                setKeys(uniqueKeys);
            } catch (err: any) {
                setError(err);
            }
        };

        fetchData();
    }, [endpoint, openModal]); // Dependencia modificada para que el efecto se dispare solo cuando cambie `endpoint`

    return (
        <div className="bg-primary min-w-[40rem] max-w-5xl overflow-auto max-h-[60vh] py-1 rounded-md">
            <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">{title}</h1>
            <div className="grid grid-cols-3 gap-[2rem]">
                {rows.slice(0,9).map(row => <RoomCard row={row} endpoint={endpoint} keys={keys} />)}
            </div>
            { error && <p> Hubo un error mostrando la información </p>}
            <div className="bg-primary text-white rounded-md text-center my-1">
                <b>Total {title}:</b> {rows.length}
            </div>
        </div>
    );
};

export default Index;
