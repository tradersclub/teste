import styled from 'styled-components'

export const Container = styled.form`
  padding: 20px 50px;
  background-color: #1a2533;
  display: flex;

  > input {
    background-color: transparent;
    border: solid 1.5px #fff;
    border-radius: 5px;
    margin-right: 20px;
    height: 40px;
    color: #fff;
    padding: 0 10px;
    font-size: 16px;
    flex: 1;

    ::placeholder {
      color: #4d5b6d;
    }
    ::-ms-input-placeholder {
      color: #4d5b6d;
    }
    :-ms-input-placeholder {
      color: #4d5b6d;
    }

  }
  > button {
    border: none;
    border-radius: 5px;
    background-color: #fff;
    font-size: 20px;
    padding: 0 20px;
    cursor: pointer;
  }
`