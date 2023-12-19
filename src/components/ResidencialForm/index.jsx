import React from 'react'
import FormSection from '@/components/FormSection'
import FormSelect from '@/components/FormSelect'
import FileSection from '@/components/FileSection'
import Button from '@/components/Button'
import Imgur from '@/components/Imgur'

const index = () => {

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
    
    return (
        <form onSubmit={handleSubmit} className="my-4">
            <FormSelect 
                id="Tiporesidencia"
                label="Selecciona el tipo de inmueble"
                value={formData.Tiporesidencia}
                list={["Casa","Apartamento", "Finca"]} 
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
                placeholder="Ej: Bonita casa en Laureles"
                label="Escribe el nombre de la propiedad"
                onChange={handleInputChange}
                value={formData.Nombre}
            />
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
                id="Habitaciones"
                placeholder="Ej: 4"
                label="Escribe el número de habitaciones"
                onChange={handleInputChange}
                value={formData.Habitaciones}
            />
            <FormSection 
                type="text"
                id="Baños"
                placeholder="Ej: 2"
                label="Escribe el número de baños"
                onChange={handleInputChange}
                value={formData.Baños}
            />
            <FormSection 
                type="text"
                id="Parqueaderos"
                placeholder="Ej: 1"
                label="Escribe el número de parqueaderos"
                onChange={handleInputChange}
                value={formData.Parqueaderos}
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
            <FormSelect 
                id="Unidadcerrada"
                label="El inmueble está en undad cerrada"
                value={formData.Unidadcerrada}
                list={["Si", "No"]} 
                onChange={handleInputChange}
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
                label="Escribe el area del lote"
                onChange={handleInputChange}
                value={formData.Arealote}
            />
            <Imgur />
            <Button type="submit" className="hover:bg-slate-300 my-3 bg-blue-400 flex justify-center"> Publicar </Button>
        </form>
    )
}

export default index