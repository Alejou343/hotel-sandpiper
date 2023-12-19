// "use client"
// import React from 'react'
// import axios from 'axios';

// const index = () => {

//         const handleFileSelect = () => { 
//             const clientId = '68d6960971558dd';
//             const apiUrl = 'https://api.imgur.com/3/image';
//             const imageInput = document.getElementById('imageInput');
//             const imageFile = imageInput.files[0];
//             if (imageFile) {
//                 const imageFormData = new FormData();
//                 imageFormData.append('image', imageFile);
//                 axios.post(apiUrl, imageFormData, {
//                     headers: {
//                         Authorization: `Client-ID ${clientId}`,
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 })
//                 .then(response => {
//                     const imageUrl = response.data.data.link;
//                     displayResult(`Imagen subida exitosamente. URL: ${imageUrl}`);
//                 })
//                 .catch(error => {
//                     console.error('Error --> ', error)
//                     displayResult(`Error al subir la imagen: ${error}`);
//                 });
//             } else {
//                 displayResult('Selecciona una imagen antes de subirla.');
//             }
//         }

//         const displayResult = (message) => {
//             const resultDiv = document.getElementById('result');
//             resultDiv.innerHTML = message;
//         }

//   return (
//     <>
//         {/* <h1>Subir Imagen a Imgur</h1>
//         <form id="imageUploadForm" enctype="multipart/form-data">
//             <input type="file" id="imageInput" accept="image/*" />
//             <button type="button" onClick={uploadImage}>Subir Imagen</button>
//         </form>
//         <div id="result"></div> */}
//         <form onSubmit={handleSubmit}>
//             <input type="file" onChange={handleFileSelect} />
//             <input type="submit" value="Upload file" />
//         </form>
//     </>
//   )
// }

// export default index


import React from 'react';
import axios from 'axios';

const index = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit2 = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
    console.log(formData)
    try {
      const response = await axios({
        method: "POST",
        url: "https://api.imgur.com/3/image",
        data: formData,
        headers: { 
            "Authorization": "Client-ID 68d6960971558dd",
            "Content-Type": "multipart/form-data"
         },
      });
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit2}>
      <input type="file" onChange={handleFileSelect} />
      <input type="submit" value="Upload File" />
    </form>
  )
};

export default index;