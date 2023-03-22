import React from "react";
import './Team.css'
import myImage1 from 'file:///C:/Users/alaam/Desktop/crypto/cryptoproject/img/member/2.jpg';
import myImage from  'file:///C:/Users/alaam/Desktop/crypto/cryptoproject/img/member/5.jpg'

import "font-awesome/css/font-awesome.min.css";

const Teams = () => {
  return (
    <section className="team-section spad">
      <div className="container">
        <div className="section-title text-center">
          <h2>Meet Our Team</h2>
          <p>
            Our experts in the field of crypto currency can always help you
            with any of your questions!
          </p>
        </div>
      </div>
      <div className="team-members clearfix">
        {/* Team member */}
        <div className="member">
          <div className="member-text">
            <div
              className="member-img set-bg"
              data-setbg="img/member/1.jpg"
              style={{ backgroundImage: `url(${myImage1})`}}
            ></div>
            <h2>Tom Binegar</h2>
            <span>Business Development</span>
          </div>
          <div className="social-men">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="member-info">
            <div
              className="member-img mf set-bg"
              data-setbg="img/member/1.jpg"
              style={{ backgroundImage: `url(${myImage1})`}} ></div>
            <div className="member-meta">
              <h2>Tom Binegar</h2>
              <span>Marketing Director</span>
            </div>
            <p>
              Jackson Nash is a full-time faculty member of the Marketing and
              Behavioural Science Division at the Sauder School of Business at
              UBC. He leads the Entrepreneurship Group, in the undergraduate
              and graduate programs, teaching actively in both of these.
            </p>
          </div>
        </div>
        {/* Team member */}
        <div className="member">
          <div className="member-text">
            <div
               className="member-img set-bg"
               data-setbg="img/member/1.jpg"
               style={{ backgroundImage: `url(${myImage})`}}
            ></div>
            <h2>Jackson Nash</h2>
            <span>Business Development</span>
          </div>
          <div className="social-men">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <div className="member-info">
            <div
               className="member-img mf set-bg"
               data-setbg="img/member/1.jpg"
               style={{ backgroundImage: `url(${myImage})`}} 
            ></div>
            <div className="member-meta">
              <h2>Jackson Nash</h2>
              <span>Marketing Director</span>
            </div>
            <p>
              Jackson Nash is a full-time faculty member of the Marketing and
              Behavioural Science Division at the Sauder School of Business at
              UBC. He leads the Entrepreneurship Group, in the undergraduate
              and graduate programs, teaching actively in both of these.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
