import styled from 'styled-components'

export const Container = styled.div``

export const Cars = styled.div`
  list-style: none;

  > li {
    padding: 30px 20px;
    display: flex;
    border-bottom: solid 1px #4d5866;
    cursor: pointer;

    :hover {
      background-color: #4d5866;
    }
  }
  > li p {
    margin: 0;
  }
  > li > .left {
    flex: 1;
  }
  > li > .right {
    text-align: right;
  }
  > li > .left > .car-name,
  > li > .right > .car-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  > li > .left > .car-description,
  > li > .right > .car-year {
    font-size: 14px;
  }

`