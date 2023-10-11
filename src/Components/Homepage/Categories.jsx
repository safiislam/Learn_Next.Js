import loadAllCategoryes from "@/utils/loadAllCategoryes";
import SingleCategories from "./SingleCategories";


const Categories = async () => {
    const categoryes = await loadAllCategoryes()
    return (
        <div>
            {
                categoryes.map(item=> <SingleCategories key={item.id} item ={item} />)
            }
        </div>
    );
};

export default Categories;