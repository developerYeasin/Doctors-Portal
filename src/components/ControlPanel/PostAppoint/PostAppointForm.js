import React from "react";
import { useForm } from "react-hook-form";

const PostAppointForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (appointDate) => {
    console.log(appointDate);

    fetch("http://localhost:5000/postappoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointDate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-12">
          <input
            placeholder="Appointment Name"
            {...register("name", { required: true })}
            className="form-control"
          />
          {errors.name && <span>This field is required</span>}
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="date"
            {...register("date", { required: true })}
          />
          {errors.date && <span>This field is required</span>}
        </div>
        <div className="col-md-4">
          <p className="text-center">To</p>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="date"
            {...register("date2", { required: true })}
          />
          {errors.date && <span>This field is required</span>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <input
            className="form-control"
            type="time"
            {...register("time", { required: true })}
          />
          {errors.date && <span>This field is required</span>}
        </div>
        <div className="col-md-4">
          <p className="text-center">To</p>
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            type="time"
            {...register("time2", { required: true })}
          />
          {errors.date && <span>This field is required</span>}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <input
            type="number"
            placeholder="Available spaces"
            {...register("spaces", { required: true })}
            className="form-control"
          />
          {errors.spaces && <span>This field is required</span>}
        </div>
      </div>
      <div className="booking-form-btn">
        <button type="submit" className="primary-btn">
          Send
        </button>
      </div>
    </form>
  );
};

export default PostAppointForm;
