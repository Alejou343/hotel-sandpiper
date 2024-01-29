"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Cookies from 'js-cookie'
import Loader from '@/components/Loader'

const Index = () => {

    const [inmobiliarias, setInmobiliarias] = React.useState([])
    const [loaderActive, setLoaderActive] = React.useState(false)
    const [mail, setMail] = React.useState('')

    React.useEffect(() => {
        try {
            const sessionInfo = JSON.parse(Cookies.get('SessionInfo'))
            setMail(sessionInfo.answer[0].Correo_Inmobiliaria)
            setLoaderActive(true)
            axios.get(`${process.env.BACK_LINK}/api/getI`, {
                headers: {
                    "Authorization": `Bearer ${sessionInfo?.accesToken}`
                }
            })
            .then((result) => {
                setInmobiliarias(result.data)
                setLoaderActive(false)
            })
            .catch((error) => { 
                console.error(error) 
                setLoaderActive(false)
            })
        } catch (error) {
            console.error(error)
        }
    }, [])

    const handleSendEmail = (from, name, inmobiliary, to, leadsQuantity) => {
        
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        const actualDate = new Date()
        const actualMonth = actualDate.getMonth()

        return console.log(`
        Mail from: ${from}
        Mail to: ${to}
        
        Asunto: Facturación del mes de ${months[actualMonth]} para ${inmobiliary}
        
        Buenos días ${name}, esperamos que te encuentres muy bien
        Envío factura de cobro por ${leadsQuantity} LEADS que fueron enviados en el mes de ${months[actualMonth]}
        Quedo pendiente ante cualquier novedad, ¡Muchas gracias y feliz día!

        Adjunto: Facturación_${months[actualMonth]}_${inmobiliary.replaceAll(' ', '_')}.pdf

        Atentamente: Lina Otalvaro
        Representante de Capital Pocket
        `)
    }

  return (
    <div className="bg-primary max-w-5xl overflow-auto max-h-[80vh] py-1 rounded-md">
        <Loader active={loaderActive} />
        <h1 className="text-center mb-4 text-3xl font-bold text-auxiliar"> Inmobiliarias asociadas </h1>
        <table className="table table-hover bg-auxiliar">
            <thead className='bg-secondary text-white'>
                <tr>        
                    <th className='border px-2 font-bold'> ID Inmobiliaria </th>                    
                    <th className='border px-2 font-bold'> Nombre Inmobiliaria </th>
                    <th className='border px-2 font-bold'> Celular </th>                                              
                    <th className='border px-2 font-bold'> Encargado </th>                                             
                    <th className='border px-2 font-bold'> Acción </th>                                             
                </tr>
            </thead>
            <tbody>
                {inmobiliarias
                .filter(inmobiliaria => inmobiliaria.rol !== 'admin')
                .map(inmobiliaria => 
                <tr key={inmobiliaria.ID_Inmobiliaria} className="hover:bg-slate-300">
                    <td className='border px-2 text-center'>{inmobiliaria.ID_Inmobiliaria}</td>
                    <td className='border px-2 text-center cursor-pointer'>{inmobiliaria.Nombre_Inmobiliaria}</td>
                    <td className='border px-2 text-center'>{inmobiliaria.Celular}</td>
                    <td className='border px-2 text-center'>{inmobiliaria.Personaencargada}</td>
                    <td className='border px-2 text-center cursor-pointer'>
                        <Image 
                        src="/assets/send.png" 
                        alt="send-icon" 
                        width={20} 
                        height={20} 
                        className='mx-auto' 
                        title='Enviar facturación'
                        onClick={() => handleSendEmail(mail, inmobiliaria.Personaencargada, inmobiliaria.Nombre_Inmobiliaria, inmobiliaria.Correofacturacion, inmobiliaria.cantidadLeads)} 
                        /> 
                    </td>
                </tr>)}           
            </tbody>          
        </table>
        <div className="bg-primary text-white rounded-md text-center my-1">
            <b>Total inmobiliarias: </b> {inmobiliarias.length}
        </div>
    </div>  
  )
}

export default Index