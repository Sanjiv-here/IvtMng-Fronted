import React, { useState } from 'react';
import Input from './InputOrgAdminReg';
import SubmitButton from './SubmitButtonOrgAdminReg';

function FormOrgAdminReg({ onSubmit }){

  const [orgName, setOrgName] = useState('');
  const [orgAddress, setOrgAddress] = useState('');
  const [orgContact, setOrgContact] = useState('');
  const [orgEmail, setOrgEmail] = useState('');
  const [orgPassword, setOrgPassword] = useState('');
  const [orgConfirmPassword, setOrgConfirmPassword] = useState('');


  const [adminUsername, setAdminUsername] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminConfirmPassword, setAdminConfirmPassword] = useState('');
  const [adminDesignation, setAdminDesignation] = useState('');
  const [adminCryptoAddress, setAdminCryptoAddress] = useState('');
  const [adminContractAddress, setAdminContractAddress] = useState('');
  const [adminContact, setAdminContact] = useState('');

const data1={ orgName,
    orgAddress,
    orgContact,
    orgEmail,
    orgPassword,
    orgConfirmPassword};

const data2={
    adminUsername,
    adminEmail,
    adminPassword,
    adminConfirmPassword,
    adminDesignation,
    adminCryptoAddress,
    adminContractAddress,
    adminContact};

  return(
  <>
      <div class="bg-sky-400 p-8 max-w-md mx-auto rounded  mb-8">
      <h1 class="text-2xl tracking-normal pb-4 text-white">Create an Organisation Account</h1>
        <div class="flex flex-col items-start">
          <Input detail="Organisation Name" id="orgname" placeholder="" typ="text" value={orgName} onChange={(e) => setOrgName(e.target.value)}/>
          <Input detail="Address" id="orgadd" placeholder="" typ="text" value={orgAddress} onChange={(e) => setOrgAddress(e.target.value)}/>
          <Input detail="Contact No." id="orgcontact" placeholder="" typ="tel" value={orgContact} onChange={(e) => setOrgContact(e.target.value)}/>
          <Input detail="Email" id="orgemail" placeholder="" typ="email" value={orgEmail} onChange={(e) => setOrgEmail(e.target.value)}/>
          <Input detail="Password" id="orgpass" placeholder="" typ="password" value={orgPassword} onChange={(e) => setOrgPassword(e.target.value)}/>
          <Input detail="Confirm Password" id="orgconpass" placeholder="" typ="password" value={orgConfirmPassword} onChange={(e) => setOrgConfirmPassword(e.target.value)}/>
        </div>
      </div>
      <div class="bg-sky-400 p-8 max-w-md mx-auto rounded">
      <h1 class="text-2xl tracking-normal pb-4 text-white">Create an Admin Account</h1>
        <div class="flex flex-col items-start">
          <Input detail="Username" id="adname" placeholder="" typ="text" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)}/>
          <Input detail="Email" id="admail" placeholder="" typ="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)}/>
          <Input detail="Password" id="adpass" placeholder="" typ="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)}/>
          <Input detail="Confirm Password" id="adconpass" placeholder="" typ="password" value={adminConfirmPassword} onChange={(e) => setAdminConfirmPassword(e.target.value)}/>
          <Input detail="Designation" id="addesignation" placeholder="" typ="text" value={adminDesignation} onChange={(e) => setAdminDesignation(e.target.value)}/>
          <Input detail="Crypto Wallet Address" id="adcryadd" placeholder="" typ="text" value={adminCryptoAddress} onChange={(e) => setAdminCryptoAddress(e.target.value)}/>
          <Input detail="Contract Address" id="adcontadd" placeholder="" typ="text" value={adminContractAddress} onChange={(e) => setAdminContractAddress(e.target.value)}/>
          <Input detail="Mobile Number" id="adcontact" placeholder="" typ="tel" value={adminContact} onChange={(e) => setAdminContact(e.target.value)}/>
          <SubmitButton label="Sign Up" data1={data1} data2={data2} />
        </div>
      </div>
    </>
  )

}

export default FormOrgAdminReg;