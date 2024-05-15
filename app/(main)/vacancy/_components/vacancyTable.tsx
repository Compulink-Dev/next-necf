'use client'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@/components/ui/button';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'jobType', headerName: 'Job Type', width: 250 },
    {
        field: 'salary',
        headerName: 'Salary',
        width: 220,
    },
    {
        field: 'apply',
        headerName: 'Apply',
        width: 240,
        renderCell: (params) => (
            <Button color="primary">
                Action
            </Button>
        ),
    },
];

const rows = [
    { id: 1, name: 'I.C.T Officer', jobType: 'Full time', salary: '$1000 - $2000' },

];

export default function VacancyTable() {
    return (
        <div style={{ height: 400, width: '100%' }} className='text-green-600 text-sm'>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
