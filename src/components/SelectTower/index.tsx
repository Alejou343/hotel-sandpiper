import React from 'react'
import RoomStateForm from '@/containers/RoomStateForm'
import HKAssignForm from '@/containers/HKAssignForm'
import ShowAssignTable from '@/containers/ShowAssignTable'
import HKAssignments from '@/containers/HKAssignments'
import RoomItems from '@/components/RoomItems'
import Link from 'next/link'

interface buttonsTypes {
    id: number;
    name: string;
    endpoint: string
}


const Index: React.FC = () => {

    const [itemSelected, setItemSelected] = React.useState<number>(0)
    const notSelectedStyle: string = 'bg-primary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'

    const buttons: buttonsTypes[] = [
        { id: 0, name: 'Sandpiper', endpoint: 'Sandpiper' },
        { id: 1, name: 'Heron', endpoint: 'Heron' },
    ]

    return (
        <div>
            <div className="min-w-[70rem] rounded-md grid grid-cols-2 gap-2">
                {buttons.map(button =>                       
                    <Link href={`/room/${button.endpoint}`} key={button.id}>
                        <div
                            className={ notSelectedStyle }
                            onClick={() => setItemSelected(button?.id)}>
                                {button?.name}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Index