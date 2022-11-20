import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SiKnowledgebase } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer2() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/reshab.naskar.31' className='me-4 text-reset'>
            <FaFacebook />
          </a>
          <a href='https://www.twitter.com' className='me-4 text-reset'>
            <FaTwitter />
          </a>
          <a href='https://www.google.com' className='me-4 text-reset'>
            <FaGoogle />
          </a>
          <a href='https://www.instagram.com/rezbizar/' className='me-4 text-reset'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com' className='me-4 text-reset'>
            <FaLinkedinIn />
          </a>
          <a href='https://www.github.com' className='me-4 text-reset'>
            <FaGithub />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h4 className=' fw-bold mb-4'>
                <SiKnowledgebase className="me-3" />
                CodeWithReshab
              </h4>
              <p>
                We are humen and nothing is impossible to us, come and join us for reaching your maximum potential.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Technology</h6>

              <p>
                <Link to='#!' className='text-reset'>
                  React
                </Link>
              </p>
              <p>
                <Link to='#!' className='text-reset'>
                  Node
                </Link>
              </p>
              <p>
                <Link to='#!' className='text-reset'>
                  Microservices
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='#!' className='text-reset'>
                  Pricing
                </Link>
              </p>
              <p>
                <Link to='#!' className='text-reset'>
                  Settings
                </Link>
              </p>
              <p>
                <Link to='#!' className='text-reset'>
                  Help
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <FaHome className="me-2" />
                India, WestBengal, Kol-700065
              </p>
              <p>
                <FaEnvelope className="me-3" />
                Naskarreshab2003@gmail.com
              </p>
              <p>
                <FaPhoneAlt className="me-3" /> + 91 8585891309
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://www.facebook.com/reshab.naskar.31'>
          CodeWithReshab
        </a>
      </div>
    </MDBFooter>
  );
}