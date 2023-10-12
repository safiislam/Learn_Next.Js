import getSingleProduct from '@/utils/getSingleProduct';
import React from 'react';

const SingleProducts = async ({params}) => {
    const data = await getSingleProduct(params.id)
    return (
        <div>
            <p>{data.title}</p>
        </div>
    );
};

export default SingleProducts;