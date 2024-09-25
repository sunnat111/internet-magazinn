import React from "react";

const CustomInput = ({ holder, label, errors, register, type, name }) => {
  return (
    <div className="form_item">
      <label>
        {label}
        <input
          type={type}
          className="form_item_input"
          placeholder={holder}
          name={name}
          {...register}
        />
      </label>
      <div className="form_item_input_error">
        {errors && <h2>{errors?.message}</h2>}
      </div>
    </div>
  );
};

export default CustomInput;
