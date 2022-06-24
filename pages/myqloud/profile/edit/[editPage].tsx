import ProfileLayout from 'components/Layouts/profileLayout';
import SideTabs from 'components/Layouts/sideTabsLayout';
import MyQloudNavBar from 'components/Molecules/MyQloudNavBar';
import MyQloudNotificationBar from 'components/Molecules/MyQloudNotificationBar';
import { ProfileContainer } from 'container/profile';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

function ManageAccount() {
  const isServer = () => typeof window === `undefined`;

  return isServer() ? null : (
    <ProfileContainer>
      <ProfileLayout route="./../../../">
        <SideTabs home={2} />
      </ProfileLayout>
    </ProfileContainer>
  );
}

export default ManageAccount;
