import React from 'react'
import Link from 'next/link'
import axios from 'axios';

interface buttonsTypes {
    id: number;
    name: string;
    endpoint: string
}

interface buttons {
    hotelName: string 
}

const Index: React.FC = () => {

    const [buttons, setButtons] = React.useState<string[]>(['', ''])
    const notSelectedStyle: string = 'bg-primary rounded-md px-4 min-w-[15rem] text-center p-4 text-white font-semibold cursor-pointer'

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.BACK_LINK}/api/towers/`);
                const allKeys = response?.data?.data?.map((tower: buttons ) => tower.hotelName);
                setButtons(Array.from(new Set(allKeys)));
            } catch (err: any) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="min-w-[70rem] rounded-md grid grid-cols-2 gap-2">
                {buttons.map((button, id) =>                       
                    <Link href={`/room/${button}`} key={id}>
                        <div className={ notSelectedStyle }>
                            {button}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Index