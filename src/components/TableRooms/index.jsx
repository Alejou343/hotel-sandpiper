import React from 'react'
import axios from 'axios';

const Index = ({ endpoint }) => {

    const [rows, setRows] = React.useState([])
    const [keys, setKeys] = React.useState([]);

    React.useEffect(() => {
        try {
            axios.get(`${process.env.BACK_LINK}/api/${endpoint}`)
            .then((response) => setRows(response.data.data))
            setKeys([...new Set(rows.flatMap(row => Object.keys(row)))])
        } catch (err){
            setError(err)
        }
    }, [rows])

    // console.log(rows)

    return (
        <div className="bg-primary max-w-5xl overflow-auto max-h-[80vh] py-1 rounded-md">
            <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar">Mis Rooms</h1>
            <table className="table table-hover bg-auxiliar">
                <thead className='bg-secondary text-white'>
                    <tr>
                        {keys?.map(key => 
                        <th className='border px-2 font-bold w-full' key={key}> {key} </th>)}
                        <th className='border px-2 font-bold w-full'> Editar </th>
                        <th className='border px-2 font-bold w-full'> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    {rows?.map(row =>
                        <tr key={row.id_room} className="hover:bg-slate-300 cursor-pointer">
                            {keys.map(key => <td className='border px-2 text-center' key={key}> {row[key] || ''} </td>)}
                            <td className='border px-2 text-center'> Editar </td>
                            <td className='border px-2 text-center'> Eliminar </td>
                        </tr>)}
                </tbody>
            </table>
            <div className="bg-primary text-white rounded-md text-center my-1">
                <b>Total Rooms: </b> {rows.length}
            </div>
        </div>
    )
}

export default Index
