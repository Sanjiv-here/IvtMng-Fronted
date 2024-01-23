import React from 'react';
import axios from 'axios';

function SubmitButton(props) {

    const handleSubmit = async (data,e) => {
        try {
          e.preventDefault();
          const response = await axios.post('http://localhost:5000/api/submit-organization', data);
          if (response && response.status === 200) {
            console.log('Organization data submitted successfully');
          } else {
            console.error('Error submitting organization data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
     };


  return (
    <div className=" self-center p-2 ">
      <button
        className="w-full bg-white hover:bg-gray-100 text-sky-600 font-bold py-2 px-4 rounded"
        type="submit"
        onClick={async (e) => {
            await props.onClick();
            await handleSubmit(props.data,e);
            console.log(props.data)
          }}
        
      >
        {props.label}
      </button>
    </div>
  );
}

export default SubmitButton;
