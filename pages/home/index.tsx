import type {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {useGetCategories} from "utilities/hook/useGetCategory";
import {useUserIsLogged} from "utilities/hook/useUserIsLogged";
import AuthenticatedLayout from "../../components/Layouts/authenticatedLayout";

import { useParser } from 'utilities/hook/useParser';
import MobileProfileLayout from "components/Layouts/mobileProfileLayout";


const HomePage = () => {

    const { parserData } = useParser();

    const deviceType = parserData?.device.type;
  
    const {push} = useRouter();



    useEffect(() => {
        typeof window !== "undefined" && JSON.parse(localStorage.getItem('profile')!)
        if (!localStorage.getItem('profile')) {
            push("/");
        }
    },[]);
 
    return !deviceType? <AuthenticatedLayout/>: <MobileProfileLayout/> 
};

export default HomePage;
