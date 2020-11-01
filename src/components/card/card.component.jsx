import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import {Link} from 'react-router-dom'

import {selectShareHidden} from '../../redux/share/share.selector';
import {toggleShareHidden} from '../../redux/share/share.action';

import './card.styles.css';

import ShareDropdown from '../../components/share-dropdown/share-dropdown.component';

const Card = ({hidden, toggleShareHidden}) => (
    <div id="content">
      <div className="card mb-3" style={{maxWidth: "940px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="/code.jpg" className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bolder"}}>Queen Mercy <br/> <small style={{ fontWeight: "bold"}}>Front-End developer</small></h5>
              <ReactTypingEffect typingDelay="2000ms" eraseDelay="3000" eraseSpeed="500ms"  style={{ FontWeight: "bolder"}} text={["Hi! my name is Mercy.", "I am a Front-end developer.", "I have been coding for two years now and counting.",
            "My coding career kicked off at the age of 18, at that point i was developing the love for coding  where i basically had to know about the basics of th web i.e html,css and javascript.",
            "Well at age 18 i never had the opportunity to code pratically, i was basically cramming html tags and  css concepts with little  javascript syntax.",
            "So, it became a different ball game when i clocked 19.", "I enrolled for an internship at START INNOVATION HUB in UYO, Akwai-Ibom state.", 
            "Luckily i was picked and then i got  my hands on code for the very first time", "I was taught how to play around with the web, design static webpages, mobile responsiveness, and soft skills to keep me on my job.",
            "That alone was the very Head Start i needed.", " And here i am today, a Front-end developer, working with React.", "Feel free to contact me! click on the share icon!" ]} />
              <div>
                <img src="/mercy.jpg" alt="image" className="profile-img"/>
                <div className="profile-details">
                <h5 style={{ fontWeight: "bolder"}}>Queen Mercy</h5>
                <small style={{ fontWeight: "bold"}}>Front-End developer</small>
                </div>

                <div className="share-icon" onClick={toggleShareHidden}>
                  <i className="fa fa-share"></i>
                </div>
                {
                  hidden ? null: <ShareDropdown />
                }
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectShareHidden
});

const mapDispatchToProps = dispatch => ({
  toggleShareHidden: () => dispatch(toggleShareHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);


