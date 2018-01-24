import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const FormCss = `
    #mc-embedded-subscribe-form {
        font-family: RobotoMono, sans-serif;
        width: 100%;
        padding-top: 10px;
        text-align: center;
    }

    div.mc-field-group {
        display: inline-block;
        width: 70%;
    }

    div.mc-field-group > input {
        width: 100%;
    }

    .clear {
        display: inline-block;
    }

    div.mc-field-group > input, input.button {
        padding: 8px;
        color: black;
        background-color: white;
        border: 1px solid black;
    }

    input.button {
        width: 100%;
        color: white;
        padding: 8px 20px;
        background-color: #2d4191;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        div.mc-field-group > input, input.button {
            font-size: 14px;
            padding: 6px 10px;
        }
    }
`;


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nut Cracker Group"
      meta={[
        { charset: 'UTF-8' },
        { name: 'Description', content: 'We manufacture Scrap Processing Machines & Waste Managment Equipment\n viz. Bailing Presses, Shredders & Crushers, Briquetting Machine, Hydraulic Power Packs, Control Panels, Pumps & Valves' },
        { name: 'X-UA-Compatible', value: 'IE=Edge' },
        { name: 'theme-color', content: '#2d4191' },
        { name: 'apple-mobile-web-app-status-bar-style', content: "#2d4191" }
      ]}
    />
    <style type="text/css" dangerouslySetInnerHTML={{ __html: FormCss }} />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
