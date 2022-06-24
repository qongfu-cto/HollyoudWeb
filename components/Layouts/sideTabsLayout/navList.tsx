import ProfileBasicInfo from 'components/Organisms/profileBacicInfo';
import ProfilePageGeneralInfo from 'components/Organisms/profilePageGeneralInfo';
import ProfilePageInfo from 'components/Organisms/profilePageInfo';

export const navList = [
  {
    id: 1,
    label: 'My Account',
    title: 'General Information',
    description: 'Lorem Ipsum Dolor',
    tabPage: true,
    route: 'account',
    component: <ProfilePageGeneralInfo />
  },
  {
    id: 2,
    label: 'Profile Info',
    title: 'Profile Info',
    description: 'Lorem Ipsum Dolor',
    tabPage: true,
    route: 'profile-info',
    component: <ProfilePageInfo />
  },
  {
    id: 3,
    label: 'Basic Info',
    title: 'Basic Info',
    description: 'Lorem Ipsum Dolor',
    tabPage: true,
    route: 'basic-info',
    component: <ProfileBasicInfo />
  },
  // {
  //   id: 4,
  //   label: 'My Interests',
  //   title: 'My Interests',
  //   description: 'Lorem Ipsum Dolor',
  //   tabPage: false,
  //   route: 'account',
  //   component: <div>My Interests</div>
  // }
];
