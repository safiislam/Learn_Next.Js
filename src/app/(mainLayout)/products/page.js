import getAllProducts from "@/utils/getAllProducts";


const ProductPage = async ({searchParams}) => {
    console.log(searchParams)
    const allProducts  = await getAllProducts(searchParams.categoryId) 
    return (
        <div>
            {
                allProducts.map(products=> <p key={products.id}>{products.title}</p>)
            }
        </div>
    );
};

export default ProductPage;