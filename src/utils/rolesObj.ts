interface TypeRoles {
    [key: string]: RoleOptions
}

interface RoleOptions { 
    endpoint: string 
    options: string[] 
    colors?: string[]
}

export const roles: TypeRoles = {
    cleanning_staff: { 
        endpoint: 'cleaningStaffs',
        options: ['hk supervisor', 'housekeeper', 'hm supervisor', 'houseman']
    },
    maintenance_inventory: { 
        endpoint: 'maintenanceInventories',
        options: ['building manager', 'quality control', 'lost y found', 'inventory', 'mt supervisor', 'maintenace tech', 'painter']
    },
    operational_role: { 
        endpoint: 'operationalRoles',
        options: ['resort manager', 'general manager', 'remo supervisor', 'room control', 'front desk', 'assistan manager', 'remodeling official']
    },
    room: { 
        endpoint: 'rooms',
        options: ['v/c', 'o', 'v/d', 'ooo', 'clean/in', 'clean/out', 'p/s', 'RM', 'S/O', 'E/CH', 'MT/IN', 'MT/OUT', 'M/P', 'REMO PROJECT'],
    }
}