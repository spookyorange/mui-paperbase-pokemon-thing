import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {useState} from "react";

export default function PokeTable({pokeData}) {

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'name', headerName: 'Name', width: 130},
    ];

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid rows={pokeData} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection/>
        </div>
    );

}