import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useItem } from '@/context/ItemContext';
import { actions } from '@/utils/actionsArray';
import ModalGeneral from '@/containers/ModalGeneral';
import DeleteContent from '@/components/DeleteContent';
import { roles } from '@/utils/rolesObj';


interface ComponentProps {
    endpoint: string
    row: any
    keys: any[]
}



const Index: React.FC<ComponentProps> = ({ row, endpoint, keys }) => {

    const { options } = roles?.room;
    const { item } = useItem();
    const [deleteId, setDeleteId] = React.useState<number>(0);
    const [openModal, setOpenModal] = React.useState<boolean>(false);

    const openDeleteModal = (id: number) => {
        setOpenModal(!openModal)
        setDeleteId(id)
    }

    return (
        <div className={`${row?.name_category_room !== 'v/c' ? 'bg-red-200' : 'bg-green-200'} w-full aspect-square mx-auto rounded-md p-1`}>
            <ModalGeneral state={openModal} setState={setOpenModal}>
                <DeleteContent endpoint={endpoint} id={deleteId} state={openModal} setState={setOpenModal} />
            </ModalGeneral>
            <div className="bg-white inline-block rounded-md mb-1 px-2">
                <p className='text-center text-sm text-black'>{row.name_category_room}</p>
            </div>
            <div className="flex justify-center text- items-center h-1/2">
                <p className='font-extrabold text-2xl text-black'>{row.number}</p>
            </div>
            <div key={row.id_room} className="flex justify-between w-2/3 mx-auto">
                <Link key={row[keys[0]]} href={`${actions[item]?.name}/editar/${row[keys[0]]}`}>
                    <div className='border px-2 text-center text-sm hover:bg-slate-300 cursor-pointer aspect-square bg-auxiliar flex items-center justify-center rounded-md'>
                        <Image src='/assets/edit.svg' alt={'/edit.svg'} width={15} height={15} className='mx-auto'/>            
                    </div>
                </Link>
                <div className='border px-2 text-center text-sm hover:bg-slate-300 cursor-pointer aspect-square bg-auxiliar flex items-center justify-center rounded-md' onClick={() => openDeleteModal(row.id_room)}>
                    <Image src='/assets/delete.svg' alt={'/delete.svg'} width={15} height={15} className='mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default Index