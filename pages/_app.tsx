import "../styles/globals.css";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "../redux/Store";
import {AuthenticationContainer} from "../container/authentication";
import {UseValidationProvider} from "../utilities/hook/useValidation";
import {UserIsLoggedProvider} from "../utilities/hook/useUserIsLogged";
import {UseParserProvider} from "../utilities/hook/useParser";
import  Head  from "next/head";
import { useSocket } from "../utilities/hook/socketConnect";
import { useEffect, useState } from "react";
import  { io } from "socket.io-client";
import { useRouter } from 'next/router'
import { AuthAPI } from "../services/authAPI";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as userAction from '../redux/Action/user/userActions';

import * as authAction from '../redux/Action/auth/authActions';
import PageChangeLoader from "utilities/PageChangeLoader";
import { setSocket } from "redux/Action/app/appActions";



function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()


    /*---------------------------------------------
                      SOCKET
      ---------------------------------------------- */
    const [savedsocket, setSavedSocket] = useState<any>(null);

    const connect = () => {
        const socket = io(
          process.env.SOCKET_URL || "http://localhost:8000"
        );
        setSavedSocket(socket);
        store.dispatch(setSocket(socket))

        // connect with this socket
        socket.connect(); 

        // connect with backend 
        socket.on("connect", () => {
            // console.log(
            //     socket.id,
            //   "USER SOCKET ID"
            // );
          });
    };

    const checkAccessTokenExist= async(code?:string | string[])=> {
        const result = await AuthAPI.checkAccessTokenExists(code)
        const user = result.data?.user

       if(user){
        store.dispatch(
          authAction.siginToFirebaseAccountReceive(
            user?.email,
            'token'
          )
        );
      
        store.dispatch(
          userAction.getUserProfile(JSON.parse(localStorage.getItem('profile')!)?.email)
        );
        localStorage.setItem('profile', JSON.stringify(user));
       }
    }


      useEffect(() => {
        // connect to socket
        connect();

        // if routing from other auths
        if(router.query.q === "google" && router.query.code){
          checkAccessTokenExist(router.query.code)

            // we get the code from route passed from google
            localStorage.setItem("code", router?.query?.code.toString())
            if(localStorage.getItem("redirectPath")){
                // route to the path user was previously in       
                router.replace(JSON.parse(localStorage.getItem("redirectPath")!)) 
               // remove userpath from localStorage once user is redirected
               localStorage.removeItem("redirectPath")
             
            }
        }
      }, []);
    
      useSocket(savedsocket);

    return (
        <Provider store={store}>
             <ToastContainer   />
            <UseParserProvider>
                <UseValidationProvider>
                    <UserIsLoggedProvider>
                        <AuthenticationContainer>
                        <PageChangeLoader/>
                            <Component {...pageProps} />
                        </AuthenticationContainer>
                    </UserIsLoggedProvider>
                </UseValidationProvider>
            </UseParserProvider>
        </Provider>
    );
}

export default MyApp;
