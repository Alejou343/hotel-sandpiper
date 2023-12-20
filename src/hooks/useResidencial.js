import React from 'react'
import axios from 'axios';

const useResidencial = () => {

    const [alert, setAlert] = React.useState(null)
    const [formData, setFormData] = React.useState({
        Tiporesidencia: "",
        Tiposervicio: "",
        Estado: "",
        Nombre: "",
        Areaconstruida: "",
        Habitaciones: "",
        Baños: "",
        Parqueaderos: "",
        Ciudad: "",
        Barrio: "",
        Unidadcerrada: "",
        Anoconstruccion: "",
        Enlace: "",
        Precio: "",
        Arealote: "",
        Imagen: ""
    });


    const uploadImage = () => { 
        const clientId = '68d6960971558dd';
        const apiUrl = 'https://api.imgur.com/3/image';
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
        console.log('Datos a enviar:', formDataNumerico)
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