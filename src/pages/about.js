import React from "react"
import Layout from "../components/Layout"
import aboutStyle from "./About.module.scss"
import Img from "gatsby-image"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    file(relativePath: { eq: "images/profile_bitmoji.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.

        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = props => {
  console.log(query)
  return (
    <Layout>
      <h2>
        Hello , my name is Vipul Pandey. I work in the field of Artifcial
        Intelligence.
      </h2>

      <div className={aboutStyle.main}>
        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}>
            {" "}
            <Img
              className={aboutStyle.img}
              fluid={props.data.file.childImageSharp.fluid}
            />
          </div>
          <div className={aboutStyle.texto}>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-map-marker-alt fa-sm"></i>
              <p>India</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-graduation-cap fa-sm"></i>
              <p>Autodidactic</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-code fa-sm"></i>
              <p>Python, R, OpenCV, Keras, Pytorch, React, Flask</p>
            </div>
            <div className={aboutStyle.iconos}>
              <i className="fas fa-language fa-sm"></i>
              <p>Necessary-tech-skills to create AI prototype  </p>
            </div>
          </div>
        </div>
        <div className={aboutStyle.derecha}>
          <p>
          Perceptual Learning is what interests me.

            I build AI centric Products" prototype around

            
            <ul>
                <li>Computer Vision</li>
                <li>Speech Analysis</li>
                <li>Text Analysis</li>
            </ul>
            Also, I am involved in
            <ul>
                <li>AI Awareness</li>
                <li>AI Education</li>
            </ul>
            
          </p>
          

          <div className={aboutStyle.logoContainer}>
            <p>Some of the tech I like:</p>
            <img
              alt="javascript"
              className={aboutStyle.logo}
              src="./logos/javascript.svg"
            />
            <img
              alt="Gatsby"
              className={aboutStyle.logo}
              src="./logos/gatsby.svg"
            />
            <img
              alt="GraphQl"
              className={aboutStyle.logo}
              src="./logos/graphql.svg"
            />
            <img
              alt="React"
              className={aboutStyle.logo}
              src="./logos/react.svg"
            />
            <img
              alt="nodeJs"
              className={aboutStyle.logo}
              src="./logos/nodejs-icon.svg"
            />
            <img
              alt="Python"
              className={aboutStyle.logo}
              src="./logos/python-seeklogo.svg"
            />
            <img
              alt="Flask"
              className={aboutStyle.logo}
              src="./logos/flask-seeklogo.com.svg"
            />
          </div>

          <div className={aboutStyle.socialContainer}>
            <p>Send me a message!</p>
            {/* <a
              className={aboutStyle.social}
              href="https://github.com/martin2844"
            >
              <i className="fab fa-github"></i>
            </a> */}
            <a
              className={aboutStyle.social}
              href="https://www.instagram.com/statsmatter/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://www.youtube.com/channel/UCmo9hjEJYwM_1-HczjozvEA"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className={aboutStyle.social}
              href="https://twitter.com/statsmattersm"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
