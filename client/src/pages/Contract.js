import { Logo } from "../components";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Contract = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h3>
            <span> Contract</span>
          </h3>
          <p>
            In this Contract you accept the 5% commission we take for connecting
            you with the trainees. Selvage affogato kitsch cloud bread cred
            ethical venmo tumblr man braid flexitarian bruh skateboard ugh
            forage fam. Fashion axe tousled JOMO lumbersexual godard, wolf
            celiac umami. Flexitarian hashtag everyday carry keffiyeh, gochujang
            occupy migas neutra beard cardigan single-origin coffee.
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

export default Contract;
