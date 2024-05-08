import React, { useState } from 'react';
import axios from 'axios';
import './contribute.css';

const Contribute = () => {
  const [foodData, setFoodData] = useState({
    picture: '',
    description: '',
    bestBeforeDate: '',
    quantity: 0,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/contribute', foodData);
      console.log(response.data);
      // You can do something after successful submission like showing a success message or redirecting
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bestBeforeDate">Best Before Date:</label>
          <input type="date" id="bestBeforeDate" name="bestBeforeDate" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contribute;
