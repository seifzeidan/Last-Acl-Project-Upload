import { Logo } from "../components";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h3>
            Terms<span> & </span>Conditions
          </h3>
          <p>
            I'm baby unicorn chicharrones DIY gatekeep iceland twee post-ironic
            dreamcatcher hot chicken readymade. Same pabst flexitarian banjo +1
            freegan brunch retro keffiyeh glossier knausgaard umami. Selvage
            affogato kitsch cloud bread cred ethical venmo tumblr man braid
            flexitarian bruh skateboard ugh forage fam. Fashion axe tousled JOMO
            lumbersexual godard, wolf celiac umami. Flexitarian hashtag everyday
            carry keffiyeh, gochujang occupy migas neutra beard cardigan
            single-origin coffee. I'm baby unicorn chicharrones DIY gatekeep
            iceland twee post-ironic dreamcatcher hot chicken readymade. Same
            pabst flexitarian banjo +1 freegan brunch retro keffiyeh glossier
            knausgaard umami. Selvage affogato kitsch cloud bread cred ethical
            venmo tumblr man braid flexitarian bruh skateboard ugh forage fam.
            Fashion axe tousled JOMO lumbersexual godard, wolf celiac umami.
            chicharrones DIY gatekeep iceland twee post-ironic dreamcatcher hot
            chicken readymade. Same pabst flexitarian banjo +1 freegan brunch
            retro keffiyeh glossier knausgaard umami. Selvage affogato kitsch
            coffee.
          </p>
          {/*instead of <button></button> use <Link></Link>*/}
          <Link to="/register" className="btn btn-hero">
            GoBack
          </Link>
        </div>
        <img src={main} alt="Find Course" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Terms;
