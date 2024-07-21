import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import starIcon from '../Assets/star_icon.png';
import starDullIcon from '../Assets/star_dull_icon.png'; 
import Deliverd from '../Deliverd/Deliverd';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='flex flex-col md:flex-row mx-4 md:mx-32 my-4'>
            <div className="left flex flex-col md:flex-row md:gap-4">
                <div className="imgList flex flex-col gap-4 md:w-1/3">
                    <img className='w-full object-cover' src={product.image} alt="" />
                    <img className='w-full object-cover' src={product.image} alt="" />
                    <img className='w-full object-cover' src={product.image} alt="" />
                    <img className='w-full object-cover' src={product.image} alt="" />
                </div>
                <div className="imgDisplay md:w-2/3">
                    <img className='w-full h-[350px] object-cover' src={product.image} alt="" />
                </div>
            </div>
            <div className="right flex flex-col md:ml-16 md:w-1/3">
                <h1 className='text-2xl md:text-4xl'>{product.name}</h1>
                <div className="star flex items-center mt-4 gap-2 text-base">
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="price flex flex-col md:flex-row my-4 text-xl md:text-2xl font-semibold gap-4">
                    <div className="oldPrice text-red-600 line-through">${product.old_price}</div>
                    <div className="newPrice text-green-700">${product.new_price}</div>
                </div>
                <div className="description text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo sequi nesciunt voluptas unde autem itaque, sint eum vel ipsum quas tempore suscipit facilis omnis modi, provident possimus laborum ipsam!
                    Maxime repudiandae sequi voluptatum distinctio sapiente harum adipisci alias maiores ratione esse, minus est rem vero quisquam cumque, quo excepturi. Cumque quibusdam laboriosam distinctio dolorem minus porro ducimus accusamus repudiandae?
                </div>
                <div className="sizes mt-5">
                    <h1 className='text-lg md:text-xl'>Select Size</h1>
                    <div className='flex flex-wrap gap-3 my-5'>
                        <p className='py-2 px-4 bg-[#fbfbfb] border border-1 border-[#ebebeb] rounded-lg cursor-pointer text-black'>S</p>
                        <p className='py-2 px-4 bg-[#fbfbfb] border border-1 border-[#ebebeb] rounded-lg cursor-pointer text-black'>M</p>
                        <p className='py-2 px-4 bg-[#fbfbfb] border border-1 border-[#ebebeb] rounded-lg cursor-pointer text-black'>L</p>
                        <p className='py-2 px-4 bg-[#fbfbfb] border border-1 border-[#ebebeb] rounded-lg cursor-pointer text-black'>XL</p>
                        <p className='py-2 px-4 bg-[#fbfbfb] border border-1 border-[#ebebeb] rounded-lg cursor-pointer text-black'>XXL</p>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}} className='w-full md:w-fit py-3 px-8 text-xl md:text-2xl font-semibold bg-[#696969] hover:bg-[#787878] rounded-lg mb-4'>
                    Add to Cart
                </button>
                <Deliverd />
            </div>
        </div>
    );
}

export default ProductDisplay;
