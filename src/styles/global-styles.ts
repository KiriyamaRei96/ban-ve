import {
    createGlobalStyle
}

from 'styled-components';

import {
    StyleConstants
}

from './StyleConstants';
import sunWorldBold from '../fonts/SunWorld-Bold.eot';
import sunWorldBold2 from '../fonts/SunWorld-Bold.eot?#iefix';
import sunWorldBold3 from '../fonts/SunWorld-Bold.woff2';
import sunWorldBold4 from '../fonts/SunWorld-Bold.woff';
import sunWorldBold5 from '../fonts/SunWorld-Bold.ttf';
import sunWorldBold6 from '../fonts/SunWorld-Bold.svg';

import sunWorldLightOblique from '../fonts/SunWorld-LightOblique.eot';
import sunWorldLightOblique2 from '../fonts/SunWorld-LightOblique.eot?#iefix';
import sunWorldLightOblique3 from '../fonts/SunWorld-LightOblique.woff2';
import sunWorldLightOblique4 from '../fonts/SunWorld-LightOblique.woff';
import sunWorldLightOblique5 from '../fonts/SunWorld-LightOblique.ttf';
import sunWorldLightOblique6 from '../fonts/SunWorld-LightOblique.svg';

import sunWorldRegular from '../fonts/SunWorld-Regular.eot';
import sunWorldRegular2 from '../fonts/SunWorld-Regular.eot?#iefix';
import sunWorldRegular3 from '../fonts/SunWorld-Regular.woff2';
import sunWorldRegular4 from '../fonts/SunWorld-Regular.woff';
import sunWorldRegular5 from '../fonts/SunWorld-Regular.ttf';
import sunWorldRegular6 from '../fonts/SunWorld-Regular.svg';

import sunWorldOblique from '../fonts/SunWorld-Oblique.eot';
import sunWorldOblique2 from '../fonts/SunWorld-Oblique.eot?#iefix';
import sunWorldOblique3 from '../fonts/SunWorld-Oblique.woff2';
import sunWorldOblique4 from '../fonts/SunWorld-Oblique.woff';
import sunWorldOblique5 from '../fonts/SunWorld-Oblique.ttf';
import sunWorldOblique6 from '../fonts/SunWorld-Oblique.svg';

import sunWorldLight from '../fonts/SunWorld-Light.eot';
import sunWorldLight2 from '../fonts/SunWorld-Light.eot?#iefix';
import sunWorldLight3 from '../fonts/SunWorld-Light.woff2';
import sunWorldLight4 from '../fonts/SunWorld-Light.woff';
import sunWorldLight5 from '../fonts/SunWorld-Light.ttf';
import sunWorldLight6 from '../fonts/SunWorld-Light.svg';

import sunWorldHeavy from '../fonts/SunWorld-Heavy.eot';
import sunWorldHeavy2 from '../fonts/SunWorld-Heavy.eot?#iefix';
import sunWorldHeavy3 from '../fonts/SunWorld-Heavy.woff2';
import sunWorldHeavy4 from '../fonts/SunWorld-Heavy.woff';
import sunWorldHeavy5 from '../fonts/SunWorld-Heavy.ttf';
import sunWorldHeavy6 from '../fonts/SunWorld-Heavy.svg';

export const GlobalStyle=createGlobalStyle`
/* html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  } */

@font-face {
    font-family: 'Sun World regular';
    src: url(${sunWorldRegular});
    src: url(${sunWorldRegular2}) format('embedded-opentype'),
    url(${sunWorldRegular3}) format('woff2'),
    url(${sunWorldRegular4}) format('woff'),
    url(${sunWorldRegular5}) format('truetype'),
    url(${sunWorldRegular6}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Sun World Oblique';
    src: url(${sunWorldOblique});
    src: url(${sunWorldOblique2}) format('embedded-opentype'),
    url(${sunWorldOblique3}) format('woff2'),
    url(${sunWorldOblique4}) format('woff'),
    url(${sunWorldOblique5}) format('truetype'),
    url(${sunWorldOblique6}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Sun World LightOblique';
    src: url(${sunWorldLightOblique});
    src: url(${sunWorldLightOblique2}) format('embedded-opentype'),
    url(${sunWorldLightOblique3}) format('woff2'),
    url(${sunWorldLightOblique4}) format('woff'),
    url(${sunWorldLightOblique5}) format('truetype'),
    url(${sunWorldLightOblique6}) format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Sun World bold';
    src: url(${sunWorldBold});
    src: url(${sunWorldBold2}) format('embedded-opentype'),
    url(${sunWorldBold3}) format('woff2'),
    url(${sunWorldBold4}) format('woff'),
    url(${sunWorldBold5}) format('truetype'),
    url(${sunWorldBold6}) format('svg');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Sun World light';
    src: url(${sunWorldLight});
    src: url(${sunWorldLight2}) format('embedded-opentype'),
    url(${sunWorldLight3}) format('woff2'),
    url(${sunWorldLight4}) format('woff'),
    url(${sunWorldLight5}) format('truetype'),
    url(${sunWorldLight6}) format('svg');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Sun World heavy';
    src: url(${sunWorldHeavy});
    src: url(${sunWorldHeavy2}) format('embedded-opentype'),
    url(${sunWorldHeavy3}) format('woff2'),
    url(${sunWorldHeavy4}) format('woff'),
    url(${sunWorldHeavy5}) format('truetype'),
    url(${sunWorldHeavy6}) format('svg');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

.--link {
    cursor: pointer;
}

:root {
    --color-1: #303E54;
    --color-2: #AE743D;
    --color-3: #F9B217;
    --color-4: #EA2127;
    --font-body: 'Sun World regular';
    --font-sunOblique: 'Sun World Oblique';
    --font-sunlightoblique: 'Sun World LightOblique';
    --font-sunbold: 'Sun World bold';
    --font-sunlight: 'Sun World light';
    --font-sunheavy: 'Sun World heavy';
}

body {
    font-size: 16px;
    font-family: var(--font-body);
}

.fs-12 {
    font-size: 12px;
}

.fs-14 {
    font-size: 14px;
}

.fs-18 {
    font-size: 18px;
}

.text-white {
    color: #FFF;
}

.fw-bold {
    font-family: var(--font-sunbold);
}

a {
    text-decoration: none;
}

.billplease {
    .--item-bill {
        &:last-child {
            .--money {
                color: var(--color-4);
                font-family: var(--font-sunbold);
            }
        }
    }
}

.button_1 {
    background: var(--color-3);
    box-shadow: 0px 4px 20px rgba(226, 155, 0, 0.3);
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        line-height: 24px;
        margin-left: 8px;
    }
}

.info-ticket {
    .--info {
        background: #F2F2F2;
        padding: 12px 16px;
        border: 1px solid #E7E7E7;
        border-radius: 8px;
        margin-bottom: 10px;

        ul {
            padding-left: 0;
            list-style: none;
            margin-bottom: 0;

            &:nth-child(1) {
                padding-right: 40px;
                margin-right: 40px;
                border-right: 1px dashed #C9C9C9;

                li {
                    display: flex;

                    span {
                        &:nth-child(1) {
                            min-width: 110px;
                            width: max-content;
                            margin-right: 16px;
                        }
                    }

                    &:nth-child(1) {
                        span:nth-child(2) {
                            font-family: var(--font-sunbold);
                        }
                    }

                    &:nth-child(3) {
                        span:nth-child(2) {
                            color: var(--color-3);
                        }
                    }
                }
            }

            &:nth-child(2) {
                li {
                    display: flex;

                    span {
                        &:nth-child(1) {
                            min-width: 70px;
                            margin-right: 24px;
                        }
                    }
                }
            }
        }
    }

    .tabble-ticket {
        border: 1px solid #E7E7E7;
        border-radius: 8px;
        padding: 24px 16px 16px;
        display: flex;
        flex-flow: column;
        align-items: flex-end;

        .--item-tableticket {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #E7E7E7;
            padding: 8px 0;

            &:nth-child(1) {
                font-family: var(--font-sunbold);
                padding: 0 0 20px;
                font-size: 14px;
            }

            &:nth-child(n+2) {
                p {
                    &:nth-child(5) {
                        span {
                            &:nth-child(1) {
                                color: var(--color-4);
                            }
                        }
                    }
                }
            }

            p {
                margin-bottom: 0;
                display: flex;
                flex-flow: column;

                img {
                    width: 20px;
                }

                &:nth-child(1) {
                    width: 7%;

                }

                &:nth-child(2) {
                    width: 38%;
                }

                &:nth-child(3) {
                    width: 20%;
                    text-align: right;
                }

                &:nth-child(4) {
                    width: 15%;
                    text-align: right;
                }

                &:nth-child(5) {
                    width: 20%;
                    text-align: right;
                }

                span {
                    &:nth-child(2) {
                        font-size: 12px;
                    }
                }
            }
        }

        .billplease {
            margin-top: 16px;
            min-width: 35%;
            border-left: 1px dashed #C9C9C9;
            padding-left: 16px;

            .--item-bill {
                span {
                    &:nth-child(2) {
                        margin-left: 1rem;
                    }
                }
            }
        }
    }

    .form {
        background: #F2F2F2;
        border: 1px solid #E7E7E7;
        border-radius: 8px;
        padding: 16px;

        .form-group {
            margin-bottom: 4px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        label {
            color: #2C2C2C;
            margin-bottom: 4px;
            opacity: 0.3;
        }

        input {
            background: #FFFFFF;
            width: 100%;
            border: 1px solid #E7E7E7;
            border-radius: 4px;
            height: 32px;

            &:focus {
                outline: none;
            }

            &:focus-visible {
                outline: none;
            }
        }
    }
}

.pagination {
    li {
        margin: 0 2px;
    }

    .page-link {
        box-shadow: unset;
        border-radius: 4px;
        width: 32px;
        height: 32px;
        border: none;
        background: none;
        color: #181818;

        &.active {
            background: var(--color-3);
        }
    }
}

.modal-ticket {
    .modal-dialog {
        max-width: 80%;
    }

    .modal-content {
        position: relative;
    }

    .modal-list {
        border-bottom: 1px solid #E7E7E7;
        padding-bottom: 24px;
    }

    .modal-body {
        padding: 40px 20px;
    }

    .slick-track {
        display: flex;
    }

    .--item-modal {
        padding: 0 20px;

        &.slick-active {
            border-right: 1px solid #E7E7E7;
        }
    }

    .close {
        width: 32px;
        height: 32px;
        z-index: 1;
        position: absolute;
        top: 0;
        background: none;
        border: none;
        right: 0;
    }

    ul {
        padding-left: 0;
        list-style: none;
        margin-bottom: 0;

        li {
            margin-bottom: 8px;
            line-height: 20px;

            &:nth-child(3) {
                font-family: var(--font-sunbold);
            }
        }
    }

    .--qr {
        img {
            width: 140px;
        }
    }

    .button {
        margin-top: 20px;

        .--btn {
            height: 32px;
            padding: 0 10px;

            &:nth-child(1) {
                background: #F2F2F2;
                border-radius: 5px;
                border: none;
            }

            &:nth-child(2) {
                border: 1px solid #F9B217;
                border-radius: 5px;
                background: #FFF;
            }
        }
    }

    .arrow_modal {
        display: flex;

        .arrow {
            border: 1px solid #E7E7E7;
            width: 32px;
            height: 32px;
            display: flex;
            cursor: pointer;
            align-items: center;
            border-radius: 50%;
            justify-content: center;

            &.prevarrow {
                margin-right: 8px;
            }
        }
    }
}

.bb {
    width: 100vw;
    height: 100vh;

    .--left {
        background: #303E54;
        width: 20%;
    }

    .logo {
        height: 65px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);

        img {
            max-width: 140px;
            max-height: 45px;
        }
    }

    .tab-menu {
        height: calc(100% - 65px);
        padding: 20px;

        ::-webkit-scrollbar {
            width: 4px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            background: #888;
        }

        .menu {
            overflow-y: auto;
            margin-bottom: 20px;

            .card {
                background: none;
                border-radius: unset;
                border: none;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                padding-bottom: 1rem;
                margin-bottom: 1.5rem;

                &:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                    margin-bottom: 0;
                }
            }

            button {
                box-shadow: none;
                text-decoration: none;
                width: 100%;
                padding: 0;
                border: none;
            }

            .card-header {
                background-color: unset;
                border-bottom: unset;
                border-radius: unset !important;
            }

            .--sub-menu {
                padding-left: 12px;

                .--item-sub {
                    display: flex;
                    line-height: 20px;
                    margin-bottom: 4px;
                    justify-content: space-between;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    i {
                        display: none;
                        font-size: 8px;
                        background: var(--color-3);
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                    }

                    &.active {
                        color: var(--color-3) !important;

                        i {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #FFF;
                        }
                    }
                }
            }

            .--tab {
                .--item-tab {
                    display: flex;
                    align-items: center;
                    margin-bottom: 6px;
                    padding: 8px 12px;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    &.active {
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 6px;
                    }

                    h6 {
                        margin-left: 8px;
                    }
                }
            }
        }

        .cards {
            border: 1px solid rgba(255, 255, 255, 0.7);
            border-radius: 8px;
            height: 130px;
            position: relative;
            padding: 8px 12px;

            img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                object-fit: contain;
            }

            .--txt {
                position: relative;
                z-index: 1;

                .--refresh {
                    color: #3DD0FF;

                    i {
                        margin-right: 6px;
                    }
                }
            }

            .--number {
                position: relative;
                z-index: 1;
            }
        }
    }

    .--content {
        height: calc(100vh - 65px);
    }

    .--right {
        width: 80%;

        .info {
            background: var(--color-2);
            padding: 0 20px;
            height: 65px;

            .name-tab {
                .--name {
                    margin-left: 20px;
                }
            }

            .avatar {
                width: 44px;
                height: 44px;

                border-radius: 50%;

                margin-right: 40px;
                border: 2px solid #E7E7E7;
                position: relative;

                .--wrapper {
                    height: 100%;
                    width: 100%;
                    border-radius: 50%;
                    overflow: hidden;
                }

                .--drop-down {
                    position: absolute;
                    visibility: hidden;
                    list-style: none;
                    margin: 0;
                    padding: 0 16px;
                    width: 128px;
                    border-radius: 6px;
                    z-index: 2;
                    background-color: white;
                    box-shadow: 0 0 6px -2px #060606;
                    right: -25px;
                    top: 44px;

                    &::after {
                        content: "";
                        position: absolute;
                        top: -18px;
                        right: 34px;
                        border: 10px solid white;
                        border-top-color: transparent;
                        border-right-color: transparent;
                        border-left-color: transparent;
                    }

                    li {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        padding: 10px 0;
                        cursor: pointer;

                        &:first-child {
                            border-bottom: 1px solid #E7E7E7;
                        }
                    }

                }

                &:hover .--drop-down {
                    visibility: visible;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .notification {
                margin-right: 20px;
                position: relative;

                img {
                    width: 30px;
                }

                .--number {
                    position: absolute;
                    background: var(--color-4);
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    top: -4px;
                    right: -4px;
                }

                ::-webkit-scrollbar {
                    width: 4px;
                }

                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                ::-webkit-scrollbar-thumb {
                    background: #888;
                }

                .tab-notifi {
                    top: calc(100% + 20px);
                    position: absolute;
                    background: #FFF;
                    border-radius: 8px;
                    padding-right: 1rem;
                    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.05);
                    left: 50%;
                    transform: translate(-50%, 0);
                    pointer-events: none;
                    opacity: 0;

                    &.active {
                        opacity: 1;
                        pointer-events: auto;
                    }
                }

                .list-notifi {
                    width: 350px;
                    max-height: 350px;
                    padding: 1rem;
                    overflow-y: auto;

                    .--item-notifi {
                        display: flex;
                        margin-bottom: 12px;

                        &:last-child {
                            margin-bottom: 0;
                        }
                    }

                    .--icon {
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        display: flex;
                        flex: 0 0 auto;
                        background: #F2F2F2;
                        align-items: center;
                        justify-content: center;
                        margin-right: 12px;

                        img {
                            width: 20px;
                        }
                    }

                    h6 {
                        a {
                            color: #000;
                        }
                    }
                }
            }

            .language {
                position: relative;

                img {
                    width: 26px;
                }

                &::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    height: 24px;
                    transform: translate(0, -50%);
                    right: calc(100% + 20px);
                    border-left: 1px solid rgba(255, 255, 255, 0.32);
                }

                select {
                    background: none;
                    border: none;
                    margin-left: 6px;
                    color: #FFF;
                    text-transform: uppercase;

                    option {
                        color: #000;
                    }
                }
            }
        }

        .booking {
            height: 100%;

            .--item {
                width: calc(100%/3);
                border-right: 1px solid #E7E7E7;
                height: 100%;

                &:last-child {
                    border-right: unset;
                }
            }

            ::-webkit-scrollbar {
                height: 4px;
            }

            ::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            ::-webkit-scrollbar-thumb {
                background: #888;
            }

            .order {
                height: calc(100% - 65px);

                ::-webkit-scrollbar {
                    width: 4px;
                }

                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                ::-webkit-scrollbar-thumb {
                    background: #888;
                }
            }

            .tab-calendar {
                height: 100%;
            }

            .calendar {
                .react-datepicker {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    font-family: var(--font-body);
                    border: none;
                    width: 100%;
                    display: flex;
                    height: 288px;
                    color: #8A8A8A;

                }

                .react-datepicker__header {
                    background: none;
                    border: none;
                }

                .react-datepicker__day-names,
                .react-datepicker__current-month {
                    font-weight: 600;
                    font-family: var(--font-body);

                    line-height: 24px;
                    color: #1F1F1F;

                }

                .react-datepicker__day-names {
                    font-size: 14px;
                    display: flex;
                    justify-content: space-evenly;
                }

                .react-datepicker__week {
                    display: flex;
                    justify-content: space-around;
                }

                .react-datepicker__current-month {
                    font-size: 16px;
                    margin-bottom: 12px;
                }

                .react-datepicker__navigation--previous {
                    margin-left: 16px;
                }

                .react-datepicker__navigation--next {
                    margin-right: 16px;
                }

                .react-datepicker__day--highlighted {
                    background: none;
                    border: solid 1px var(--color-3);
                    color: #8A8A8A;

                }

                .react-datepicker__day--selected,
                .react-datepicker__day--keyboard-selected {
                    color: #1F1F1F;
                    background: var(--color-3);

                }

                .react-datepicker__month {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    margin: 0.6rem;
                    justify-content: space-evenly;
                }

                .react-datepicker__month-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
            }

            .name-tab {
                height: 65px;
                background: #FFF;
                padding: 0 20px;
                overflow-x: auto;

                .--icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
                    border-radius: 8px;
                }

                .--name {
                    text-transform: uppercase;
                    margin-left: 1rem;
                }

                .--item-tab {
                    height: 36px;
                    width: calc(50% - 4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #E7E7E7;
                    border-radius: 100px;
                    flex: 0 0 auto;
                    margin-right: 8px;

                    &:last-child {
                        margin-right: 0;
                    }

                    &.active {
                        color: var(--color-3);
                        border: 1px solid var(--color-3);
                    }
                }
            }

            .list-order {
                height: calc(100% - 160px);
                overflow-y: auto;

                .--item-order {
                    padding: 16px 20px;
                    border-bottom: 1px solid #E7E7E7;
                }

                .--clear {
                    width: 28px;
                    height: 28px;
                    border: none;
                    background: #F2F2F2;
                    border-radius: 5px;

                    img {
                        width: 16px;
                    }
                }

                .--amount {
                    border: 1px solid #E7E7E7;
                    border-radius: 6px;
                    padding: 4px 8px;
                    display: flex;
                    line-height: 1;
                    align-items: center;

                    input[type="number"] {
                        -webkit-appearance: textfield;
                        -moz-appearance: textfield;
                        appearance: textfield;
                        border: none;
                        outline: none;
                        margin: 0 12px;
                        width: auto;
                        max-width: 34px;
                    }

                    input[type=number]::-webkit-inner-spin-button,
                    input[type=number]::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                    }


                    span {
                        margin: 0 12px;
                    }
                }

                .--value {
                    width: 90px;
                }

                .--money {
                    color: var(--color-4);
                    width: 90px;
                }

                .--name {
                    span {
                        text-transform: uppercase;
                    }
                }
            }

            .card-order {
                padding: 0 20px;
                height: 160px;
                border-left: 3px solid var(--color-3);
                box-shadow: 0px -8px 40px rgba(0, 0, 0, 0.05);

                .billplease {
                    margin-bottom: 12px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid #E7E7E7;
                }

                .button {
                    button {
                        border: none;
                        display: flex;
                        align-items: center;
                        height: 40px;
                        justify-content: center;
                        line-height: 1;

                        span {
                            margin-left: 8px;
                        }

                        &.--clear {
                            border: 1px solid #E7E7E7;
                            border-radius: 6px;
                            width: calc(40% - 8px);
                            margin-right: 8px;
                        }

                        &.button_1 {
                            width: 60%;
                        }
                    }
                }
            }

            .tab-content {
                background: #F1F1F1;
                height: calc(100% - 65px);
                padding: 10px 20px;
                overflow-y: scroll;

                .search {
                    position: relative;
                    width: calc(100% - 48px);
                    margin-right: 8px;

                    img {
                        position: absolute;
                        top: 50%;
                        pointer-events: none;
                        left: 12px;
                        transform: translate(0, -50%);
                    }

                    input {
                        border: 1px solid #E7E7E7;
                        border-radius: 8px;
                        height: 40px;
                        padding: 0 42px;
                        width: 100%;

                        &::placeholder {
                            color: #C9C9C9;
                        }

                        &:focus {
                            outline: none;
                        }

                        &:focus-visible {
                            outline: none;
                        }
                    }
                }

                .filter {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background: #FFF;
                    border: 1px solid #E7E7E7;
                    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
                    border-radius: 8px;
                }

                .list-ticket {
                    .--item-ticket {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 8px;
                        padding-bottom: 8px;
                        border-bottom: 1px solid #E7E7E7;

                        &:last-child {
                            padding-bottom: 0;
                            margin-bottom: 0;
                            border-bottom: unset;
                        }

                        i {
                            display: none;
                            width: 16px;
                            flex: 0 0 auto;
                            height: 16px;
                            background: var(--color-3);
                            font-size: 8px;
                            border-radius: 50%;
                            color: #FFF;
                            justify-content: center;
                            align-items: center;
                        }

                        &.active {
                            color: var(--color-3);

                            i {
                                display: flex;
                            }
                        }
                    }
                }

                .--item-content {
                    display: none;

                    &.active {
                        display: block;
                    }

                    .check {
                        flex-direction: column;

                        /* padding-bottom: 12px;
                        border-bottom: 1px solid #E7E7E7; */

                        .--item-check {
                            flex-direction: column;
                            padding: 8px 0;

                            &>span {
                                font-weight: 400;
                                font-size: 18px;
                                line-height: 24px;
                                color: #2C2C2C;
                            }

                            .--item {
                                width: 100%;


                                &>* {
                                    flex: 1;
                                }

                                .--input-group {
                                    div {
                                        display: inherit;
                                        align-items: center;
                                    }

                                    input[type=checkbox] {


                                        margin-right: 8px;
                                        height: 20px;
                                        width: 20px;
                                        background: #FFFFFF;

                                        border: 1px solid #D8D8D8;
                                        border-radius: 4px;
                                    }

                                    input[type=checkbox]:checked {
                                        accent-color: var(--color-3);
                                    }

                                    label {
                                        height: 20px;
                                    }

                                    font-size: 14px;
                                    line-height: 20px;
                                    justify-content: space-between;
                                }
                            }

                            // margin-right: 20px;

                            // input {
                            //     margin-right: 12px;
                            // }

                            // &:last-child {
                            //     margin-right: 0;
                            // }
                        }
                    }

                    .--img {
                        width: 100%;

                        img {
                            width: 100%;
                        }
                    }
                }
            }

            .tab-bar {
                .--item-tab-bar {
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    i {
                        display: none;
                        font-size: 12px;
                    }

                    &.active {
                        background: #F1F1F1;

                        i {
                            display: block;
                        }
                    }
                }
            }
        }

        .payment {
            height: 100%;
            padding: 20px;

            .--back {
                width: 28px;
                height: 28px;
                border: 1px solid #E7E7E7;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                margin-bottom: 12px;
            }

            .--time {
                padding: 6px 16px;
                background: #FFFFFF;
                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
                border-radius: 8px;
                width: 100%;

                .--icon {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #F2F2F2;
                    border-radius: 8px;
                    margin-right: 16px;
                }

                .--number {
                    span {
                        &:nth-child(1) {
                            font-family: var(--font-sunbold);
                            line-height: 18px;
                            margin-top: 4px;
                            font-size: 20px;
                        }

                        &:nth-child(2) {
                            color: #B1B1B1;
                            line-height: 16px;
                        }
                    }

                    .--item {
                        margin-right: 24px;
                        position: relative;
                        text-align: center;

                        &::after {
                            content: ":";
                            position: absolute;
                            top: 16px;
                            transform: translate(0, -50%);
                            font-family: var(--font-sunbold);
                            font-size: 24px;
                            left: calc(100% + 8px);
                        }

                        &:last-child {
                            margin-right: 0;

                            &::after {
                                display: none;
                            }
                        }
                    }
                }

                .--txt {
                    p {
                        margin-bottom: 0;
                        font-size: 12px;
                        line-height: 1;
                    }
                }
            }

            .pay-card {
                background: #F2F2F2;
                border: 1px dashed #C9C9C9;
                border-radius: 8px;
                padding: 1rem;
            }

            .list-order {
                .--value {
                    width: 90px;
                    color: var(--color-4);
                }

                .--item-order {
                    padding-bottom: 12px;
                    margin-bottom: 12px;
                    border-bottom: 1px solid #E7E7E7;

                    .--name {
                        span {
                            &:nth-child(2) {
                                color: #646464;
                            }
                        }
                    }
                }
            }

            .infopayment {
                background: #FFFFFF;
                border-radius: 8px;

                h5 {
                    font-family: var(--font-sunbold);
                    margin-bottom: 20px;
                }

                .form_info {
                    .form-group {
                        width: calc(100%/3 - 8px);

                        &:nth-child(n+4) {
                            margin-top: 1rem;
                        }
                    }

                    label {
                        font-size: 14px;
                        font-family: var(--font-sunbold);
                        margin-bottom: 4px;
                    }

                    select {
                        border: 1px solid #E7E7E7;
                        border-radius: 4px;
                        height: 44px;
                        padding: 0 12px;
                        width: 100%;

                        &::placeholder {
                            color: #B1B1B1;
                        }

                        &:focus {
                            outline: none;
                            box-shadow: 0 0 0 1px #4361EE;
                        }

                        &:focus-visible {
                            outline: none;
                        }
                    }

                    input {
                        border: 1px solid #E7E7E7;
                        border-radius: 4px;
                        height: 44px;
                        padding: 0 12px;
                        width: 100%;

                        &::placeholder {
                            color: #B1B1B1;
                        }

                        &:focus {
                            outline: none;
                            box-shadow: 0 0 0 1px #4361EE;
                        }

                        &:focus-visible {
                            outline: none;
                        }
                    }
                }

                .--info {
                    border-bottom: 1px dashed #9B9B9B;
                    padding-bottom: 2rem;
                    margin-bottom: 2rem;
                }

                .--paymentmethods {
                    .--payment {
                        list-style: none;
                        padding-left: 0;
                        margin-bottom: 0;
                        display: flex;

                        .--pay {
                            display: flex;
                            align-items: center;
                            padding: 12px 24px 12px 16px;
                            background: #FFFFFF;
                            border: 1px solid #E0E0E0;
                            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
                            border-radius: 6px;
                            transition: all .15s ease;
                            margin-right: 8px;

                            &:hover,
                            &.active {
                                border: 1px solid #F9B217;
                                box-shadow: 0px 4px 20px rgba(226, 155, 0, 0.2);
                            }

                            span {
                                margin-left: 10px;
                            }
                        }
                    }
                }

                .--tab-pay {
                    .--item-tabpay {
                        padding: 20px;
                        border: 1px solid #E7E7E7;
                        border-radius: 6px;

                        ul.--price {
                            list-style: none;
                            padding-left: 0;
                            margin-bottom: 0;
                            width: max-content;
                            min-width: 250px;

                            span {
                                &:nth-child(1) {
                                    margin-right: 8px;
                                }
                            }

                            li {
                                display: flex;
                                justify-content: space-between;

                                &:nth-child(2) {
                                    span {
                                        &:nth-child(2) {
                                            font-family: var(--font-sunbold);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .billplease {
                margin-bottom: 40px;
            }

            .button_1 {
                height: 40px;
                width: 100%;
            }
        }

        .confirmpay {
            padding: 20px;
            height: 100%;
            overflow-y: auto;

            &.fail {
                .confirm {
                    padding-bottom: 0;
                    border-bottom: unset;
                    margin-bottom: 0;

                    h4 {
                        color: var(--color-4);
                    }
                }
            }

            .confirm {
                display: flex;
                align-items: center;
                flex-flow: column;
                padding-bottom: 24px;
                border-bottom: 1px solid #E7E7E7;
                margin-bottom: 20px;

                .--icon {
                    img {
                        max-width: 60px;
                    }
                }

                h4 {
                    color: #5C9A45;
                }

                article {
                    line-height: 1;

                    a {
                        color: var(#4361EE);
                    }
                }

                .button {
                    margin-top: 20px;

                    button {
                        width: 150px;
                        height: 40px;
                        border-radius: 4px;

                        &:nth-child(1) {
                            background: #F2F2F2;
                            border: 1px solid #E8E8E8;
                            margin-right: 4px;
                        }
                    }
                }
            }

            .confirm-oder {
                .--top {
                    margin-bottom: 12px;

                    .button {
                        button {
                            padding: 0 10px;
                            height: 32px;
                            display: flex;
                            align-items: center;

                            span {
                                margin-left: 6px;
                            }

                            &:nth-child(1) {
                                background: #FFFFFF;
                                border: 1px solid var(--color-3);
                                border-radius: 6px;
                                color: var(--color-3);

                                margin-right: 8px;
                            }

                            &:nth-child(2) {
                                background: #F2F2F2;
                                border-radius: 5px;
                                border: none;
                            }
                        }
                    }
                }
            }

        }

        .historydetail {
            padding: 20px;
            overflow-y: auto;
            height: calc(100vh - 65px);

            .--back {
                width: 28px;
                height: 28px;
                border: 1px solid #E7E7E7;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
            }

            .button {
                button {
                    padding: 0 10px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    margin-right: 8px;

                    &:last-child {
                        margin-right: 0;
                    }

                    span {
                        margin-left: 6px;
                    }

                    &:nth-child(1) {
                        background: #FFFFFF;
                        border: 1px solid var(--color-3);
                        border-radius: 6px;
                        color: var(--color-3);

                    }

                    &:nth-child(n+2) {
                        background: #F2F2F2;
                        border-radius: 5px;
                        border: none;
                    }
                }
            }

            .billplease {
                .--item-bill:last-child {
                    .--money {
                        font-size: 20px;
                    }
                }
            }

            .bttn {
                button {
                    height: 40px;
                    padding: 0 30px;
                }
            }
        }

        .account {
            padding: 2rem 20px;

            .--infouser {
                border: 1px solid #E7E7E7;
                border-radius: 8px;
                padding: 16px;

                .avatar {
                    position: relative;
                    width: max-content;
                    margin-bottom: 20px;



                    .--img {
                        width: 150px;
                        border-radius: 50%;
                        height: 150px;
                        border: 4px solid #E7E7E7;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    button {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #FFF;
                        border: none;
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                    }
                }
            }

            .--value {
                margin-top: 2rem;

                .--title {
                    a {
                        color: #3887FF;
                    }
                }

                ul {
                    list-style: none;
                    padding: 16px;
                    margin-bottom: 0;
                    background: #F2F2F2;
                    border: 1px dashed #C9C9C9;
                    border-radius: 8px;

                    li {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 8px;

                        &:last-child {
                            margin-bottom: 0;

                            span {
                                &:nth-child(2) {
                                    font-family: var(--font-sunbold);
                                }
                            }
                        }

                        span {
                            &:nth-child(1) {
                                color: #2C2C2C;
                                opacity: 0.6;
                            }
                        }
                    }
                }
            }

            .info-accounuser {
                .--top {
                    button {
                        background: #F2F2F2;
                        border-radius: 5px;
                        height: 28px;
                        display: flex;
                        justify-content: center;
                        padding: 0 12px;
                        border: none;
                        align-items: center;
                        line-height: 1;

                        span {
                            margin-left: 8px;
                        }
                    }
                }

                .--infoaccount {
                    background: #FFFFFF;
                    border: 1px solid #E7E7E7;
                    border-radius: 6px;
                    padding: 16px;

                    h6 {
                        color: #C9C9C9;
                        margin-bottom: 12px;
                        text-transform: uppercase;
                    }

                    .form_info {
                        .form-group {
                            width: calc(100%/3 - 8px);

                            &:nth-child(n+4) {
                                margin-top: 12px;
                            }
                        }

                        label {
                            font-size: 14px;
                            font-family: var(--font-sunbold);
                            margin-bottom: 4px;
                        }

                        select {
                            border: 1px solid #E7E7E7;
                            border-radius: 4px;
                            height: 44px;
                            padding: 0 12px;

                            &::placeholder {
                                color: #B1B1B1;
                            }

                            &:focus {
                                outline: none;
                                box-shadow: 0 0 0 1px #4361EE;
                            }

                            &:focus-visible {
                                outline: none;
                            }
                        }

                        input {
                            border: 1px solid #E7E7E7;
                            border-radius: 4px;
                            height: 44px;
                            padding: 0 12px;

                            &::placeholder {
                                color: #B1B1B1;
                            }

                            &:focus {
                                outline: none;
                                box-shadow: 0 0 0 1px #4361EE;
                            }

                            &:focus-visible {
                                outline: none;
                            }
                        }
                    }

                    .--item-account {
                        &:nth-child(1) {
                            margin-bottom: 2rem;
                            padding-bottom: 2rem;
                            border-bottom: 1px dashed #C9C9C9;
                        }
                    }
                }
            }
        }

        .history {
            padding: 24px 20px;

            .filter {

                input,
                select {
                    border: 1px solid #E7E7E7;
                    border-radius: 8px;
                    height: 40px;

                    &:focus {
                        outline: none;
                    }

                    &:focus-visible {
                        outline: none;
                    }
                }
            }

            .search {
                position: relative;

                img {
                    position: absolute;
                    top: 50%;
                    left: 12px;
                    transform: translate(0, -50%);
                }

                input {
                    width: 220px;
                    padding: 0 12px 0 40px;
                }
            }

            .day {
                position: relative;

                input {
                    width: 250px;
                    padding-left: 40px;
                }

                img {
                    position: absolute;
                    top: 50%;
                    transform: translate(0, -50%);
                    left: 12px;
                    pointer-events: none;
                }
            }

            .add-ticket {
                border: 1px solid var(--color-3);
                filter: drop-shadow(0px 4px 20px rgba(226, 155, 0, 0.3));
                border-radius: 6px;
                background: none;
                color: var(--color-3);
                height: 40px;
                padding: 0 12px;
            }

            .table-ticket {
                .--item-ticket {
                    display: flex;
                    justify-content: space-between;
                }

                .--name-ticket {
                    color: #5969FD;
                }

                .--flag-ticket {
                    background: rgba(234, 33, 39, 0.15);
                    border-radius: 100px;
                    height: 20px;
                    padding: 0 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-4);
                }

                .--status-ticket {
                    .--item {
                        border-radius: 100px;
                        height: 20px;
                        display: flex;
                        align-items: center;
                        color: #FFF;
                        padding: 0 10px;
                        justify-content: center;

                        &.active {
                            background: #5969FD;
                        }

                        &.inactive {
                            background: var(--color-3);
                        }

                        &.default {
                            background: #C9C9C9;
                        }
                    }
                }

                .--pay-ticket {
                    .--item {
                        display: flex;
                        align-items: center;

                        span {
                            line-height: 1;
                        }

                        &.active {
                            color: #1AA57B;
                        }

                        &.inactive {
                            color: #852221;
                        }

                        &.default {
                            color: var(--color-3);
                        }
                    }
                }

                .--option-ticket {
                    button {
                        background: none;
                        border: none;
                        padding: 0;
                        margin-left: 12px;

                        &:first-child {
                            margin-left: 0;
                        }
                    }
                }
            }

            .--bot {
                .number-ticket {
                    border-radius: 6px;
                    height: 32px;
                    min-width: 80px;
                    border: 1px solid #E7E7E7;
                    padding-left: 8px;
                    filter: drop-shadow(0px 4px 20px rgba(226, 155, 0, 0.3));
                    border-radius: 6px;
                }
            }

            .open {
                select {
                    min-width: 110px;
                    padding: 0 10px;
                }
            }
        }
    }
}


















`;