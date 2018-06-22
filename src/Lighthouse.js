import React from 'react';
import { injectGlobal } from 'styled-components';

const Lighthouse = ({ ...rest }) => (
    <svg width="157" height="505" viewBox="0 0 157 505" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <defs>
            <radialGradient
                cy="52.822%"
                fx="50%"
                fy="52.822%"
                r="45.109%"
                gradientTransform="matrix(0 1 -.93048 0 .991 .028)"
                id="a"
            >
                <stop stopColor="#FFA000" offset="0%" />
                <stop stopColor="#FFDDA2" stop-opacity="0" offset="100%" />
            </radialGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
                <stop stopColor="#FFF8DE" offset="0%" />
                <stop stopColor="#F4C057" offset="100%" />
            </linearGradient>
            <linearGradient x1="28.063%" y1="2.724%" x2="28.063%" y2="122.067%" id="c">
                <stop stopColor="#F87F8D" offset="0%" />
                <stop stopColor="#E6707A" offset="100%" />
            </linearGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="d">
                <stop stopColor="#F4929E" offset="0%" />
                <stop stopColor="#E55965" offset="100%" />
            </linearGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="95.03%" id="e">
                <stop stopColor="#FB4B4B" offset="0%" />
                <stop stopColor="#FF8A94" offset="100%" />
            </linearGradient>
        </defs>
        <g transform="translate(-15 -1)" fill="none" fill-rule="evenodd">
            <ellipse fill="url(#a)" opacity=".694" cx="93.5" cy="87" rx="93.5" ry="87" className="light" />
            <path
                d="M95.96 84.897c0-2.739-2.221-9.505-4.96-9.505s-4.96 6.766-4.96 9.505c0 1.642-.826 8.265 4.96 8.265s4.96-7.168 4.96-8.265z"
                fill="url(#b)"
                opacity=".663"
            />
            <path
                d="M60 61v-3h52v5H65v22c1.333 0 2 .667 2 2h45v21l-63 5c2-6 4.168-9.615 6.504-10.845.455-3.911 1.954-6.63 4.496-8.155v-7c0-1.333.667-2 2-2V63c-1.333 0-2-.667-2-2z"
                fill="#630F2A"
            />
            <path
                d="M125 61v-3H73v5h47v22c-1.333 0-2 .667-2 2H73v21l63 5c-2-6-4.168-9.615-6.504-10.845-.455-3.911-1.954-6.63-4.496-8.155v-7c0-1.333-.667-2-2-2V63c1.333 0 2-.667 2-2z"
                fill="#630F2A"
            />
            <g fill="#630F2A">
                <path d="M81 63v25c1.333 0 2 .667 2 2h-7c0-1.333.667-2 2-2V63h3zM104 63v25c1.333 0 2 .667 2 2h-7c0-1.333.667-2 2-2V63h3z" />
            </g>
            <path fill="#F99" d="M69 107h47l21 399H49z" />
            <path fill="url(#c)" transform="matrix(-1 0 0 1 88 0)" d="M19 107l20 5 30 385H32z" />
            <path fill="#510B21" d="M116 107l20 5 30 385h-37z" />
            <path d="M122 58c.779-10.667-8.888-16-29-16-20.11 0-30.11 5.333-30 16h59z" fill="url(#d)" />
            <g stroke="#630F2A" stroke-linecap="square">
                <path d="M92.5 39.5V5.414" />
                <path d="M92.5 4.5v-2" stroke-width="2" />
            </g>
            <path
                d="M92.5 35.741l-1.65.043v1.095c-1.1 0-1.65.38-1.65 1.138 0 .759.55 1.138 1.65 1.138V42h1.65v-6.259zM92.5 35.741l1.65.043v1.095c1.1 0 1.65.38 1.65 1.138 0 .759-.55 1.138-1.65 1.138V42H92.5v-6.259z"
                fill="#FF8A94"
            />
            <path
                d="M5.5 34.88c3.038 0 5.5-1.798 5.5-4.94 0-3.143-2.462-5.69-5.5-5.69S0 26.797 0 29.94c0 3.142 2.462 4.94 5.5 4.94z"
                fill="url(#e)"
                transform="translate(87 2)"
            />
        </g>
    </svg>
);

injectGlobal`
    .light {
        animation: light linear 3s infinite;
    }

    @keyframes light {
        0% {
            opacity: .694;
        }
        30% {
            opacity: .2;
        }
        60% {
            opacity: .694;
        }
        100% {
            opacity: .694;
        }
    }
`;

export default Lighthouse;