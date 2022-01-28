import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Padding = styled.div`
  padding: ${({ theme }) => theme.padding.mobile};
  @media ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.padding.tablet};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: ${({ theme }) => theme.padding.laptop};
  }
`;

const BlobMask = styled.div`
  mask-size: contain;
  mask-position: inherit;
  mask-repeat: no-repeat;
`;

const SectionHeader = styled.h1`
  font-family: ${({ theme }) => theme.font.family.alt};
  font-size: ${({ theme }) => theme.font.size.xxxlarge};
  text-shadow: -3px 3px 0px ${({ theme }) => theme.color.light};
  letter-spacing: -0.7px;
`;

const SectionHeaderAlt = styled(SectionHeader)`
  position: absolute;
  z-index: -2;
  top: -1rem;
  right: 0;
  font-size: ${({ theme }) => theme.font.size.giant};
  text-decoration: underline 6px solid ${({ theme }) => theme.color.primary};
  text-underline-position: under;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.font.size.giant};
    right: 10vw;
  }
`;

const Blobs = {
  profile:
    'data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzU2LjgxNzExMTYyOTcwNTEgNDE3LjQxMTE5NzE2MzkwNDIpIj48cGF0aCBkPSJNMTQ2IC0xNzMuMkMxNzQuMSAtMTE3LjkgMTcxLjQgLTU4LjkgMTg5LjggMTguNEMyMDguMiA5NS43IDI0Ny42IDE5MS40IDIxOS41IDI1NC45QzE5MS40IDMxOC40IDk1LjcgMzQ5LjcgLTUuMiAzNTQuOUMtMTA2LjEgMzYwLjEgLTIxMi4xIDMzOS4xIC0yNzMuOCAyNzUuNkMtMzM1LjUgMjEyLjEgLTM1Mi43IDEwNi4xIC0zMzggMTQuN0MtMzIzLjMgLTc2LjYgLTI3Ni41IC0xNTMuMiAtMjE0LjkgLTIwOC41Qy0xNTMuMiAtMjYzLjkgLTc2LjYgLTI5Ny45IC04LjggLTI4OS4xQzU4LjkgLTI4MC4zIDExNy45IC0yMjguNSAxNDYgLTE3My4yIiBmaWxsPSIjMDA5NDczIj48L3BhdGg+PC9nPjwvc3ZnPg==',
  aboutA:
    'data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTAwIDY3NSIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDU2LjE0NjA1MzM5NDk3NjY2IDMxMC44NjU2NTYzNTY4NTA5KSI+PHBhdGggZD0iTTMyMy40IC0yMzguOUMzOTIgLTE3MiA0MDEuNyAtMzkgMzU3LjQgNTJDMzEzIDE0My4xIDIxNC43IDE5Mi4zIDExMS41IDI0OC40QzguNCAzMDQuNSAtOTkuNSAzNjcuNiAtMjAxLjEgMzQ2LjFDLTMwMi44IDMyNC43IC0zOTguMiAyMTguNyAtMzk2LjYgMTIwLjZDLTM5NSAyMi41IC0yOTYuNSAtNjcuNyAtMjE0LjIgLTEzNy44Qy0xMzEuOSAtMjA3LjkgLTY2IC0yNTcuOSAzMC43IC0yODIuNUMxMjcuNCAtMzA3IDI1NC45IC0zMDUuOSAzMjMuNCAtMjM4LjkiIGZpbGw9IiM2ZDU0NWQiPjwvcGF0aD48L2c+PC9zdmc+',
  aboutB:
    'data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgNjAwIDkwMCIgd2lkdGg9IjYwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzA1LjE5Nzc0Njk4ODYyODI0IDQyMS43NTA4OTg2OTYyNzU0KSI+PHBhdGggZD0iTTIwNC4zIC0yMTkuN0MyNTcuOCAtMTUwLjggMjg5LjQgLTc1LjQgMjkwLjUgMS4xQzI5MS41IDc3LjUgMjYyLjEgMTU1LjEgMjA4LjYgMjMwLjFDMTU1LjEgMzA1LjEgNzcuNSAzNzcuNSAtMTIuOCAzOTAuNEMtMTAzLjIgNDAzLjIgLTIwNi41IDM1Ni41IC0yNTguNSAyODEuNUMtMzEwLjUgMjA2LjUgLTMxMS4yIDEwMy4yIC0yNzkuNSAzMS43Qy0yNDcuOCAtMzkuOCAtMTgzLjYgLTc5LjYgLTEzMS42IC0xNDguNEMtNzkuNiAtMjE3LjIgLTM5LjggLTMxNS4xIDE3LjggLTMzMi45Qzc1LjQgLTM1MC44IDE1MC44IC0yODguNSAyMDQuMyAtMjE5LjciIGZpbGw9IiMwMDk0NzMiPjwvcGF0aD48L2c+PC9zdmc+',
  contact:
    'data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgNjc1IDkwMCIgd2lkdGg9IjY3NSIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM2LjMzNjY1NzYzNDg3OTMgNDg1LjA4MDY0ODEwNDM4ODA1KSI+PHBhdGggZD0iTTI3NC43IC0zNDguOUMzMzIuNSAtMjc4LjkgMzM5LjYgLTE3MCAzMjEuOSAtODQuM0MzMDQuMiAxLjQgMjYxLjcgNjQgMjI3LjQgMTM4LjZDMTkzIDIxMy4xIDE2Ni44IDI5OS43IDEwNy44IDM0MC4zQzQ4LjggMzgwLjkgLTQzIDM3NS42IC0xMzAuNSAzNDguMkMtMjE4IDMyMC44IC0zMDEuMyAyNzEuNCAtMzIyLjMgMjAyQy0zNDMuMyAxMzIuNyAtMzAyLjIgNDMuMyAtMjgxLjYgLTQ1LjVDLTI2MSAtMTM0LjMgLTI2MSAtMjIyLjcgLTIxNy41IC0yOTUuMkMtMTc0IC0zNjcuNyAtODcgLTQyNC4zIDEwLjcgLTQzNy4xQzEwOC41IC00NDkuOSAyMTYuOSAtNDE4LjkgMjc0LjcgLTM0OC45IiBmaWxsPSIjNmQ1NDVkIj48L3BhdGg+PC9nPjwvc3ZnPg==',
};

export { Container, Padding, Blobs, BlobMask, SectionHeader, SectionHeaderAlt };
