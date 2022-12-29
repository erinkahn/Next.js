'use client'; // must use client component if using hooks below

import React, {useEffect, useState} from 'react';
// import getDataFromDb from '../../../pages/api/getdata-lib';
import Image from 'next/image';

export default function Product(props) {
    const slug = props.params.id;
    // const product = getDataFromDb(slug);
    
    const [dataResponse, setDataResponse] = useState([])

    useEffect(() => {
        async function getProductData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getdata-lib`;
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            console.log(res.products, 'response')
            setDataResponse(res.products)
        }
        getProductData();
    }, []);
    return <>
        <div>
            <ul className="grid grid-cols-3 gap4">
                {/* {dataResponse.map((product, p) => (
                    <li className="text-center" key={`product-${p}`}>
                        <Image 
                            width="300" 
                            height="300" 
                            src={`/images/${product.PRODUCT_IMG}`} 
                            alt={product.PRODUCT_NAME}
                        />
                        <p><b>{product.PRODUCT_NAME}</b></p>
                        <p><i>${product.PRODUCT_COST}.00</i></p>
                    </li>
                ))} */}
            </ul> 
        </div>
    </>
}