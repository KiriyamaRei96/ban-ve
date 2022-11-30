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

import { HomePage } from '../HomePage/Loadable';

import { useTranslation } from 'react-i18next';
import { NotFoundPage } from '../NotFoundPage/Loadable';
import { Login } from '../Login';
const islogin = false;
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
        {islogin && <Route path="/" element={<HomePage />} />}
        {!islogin && <Route path="/" element={<Login />} />}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
// eslint-disable @typescript-eslint/no-unused-vars
