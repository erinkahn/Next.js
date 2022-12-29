import Link from 'next/link';
import Image from 'next/image';
import { ProductDbData } from "../interfaces/ProductDbData";

export default function ProductPreview(props: ProductDbData) {
    return <>
        <ul className="grid grid-cols-3 gap4">
            <li className="text-center">
                <Link href={`/products/${props.PRODUCT_ID}`}>
                    <Image 
                        width="300" 
                        height="300" 
                        src={`/images/${props.PRODUCT_IMG}`} 
                        alt={props.PRODUCT_NAME}
                    />
                    <p><b>{props.PRODUCT_NAME}</b></p>
                    <p><i>${props.PRODUCT_COST}.00</i></p>
                </Link>
            </li>
        </ul> 
    </>
}