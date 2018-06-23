import React from 'react';
import { config, Parallax, ParallaxLayer } from 'react-spring';
import mountains from './assets/mountains.svg';
import sun from './assets/sun.svg';
import trees1 from './assets/trees1.svg';
import water from './assets/water.svg';
import ground from './assets/ground.svg';
import islandGround from './assets/island_ground.svg';
import islandTent from './assets/island_tent.svg';
import islandTrees from './assets/island_trees.svg';
import lighthouse from './Lighthouse';
import styled from 'styled-components';

const App = () => (
    <Parallax pages={1.5} config={config.wobbly}>
        <ParallaxLayer style={{ background: '#3c2b4b' }} offset={0.6} factor={2} speed={0.4} />

        <ParallaxLayer offset={0.59} speed={0.4}>
            <Water />
        </ParallaxLayer>

        <ParallaxLayer offset={0.17} speed={0.77}>
            <Mountains.Reflection />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.4} factor={1}>
            <Background>
                <ParallaxLayer offset={0.15} speed={-.4}>
                    <Sun />
                </ParallaxLayer>

                <ParallaxLayer offset={0.23} speed={-0.4}>
                    <Mountains />
                </ParallaxLayer>
            </Background>
        </ParallaxLayer>

        <ParallaxLayer offset={0.25} speed={-.1}>
            <Lighthouse />
        </ParallaxLayer>

        <ParallaxLayer offset={0.19} speed={0.3}>
            <Trees1 />
        </ParallaxLayer>

        <ParallaxLayer offset={0.585} speed={0.42}>
            <Ground />
        </ParallaxLayer>

        {/* ISLAND */}
        <ParallaxLayer offset={0.54} speed={0.35}>
            <Island.Trees />
        </ParallaxLayer>
        <ParallaxLayer offset={0.62} speed={0.45}>
            <Island.Ground />
        </ParallaxLayer>
        <ParallaxLayer offset={0.625} speed={0.45}>
            <Island.Tent />
        </ParallaxLayer>

        {/* FILTER */}
        <ParallaxLayer offset={0} speed={0} factor={3}>
            <Grain />
        </ParallaxLayer>

        <ParallaxLayer offset={.67} speed={.4} factor={3}>
            <Container>
                <Intro>
                    I'm Jari Zwarts,
                    <br />
                    a developer/designer based around <strong>Amsterdam</strong>.
                </Intro>
                {/*<Byline>*/}
                    {/*I'm currently building things at <strong>Oberon</strong>.*/}
                {/*</Byline>*/}
                
                <Links>
                    <LinksColumn>
                        <h3>Round the web</h3>
                        <h2>Links</h2>
                        <p>
                            <a href="https://github.com/jariz" target="_blank">GitHub</a><br/>
                            <a href="https://dribbble.com/jariz" target="_blank">Dribbble</a><br/>
                            <a href="https://twitter.com/JariZwarts" target="_blank">Twitter</a><br/>
                            <a href="https://twitter.com/JariZwarts" target="_blank">LinkedIn</a> (ugh)
                        </p>
                    </LinksColumn>
                    <LinksColumn>
                        <h3>Sporadic Projects</h3>
                        <h2>Open Source</h2>
                        <p>
                            <a href="https://noti.center" target="_blank">Noti</a><br/>
                            <a href="https://jariz.github.io/vibrant.js/" target="_blank">Vibrant.js</a><br/>
                            Akku (soon)<br/>
                            <a href="https://github.com/jariz/tabbie" target="_blank">Tabbie</a> (now defunct)
                        </p>
                    </LinksColumn>
                    <LinksColumn>
                        <h3>I wrote code for...</h3>
                        <h2>Clients</h2>
                        <p>
                            <a href="https://ajax.nl" target="_blank">Ajax</a><br/>
                            <a href="https://www.centraalbeheer.nl/" target="_blank">Centraal Beheer</a><br/>
                            <a href="https://knaw.nl/" target="_blank">KNAW</a><br/>
                            <a href="https://idfa.nl/" target="_blank">IDFA</a>
                        </p>
                    </LinksColumn>
                </Links>
            </Container>
        </ParallaxLayer>

    </Parallax>
);

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    position:relative;
    color: #FFF;
    padding: 0 3vw;
`;

const Links = styled.section`
    display: flex;
    margin-top: 15vh;
`;

const LinksColumn = styled.div`
    padding: 2vw;
    font-family: "Work Sans", sans-serif;
    
    &:first-child {
        margin-left: -2vw;
    }
    
    p {
        color: #FC3476;        
        font-size: 1.2vw;
        line-height: 1.8vw;
        
        a {
            color:inherit;
        }
    }
    
    h2 {
        font-family: "Space Mono", monospace;
        font-size: 3.2vw;
        text-transform: uppercase;
        margin: -.5vw 0 0;
    }
    
    h3 {
        margin: 0;
        opacity: 0.89;
        font-size: .8vw;
        letter-spacing: 2.22px;
        text-transform: uppercase;
        font-weight: 300;
    }
`

const Intro = styled.h1`
    font-family: "Space Mono", monospace;
    font-size: 3vw;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: 400;
    margin-right:40%;
`;

// const Byline = styled.h1`
//     font-family: "Work Sans", sans-serif;
//     font-size: 2vw;
//     color: #FC3476;
//     letter-spacing: 0;
// `

const Sun = styled.img.attrs({ src: sun })`
    width: 40%;
    position:absolute;
    left:5%;
`;

const Water = styled.img.attrs({ src: water })`
    width: 75%;
    position:absolute;
    right:0;
`;

const Ground = styled.img.attrs({ src: ground })`
    /* hack!!! */
    /*width: 102%;
    object-fit: cover;*/
    width: 102%;
    margin-left: -1%;
    margin-right: -1%;
`;

const Trees1 = styled.img.attrs({ src: trees1 })`
    /*width: 935px;*/
    height: 40%;
    width: 40%;
    left: 4%;
    position:absolute;
    /*margin-left:calc(935px - 40vw);*/
    object-position: bottom;
    object-fit: contain;    
`;

const Mountains = styled.img.attrs({ src: mountains })`
    position:absolute;
    right:5%;
    width: 60%;
    height: 40%;
    object-position: bottom;
    object-fit: contain;    
`;

Mountains.Reflection = Mountains.extend`
    opacity: .12;
    transform:translateY(97.5%) translateX(-1%) rotateY(180deg) rotate(180deg) ;
`;

const Lighthouse = styled(lighthouse)`
    position:absolute;
    left:20%;
    width: 14%;
    height: 45%;
`;

const Background = styled.div`
    background-image: linear-gradient(0deg, #c72f54 0%, #8C1238 100%);
    overflow:hidden;
    position: relative;
    height:60%;
    width: 100%;
`;

const Grain = styled.div`
    background-image:url(data:image/png;base64,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);
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity: .45;
`;

const Island = {
    Ground: styled.img.attrs({ src: islandGround })`
    width: 40%;
    position:absolute;
    right:0;
    height:25%;
    object-position: top;
    object-fit: contain;
`,
    Tent: styled.img.attrs({ src: islandTent })`
    width: 10%;
    position:absolute;
    right:12%;
    height:8%;
    object-position: top;
    object-fit: contain;
`,
    Trees: styled.img.attrs({ src: islandTrees })`
    width: 14%;
    position:absolute;
    right:10%;
    height:10%;
    object-position: bottom;
    object-fit: contain;
`
};

export default App;
