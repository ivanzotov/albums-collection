import styled from 'styled-components'

export const Wrap = styled.div`
  margin-bottom: 1px;
  padding: 1rem;
  background: ${props => (props.saved ? '#fff2f2' : '#fff')};
`
