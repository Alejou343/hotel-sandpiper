import React from 'react'
import FormSection from '@/components/FormSection'
import FormSelect from '@/components/FormSelect'
import Button from '@/components/Button'
import FileSection from '@/components/FileSection'
import Imgur from '@/components/Imgur'
import axios from 'axios'

const index = () => {

    const [formData, setFormData] = React.useState({
        Tiporesidencia: "",
        Tiposervicio: "",
        Estado: "",
        Nombre: "",
        Ciudad: "",
        Barrio: "",
        Areaconstruida: "",
        Anoconstruccion: "",
        Enlace: "",
        Precio: "",
        Arealote: "",
        Imagen: ""
    });
    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };

    const [alert, setAlert] = React.useState(null)

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
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formDataNumerico = {
            ...formData,
            Areaconstruida: parseInt(formData.Areaconstruida),
            Anoconstruccion: parseInt(formData.Anoconstruccion),
            Precio: parseInt(formData.Precio),
            Arealote: parseInt(formData.Arealote),
        }

        console.log('Datos a enviar:', formDataNumerico)
    };
    
    return (
        <form onSubmit={handleSubmit} className='my-4'>
            <FormSelect 
                id="Tiporesidencia"
                label="Selecciona el tipo de inmueble"
                value={formData.Tiporesidencia}
                list={["Lote", "Consultorio", "Bodega", "Oficina", "Local"]} 
                onChange={handleInputChange}
            />
            <FormSelect 
                id="Tiposervicio"
                label="Selecciona el tipo de servicio"
                value={formData.Tiposervicio}
                list={["Comprar", "Arrendar"]} 
                onChange={handleInputChange}
            />
            <FormSelect 
                id="Estado"
                label="Estado de la propiedad"
                value={formData.Estado}
                list={["Disponible", "No disponible"]} 
                onChange={handleInputChange}
            />
            <FormSection 
                type="text"
                id="Nombre"
                placeholder="Ej: Bodega gigante en la Estrella"
                label="Escribe el nombre de la propiedad"
                onChange={handleInputChange}
                value={formData.Nombre}
            />
            <FormSelect 
                id="Ciudad"
                label="Selecciona el municipio"
                value={formData.Ciudad}
                list={["Medellín", "La Estrella", "Sabaneta", "Envigado", "Itagüí", "Bello", "Caldas", "Otros"]} 
                onChange={handleInputChange}
            />
            {formData.Ciudad == "Medellín" && <FormSelect 
                id="Barrio"
                label="Selecciona el barrio"
                value={formData.Barrio}
                list={["Belén", "Laureles", "Poblado", "Centro"]} 
                onChange={handleInputChange}
            />}
            <FormSection 
                type="text"
                id="Areaconstruida"
                placeholder="Ej: 40"
                label="Escribe el área construída en m²"
                onChange={handleInputChange}
                value={formData.Areaconstruida}
            />
            <FormSection 
                type="text"
                id="Anoconstruccion"
                placeholder="Ej: 2018"
                label="Escribe el año de construcción"
                onChange={handleInputChange}
                value={formData.Anoconstruccion}
            />
            <FormSection 
                type="text"
                id="Enlace"
                placeholder="Ej: https://wasi.co/inmueble#"
                label="Enlace de la propiedad"
                onChange={handleInputChange}
                value={formData.Enlace}
            />
            <FormSection 
                type="text"
                id="Precio"
                placeholder="Ej: 400000000"
                label="Escribe el precio del inmueble (COP)"
                onChange={handleInputChange}
                value={formData.Precio}
            />
            <FormSection 
                type="text"
                id="Arealote"
                placeholder="Ej: 85"
                label="Escribe el año de construcción"
                onChange={handleInputChange}
                value={formData.Arealote}
            />
            <div className="flex">
                <label className="text-sm"> Sube una imagen del inmueble </label>
                <input type="file" id="Imagen" accept="image/*" onChange={uploadImage} />
            </div>
            {alert && <p className="text-red-500 text-center text-xs my-4">{alert}</p>}
            <Button type="submit" className="hover:bg-slate-300 bg-blue-400 my-3 flex justify-center"> Publicar </Button>
        </form>
    )
}

export default index