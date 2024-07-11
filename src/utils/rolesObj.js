export const roles = {
    cleanning_staff: { 
        endpoint: 'cleaningStaff',
        options: ['Hk Supervisor', 'HouseKeeper', 'HM Supervisor', 'HouseMan']
    },
    maintenance_inventory: { 
        endpoint: 'maintenanceInventory',
        options: ['building manager', 'quality control', 'lost y found', 'inventory', 'mt supervisor', 'maintenace tech', 'painter']
    },
    operational_role: { 
        endpoint: 'operationalRole',
        options: ['resort manager', 'general manager', 'remo supervisor', 'room control', 'front desk', 'assistan manager', 'remodeling official']
    },
    room: { 
        endpoint: 'room',
        options: ['v/c', 'o', 'v/d', 'ooo', 'clean/in', 'clean/out', 'p/s', 'RM', 'S/O', 'E/CH', 'MT/IN', 'MT/OUT', 'M/P', 'REMO PROJECT']
    }
}