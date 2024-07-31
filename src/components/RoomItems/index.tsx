import React from 'react';
import axios from 'axios';
import { useItem } from '@/context/ItemContext';
import RoomCard from '@/components/RoomCard';
import TableFooter from '@/components/TableFooter'
import { usePathname } from 'next/navigation'
interface ComponentProps {
    endpoint: string
    title: string
}

const Index: React.FC<ComponentProps> = ({ endpoint, title }) => {

    const [page, setPage] = React.useState<number>(0)
    const [rows, setRows] = React.useState<any[]>([]);
    const [keys, setKeys] = React.useState<any[]>([]);
    const [error, setError] = React.useState<any>(null);
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const pathname  = usePathname()

    React.useEffect(() => {
        setError('')
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/${endpoint}/hotelName/${pathname.split('/').at(-1)}`);
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
        <div className="bg-auxiliar w-[60rem] overflow-auto h-[65vh] p-3 rounded-md flex flex-col justify-between">
            <h1 className="text-center mb-4 text-3xl font-bold text-secondary">{title} {pathname.split('/').at(-1)}</h1>
            <div className="grid grid-cols-6 gap-[1rem]">
                {rows
                .slice(page * 18, page * 18 + 18)
                .map(row => <RoomCard row={row} endpoint={endpoint} keys={keys} key={row} />)}
            </div>
            { error && <p> Hubo un error mostrando la información </p>}
            <TableFooter 
            param={rows} 
            text="Total Propiedades Residenciales:" 
            page={page} 
            setPage={setPage} 
            number={18}
            />
        </div>
    );
};

export default Index;
