import getAllProducts from "@/utils/getAllProducts";
import Link from "next/link";

const ProductPage = async ({ searchParams }) => {
  console.log(searchParams);
  const allProducts = await getAllProducts(searchParams.categoryId);
  return (
    <div>
      {allProducts.map((products) => (
        <Link href={`/products/${products.id}`} key={products.id}>
          <p >{products.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;
