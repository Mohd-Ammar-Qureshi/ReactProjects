import { Bookmark } from "lucide-react";

const Card = ({
  company,
  posted,
  role,
  type,
  level,
  pay,
  location,
  logo
}) => {
  return (
    <div className="Card">
      <div className="top">
        <img src={logo} alt={company} />
        <button>
          Save <Bookmark size={17} />
        </button>
      </div>

      <div className="center">
        <div className="c1">
          <h3 className="cp1">{company}</h3>
          <h3 className="cp2">{posted}</h3>
        </div>
        <h2>{role}</h2>
        <div className="type">
          <h4 className="type1">{type}</h4>
          <h4 className="type2">{level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3 className="pay">{pay}</h3>
          <h3 className="CA">{location}</h3>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  );
};

export default Card;
