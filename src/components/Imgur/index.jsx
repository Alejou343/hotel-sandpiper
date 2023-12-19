"use client"
import React from 'react'
import axios from 'axios';

const index = () => {

    const [alert, setAlert] = React.useState(null)

        const uploadImage = () => { 
            const clientId = '68d6960971558dd';
            const apiUrl = 'https://api.imgur.com/3/image';
            const imageInput = document.getElementById('imageInput');
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
                    // const imageUrl = response.data.data.link;
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

  return (
    <>
        <div className="flex">
            <label className="text-sm"> Sube una imagen del inmueble </label>
            <input type="file" id="imageInput" accept="image/*" onChange={uploadImage} />
        </div>
        {alert && <p className="text-red-500 text-center text-xs my-4">{alert}</p>}
    </>
  )
}

export default index


// import React from 'react';
// import axios from 'axios';

// const index = () => {
//   // a local state to store the currently selected file.
//   const [selectedFile, setSelectedFile] = React.useState(null);

//   const handleSubmit2 = async(event) => {
//     event.preventDefault()
//     const formData = new FormData();
//     formData.append("selectedFile", selectedFile);
//     console.log(formData)
//     try {
//       const response = await axios({
//         method: "POST",
//         url: "https://api.imgur.com/3/image",
//         data: formData,
//         headers: { 
//             "Authorization": "Client-ID 68d6960971558dd",
//             "Content-Type": "multipart/form-data"
//          },
//       });
//       console.log(response)
//     } catch(error) {
//       console.log(error)
//     }
//   }

//   const handleFileSelect = (event) => {
//     setSelectedFile(event.target.files[0])
//   }

//   return (
//     <form onSubmit={handleSubmit2}>
//       <input type="file" onChange={handleFileSelect} />
//       <input type="submit" value="Upload File" />
//     </form>
//   )
// };

// export default index;