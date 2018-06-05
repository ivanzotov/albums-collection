import styled from 'styled-components'
import { HIGHLIGHT, WHITE } from '../../constants/colors'

export const Wrap = styled.div`
  ${props =>
    props.hide &&
    `
    display: none;
  `};
`

export const Empty = styled.div`
  color: #777;
  font-size: 0.9rem;
  text-align: center;
`

export const Item = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  font-size: 0.9rem;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 1.5rem;
  ${props => props.active && `background: rgba(0,0,0,0.05);`};

  ${props => props.highlight && `background: ${HIGHLIGHT};`};
`

export const Dropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
  top: 100%;
  width: 100%;
  min-height: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: ${WHITE};
  z-index: 2000;
  box-sizing: border-box;

  ${props =>
    props.hide &&
    `
    display: none;
  `};
`
