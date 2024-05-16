import React, { useState, useEffect, useRef } from 'react';
import './contribute.css';
import ContributedFoodCard from './ContributedFoodCard'; 

const Contribute = () => {
  const myboundaryone = 'a boundary';
  const [contributions, setContributions] = useState([]);
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/contribute', {
          method: 'GET',
          // headers:{ 'Content-Type': `multipart/form-data; boundary=${myboundaryone}`,
          // },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }

        const data = await response.json();
        setContributions(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching contributions:', error);
      }
    };

    fetchContributions();
  }, []);

  const [formData, setFormData] = useState({
    picture: null, // Store image as a file object
    description: '',
    bestBeforeDate: '',
    quantity: 0,
    price: 0,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setTimeout(() => {
      const file = files && files.length > 0 ? files[0] : null; // Check if files is defined and not empty
      setFormData((prevData) => ({
        ...prevData,
        [name]: name === 'picture' ? file || null : value, // Handle image file with null for no selection
      }));
      console.log('formData.picture:', file); // Log the file object, not formData.picture
    }, 100); // Adjust timeout as needed (milliseconds)
  };
  
  const [submitting, setSubmitting] = useState(false); // Track form submission state
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current; 
    setSubmitting(true); // Set submitting state
  
    if (contributions.length > 0) { // Check if contributions data is available
      try {
        const formData = new FormData();// Create FormData for multipart data (image)
  
        // Validate file selection before appending
        if (formData.picture) { // Check if formData.picture is not null or undefined
          formData.append('picture', formData.picture); 
        } else {
          console.error('No image file selected');
          alert('Please select an image file to contribute.');
          setSubmitting(false); // Reset submitting state on validation error
          return; // Exit the function if no file is selected
        }
  
        // Append other form data properties
        formData.append('description', formData.description);
        formData.append('bestBeforeDate', formData.bestBeforeDate);
        formData.append('quantity', formData.quantity);
        formData.append('price', formData.price);

        const myboundarytwo = 'yet another boundary';
        const response = await fetch('http://localhost:4000/api/contribute', {
          method: 'POST',
          // Ensure Content-Type is set to multipart/form-data
          headers: {
            'Content-Type': `multipart/form-data; boundary=${myboundarytwo}`,
          },
          body: formData,
        });

        if (response.status === 201) {
          console.log('Contribution submitted successfully!');
          setFormData({ // Clear form data on success
            picture: null,
            description: '',
            bestBeforeDate: '',
            quantity: '',
            price: '',
          });
          alert('Contribution submitted!'); // Informative message
        } else {
          console.error('Error submitting contribution:', response.data);
          // Check for specific error codes (e.g., 400 for bad request)
          if (response.status === 400) {
            alert('There was a problem with your submission. Please check the form and try again.');
          } else {
            alert('An error occurred. Please try again.'); // Informative error message
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.'); // Informative error message
      } finally {
        setSubmitting(false); // Reset submitting state after submission
      }
    } else {
      console.log('Contributions data not yet available');
    }
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Food</h2>
      <form onSubmit={handleSubmit}  ref={formRef} action="/contribute" method="POST" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" onChange={handleChange} accept="image/*" />
          <p>Supported image formats: JPEG, PNG, GIF</p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" onChange={handleChange} value={formData.description} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="bestBeforeDate">Best Before Date:</label>
          <input type="date" id="bestBeforeDate" name="bestBeforeDate" onChange={handleChange} value={formData.bestBeforeDate} required />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" onChange={handleChange} value={formData.quantity} required />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" onChange={handleChange} value={formData.price} required />
        </div>
        <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>

      <div className="contributions-list">
      {contributions.length > 0 ? (
        contributions.map((food) => (
          <ContributedFoodCard key={food.id} food={food} />
        ))
      ) : (
        <p>No contributions yet.</p>
      )}
    </div>
    </div>
  );
};

export default Contribute;
