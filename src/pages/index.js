import React from 'react';
import Img from "gatsby-image";
import styled, { injectGlobal } from "styled-components";
import RobotoMono from "typeface-roboto-mono";

injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
`;

const BgImage = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; // or whatever

    // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
    & > img {
        object-fit: cover !important; // or whatever
        object-position: 0% 0% !important; // or whatever
        font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
    }
`;

const OuterMainWrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    width: 90%;
    padding-bottom: 150px;
    position: relative;

    > h1 {
        text-align: right;
        font-family: RobotoMono, sans-serif;
        font-weight: 500;
    }

    > p {
        align-self: center;
        font-family: RobotoMono, sans-serif;
        font-weight: 400;
        padding-top: 10px;
        color: black;
        font-size: 20px;
    }

    @media (max-width: 900px) {
        > h1 {
            font-size: 24px;
        }
    }

    @media (max-width: 700px) {
        > h1 {
            font-size: 22px;
        }
    }

    @media (max-width: 600px) {
        > p {
            font-size: 16px
        }
        > h1 {
            font-size: 18px
        }
    }

    @media (max-width: 450px) {
        > p {
            font-size: 14px
        }
        > h1 {
            font-size: 16px
        }
    }

`;

const Footer = styled.div`
    background-color: #2d4191;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;

    > p {
        color: white;
        font-family: RobotoMono, sans-serif;
        padding: 10px;
    }

    @media (max-width: 600px) {
        > p {
            font-size: 16px
        }
    }

    @media (max-width: 450px) {
        > p {
            font-size: 14px
        }
    }

`;

const IndexPage = props => (
    <div>
        <OuterMainWrapper>
            <BgImage
                alt="Scrap Background"
                sizes={props.data.background.sizes}
                style={{position: "absolute"}}
                fadeIn={false}
            />
            <MainWrapper>
                <Img
                    alt="Nut Cracker Logo"
                    sizes={props.data.logo.sizes}
                    fadeIn={false}
                />
                <h1>Equipment, Services & Consultancy</h1>
                <p>Sign up to be the first to know when we launch!</p>
                <div id="mc_embed_signup">
                    <form action="https://nutcrackergroup.us17.list-manage.com/subscribe/post?u=806d90cbc2e7f6071eb0bb2f4&amp;id=f07adf07b2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="example@domain.com"/>
                            </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{display: "none"}} />
                                    <div className="response" id="mce-success-response" style={{display: "none"}} />
                                </div>
                                <div style={{position: "absolute", left: "-5000px"}}>
                                    <input type="text" name="b_806d90cbc2e7f6071eb0bb2f4_f07adf07b2" tabIndex="-1" />
                                </div>
                                <div className="clear">
                                    <input type="submit" value="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                </div>
                        </div>
                    </form>
                </div>
            </MainWrapper>  
        </OuterMainWrapper>
        <Footer>
            <p>E-36 (D1), RIICO INDL. Area, Khushkhera, Distt. Alwar, Rajashthan - 301019 | info@nutcrackergroup.com | +91 9871296620</p>
        </Footer>
    </div>
)

export const pageQuery = graphql`
    query LogoQuery {
        logo: imageSharp(id: { regex: "/Logo/" }) {
            sizes(maxWidth: 800) {
                ...GatsbyImageSharpSizes_withWebp_noBase64
            }
        }
        background: imageSharp(id: {regex: "/Background/"}) {
            sizes(maxWidth: 1920) {
                ...GatsbyImageSharpSizes_withWebp_noBase64               
            }
        }
    }
`

export default IndexPage;