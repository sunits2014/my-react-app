import React from 'react';
import PropTypes from 'prop-types';
import styles from './home.module.css';
import { facebookIcon, twitterIcon, instagramIcon, linkedinIcon, youtubeIcon } from '../../images/social/index.js';

const icons = [
  facebookIcon,
  twitterIcon,
  instagramIcon,
  linkedinIcon,
  youtubeIcon
]

const Home = () => {
  return (
    <>
      <BannerImageSection />
      <FeaturesSection />
    </>
  );
}

function BannerImageSection() {
  return (
    <div className="row">
      <div className='col-1 col-lg-12 col-md-12 col-sm-12 g-0'>
        <div className={styles.bannerHeight + " " + styles.bannerWrapper}>
          <div className='container h-100'>
            <div className='row text-white align-items-center justify-content-start h-100'>
              <div className={'col-lg-12 col-md-12 col-sm-12 col-1 ' + styles.leftText}>
                <h1 className='mb-5'>Welcome Learner !!!</h1>
                <p className='text-justify w-50'>
                  Welcome to Techweb, your gateway to mastering web development! <br /><br />Our platform offers flexible, self-paced courses designed to help you learn the latest tools, frameworks, and best practices in web development. Whether you're a beginner or looking to advance your skills, Techweb provides interactive lessons, hands-on projects, and expert guidance to accelerate your journey. Join our community and start building your future
                </p>
                <div className={'my-4 d-flex align-items-start flex-column ' + styles.socialBtnWrapper}>
                  <p className='font-weight-normal'>Connect with us on:</p>
                  <ul className='d-flex list-unstyled m-0 p-0 border'>
                    {icons.map((icon, index) => (
                      <li key={index} className={styles.socialWrapper}>
                        <a href={icon?.link} target="_blank" rel="noreferrer" className='d-flex p-3 text-decoration-none align-items-center text-white'>
                          <i width="32" className={icon?.icon} alt={icon?.alt} style={{fontSize: icon?.size}}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div className="row">
      <div className='col-1 col-lg-12 col-md-12 col-sm-12 g-0'>
        <h2>Features Section</h2>
      </div>
    </div>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
