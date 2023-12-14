import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export const SelectPlataforma= ({onChange}) => {

  const [plataformas, setPlataformas] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios.get('http://localhost:5000/plataformas').then((res) => {
        let result = res.data;
        result.map((plataforma) => {
          return arr.push({value: plataforma.nomePlataforma, label: plataforma.nomePlataforma});
        });
        setPlataformas(arr)
      });
    };
    getData();
  }, []);



  return (
    <>
      <Select
        components={animatedComponents}
        options={plataformas}
        onChange={onChange}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
        placeholder="Selecione a Plataforma"
        styles={{
            placeholder: (baseStyles, state) => ({
                ...baseStyles,
                color: "#d0d2d4",
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

export default SelectPlataforma
