import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export const SelectStatus = ({onChange}) => {

  const [status, setStatus] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios.get('http://localhost:5000/status').then((res) => {
        let result = res.data;
        result.map((status) => {
          return arr.push({value: status.statu, label: status.statu});
        });
        setStatus(arr)
      });
    };
    getData();
  }, []);



  return (
    <>
      <Select
        components={animatedComponents}
        options={status}
        onChange={onChange}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
        placeholder="Selecione o status"
        styles={{
            placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "white",
                opacity: "70%",
                fontSize: "0.9em"
            }),
            indicatorsContainer: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#202020"
            }),
            menu: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#202020"
            }),
            control : (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "#202020",
                boxShadow: 'none'
            }),  
            singleValue : (baseStyles, state) => ({
              ...baseStyles,
              color: "#d0d2d4",
              opacity: "70%",
              fontSize: "0.9em"
          })  

        }}
      />
    </>
  );
};

export default SelectStatus
