import React, { useContext, useState } from 'react'
import { globalData } from '../App';

export default function AddProduct() {
    const {setShowSnack} = useContext(globalData)
    const [newProduct, setNewProduct] = useState({
        shoeName: '',
        shoePrice: '',
        shoeCategory: '',
        shoeImage: null,
        shoeColor: '',
        shoeType: '',
        shoeSize: '',
        shoeDescription: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewProduct(prev => ({ ...prev, shoeImage: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('shoeName', newProduct.shoeName);
          formData.append('shoePrice', newProduct.shoePrice);
          formData.append('shoeCategory', newProduct.shoeCategory);
          formData.append('shoeColor', newProduct.shoeColor);
          formData.append('shoeType', newProduct.shoeType);
          formData.append('shoeSize', newProduct.shoeSize);
          formData.append('shoeDescription', newProduct.shoeDescription);
          formData.append('shoeImage', newProduct.shoeImage);
      
          const response = await fetch(`${process.env.REACT_APP_API_URL}/addproduct`, {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error('Error uploading product');
          }
      
          setShowSnack(true);
          setNewProduct({
            shoeName: '',
            shoePrice: '',
            shoeCategory: '',
            shoeImage: null,
            shoeColor: '',
            shoeType: '',
            shoeSize: '',
            shoeDescription: '',
          });
        } catch (error) {
          alert('Error uploading product');
          console.error('Error:', error.message);
        }
      };

    return (
        <div className="rounded-lg overflow-auto shadow-md p-6 mb-6 w-full h-full">
            <h2 className="text-2xl font-semibold mb-4 text-white">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-black">
                <input type="text" name="shoeName" value={newProduct.shoeName} onChange={handleInputChange} placeholder="Shoe Name" required className="w-full p-2 placeholder:text-gray-500 border border-gray-300 rounded" />
                <input type="number" name="shoePrice" value={newProduct.shoePrice} onChange={handleInputChange} placeholder="Price" required className="w-full p-2 placeholder:text-gray-500 border border-gray-300 rounded" />
                <input type="text" name="shoeType" value={newProduct.shoeType} onChange={handleInputChange} placeholder="Type" required className="w-full p-2 placeholder:text-gray-500 border border-gray-300 rounded" />
                <input type="text" name="shoeColor" value={newProduct.shoeColor} onChange={handleInputChange} placeholder='Shoe Color' required className="w-full p-2 border border-gray-300 rounded" />
                <select name="shoeCategory" value={newProduct.shoeCategory} onChange={handleInputChange} required className="w-full p-2 border text-gray-500 border-gray-300 rounded">
                    <option className='text-white bg-[#2D333D]' value="">Select Category</option>
                    <option className='text-white bg-[#2D333D]' value="Men's Shoes & Sneakers">Men's Shoes & Sneakers</option>
                    <option className='text-white bg-[#2D333D]' value="Women's Shoes & Sneakers">Women's Shoes & Sneakers</option>
                    <option className='text-white bg-[#2D333D]' value="Kids' Shoes & Sneakers">Kids' Shoes & Sneakers</option>
                </select>
                <select name="shoeSize" value={newProduct.shoeSize} onChange={handleInputChange} required className="w-full p-2 border text-gray-500 border-gray-300 rounded">
                    <option className='text-white bg-[#2D333D]' value="">Select Size</option>
                    <option className='text-white bg-[#2D333D]' value="5">5</option>
                    <option className='text-white bg-[#2D333D]' value="5.5">5.5</option>
                    <option className='text-white bg-[#2D333D]' value="6">6</option>
                    <option className='text-white bg-[#2D333D]' value="6.5">6.5</option>
                    <option className='text-white bg-[#2D333D]' value="7">7</option>
                    <option className='text-white bg-[#2D333D]' value="7.5">7.5</option>
                    <option className='text-white bg-[#2D333D]' value="8">8</option>
                    <option className='text-white bg-[#2D333D]' value="8.5">8.5</option>
                    <option className='text-white bg-[#2D333D]' value="9">9</option>
                    <option className='text-white bg-[#2D333D]' value="9.5">9.5</option>
                    <option className='text-white bg-[#2D333D]' value="10">10</option>
                    <option className='text-white bg-[#2D333D]' value="10.5">10.5</option>
                    <option className='text-white bg-[#2D333D]' value="11">11</option>
                    <option className='text-white bg-[#2D333D]' value="11.5">11.5</option>
                    <option className='text-white bg-[#2D333D]' value="12">12</option>
                </select>
                <textarea name="shoeDescription" value={newProduct.shoeDescription} onChange={handleInputChange} placeholder="Description" required className="w-full p-2 placeholder:text-gray-500 border border-gray-300 rounded"></textarea>
                <input type="file" name="shoeImage" onChange={handleFileChange} accept="image/*" required className="w-full text-white p-2 border border-gray-300 rounded file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">Add Product</button>
            </form>
        </div>
    )
}