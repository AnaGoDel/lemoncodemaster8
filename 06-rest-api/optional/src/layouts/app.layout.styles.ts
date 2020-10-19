import { css } from 'emotion';
import { theme } from 'core/theme';

export const content = css`
  margin: 2rem;
`;

export const links = css`
  margin: 10px;
  padding: 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
      background-color: #ddd;
      color: #3f51b5;
      border-radius: 10px;
    }
`;

export const icon = css`
  margin-right: 20px;
  width: 20px;
  border-radius: 45px 45px 45px 45px;
`;

export const menu = css`
  margin-left: auto;

`;
