import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BackToQloudCityHeader from '../../../components/Organisms/backToQloudCityHeader';
import OnBoardingFlowModal from '../../../components/Organisms/onBoardingFlowModal';
import { UseOnBoardingProvider } from '../../../container/onBoarding';
import { getAllInterestsReceive } from '../../../redux/Action/app/appActions';
import { appAPI } from '../../../services/appApi';

type OnBoardingProps = {
  interests: [];
};

const OnBoarding = ({ interests }: OnBoardingProps) => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllInterestsReceive(interests));
  //   }, [dispatch, interests]);

  return (
    <UseOnBoardingProvider>
      <BackToQloudCityHeader withLogo />
      <OnBoardingFlowModal />
    </UseOnBoardingProvider>
  );
};

export default OnBoarding;

// export const getStaticProps = async () => {
//     try {
//         const response = await appAPI.getAllInterests();
//         const interests = response.data.data;

//         return {
//             props: {
//                 interests,
//             },
//         };
//     } catch (err) {
//         return {
//             notFound: true,
//         };
//     }
// };
