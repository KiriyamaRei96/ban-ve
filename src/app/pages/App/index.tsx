/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
// eslint-disable @typescript-eslint/no-unused-vars
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';

import { Booking } from '../Booking/Loadable';
import { Home } from '../Home/Loadable';
import { Login } from '../Login/Loadable';
import { History } from '../History/Loadable';
import NotificationsSystem, {
  atalhoTheme,
  setUpNotifications,
  dismissNotification,
} from 'reapop';
import { CheckOut } from '../CheckOut/Loadable';
import { Historydetail } from '../History/detail/Loadable';
import { Account } from '../Account/Loadable';
import { PaymentCallback } from '../PaymentCallback/Loadable';
import { useAppSlice } from './slice';
import { auth } from 'utils/helper';
import { ProtectedRoute } from './component/ProtectedRoute';
import { selectNotifications } from './slice/selector';
import { useDispatch, useSelector } from 'react-redux';
setUpNotifications({
  defaultProps: {
    allowHTML: true,
    dismissible: true,
    dismissAfter: 2000,
    transition: 'slide',
    position: 'bottom-right',
    showDismissButton: true,
  },
});
const islogin = true;
export function App() {
  const { i18n } = useTranslation();
  const { actions } = useAppSlice();
  const notifications = useSelector(selectNotifications);
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute auth={!auth()} navigate={'/Login'}>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<Booking />}></Route>
          <Route path="History" element={<History />}></Route>
          <Route path="History/:id" element={<Historydetail />}></Route>
          <Route path="PaymentCallback" element={<PaymentCallback />}></Route>
          <Route path="Account" element={<Account />}></Route>
          <Route path="CheckOut" element={<CheckOut />}></Route>
        </Route>
        <Route
          path="/Login"
          element={
            <ProtectedRoute auth={auth()} navigate={'/'}>
              <Login />
            </ProtectedRoute>
          }
        />
      </Routes>
      <NotificationsSystem
        theme={atalhoTheme}
        notifications={notifications}
        dismissNotification={id => dispatch(dismissNotification(id))}
      />
      <GlobalStyle />
    </BrowserRouter>
  );
}
// eslint-disable @typescript-eslint/no-unused-vars
