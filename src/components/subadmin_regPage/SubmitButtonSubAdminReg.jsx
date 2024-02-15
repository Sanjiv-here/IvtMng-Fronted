import React from 'react';
import axios from 'axios';

function SubmitButtonSubAdminReg(props) {

    const handleSubmit = async (data1,e) => {
        try {
          e.preventDefault();
          const response = await axios.post('http://localhost:5000/api/subadminSignIn', {data1});
          if (response && response.status === 200) {
            console.log('Organization data submitted successfully');
          } else {
            console.error('Error123 submitting organization data');
          }
        } catch (error) {
          console.error('Error123:', error);
        }
     };


  return (
    <div className=" self-center p-2 ">
      <button
        className="w-full bg-white hover:bg-gray-100 text-sky-600 font-bold py-2 px-4 rounded"
        type="submit"
        onClick={async (e) => {
            await handleSubmit(props.data1,e);
            console.log(props.data1)
          }}
        
      >
        {props.label}
      </button>
    </div>
  );
}

export default SubmitButtonSubAdminReg;
