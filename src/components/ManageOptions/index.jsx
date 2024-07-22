import React from 'react'
import RoomStateForm from '@/components/RoomStateForm'
import HKAssignForm from '@/components/HKAssignForm'
import ShowAssignTable from '@/components/ShowAssignTable'
import HKAssignments from '@/components/HKAssignments'

const index = () => {

    const buttons = [
        { id: 0, name: 'Room State', component: <RoomStateForm /> }, 
        { id: 1, name: 'HouseKeeper Assign', component: <HKAssignForm /> }, 
        { id: 2, name: 'Show Assignments', component: <ShowAssignTable /> }, 
        { id: 3, name: 'HouseKeppers Assignments', component: <HKAssignments /> } 
    ]

    const selectedStyle = 'bg-secondary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'
    const notSelectedStyle = 'bg-primary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'
    const [itemSelected, setItemSelected] = React.useState(0)

  return (
    <div>
        <div className="min-w-[70rem] rounded-md flex justify-between">
            {buttons.map(button => 
                <div 
                    key={button.id} 
                    className={ itemSelected == button?.id 
                        ? selectedStyle 
                        : notSelectedStyle} 
                    onClick={() => setItemSelected(button?.id)}> 
                    {button?.name} 
                </div>
            )}
        </div>
        {buttons[itemSelected]?.component}
    </div>
  )
}

export default index