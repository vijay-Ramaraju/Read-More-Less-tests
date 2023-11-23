// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-height: 100%;
  padding: 20px;
`
export const MainHeading = styled.h1`
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 5px;
  font-family: 'Roboto';
`
export const Paragraph = styled.p`
  color: #334155;
  margin-top: 0px;
  font-weight: 500;
`
export const Image = styled.img`
  width: 60%;
  background-size: cover;
  height: 600px;
`

export const Description = styled.p`
  color: #334155;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  width: 60%;
`
export const Button = styled.button`
  color: #fff;
  background-color: #1f81ff;
  border: 0px;
  border-radius: 5px;
  //   padding: 6px 12px 6px 12px;
  padding: 10px;
  text-align: center;
`
