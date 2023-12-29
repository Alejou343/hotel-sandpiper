"use client"
import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

const useResidencial = () => {

    const [alert, setAlert] = React.useState(null)
    const [formData, setFormData] = React.useState({
        Idinmobiliaria: 0,
        Tiporesidencia: "",
        Tiposervicio: "",
        Estado: "",
        Nombre: "",
        Areaconstruida: 0,
        Habitaciones: 0,
        Baños: 0,
        Parqueaderos: 0,
        Ciudad: "",
        Barrio: "",
        Unidadcerrada: "",
        Anoconstruccion: 0,
        Enlace: "",
        Precio: 0,
        Arealote: 0,
        Imagen: ""
    });

    React.useEffect(() => {
        const actualId = Cookies.get('User')
        setFormData({...formData, ["Idinmobiliaria"]: Number(JSON.parse(actualId).Idinmobiliaria)})
    }, [])


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
    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const formDataNumerico = {
            ...formData,
            Areaconstruida: parseInt(formData.Areaconstruida),
            Habitaciones: parseInt(formData.Habitaciones),
            Baños: parseInt(formData.Baños),
            Parqueaderos: parseInt(formData.Parqueaderos),
            Anoconstruccion: parseInt(formData.Anoconstruccion),
            Precio: parseInt(formData.Precio),
            Arealote: parseInt(formData.Arealote),
        };

        const token = Cookies.get('SessionInfo')

        axios.post(`${process.env.BACK_LINK}/api/addResidencia`, formDataNumerico, {
            headers: {
                "Authorization": `Bearer ${JSON.parse(token).accesToken}`
            }
        })
        .then((result) => console.log(result.data))
        .catch((error) => console.error(error))
    };

    return {
        alert,
        setAlert,
        formData, 
        setFormData,
        uploadImage,
        handleInputChange,
        handleSubmit
    }
}

export default useResidencial