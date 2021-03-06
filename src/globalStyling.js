import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700|Work+Sans:400,300');
    
    html {
        font-size:1vw;
    }
    
    @media screen and (max-width: 750px) {
        html {
            font-size: 12px;
        }
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;