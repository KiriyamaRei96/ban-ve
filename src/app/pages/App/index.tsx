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

import { Login } from '../Login';
import Home from '../Home';
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
        {islogin && <Route path="/" element={<Home />} />}
        {!islogin && <Route path="/" element={<Login />} />}
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
// eslint-disable @typescript-eslint/no-unused-vars
