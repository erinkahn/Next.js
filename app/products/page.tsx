'use client'; // must use client component if using hooks below

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductPage() {
    const [dataResponse, setDataResponse] = useState([])

    useEffect(() => {
        async function getProductData() {
            const apiUrlEndpoint = `http://localhost:3000/api/getRespFromDb`;
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            setDataResponse(res.products)
        }
        getProductData();
    }, []);
    
    return <>
        <div>
            <h1 className="text-center mb-7">Products Page (mysql db data)</h1>
            <ul className="grid grid-cols-3 gap-4">
                {dataResponse.map((product, p) => (
                    <li className="text-center" key={`product-${p}`}>
                        <Link href={`/products/${product.PRODUCT_ID}`}>
                            <Image 
                                width="300" 
                                height="300" 
                                src={`/images/${product.PRODUCT_IMG}`} 
                                alt={product.PRODUCT_NAME}
                            />
                            <p>{product.PRODUCT_NAME}</p>
                            <p><b>${product.PRODUCT_COST}.00</b></p>
                        </Link>
                    </li>
                ))} 
            </ul> 
        </div>
    </>
}