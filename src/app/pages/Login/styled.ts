import styled from 'styled-components/macro';

const LoginWrapper = styled.div`
  .login {
    position: relative;
  }

  .background-login {
    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }

  .card-login {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 12px;
    transform: translate(-50%, -50%);
    background: #ffffffed;
    width: 500px;
    padding: 24px 40px;

    .logo {
      img {
        max-width: 220px;
        max-height: 65px;
        width: 100%;
      }
    }

    .language {
      background: #ebebeb;
      border-radius: 6px;
      padding: 4px;
      width: max-content;
      margin: auto;

      .--item {
        padding: 2px 20px;

        &.active {
          color: var(--color-3);
          background: #fff;
          box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
      }
    }

    .form-group {
      margin-bottom: 8px;

      label {
        margin-bottom: 4px;
      }

      input {
        width: 100%;
        border: 1px solid #e7e7e7;
        border-radius: 4px;
        height: 40px;
        padding: 0 12px;
        color: #000;

        &::placeholder {
          color: #b1b1b1;
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 1px #4361ee;
        }

        &:focus-visible {
          outline: none;
        }
      }

      .--input {
        position: relative;

        img {
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          right: 12px;
        }
      }
    }

    .--fogetpw {
      color: #2c2c2c;
    }

    .btn-login {
      padding: 8px 50px;
      background: var(--color-3);
      background: #f9b217;
      border-radius: 4px;
      width: max-content;
      border: none;
      margin: 2rem auto 0;
    }
    .btn-changePass {
      padding: 8px 30px;
      border-radius: 4px;
      border: none;
      margin: 2rem 0 0;
      width: 49.2%;
    }
    .submit {
      background: var(--color-3);
    }
    .title {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      font-family: 'Sun World bold';
      margin-bottom: 24px;
    }
    .cancel-btn {
      position: absolute;
      border: none;
      top: 9px;
      background: none;
      right: 12px;
      font-size: 24px;
    }
  }
  .--white {
    background-color: white;
  }
`;

export default LoginWrapper;
