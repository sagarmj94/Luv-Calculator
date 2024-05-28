import React, { useState } from "react";
import "./GymAdmissionForm.css";

export const GymAdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    goals: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Gym Admission Form">
      <fieldset>
        <legend>Join Our Gym</legend>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="height">Height (in cm):</label>
        <input
          id="height"
          name="height"
          type="number"
          value={formData.height}
          onChange={handleChange}
          placeholder="Enter your height"
          required
        />

        <label htmlFor="weight">Weight (in kg):</label>
        <input
          id="weight"
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter your weight"
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="goals">Fitness Goals:</label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          placeholder="Describe your fitness goals"
        />

        <button type="submit">Submit Application</button>
      </fieldset>
    </form>
  );
};
