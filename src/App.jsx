import { useState } from 'react'
import './App.css'
import FormOrgAdminReg from './components/org_admin_regPage/FormOrgAdminReg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormSubAdminReg from './components/subadmin_regPage/FormSubAdminReg';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormOrgAdminReg/>} />
          <Route path="/addsubadmin" element={<FormSubAdminReg/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
