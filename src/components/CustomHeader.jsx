import React from 'react'
import { Card } from 'react-bootstrap'

const CustomHeader = ({ title }) => {
    return (
        
            <Card className='main-area-heading shadow rounded-1 border-0 mt-1'>
                <p>{title}</p>
            </Card>
    )
}

export default CustomHeader