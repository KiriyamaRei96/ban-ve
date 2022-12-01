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

import { CheckOut } from '../CheckOut/Loadable';
import { Historydetail } from '../History/detail/Loadable';
import { Account } from '../Account/Loadable';
import { PaymentCallback } from '../PaymentCallback/Loadable';
const islogin = true;
export function App() {
  const { i18n } = useTranslation();
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
        {islogin && (
          <Route path="/" element={<Home />}>
            <Route index element={<Booking />}></Route>
            <Route path="History" element={<History />}></Route>
            <Route path="History/:id" element={<Historydetail />}></Route>
            <Route path="PaymentCallback" element={<PaymentCallback />}></Route>
            <Route path="Account" element={<Account />}></Route>
            <Route path="CheckOut" element={<CheckOut />}></Route>
          </Route>
        )}
        {!islogin && <Route path="/" element={<Login />} />}
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
// eslint-disable @typescript-eslint/no-unused-vars
