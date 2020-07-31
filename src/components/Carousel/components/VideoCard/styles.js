import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
    width: 400px;
    height: 203px;
    transition: all 0.65s ease-out;
    border: 5px solid;
    border-radius: 10px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
