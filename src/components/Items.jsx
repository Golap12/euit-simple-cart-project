import React, { useState } from 'react';

const Items = ({ item, handleCart }) => {

    const { productName, price, img } = item


    const [count, setCount] = useState(0);

    const handleAddToCart = () => {
        handleCart(item);
        setCount(count + 1);
    };
    console.log(count);

    return (
        <div className='group'>
            <div className='flex flex-col md:space-y-3 space-y-2 border p-5 rounded-xl shadow-[0px_0px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024] transition-transform transform group-hover:scale-105 duration-200'>
                <img className='w-full h-[150px] rounded-xl' src={img} alt={productName} />
                <div className='flex gap-3 items-center'>
                    <h3 className='font-semibold text-lg'>{productName}</h3>
                    {count > 0 && (
                        <p className='p-1 bg-green-500 text-xs font-bold rounded-full flex justify-center items-center'>
                            X{count}
                        </p>
                    )}
                </div>
                <p className='text-[14px] font-medium text-[#666666] w-[250px]'>Price : {price}</p>
                <button onClick={handleAddToCart} className='hover:transition-all hover:bg-gray-400 md:px-5 px-3 md:py-2 py-1 rounded-lg bg-green-400 font-bold text-sm'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Items;