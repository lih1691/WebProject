import { css, CSSObject, styled } from 'styled-components';

export const NoneDotUl = styled.ul`
  list-style: none;
`

export const LeftLi = styled.li`
  float: left;
`

export const sizes: Record<string, string> = {
    wide: '1200px',
    desktop: '992px',
    tablet: '768px',
    phone: '376px'
};

export const media = Object.keys(sizes).reduce(
    (acc: Record<string, (...args: [TemplateStringsArray | CSSObject]) => ReturnType<typeof css>>
     , label: string) => {
        acc[label] = (...args: [TemplateStringsArray | CSSObject]) =>
            css`@media (max-width: ${sizes[label]}) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});

export const shadow = (weight: number) => {
    const shadows: CSSObject[] = [
        {
            boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`,
        },
        {
            boxShadow: `0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);`,
        },
        {
            boxShadow: `0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);`,
        },
        {
            boxShadow: `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);`,
        },
        {
            boxShadow: `0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);`,
        },
    ];

    return shadows[weight];
};