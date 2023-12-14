import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from 'axios'

const animatedComponents = makeAnimated();

export const SelectCategory = ({onChange}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [categorias, setCategorias] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios.get('http://localhost:5000/categorias').then((res) => {
        let result = res.data;
        result.map((categoria) => {
          return arr.push({value: categoria.categoria, label: categoria.categoria});
        });
        setCategorias(arr)
      });
    };
    getData();
  }, []);


  return (
    <>
      <Select
        components={animatedComponents}
        isMulti
        options={categorias}
        onChange={onChange}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
        placeholder="Selecione a(s) Categoria(s)"
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
            multiValue : (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "#d0d2d4",
              color: "#202020"
          })    

        }}

        />

    </>
  );
};

export default SelectCategory
