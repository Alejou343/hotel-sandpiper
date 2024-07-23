import React from "react";
import axios from "axios";
import AssignmentsTable from '@/components/AssignmentsTable'

const index = () => {

  const [items, setItems] = React.useState([])
  const [alert, setAlert] = React.useState('No se encontraron asignaciones')

  React.useEffect(() => {
    try {
      axios.get(`${process.env.BACK_LINK}/pocki/showAssignments`)
      .then((res) => setItems(res.data.data))
      .catch((err) => console.error(err))
    } catch (err) {
      setAlert(`Error al consultar las asignaciones`)
    }
  }, [])

  return (
    <>
      {items.length > 0 
        ? <AssignmentsTable hk={formData} list={items} />
        : <p className='text-xs my-2 text-primary text-center'> {alert} </p>
      }
    </>
  );
};

export default index;