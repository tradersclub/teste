import styled from 'styled-components'

export const Container = styled.div``

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    flex: 1;
    padding: 10px 15px;
    margin: 0 0 40px 0;
    border: none;
    background-color: transparent;
    border-bottom: solid 1px #aaa;
    color: #fff;
    font-size: 17px;
    outline: none;

    ::placeholder {
      color: #aaa;
    }
  }
  .input-hide { opacity: 0; }

  select {
    width: 100%;
    margin: 10px 0 30px;
    height: 40px;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    border-color: #aaa;
  }
  select > option {}

  .form-inline {
    display: flex;
    flex: 1;
    flex-direction: row
  }
  .form-inline > input {
    flex: 0.5;

    &:first-child {
      margin-right: 30px;
    }
  }

  .controls {
    display: flex;
    flex: 1;
    flex-direction: row;

    button {
      margin: 0;
      background-color: transparent;
      border: solid 1px #fff;
      border-radius: 4px;
      color: #fff;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;

      :first-child {
        margin-right: 15px;
      }

      &.primary {
        background-color: #fff;
        color: #000;
      }
    }

    .divider {
      flex: 1;
    }
  }

`