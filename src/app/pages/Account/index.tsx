import React from 'react';
import { bg, camera, edit } from 'asset/export';
import InfoUser from './component/InfoUser';
import Profile from './component/Profile';
export interface AccountProps {}

export function Account(props: AccountProps) {
  return (
    <div className="--content">
      <div className="account ">
        <div className="row">
          <InfoUser />
          <Profile />
        </div>
      </div>
    </div>
  );
}
