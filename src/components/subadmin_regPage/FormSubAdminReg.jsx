import React, { useState } from 'react';
import Input from './InputSubAdminReg';
import SubmitButton from './SubmitButtonSubAdminReg';

function FormSubAdminReg({ onSubmit }){

  const [subadminUsername, setSubAdminUsername] = useState('');
  const [subadminEmail, setSubAdminEmail] = useState('');
  const [subadminPassword, setSubAdminPassword] = useState('');
  const [subadminConfirmPassword, setSubAdminConfirmPassword] = useState('');
  const [subadminDesignation, setSubAdminDesignation] = useState('');
  const [subadminCryptoAddress, setSubAdminCryptoAddress] = useState('');
  const [subadminContractAddress, setSubAdminContractAddress] = useState('');
  const [subadminContact, setSubAdminContact] = useState('');

const data1={
  subadminUsername,
  subadminEmail,
  subadminPassword,
  subadminConfirmPassword,
  subadminDesignation,
  subadminCryptoAddress,
  subadminContractAddress,
  subadminContact};

  return(
  <>
      <div class="bg-sky-400 p-8 max-w-md mx-auto rounded">
      <h1 class="text-2xl tracking-normal pb-4 text-white">Create a Sub-Admin Account</h1>
        <div class="flex flex-col items-start">
          <Input detail="Username" id="adname" placeholder="" typ="text" value={subadminUsername} onChange={(e) => setSubAdminUsername(e.target.value)}/>
          <Input detail="Email" id="admail" placeholder="" typ="email" value={subadminEmail} onChange={(e) => setSubAdminEmail(e.target.value)}/>
          <Input detail="Password" id="adpass" placeholder="" typ="password" value={subadminPassword} onChange={(e) => setSubAdminPassword(e.target.value)}/>
          <Input detail="Confirm Password" id="adconpass" placeholder="" typ="password" value={subadminConfirmPassword} onChange={(e) => setSubAdminConfirmPassword(e.target.value)}/>
          <Input detail="Designation" id="addesignation" placeholder="" typ="text" value={subadminDesignation} onChange={(e) => setSubAdminDesignation(e.target.value)}/>
          <Input detail="Crypto Wallet Address" id="adcryadd" placeholder="" typ="text" value={subadminCryptoAddress} onChange={(e) => setSubAdminCryptoAddress(e.target.value)}/>
          <Input detail="Contract Address" id="adcontadd" placeholder="" typ="text" value={subadminContractAddress} onChange={(e) => setSubAdminContractAddress(e.target.value)}/>
          <Input detail="Mobile Number" id="adcontact" placeholder="" typ="tel" value={subadminContact} onChange={(e) => setSubAdminContact(e.target.value)}/>
          <SubmitButton label="Sign Up" data1={data1} />
        </div>
      </div>
    </>
  )

}

export default FormSubAdminReg;