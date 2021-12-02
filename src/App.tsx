import React from "react";
import icn_android from "./assets/icon-android.svg";
import icn_apple from "./assets/icon-apple.svg";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.App}>
      <header>
        <div className={Styles.logo}>&nbsp;</div>
        <div className={Styles.description}>
          <h1>We make your music sound extraordinary.</h1>
          <p>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </header>
      <main>
        <div className={Styles.blackDiv}>
          <div className={Styles.phone}>&nbsp;</div>
          <div className={Styles.salmonDiv}>
            <h2>Premium EQ</h2>
            <span>
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </span>
            <div className={Styles.cost}>
              <h1>$4</h1> /month
            </div>
            <div className={Styles.stores}>
              <div className={Styles.btn + " " + Styles.ios}>
                <span>
                  <img src={icn_apple} alt="icn" />
                  iOS Download
                </span>
              </div>
              <div className={Styles.btn + " " + Styles.android}>
                <span>
                  <img src={icn_android} alt="icn" />
                  Android Download
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className={Styles.logo}>&nbsp;</div>
        <div className={Styles.tcSocial}>
          <div className={Styles.tc}>
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at equalizer@example.com
          </div>
          <div className={Styles.socialHolder}>
            <div className={Styles.social + " " + Styles.facebook}>&nbsp;</div>
            <div className={Styles.social + " " + Styles.twitter}>&nbsp;</div>
            <div className={Styles.social + " " + Styles.insta}>&nbsp;</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
