import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 1rem;
`

export const Element = styled.input`
  ${props =>
    props.hide &&
    `
    display: none;
  `} height: 3rem;
  font-size: 1.5rem;
  padding: 0 1rem;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  transition: border-color 0.2s;

  ${props =>
    props.focused &&
    `
    border-color: rgba(0,0,0,0.3);
  `};
`
