import React from "react";

const index = ({ hk }) => {
    return (
        <div className="">
            <h1 className="text-center text-3xl font-bold text-auxiliar bg-primary">
                Asignaciones de Personal {hk.workerCode}
            </h1>
            <table className="table table-hover bg-auxiliar w-full">
                <thead className="bg-secondary text-white">
                <tr>
                    <th className="border px-2 font-bold"># Habitación</th>
                    <th className="border px-2 font-bold">Nombre Hotel</th>
                    <th className="border px-2 font-bold">Estado</th>
                    <th className="border px-2 font-bold">Fecha de creación</th>
                    <th className="border px-2 font-bold">Fecha de actualización</th>
                </tr>
                </thead>
                <tbody>
                <tr className="hover:bg-slate-300 cursor-pointer">
                    <td className="border px-2 text-center text-sm">101</td>
                    <td className="border px-2 text-center text-sm">Hotel Sandpiper</td>
                    <td className="border px-2 text-center text-sm">Activo</td>
                    <td className="border px-2 text-center text-sm">11/07/2024 20:30</td>
                    <td className="border px-2 text-center text-sm">11/07/2024 20:45</td>
                </tr>
                </tbody>
            </table>
            {/* { error && <p> Hubo un error mostrando la información </p>} */}
            <div className="bg-primary text-white rounded-md text-center">
                <b>Total registros:</b> 5
            </div>
        </div>
    );
};

export default index;
