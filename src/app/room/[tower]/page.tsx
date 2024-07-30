"use client"
import React from 'react'
import Layout from '@/containers/Layout'
import RoomItems from '@/components/RoomItems'
import MainMenu from '@/components/MainMenu'
import { useItem } from '@/context/ItemContext'

const Page: React.FC = () => {

    const { item } = useItem()

    interface ViewsProps {
        key: string
        component: React.JSX.Element | null
        endpoint: any
    }

    const views: ViewsProps[] = [
        { key: 'Personal operacional', component: <MainMenu />, endpoint: 'operationalRoles'},
        { key: 'Personal de mantenimiento', component: <MainMenu />, endpoint: 'maintenanceInventories'},
        { key: 'Personal de limpieza', component: <MainMenu />, endpoint: 'cleaningStaffs'},
        { key: 'Habitaciones', component: <MainMenu />, endpoint: 'rooms'},
        { key: 'Administración', component: null, endpoint: null}
    ]

    return (
        <Layout>
            <RoomItems endpoint={views[item]?.endpoint} title={views[item]?.key} />
        </Layout>
    )
}

export default Page