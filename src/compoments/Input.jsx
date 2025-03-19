import React,{useState} from 'react'

const Input = ({index,inputFields,setInputFields}) => {
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const handleSave = (data) => {
    setInputFields((prev) => [...prev, data]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFields = [...inputFields];
    updatedFields[index][name] = value;
    // Validations
    if (name === "name" || name === "description") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        updatedFields[index][name] = value; // Only letters allowed
      }
    }

    if (name === "weight") {
      if (/^\d*$/.test(value) && Number(value) <= 100) {
        updatedFields[index][name] = value; // Only numbers within 0-100 range allowed
      } else if (Number(value) > 100) {
        updatedFields[index][name] = "100"; // Auto-corrects to 100 if value exceeds limit
      }
    }
    setInputFields(updatedFields);
  };


  // Remove Field
  const removeFields = (index) => {
    const updatedFields = inputFields.filter((_, i) => i !== index);
    setInputFields(updatedFields);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = {
      label: target.label.value,
      placeholder: target.placeholder.value,
    };
    handleSave(formData);
    setLabel("");
    setPlaceholder("");
  };
  return (
    <>
      <div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="formInput">
            <div className="inputs">
              <label htmlFor="Name">
                Name <span className="requiredFields"> * </span>
              </label>
              <input
                type="text"
                name="name"
                value={inputFields[index].name}
                placeholder="Enter"
                className="name"
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="description">
                Description <span className="requiredFields"> * </span>
              </label>
              <input
                type="text"
                name="description"
                value={inputFields[index].description}
                placeholder="Enter"
                className="description"
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="Weight">
                Weight(%) <span className="requiredFields"> * </span>
              </label>
              <input
                type="number"
                name="weight"
                value={inputFields[index].weight}
                placeholder="0-100"
                min={0}
                max={100}
                className="weight"
                onChange={handleChange}
              />
            </div>
            {/* Prevent "Remove" from appearing if there's only one field */}
            {inputFields.length > 1 && (
              <img
                className="removeBtn"
                onClick={() => removeFields(index)}
                width="45"
                height="25"
                src="https://img.icons8.com/fluency-systems-regular/48/FA5252/delete--v1.png"
                alt="delete--v1"
              />
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Input