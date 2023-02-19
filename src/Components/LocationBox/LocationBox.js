import React from 'react'
import Select from "react-select";


const LocationBox = () => {
  const options = [
    { value: "Babulaal", label: "Babulaal" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },
    { value: "Atarra Chungi", label: "Atarra Chungi" },
    { value: "Babulaal", label: "Babulaal" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },
    { value: "Babulaal", label: "Babulaal" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },
    { value: "Babulaal", label: "Babulaal" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },
    { value: "Babulaal", label: "Babulaal" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },
    { value: "Kalu Kuwan", label: "Kalu Kuwan" },

  ];

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "black" : "black",
      backgroundColor: state.isSelected ? "white" : "white",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "white",
      color: 'black',
      padding: "10px",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "black" }),
  };
  
  return (
    <div className='location-box'>
      <h3>Select a location and find your nearest salon</h3>
      <Select options={options} styles={customStyles} />
    </div>
  )
}

export default LocationBox