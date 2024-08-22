import React, { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/allOrders`, {
          method: 'GET',
        });

        if (!response.ok) {
          console.error('Error Fetching Orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrders();
  }, [refresh]);

  const deleteOrder = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/deleteOrder/${id}`, {
        method: 'POST',
      });

      if (!response.ok) {
        console.error('Error Deleting Order');
      }

      const data = await response.json();
      setRefresh(!refresh);
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="rounded-lg shadow-md h-full flex flex-col bg-[#2D333D] p-4">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">
          Orders
        </h2>
        <div className="flex-grow overflow-auto space-y-4">
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row bg-[#36445f] rounded-lg shadow-lg overflow-scroll"
              >
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-semibold text-base  sm:text-lg text-white mb-2">
                      Order ID: {order._id}
                    </h3>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Email: {order.email}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      First Name: {order.firstName}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Last Name: {order.lastName}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Address: {order.address}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Apartment/Suite: {order.apartmentSuite}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      City: {order.city}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Postal Code: {order.postalCode}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Phone Number: {order.phoneNumber}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Shipping: {order.shipping}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Payment: {order.payment}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Country: {order.country}
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Date: {new Date(order.Date).toLocaleDateString()} 
                    </p>
                    <p className="text-sm sm:text-base  text-gray-300 mb-1">
                      Time: {new Date(order.Date).toLocaleTimeString()} 
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => deleteOrder(order._id)}
                      className="text-white px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-red-500 rounded-full hover:bg-red-600 transition duration-300 focus:outline-none"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
}