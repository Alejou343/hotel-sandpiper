import React from 'react'
import RoomStateForm from '@/containers/RoomStateForm'
import HKAssignForm from '@/containers/HKAssignForm'
import ShowAssignTable from '@/containers/ShowAssignTable'
import HKAssignments from '@/containers/HKAssignments'

const index = () => {

    const [itemSelected, setItemSelected] = React.useState(0)
    const selectedStyle = 'bg-secondary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'
    const notSelectedStyle = 'bg-primary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'
    
    const buttons = [
        { id: 0, name: 'Room State', component: <RoomStateForm /> }, 
        { id: 1, name: 'HouseKeeper Assign', component: <HKAssignForm /> }, 
        { id: 2, name: 'Show Assignments', component: <ShowAssignTable /> }, 
        { id: 3, name: 'HouseKeppers Assignments', component: <HKAssignments /> } 
    ]

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
            <div className="mt-[5rem] w-3/5 mx-auto">
                {buttons[itemSelected]?.component}
            </div>
        </div>
    )
}

export default index