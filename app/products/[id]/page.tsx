import Image from "next/image";

const fetchProduct = async(slug) => {
    const apiUrlEndpoint = `http://localhost:3000/api/getRespFromDb/`;
    const postData = {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id:slug,
        }),
    };
    const response = await fetch(apiUrlEndpoint, postData);
    const res = await response.json();
    const prodArray = res.products.map(prod => prod);
    const productId = prodArray.find(prod => prod.PRODUCT_ID == slug);
    // console.log(productId, productId.PRODUCT_ID)
    return productId;
}

async function Product(props) {
    const slug = props.params.id;
    const product = await fetchProduct(slug)

    return <>
        <h1 className="text-center mb-7">Product {slug}</h1>
        <div className="text-center grid place-items-center">
            <Image 
                width="300" 
                height="300" 
                src={`/images/${product.PRODUCT_IMG}`} 
                alt={product.PRODUCT_NAME}
            />
             <p>{product.PRODUCT_NAME}</p>
            <div><b>${product.PRODUCT_COST}.00</b></div>
        </div>
    </>
}

export default Product;