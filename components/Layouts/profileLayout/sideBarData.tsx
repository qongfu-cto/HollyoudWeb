import city_inactive from '../../../assets/icons/city_inactive.svg';
import city_active from '../../../assets/icons/city_active.svg';
import me_inactive from '../../../assets/icons/me_inactive.svg';
import me_active from '../../../assets/icons/me_active.svg';
import helpdesk_inactive from '../../../assets/icons/helpdesk_inactive.svg';
import helpdesk_active from '../../../assets/icons/helpdesk_active.svg';

export const sideBarData = {
  topSection: [
    {
      id: 1,
      title: 'The City',
      activeLogo: city_active,
      inactiveLogo: city_inactive
    },
    {
      id: 2,
      title: 'Me',
      activeLogo: me_active,
      inactiveLogo: me_inactive
    }
  ],
  bottomSection: [
    // {
    //     id: 3,
    //     title: 'Help Desk',
    //     activeLogo: helpdesk_active,
    //     inactiveLogo: helpdesk_inactive
    // }
  ]
};
