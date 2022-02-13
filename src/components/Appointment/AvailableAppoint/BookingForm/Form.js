import React from 'react';
import { useForm } from "react-hook-form";

const Form = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();

    const onSubmit = (appointDate) => {
      console.log(appointDate);

      fetch("http://localhost:5000/booking", {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(appointDate)
     })
     .then(res => res.json())
     .then(data => {
       console.log(data)
     })

    };

    console.log(watch("example")); // watch input value by passing the name of it

    return (
      <form onSubmit={handleSubmit(onSubmit)}>

        <select {...register("selectTime", { required: true })}>
          <option value="select-time">select-time</option>
          <option value="7pm">7pm</option>
          <option value="10am-10am">10am-10am</option>
        </select>

        <input
          placeholder="Your name"
          {...register("name", { required: true })}
          className=""
        />
        {errors.name && <span>This field is required</span>}

        <input
          type="number"
          placeholder="Your Phone Number"
          {...register("number", { required: true })}
        />

        {errors.number && <span>This field is required</span>}
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input type="date" {...register("date", { required: true })} />
        {errors.date && <span>This field is required</span>}

        <div className="booking-form-btn">
          <button type="submit" className="primary-btn">
            Send
          </button>
        </div>
      </form>
    );
};

export default Form;