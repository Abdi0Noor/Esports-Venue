import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return (
      <footer>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Esports-Ball</div>
                <div className="footer_copyright">
                    The Esports-ball 2019.All rights reserved.
                </div>
            </Fade>

      </footer>
    );
};

export default Footer;