import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function AddCategoryDesgin() {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    
    const add = () => {
        var NewCategory = {
            name,
            description
        }

        axios.post('https://northwind.vercel.app/api/categories', NewCategory). 
        then(res => {
            alert('success')
        })
    }
  return (
    <>
        <div>
            <label>Name: </label>
            <TextField variant='outlined' onChange={(e) => setName(e.target.value)}>Name: </TextField>
        </div>
        <div>
            <label>Name: </label>
            <TextField variant='outlined' onChange={(e) => setDescription(e.target.value)}>Description: </TextField>
        </div>
        <div>
            <Button variant='outlined' onClick={add}>Kategoriye Ekle</Button>
        </div>
    </>
  )
}

export default AddCategoryDesgin