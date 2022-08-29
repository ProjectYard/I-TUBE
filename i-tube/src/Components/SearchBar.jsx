import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'

function SearchBar() {
  return (
    <Paper 
        component="form" 
        onSubmit={()=>{}}
        sx={{borderRadius:20,border:'1px solid #e3e3e3',pl:2,boxShadow:"none",mr:{sm:5}}}
        >
            <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                <Search />
            </IconButton>
            <input 
                className='search-bar'
                placeholder='Search...'
                // value={searchTerm}
                // onChange={() => {})}
            />
    </Paper>
  )
}

export default SearchBar