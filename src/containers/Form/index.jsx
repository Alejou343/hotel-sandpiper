import React from 'react'
import FormSection from '@/components/FormSection'
import PasswordSection from '@/components/PasswordSection'
import FormSelect from '@/components/FormSelect'
import Button from '@/components/Button'

const index = () => {

    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: "",
        is_producer: "",
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
        // console.log('Datos a enviar:', formData)
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <FormSection 
                type="text"
                id="username"
                placeholder="Nombre de usuario"
                label="Username"
                className="w-100"
                onChange={handleInputChange}
                value={formData.username}
            />
            <FormSection 
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                label="Email" 
                onChange={handleInputChange}
                value={formData.email}
            />
            <PasswordSection 
                id="password" 
                placeholder="********" 
                label="Password" 
                onChange={handleInputChange}
                value={formData.password}
            />
            <FormSelect 
                id="is_producer"
                label="Selecciona tu rol"
                value={formData.is_producer}
                list={["a","b","c"]} 
                onChange={handleInputChange}
            />
            <Button type="submit" className="hover:bg-slate-300"> Publicar </Button>
        </form>
    )
}

export default index