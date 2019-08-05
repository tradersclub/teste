import styled from 'styled-components'

export const Container = styled.div``

export const Car = styled.div`
  list-style: none;

  a {
    color: inherit;
    text-decoration: none;
  }

  .car {
    padding: 30px 20px;
    display: flex;
    border-bottom: solid 1px #4d5866;

    :hover {
      background-color: #4d5866;
    }
  }
  .car p {
    margin: 0;
  }
  .car > .left {
    flex: 1;
  }
  .car > .right {
    text-align: right;
  }
  .car > .left > .car-name,
  .car > .right > .car-price {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .car > .left > .car-description,
  .car > .right > .car-year {
    font-size: 14px;
  }

`