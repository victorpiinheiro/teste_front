import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as color from '../../styles/colors'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  text-align: center;
  background-color: #f3f4f6;
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: ${color.primaryColor};
  margin-bottom: .4rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: #4b5563;
  margin-bottom: 2rem;
`;

export const Button = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: ${color.primaryColor};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fa780d;
  }
`;


