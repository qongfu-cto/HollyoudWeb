import type {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useGetCategories} from "utilities/hook/useGetCategory";
import {useUserIsLogged} from "utilities/hook/useUserIsLogged";
import QloudShopLayout from "../../components/Layouts/qloudShopLayout";


const HomePage = () => {
    const {push} = useRouter();
    const {isLogged} = useUserIsLogged();
    useGetCategories();
    useEffect(() => {
        // if (!isLogged) {
        //     push("/");
        // }
    },[]);
 
    return  <QloudShopLayout/> 
};

export default HomePage;
