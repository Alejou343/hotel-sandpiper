import React from "react";
import axios from "axios";
import FormSection from '@/components/FormSection'
import ModalGeneral from '@/containers/ModalGeneral'
import Button from "@/components/Button";
import AssignmentsTable from '@/components/AssignmentsTable'

const index = () => {

  const [alert, setAlert] = React.useState<string>('')
  const [items, setItems] = React.useState<any[]>([])
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  const [warning, setWarning] = React.useState<string>('')
  const [formData, setFormData] = React.useState<{ workerCode: string }>({ workerCode: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
    ...formData,
    [id]: value,
    });
};

  const handleSubmitForm = (e: any) => {
    e.preventDefault()
    setOpenModal(true)
    setAlert('')
    setWarning('')
    // setLoaderActive(true)
    // axios.put(`${process.env.BACK_LINK}/api/${endpoint}/${actualItem}`, formData)
    // .then((response) => eventSubmit(response))
    // .catch((error) => eventSubmitFailed(error))
  }

  const handleSuccess = (res: any) => {
    setItems(res?.data?.data?.assignments)

    if (!items.length) {
      setAlert(`El HouseKeeper ${formData.workerCode} no tiene asignaciones actualmente`)
    }
  }

  React.useEffect(() => {
    try {
      axios.get(`${process.env.BACK_LINK}/api/pocki/getWorkerAssignments?workerCode=${formData.workerCode}`)
      .then((res: any) => handleSuccess(res))
      .catch((err: any) => setAlert(`No se encontraron las asignaciones del HouseKeeper ${formData.workerCode}`))
    } catch (err) {
      setAlert(`Error al consultar las asignaciones del HouseKeeper ${formData.workerCode}`)
    }
  }, [openModal])

  return (
    <div className="bg-auxiliar overflow-auto w-2/3 mx-auto max-h-[80vh] py-1 rounded-md px-4">
            <ModalGeneral state={openModal} setState={setOpenModal}>
              {items.length > 0 
              ? <AssignmentsTable hk={formData} list={items} />
              : <p className='text-xs my-2 text-primary text-center'> {alert} </p>
            }
            </ModalGeneral>
            <div>
              <h1 className="text-center text-3xl font-bold text-primary my-4">Buscar por HouseKeeper</h1>
              <form className="flex flex-col" onSubmit={(e) => handleSubmitForm(e)}>
                <FormSection type="text" id="workerCode" label="Código de HK" placeholder="HK-001" onChange={handleInputChange} value={formData.workerCode} />
                <Button type="submit" className="bg-secondary my-4" onClick={() => {}}> Filtrar </Button>
              </form>
            </div>
        </div>
  );
};

export default index;
