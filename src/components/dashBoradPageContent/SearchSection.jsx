import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import Select from 'react-select';
import classes from './serachSection.module.scss';

const options = [
  { label: 'تهران', value: '1' },
  { label: 'تهران', value: '2' },
  { label: 'تهران', value: '3' },
];
const SelectComponent = ({ selectLabel }) => {
  const [selectStates, setSelectStates] = useState([]);
  const [selectedState, setSelectedState] = useState({});
  const [stateId, setStateId] = useState();

  //   const geState = async () => {
  //     try {
  //       const res = await axios.get(`${process.env.apiUrl}/state/get`);
  //       const { data: stateData } = res.data;
  //       const { state } = stateData;
  //       const options = state.map((d) => ({
  //         value: d.id,
  //         label: d.name,
  //       }));
  //       setSelectStates(options);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleChangeState = (e) => {
    setSelectedState({ value: e.value, label: e.label });
    setStateId(e.value);
  };

  const style = {
    control: (base) => ({
      ...base,
      border: 'none',
      outline: 'none',
      borderRadius: '8px',
      // width: '231px',
      height: '20px',
      backgroundColor: '#fff',
      // This line disable the blue border
      boxShadow: 'none',
    }),
  };
  return (
    <div className={classes.formControl}>
      <label>{selectLabel}</label>
      <Select
        value={selectedState}
        instanceId={selectLabel}
        styles={style}
        className={classes.select}
        placeholder={selectLabel}
        // options={selectStates}
        options={options}
        onChange={handleChangeState}
      />
    </div>
  );
};

export default SelectComponent;
