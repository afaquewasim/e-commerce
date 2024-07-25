<<<<<<< HEAD
import React from 'react'
import data from '../Assets/data'
import Items from '../items/Items'

const RelatedProduct = () => {
    return (
        <div className='flex flex-col items-center gap-3 h-[90vh]'>
            <h1 className='text-2xl font-semibold'>Recomemnded Products</h1>
            <hr className='w-[125px] mb-4 h-[6px] bg-black border-0 rounded-lg' />
            <div className="item grid grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-4 items-center justify-items-center sm:grid-cols-2">
                {data.map((item, i)=> {
                    return <Items
                    key={i}
                    id={item.id} 
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
                })}
            </div>
        </div>
    )
}

=======
import React from 'react'
import data from '../Assets/data'
import Items from '../items/Items'

const RelatedProduct = () => {
    return (
        <div className='flex flex-col items-center gap-3 h-[90vh]'>
            <h1 className='text-2xl font-semibold'>Recomemnded Products</h1>
            <hr className='w-[125px] mb-4 h-[6px] bg-black border-0 rounded-lg' />
            <div className="item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 items-center justify-items-center sm:grid-cols-2">
                {data.map((item, i)=> {
                    return <Items
                    key={i}
                    id={item.id} 
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                />
                })}
            </div>
        </div>
    )
}

>>>>>>> fcafcfe52fb35f96c10e51c8e3077b43f209484c
export default RelatedProduct