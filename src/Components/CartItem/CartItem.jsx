import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';
import './CartItem.css'; // Ensure that any custom styles here are also responsive or refactor them

const CartItem = () => {
    const { allProducts, cartItems, removeFromCart, addToCart, getTotalAmount } = useContext(ShopContext);

    // Calculate the total quantity of items in the cart
    const totalQuantity = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);

    return (
        <div className='my-4 mx-2 md:my-24 md:mx-40'>
            {totalQuantity === 0 ? (
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-semibold">Please add items to cart</h2>
                </div>
            ) : (
                <>
                    <div className='hidden md:grid grid-cols-6 gap-4 text-sm md:text-base font-semibold'>
                        <p className='text-center'>Products</p>
                        <p>Title</p>
                        <p className='text-center'>Price</p>
                        <p className='text-center'>Quantity</p>
                        <p className='text-center'>Total</p>
                        <p className='text-center'>Remove</p>
                        <p className='text-center'>Add</p>
                    </div>

                    {allProducts.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id} className='flex flex-col md:flex-row items-center border-b border-gray-200 py-4'>
                                    <img className='w-24 h-24 md:w-32 md:h-32 object-cover' src={e.image} alt={e.name} />
                                    <div className='flex flex-1 flex-col md:flex-row items-center justify-between md:ml-4'>
                                        <p className='text-sm md:text-base'>{e.name}</p>
                                        <p className='text-sm md:text-base'>$ {e.new_price}</p>
                                        <p className='text-sm md:text-base'>{cartItems[e.id]}</p>
                                        <p className='text-sm md:text-base'>$ {e.new_price * cartItems[e.id]}</p>
                                        <img
                                            className='w-6 h-6 md:w-8 md:h-8 mx-auto cursor-pointer'
                                            src={removeIcon}
                                            onClick={() => { removeFromCart(e.id) }}
                                            alt="Remove"
                                        />
                                        <p
                                            onClick={() => { addToCart(e.id) }}
                                            className='text-xl md:text-2xl font-semibold cursor-pointer'
                                        >
                                            +
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className='flex flex-col md:flex-row md:justify-between my-8'>
                        <div className='flex flex-col md:w-1/2'>
                            <h1 className='text-xl md:text-4xl mb-2 font-semibold'>Cart Total</h1>
                            <hr className='w-1/4 md:w-1/2 mb-4 h-1 border-0 rounded-lg mx-auto bg-black' />
                            <div className='flex flex-col md:flex-row justify-between py-4 text-sm md:text-2xl'>
                                <p>SubTotal</p>
                                <p>$ {getTotalAmount()}</p>
                            </div>
                            <hr className='bg-black w-full h-1 rounded-lg' />
                            <div className='flex flex-col md:flex-row justify-between py-4 text-sm md:text-2xl'>
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>
                            <hr className='bg-black w-full h-1 rounded-lg' />
                            <div className='flex flex-col md:flex-row justify-between py-4 text-sm md:text-2xl font-semibold'>
                                <h3>Total</h3>
                                <h3>$ {getTotalAmount()}</h3>
                            </div>
                            <button className='w-full md:w-64 h-12 outline-none border-none bg-[#fefefe] text-black text-lg font-semibold uppercase rounded-lg mt-4'>Proceed to Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItem;
