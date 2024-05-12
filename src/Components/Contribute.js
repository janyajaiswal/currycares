import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contribute.css';
import ContributedFoodCard from './ContributedFoodCard'; // Import the ContributedFoodCard component

const Contribute = () => {
  const navigate = useNavigate(); // Use useNavigate from react-router-dom
  const [foodData, setFoodData] = useState({
    picture: '',
    description: '',
    bestBeforeDate: '',
    quantity: '',
    price: '',
  });

  const [contributions, setContributions] = useState([]); // State to store contributed food items
  const [submitting, setSubmitting] = useState(false); // State to track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); // Set submitting state to true while submitting

    try {
      const formData = new FormData(); // Create a FormData object for image upload

      // Add other form fields to FormData
      formData.append('description', foodData.description);
      formData.append('bestBeforeDate', foodData.bestBeforeDate);
      formData.append('quantity', foodData.quantity);
      formData.append('price', foodData.price);

      // Add image file to FormData if selected
      if (e.target.elements.picture.files.length > 0) {
        const imageFile = e.target.elements.picture.files[0];

        // Basic image validation (size and type)
        if (!imageFile.type.match('image/.*')) {
          alert('Please select an image file.');
          return;
        }

        if (imageFile.size > 1024 * 1024 * 5) { // 5MB limit
          alert('Image size cannot exceed 5MB.');
          return;
        }

        formData.append('picture', imageFile);
      }

      const response = await fetch('http://localhost:4000/api/contribute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
        body: formData, // Use FormData for multipart/form-data request
      });
      // Check for successful response (200 OK)
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        // Add the new contribution to the list of contributions
        setContributions((prevContributions) => [...prevContributions, data]);
        // Clear the form fields after successful submission
        setFoodData({
          picture: '',
          description: '',
          bestBeforeDate: '',
          quantity: '',
          price: '',
        });
        alert('Contribution submitted successfully!'); // Success message
      } else {
        console.error('Failed to submit food data');
        alert('An error occurred. Please try again.'); // Informative error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.'); // Informative error message
    } finally {
      setSubmitting(false); // Reset submitting state after submission
    }
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Food</h2>
      <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>
        <div className="form-group">
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" onChange={handleChange} accept="" />
          <p>Supported image formats: JPEG, PNG, GIF</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" onChange={handleChange} value={foodData.description} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bestBeforeDate">Best Before Date:</label>
          <input type="date" id="bestBeforeDate" name="bestBeforeDate" onChange={handleChange} value={foodData.bestBeforeDate} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" onChange={handleChange} value={foodData.quantity} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" onChange={handleChange} value={foodData.price} required />
        </div>
        <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>
      
      {/* Render contributed food cards */}
      <div className="contributions-list">
        {contributions.map((food, index) => (
          <ContributedFoodCard key={index} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Contribute;
