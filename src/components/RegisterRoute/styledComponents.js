import styled from 'styled-components'

export const RegisterBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const RegImg = styled.img`
  height: 400px;
  width: 400px;
`
export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegHeading = styled.h1`
  color: #334155;
  font-size: 30px;
  font-family: 'Roboto';
`
export const InputCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const InputLabel = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 8px;
`
export const SelectOptions = styled.select`
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  color: #000000;
  font-family: 'Roboto';
  outline: none;
  margin-bottom: 10px;
`
export const Option = styled.option``

export const RegBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding: 12px 20px 12px 20px;
  border-radius: 5px;
  margin-top: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-family: 'Roboto';
`
