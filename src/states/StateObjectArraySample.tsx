import React, { useState } from 'react'
import { categoriesData } from '../data/categoriesData'

export default function StateObjectArraySample() {

    const [categories, setCategories] = useState(categoriesData);

    const getCategories = () => {
      setCategories(categories);
    }
    

  return (
    <>
    <div>
      <label></label>
      <label></label>
      <label></label>
    </div>
    </>
  )
  }
