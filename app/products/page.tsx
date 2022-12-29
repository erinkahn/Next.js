'use client'; // must use client component if using hooks below

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage() {
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
            <h1>Products Page</h1>
            <ul className="grid grid-cols-3 gap4">
                {dataResponse.map((product, p) => (
                    <li className="text-center" key={`product-${p}`}>
                        <Link href={`/products/${product.PRODUCT_ID}`}>
                            <Image 
                                width="300" 
                                height="300" 
                                src={`/images/${product.PRODUCT_IMG}`} 
                                alt={product.PRODUCT_NAME}
                            />
                            <p><b>{product.PRODUCT_NAME}</b></p>
                            <p><i>${product.PRODUCT_COST}.00</i></p>
                        </Link>
                    </li>
                ))}
            </ul> 
        </div>
    </>
}