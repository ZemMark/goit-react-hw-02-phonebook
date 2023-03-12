import styled from "styled-components";
export const ContactList = styled.ul`
  list-style: none;
      width: 65%;
    padding: 0;
    margin: 0;
  li{
    display: flex;
    align-items: center;
  }
  
  button{
    border-radius: 5px;
    border: transparent;
    background-color: #ad6969;
  }
`

export const Card = styled.div`
   margin-right: auto;
    margin-left: auto;
    position: relative;

    &::after{
    content: '';
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: #212121
  }
`