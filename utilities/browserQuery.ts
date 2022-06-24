import { addDashBetweenStrings } from "./utils";

export const getQuery = (
  categoryData?: LocaleStorageCategory | null|any,
  searchData?: localStorageSearch | null|any
) => {

  let query;
  if (categoryData) {
    Object.keys(categoryData).forEach(key => {

      categoryData[key]= addDashBetweenStrings(categoryData[key]).replace("&", "%26")
    
    });

    //query = `/?id=${categoryData.id}&topCategory=${categoryData.topCategory}&topCategoryName=${categoryData?.topCategoryName}&topCategoryIcon=${categoryData?.topCategoryIcon}&subCategory=${categoryData.subCategory}&subCategoryId=${categoryData.subCategoryId}&type=${categoryData.type}&name=category`;
    query=`/?id=${categoryData.id}&topCategory=${categoryData.topCategory}&topCategoryName=${categoryData?.topCategoryName}&subCategory=${categoryData.subCategory}&subCategoryId=${categoryData.subCategoryId}&type=${categoryData.type}&name=category`
  } else if (searchData) {
    query = `/?category=${searchData.category}&id=${searchData.id}&mainCategoryType=${searchData.mainCategoryType}&searchText=${searchData.searchText}&type=${searchData.type}&name=search`;
  }
  return query;
};


export const placeProfileQueryHandler=(name:string)=>{

}

//TODO:  Queries convert list
const queriesConvert=[
{key:"<",value:"%3C"},
{key:">",value:"%3E"},
{key:"#",value:"%23"},
{key:"%",value:"%25"},
{key:"+",value:"%2B"},
{key:"{",value:"%7B"},
{key:"}",value:"%7D"},
{key:"|",value:"%7C"},
{key:'^',value:"%5E"},
{key:'~',value:"%7E"},
{key:'[',value:"%5B"},
{key:']',value:"%5D"},
{key:'‘',value:"%60"},
{key:';',value:"%3B"},
{key:'/',value:"%2F"},
{key:'?',value:"%3F"},
{key:':',value:"%3A"},
{key:'@',value:"%40"},
{key:'=',value:"%3D"},
{key:'&',value:"%26"},
{key:'$',value:"%24"},


]