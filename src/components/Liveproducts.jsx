import React, { useEffect, useState } from 'react'

export default function Liveproducts() {
    const [products, setProduct] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/allproducts`, {
                    method: 'GET',
                });
                if (!response.ok) {
                    console.error('Error Fetching Data')
                }
                const data = await response.json();
                setProduct(data)
                console.log(data)
            }
            catch (err) {
                console.error(err);
            }
        }
        fetchProduct()
    }, [refresh])

        const deleteProduct = async (id) => {
            console.log('Id is'+id)
            try {
                const responce = await fetch(`${process.env.REACT_APP_API_URL}/delete/${id}`, {
                    method: 'POST'
                });
                if (!responce.ok) {
                    console.error('Error Deleating Product')
                }
                const data = await responce.json();
                setRefresh(refresh+1)
                setProduct(data)
            } catch (err) {
                console.error(err);
            }
        }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="rounded-lg shadow-md h-full flex flex-col bg-[#2D333D] p-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Live Products</h2>
                <div className="flex-grow overflow-auto space-y-4">
                    {products.length>0?
                    products.map((product, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:h-[50%] bg-[#36445f] rounded-lg shadow-lg overflow-hidden">
                            <div className="w-full sm:w-1/3 h-32 sm:h-full">
                                <img src={`${process.env.REACT_APP_API_URL}/${product.shoeImage}`} alt={product.shoeName} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="font-semibold text-base text-nowrap sm:text-lg text-white mb-2">{product.shoeName}</h3>
                                    <p className="text-sm sm:text-base text-nowrap text-gray-300 mb-1">Price: ${product.shoePrice}</p>
                                    <p className="text-sm sm:text-base text-nowrap text-gray-300 mb-1">Category: {product.shoeCategory}</p>
                                    <p className="text-sm sm:text-base text-nowrap text-gray-300 mb-3">Type: {product.shoeType}</p>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => deleteProduct(product._id)}
                                        className="text-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-red-500 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    )):''
                    }
                </div>
            </div>
        </div>
    )
}



