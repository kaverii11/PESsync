import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    industry: '',
    gender: '',
    qualification: '',
    experience: '',
    skills: '',
    passion: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    console.log('File uploaded:', e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData);

    try {
      const response = await fetch('http://localhost:5001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Server success response:', result);
        alert(result.message || 'Registration successful!');
        navigate('/homepage');
      } else {
        const errorData = await response.json();
        console.error('Server error response:', errorData);
        alert(errorData.error || errorData.message || 'Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="signup1.jpg" alt="Signup illustration" />
      </div>
      <div className="signup-form">
        <h2>Sign up to get started with your journey</h2>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username *"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password *"
            value={formData.password}
            onChange={handleChange}
          />

          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name *"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter a valid email *"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone No:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number *"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address *"
            value={formData.address}
            onChange={handleChange}
          />

          <label>Industry / Domain:</label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />

          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              /> Other
            </label>
          </div>

          <label>Profile Picture:</label>
          <input type="file" onChange={handleFileUpload} className="file-input" />

          {/* Other fields */}
          <label>Educational Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />

          <label>Work Experience:</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <label>Passion:</label>
          <input
            type="text"
            name="passion"
            value={formData.passion}
            onChange={handleChange}
          />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
