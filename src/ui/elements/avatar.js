import styled from 'styled-components'

export const Avatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  position: relative;
  text-align: center;
  vertical-align: middle;

  & img {
    border-radius: 50%;
    display: inline-flex;
    height: inherit;
    width: inherit;
  }
`
