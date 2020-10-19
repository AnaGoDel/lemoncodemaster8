import { css } from 'emotion';

export const pagination = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  min-width: 200px;
`;

export const arrowBtn = css`
  color: white;
  background-color: #3f51b5;
  &:hover {
    background-color: dodgerblue;
  }
`;
