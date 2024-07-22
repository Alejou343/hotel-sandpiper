import React from "react";
import FormSection from '@/components/FormSection'
import ModalGeneral from '@/containers/ModalGeneral'
import Button from "@/components/Button";
import AssignmentsTable from '@/components/AssignmentsTable'

const index = () => {

  const [alert, setAlert] = React.useState(null)
  const [openModal, setOpenModal] = React.useState(false)
  const [warning, setWarning] = React.useState(null)
  const [formData, setFormData] = React.useState({ workerCode: '' })

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
    ...formData,
    [id]: value,
    });
};

  const handleSubmitForm = (e) => {
    e.preventDefault()
    console.log(formData)
    setOpenModal(true)
    setAlert('')
    setWarning('')
    // setLoaderActive(true)
    // axios.put(`${process.env.BACK_LINK}/api/${endpoint}/${actualItem}`, formData)
    // .then((response) => eventSubmit(response))
    // .catch((error) => eventSubmitFailed(error))
  }

  React.useEffect(() => {
    try {
      // const response = axios.get(`${process.env.BACK_LINK}/pocki`)
      // .then((res) => setAlgo(res.data.data))
      // .catch((err) => console.error(err))
    } catch (err) {
      setAlert(`Error al consultar las asignaciones del HouseKeeper ${formData.workerCode}`)
    }
  }, [handleSubmitForm])

  return (
    <div className="bg-auxiliar overflow-auto w-2/3 mx-auto max-h-[80vh] py-1 rounded-md px-4">
            <ModalGeneral state={openModal} setState={setOpenModal}>
              <AssignmentsTable hk={formData} />
            </ModalGeneral>
            <div>
              <h1 className="text-center text-3xl font-bold text-primary my-4">Buscar por HouseKeeper</h1>
              <form className="flex flex-col" onSubmit={(e) => handleSubmitForm(e)}>
                <FormSection type="text" id="workerCode" label="Código de HK" placeholder="HK-001" onChange={handleInputChange} value={formData.workerCode} />
                <Button type="submit" className="bg-secondary my-4"> Filtrar </Button>
              </form>
            </div>
        </div>
  );
};

export default index;
