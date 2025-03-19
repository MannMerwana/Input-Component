import React from 'react'

const CustomButton = ({inputFields,setInputFields}) => {
  const addFields = () =>{
    const isWeightValueValid = inputFields.every(field => Number(field.weight) <= 100)
  if (!isWeightValueValid) {
    alert(
      "Please ensure all weights are 100 or below before adding new fields."
    );
    return; // Stops execution if validation fails
  }
    setInputFields([
      ...inputFields,
      {
        name: "",
        description: "",
        weight: "",
      },
    ]);
  }
  return (

      <svg
        onClick={addFields}
        className='addBtn'
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0,0,255.98714,255.98714"
      >
        <g transform="translate(-126.71363,-126.71363) scale(1.99,1.99)">
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M44,24c0,11.045 -8.955,20 -20,20c-11.045,0 -20,-8.955 -20,-20c0,-11.045 8.955,-20 20,-20c11.045,0 20,8.955 20,20z"
                fill="#4caf50"
              ></path>
              <path d="M21,14h6v20h-6z" fill="#ffffff"></path>
              <path d="M14,21h20v6h-20z" fill="#ffffff"></path>
            </g>
          </g>
        </g>
      </svg>

  );
}

export default CustomButton