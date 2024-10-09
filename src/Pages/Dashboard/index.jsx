import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import useDashboard from './useDashboard'

const Dashboard = () => {
    const {
        checkBox,
        handleCheckBoxClick
    } = useDashboard()
    return (
        <div>
            <div className='checkbox-container'>
                <FormControlLabel control={<Checkbox checked={checkBox.includes("ITEM")} onChange={(e) => handleCheckBoxClick(e)} name='ITEM' />} label="Item" />
                <FormControlLabel control={<Checkbox checked={checkBox.includes("SUPPLIER")} onChange={(e) => handleCheckBoxClick(e)} name='SUPPLIER' />} label="Supplier" />
            </div>
            <div className='form-container'>
                <h1>Item Details</h1>

                {/* Item form */}
                <div className='item-form-container'>
                    <div className='input-container'>
                        <span className='label'>Item Name</span>
                        <input placeholder='Enter Item name' />
                        <span className='helper-text'>Max 50 characters</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Quantity</span>
                        <input placeholder='Enter Quantity' />
                        <span className='helper-text'>Numeric value</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Unit Price</span>
                        <input placeholder='Enter Unit Price' />
                        <span className='helper-text'>Numeric value (USD)</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Date of Submission</span>
                        <input placeholder='Enter Date of Submission' />
                        <span className='helper-text'>Format: MM/DD/YYY</span>
                    </div>
                </div>

                {/* Supplier form */}
                <h1>Supplier Details</h1>
                <div className='item-form-container'>
                    <div className='input-container'>
                        <span className='label'>Supplier Name</span>
                        <input placeholder='Enter Supplier Name' />
                        <span className='helper-text'>Max 50 characters</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Company Name</span>
                        <input placeholder='Enter Company Name' />
                        <span className='helper-text'>Numeric value</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Country</span>
                        <input placeholder='Enter Country' />
                        <span className='helper-text'>Select conuntry from the list</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>State</span>
                        <input placeholder='Enter State' />
                        <span className='helper-text'>Select state from the list</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>City</span>
                        <input placeholder='Enter City' />
                        <span className='helper-text'>Max 50 characters</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Email Address</span>
                        <input placeholder='Enter Email Address' />
                        <span className='helper-text'>Valid email format</span>
                    </div>
                    <div className='input-container'>
                        <span className='label'>Phone Number</span>
                        <input placeholder='Enter Phone Number' />
                        <span className='helper-text'>Valid phone number</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard