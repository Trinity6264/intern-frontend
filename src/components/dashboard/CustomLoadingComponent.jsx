import React from 'react'
import { Spinner } from 'react-bootstrap'

const CustomLoadingComponent = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}> <Spinner style={{color: 'green'}}/> </div >
    )
}

export default CustomLoadingComponent