import Link from "next/link";


const SingleCategories = ({item}) => {
    const {id ,name } = item
    return (
        <div>
           <Link href={`/products?categoryId=${id}`}>
            <h1>{name}</h1>
           </Link>
        </div>
    );
};

export default SingleCategories;