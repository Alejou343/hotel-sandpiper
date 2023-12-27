"use client"
import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const useEditComercial = () => {

    const [alert, setAlert] = React.useState(null)
    const [comercialId, setComercialId] = React.useState(null)
    const [formData, setFormData] = React.useState({
        Idinmobiliaria: 0,
        Tipocomercial: "",
        Tiposervicio: "",
        Estado: "",
        Nombre: "",
        Ciudad: "",
        Barrio: "",
        Areaconstruida: 0,
        Anoconstruccion: 0,
        Enlace: "",
        Precio: 0,
        Arealote: 0,
        Imagen: ""
    });

    React.useEffect(() => {
        const actualId = Cookies.get('User')
        const comercialId = Cookies.get('ComercialID')
        setComercialId(comercialId)
        setFormData({...formData, ["Idinmobiliaria"]: Number(JSON.parse(actualId).Idinmobiliaria)})

        axios.get(`${process.env.BACK_LINK}/api/comercialById/${comercialId}`)
        .then((result) => {
            setFormData({
                Idinmobiliaria: result?.data[0]?.ID_Inmobiliaria,
                Tipocomercial: result?.data[0]?.TipoC,
                Tiposervicio: result?.data[0]?.Tipo_ServicioC,
                Ciudad: result?.data[0]?.CiudadC,
                Estado: result?.data[0]?.EstadoC,
                Nombre: result?.data[0]?.NombreC,
                Barrio: result?.data[0]?.BarrioC,
                Areaconstruida: result?.data[0]?.AreaC,
                Anoconstruccion: result?.data[0]?.Ano_ConstruccionC,
                Enlace: result?.data[0]?.EnlaceC,
                Precio: result?.data[0]?.PrecioC,
                Arealote: result?.data[0]?.Area_LoteC,
                Imagen: result?.data[0]?.ImagenC
            })
            console.log(result.data[0])
        })
            .catch((error) => { 
            console.error(error) 
        })
    }, [])
    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const uploadImage = () => { 
        const clientId = process.env.IMGUR_ID;
        const apiUrl = process.env.IMGUR_LINK;
        const imageInput = document.getElementById('Imagen');
        const imageFile = imageInput.files[0];

        if (imageFile) {
            const imageFormData = new FormData();
            imageFormData.append('image', imageFile);
            axios.post(apiUrl, imageFormData, {
                headers: {
                    Authorization: `Client-ID ${clientId}`,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(response => {
                const imageUrl = response.data.data.link;
                setFormData({...formData, ["Imagen"]: imageUrl})
                setAlert(`Imagen subida exitosamente.`);
            })
            .catch(error => {
                console.error('Error --> ', error)
                setAlert(`Error al subir la imagen`);
            });
        } else {
            setAlert('Selecciona una imagen antes de subirla.');
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formDataNumerico = {
            ...formData,
            Areaconstruida: parseInt(formData.Areaconstruida),
            Anoconstruccion: parseInt(formData.Anoconstruccion),
            Precio: parseInt(formData.Precio),
            Arealote: parseInt(formData.Arealote),
        }

        axios.put(`${process.env.BACK_LINK}/api/updateComercial/${comercialId}`, formDataNumerico)
        .then((result) => console.log(result.data))
        .catch((error) => console.error(error))

        console.log('Datos a enviar:', formDataNumerico)
    };

    return {
        alert,
        formData,
        setAlert,
        setFormData,
        handleInputChange,
        uploadImage,
        handleSubmit
    }
}

export default useEditComercial