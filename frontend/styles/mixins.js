import { css } from 'styled-components';

const mixins = {

    flexCenter: css`
        display: flex; justify-content: center; align-items: center;
    `,
    
    CTAButton: css`
        color: var(--text-color-white); background-color: var(--orange);
        border: 1px solid var(--orange);
        font-size: var(--fz-xs); font-family: var(--font-mono);
        line-height: 1; text-decoration: none;
        cursor: pointer; transition: var(--transition); padding: .85rem 1.75rem;
        
    `
};

export default mixins;