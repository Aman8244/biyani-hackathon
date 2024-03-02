"use client"
import axios from 'axios';
import React, {  useState } from 'react'

const ComplaintForm = () => {
    
    const [imageData,setImageData] = useState('');
    
    const [complaintData, setComplaintData] = useState({
        contactNumber: '',
        details: '',
        name:'',
        email:''
    });
    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            const buffer = Buffer.from(reader.result);
            const base64String = buffer.toString('base64');
            // You can now use the 'base64String' variable to send the image data to the server
            // console.log('Image converted to base64 string:', base64String);
            setImageData(base64String);
          };
    
          reader.readAsArrayBuffer(file);
          setSelectedImage(file);
        }
    };
    const handleChange = (e) => {
        const {name, value} = e.target;

        setComplaintData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                contactNumber:complaintData.contactNumber,
                details:complaintData.details,
                image:imageData,
                name:complaintData.name,
                email:complaintData.email
            }
            const response = await axios.post('/api/complaints',JSON.stringify(formData));
            console.log(response.data)
        } catch (error) {
            console.error('Error submitting complaint:', error);
            // Handle error - maybe show an error message
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={complaintData.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={complaintData.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Contact Number:
                    <input
                        type="text"
                        name="contactNumber"
                        value={complaintData.contactNumber}
                        onChange={handleChange}
                    />
                </label>

                <br />

                <label>
                    Details:
                    <textarea
                        name="details"
                        value={complaintData.details}
                        onChange={handleChange}
                    />
                </label>

                <br />

                <label>
                    Image:
                    <input
                        type="file"
                        accept="image/*"
                        name="image"
                        onChange={handleImageChange}
                    />
                </label>

                <br />

                <button type="submit">Submit Complaint</button>
            </form>
            
            
        </div>
    )
}

export default ComplaintForm;
