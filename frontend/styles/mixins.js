import { css } from 'styled-components';

const mixins = {

    flexCenter: css`
        display: flex; justify-content: center; align-items: center;
    `,

    flexVerticalCenter: css`
        display: flex; align-items: center;
    `,

    flexColumn: css`
        display: flex; flex-direction: column;
    `,

    flexSpaceBetween: css`
        display: flex; justify-content: space-between;
    `,
    
    CTAButton: css`
        color: var(--text-color-white); background-color: var(--orange); border: 1px solid var(--orange); 
        min-width: 150px; width: 90%; max-width: 500px; min-height: 30px;
        font-size: var(--ft-lg); font-family: var(--font-mono);
        line-height: 1; text-decoration: none;  cursor:pointer;
        cursor: pointer; transition: var(--transition); padding: .8rem 1.75rem;
        
    `
};

export default mixins;