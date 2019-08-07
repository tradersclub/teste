import styled from 'styled-components'

const bgImage = require('../../assets/img/car-wireframe.png')

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: white;
  background-image: url(${bgImage});
  background-size: 90% auto;
  background-position: center 100px;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 40px 50px;
  flex: 1;
  background-color: rgba(1, 19, 41, 0.88);
  overflow-y: auto;

  > p {
    margin: 0;
  }
`

export const Title = styled.h1`
  margin-bottom: 30px;
`