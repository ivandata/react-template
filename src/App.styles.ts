import styled from 'styled-components';

export const SPageContainer = styled.div`
  max-height: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.txt.body};
  background-color: ${({ theme }) => theme.colors.bkg.page};
`;

export const SPageHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.lg}rem
    ${({ theme }) => theme.spacing.sm}rem;
  display: flex;
  justify-content: center;
`;

export const SHeaderLogo = styled.div`
  width: 50px;

  svg {
    width: 100%;
  }
`;

export const SPageContent = styled.main`
  max-height: 100%;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing.md}rem;
  margin: 0 auto;

  h1 {
    font-size: ${({ theme }) => theme.font.size.h1}rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.h2}rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.h3}rem;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.h4}rem;
  }

  & * {
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform, filter, backdrop-filter, -webkit-filter,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }
`;
