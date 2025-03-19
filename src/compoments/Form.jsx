import React,{useState} from 'react'
import Input from './Input'
import CustomButton from './CustomButton';
const Form = () => {
    const [inputFields, setInputFields] = useState([
      { name: "", description: "", weight: "" },
    ]);

  return (
    <>
      <h4>Criteria</h4>
      <div className="formContainer">
        {inputFields &&
          inputFields.map((field, index) => (
            <>
              <Input
                key={index}
                index={index}
                inputFields={inputFields}
                setInputFields={setInputFields}
              />
              
            </>
          ))}
        <CustomButton
          inputFields={inputFields}
          setInputFields={setInputFields}
        />
      </div>
    </>
  );
}

export default Form