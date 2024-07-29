import React from 'react'
import RoomStateForm from '@/containers/RoomStateForm'
import HKAssignForm from '@/containers/HKAssignForm'
import ShowAssignTable from '@/containers/ShowAssignTable'
import HKAssignments from '@/containers/HKAssignments'

interface buttonsTypes {
    id: number;
    name: string;
    component: React.JSX.Element;
}

const Index: React.FC = () => {

    const [itemSelected, setItemSelected] = React.useState<number>(0)
    const selectedStyle: string = 'bg-secondary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'
    const notSelectedStyle: string = 'bg-primary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'
    
    const buttons: buttonsTypes[] = [
        { id: 0, name: 'Estado Habitaciones', component: <RoomStateForm /> }, 
        { id: 1, name: 'Asignación HouseKeeper', component: <HKAssignForm /> }, 
        { id: 2, name: 'Mostrar asignaciones', component: <ShowAssignTable /> }, 
        { id: 3, name: 'Asignaciones de HouseKeepers', component: <HKAssignments /> } 
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

export default Index