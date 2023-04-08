import React from 'react';
import SliderComponent from './common/SliderComponent';

const SliderSelect = ({ data, setData }) => {
  console.log(data, 'Data');

  const bank_limit = 10000;
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
          console.log(data, 'Set Data');
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        steps={100}
        unit="$"
        amount={data.homeValue}
        label="Home Value"
        value={data.homeValue}
      />
    </div>
  );
};

export default SliderSelect
