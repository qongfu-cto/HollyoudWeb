import { useGetCategories } from 'utilities/hook/useGetCategory';

export const GetCategoryIcon=()=>{

    const {categories, getCategoryIcon, subCategories}=useGetCategories()

    const getIconsArray=()=>{
        const iconsArray= categories.map(category=>{
        return{
            id:category._id,
            icon:getCategoryIcon(category.icons)
        }
    })
    
    return iconsArray
    }
   
 return{
     getIconsArray,
     categories
 }
  
}