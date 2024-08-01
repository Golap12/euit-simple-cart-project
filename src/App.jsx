import React, { useState } from 'react';
import './App.css';
import Items from './components/Items';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      productName: "Cheeseburger",
      price: 8.99,
      img: "https://www.foodandwine.com/thmb/LUEdbNTLcdq_BtCmINp23zQbQro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheeseburgers-eat-delicious-XL-BLOG0517-b578f43651854aeb8e2e605580094811.jpg",
    },
    {
      productName: "Veggie Pizza",
      price: 12.99,
      img: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg",
    },
    {
      productName: "Chicken Salad",
      price: 10.49,
      img: "https://ifoodreal.com/wp-content/uploads/2021/06/fg-grilled-chicken-salad.jpg",
    },
  ];

  const handleCart = (item) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find(cartItem => cartItem.productName === item.productName);

      if (itemInCart) {
        return prevCart.map(cartItem =>
          cartItem.productName === item.productName
            ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            :
            cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div className='container mx-auto'>
            
      <div className='flex flex-col justify-center items-center my-10'>
        <h1 className='text-4xl font-bold mb-2'>All Items</h1>
        <p className='text-gray-500 font-medium w-2/4 text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur assumenda quasi, impedit eum temporibus aspernatur?</p>
        <div className='border w-[80%] border-gray-500 border-dashed'></div>
      </div>

            
      <div className='flex justify-between gap-5 p-5'>
                {/* Items  */}
        <div className='flex-1 p-5 shadow-[0px_0px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024]'>
          <div className='mb-5'>
            <h2 className='text-center text-2xl mb-2 font-medium text-gray-600'>All items here</h2>
            <div className='border border-dashed border-gray-500 w-[40%] mx-auto'></div>
          </div>
          <div className='grid grid-cols-3 gap-5'>
            {products.map((item, index) => (
              <Items key={index} item={item} handleCart={handleCart}></Items>
            ))}
          </div>
        </div>
                {/* Cart  */}
        <div className='p-5 w-[35%] shadow-[0px_0px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024]'>
          <div className='mb-5'>
            <div className='flex justify-center items-center gap-3 mb-2'>
              <h2 className='text-center text-xl font-medium text-gray-600'>Cart</h2>
              <p className='w-5 h-5 rounded-full flex justify-center items-center text-xs font-bold bg-green-400'>{cart.length}</p>
            </div>
            <div className='border border-dashed border-gray-500 w-[30%] mx-auto'></div>
          </div>
          <div className='cartDiv'>
            {
              cart.length > 0 ? <table className='w-full table-auto'>
                <thead>
                  <tr className='bg-gray-200 border border-gray-500'>
                    <th className='px-4 py-2 border border-gray-500'>Item Name</th>
                    <th className='px-4 py-2 border border-gray-500'>Quantity</th>
                    <th className='px-4 py-2 border border-gray-500'>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className='bg-white border border-gray-500'>
                      <td className='px-4 py-2 border border-gray-500'>{item.productName}</td>
                      <td className='px-4 py-2 border border-gray-500'>{item.quantity}</td>
                      <td className='px-4 py-2 border border-gray-500'>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table> : <p className='text-xl font-bold text-center'>No Item Added</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
