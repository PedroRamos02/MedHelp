import styled from "styled-components";

export const Text = styled.p`
    font-size: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.tertiary};  
`;

export const Title = styled.h1`
    font-size: 80px;
    text-align: left;
    color: ${({ theme }) => theme.colors.secundary};
`;

export const SubTitle = styled.h1`
    font-size: 27px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secundary};  
    font-weight: 300;
`;

export const SpanText = styled.span`
    color: ${({ theme }) => theme.colors.tertiary};
`