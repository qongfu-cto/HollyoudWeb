import type {GetServerSideProps} from "next";
import LandingPageLayout from "../components/Layouts/landingPageLayout";
import nookies from "nookies";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/Reducer/root";
import {useEffect, useMemo, useState} from "react";
import {receiveToken} from "../redux/Action/auth/authActions";
import {useUserIsLogged} from "../utilities/hook/useUserIsLogged";
import {useRouter} from "next/dist/client/router";
import SignupSubmitLoader from "../components/Molecules/SignupSubmitLoader";
import QLandingPageExplorer from "../components/Organisms/QLandingPageExplorer";
import QMobileLandingPageExplorer from "../components/Organisms/QLandingPageExplorer/mobileIndex";
import MarketingPage from "components/Organisms/maketingPage";
import {appAPI} from "services/appApi";
import {onMobile} from "utilities/utils";
import {SearchContainer} from "container/search";
import {useParser} from "utilities/hook/useParser";
import {useHandleResize} from "utilities/hook/useHandleResize";
import Loading from "components/Molecules/loading";
import PageHeader from "components/Atoms/pageHeader";
import { getUserGeolocationReceive } from "redux/Action/user/userActions";
import PageChangeLoader from "utilities/PageChangeLoader";

type AppProps = {
    token: string;
    uid: string;
    categories: [];
};
const App = ({token, uid, categories}: AppProps) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const {loadingProfile, path} = useSelector((state: RootState) => {
        return {
            loadingProfile: state.user.loading.getUserData,
            getProfileError: state.user.errors.profile,
            path: state.user.path,
        };
    });


    const {isLogged} = useUserIsLogged();
    const {push} = useRouter();
    const {parserData} = useParser();

    const showLoading = loadingProfile || loading;

    useEffect(() => {
        if (token && uid) {
            dispatch(receiveToken(token, uid));
        }
    }, [token, uid, dispatch]);

    useMemo(() => {
        if (isLogged && path) {
            // HESSA
            // setLoading(true);
            // push(path).then(() => setLoading(false));
        }
    }, [isLogged, path]);
    const [width] = useHandleResize();

    
//   useEffect(() => {

//     if (navigator.permissions && navigator.permissions.query) {
//       //try permissions APIs first
//       navigator.permissions
//         .query({ name: 'geolocation' })
//         .then(function(result) {
//           // Will return ['granted', 'prompt', 'denied']
//           const permission = result.state;
//           if (permission === 'granted' ) {
      
//             onGetCurrentLocation();
//           }
//           if(permission === 'denied'){
          
//                 sessionStorage.removeItem('currentLocation');
//                 const location = sessionStorage.getItem('geolocation');
    
//                 const locationData = location ? JSON.parse(location) : null;
    
//                 dispatch(getUserGeolocationReceive(locationData));
              
//           }
//         });
//     } else if (navigator.geolocation) {
//       //then Navigation APIs
//       onGetCurrentLocation();
//     }
//   }, []);

//   const onGetCurrentLocation = () => {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       //imitate map latlng construct
//       const userPosition = {
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       };
//       sessionStorage.setItem('currentLocation', JSON.stringify(userPosition));
 
//     });
//   };



    return (
        <>
     
        <PageHeader 
					// pageTitle="QloudCity"
					pageUrl={'https://hollyoud.com'}
					meta={`Connect • Collaborate • Create`}
					// pageImage={`/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpeopleincity.0c842cd7.png&w=640&q=75`}
                    pageImage={`web/qloudcity.png`}
				/>
            {showLoading ? (
                onMobile() || width < 768 ?
                    <Loading/> :
                    <SignupSubmitLoader openModal={showLoading} message=""/>
                 
            ) : (
                <LandingPageLayout
                    search={
                        <SearchContainer>
                            {
                                onMobile() || width < 768
                                    ? <QMobileLandingPageExplorer categories={categories}/>
                                    : <QLandingPageExplorer categories={categories}/>
                            }
                        </SearchContainer>
                    }
                >
                    {/* <MarketingPage/> */}
                </LandingPageLayout>
            )}
        </>
    );
};
export default App;

export const getServerSideProps: GetServerSideProps = async (context) => {
   console.log(context)
    try {
        const cookies = nookies.get(context);
        const token = cookies?.token ?? null;
        const uid = cookies?.uid ?? null;
        const res = await appAPI.getCatagories();
        const categories = res.data.categories;

        return {
            props: {
                token,
                uid,
                categories,
            },
        };
    } catch (err) {
        // context.res.writeHead(302, { location: "/" });
        // context.res.end();

        return {props: []};
    }
};
