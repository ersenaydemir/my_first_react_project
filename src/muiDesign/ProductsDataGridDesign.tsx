import { Button } from '@mui/material';
import { DataGrid, GridColDef, trTR } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductsDataGridDesign() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products').
        then(res => {
            setProducts(res.data)
            setLoading(false);
        })
    }

    const deleteProduct = (item: any) => {
        setLoading(true);
        var id = item.row?.id;

        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            loadProducts();
        })
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Product Id',
            width: 200
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 400
        },
        {
            field: 'unitPrice',
            headerName: 'Unit Price',
            width: 300
        },
        {
            field: 'deleteButton',
            headerName: 'Delete',
            width: 200,
            renderCell: (item) => <Button onClick={() => deleteProduct(item)} variant='contained' color='error'>Delete</Button>
        }
    ]

    return (
        <>
            <div style={{height: 500, width: '100%' }}>
                <DataGrid localeText = {trTR.components.MuiDataGrid.defaultProps.localeText}
                    rows={products}
                    columns={columns}
                    loading={loading}
                />
            </div>
        </>
    )
}

export default ProductsDataGridDesign