import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HeaderDefault(props) {
  return (
    <div className="header">
        <h1 className="h1-header">{props.title}</h1>
        <Link to={props.linkTo}>
          {props.icon}
        </Link>
      </div>
  );
}

HeaderDefault.propTypes = {
  title: PropTypes.string,
  linkTo: PropTypes.string,
  icon: PropTypes.IconType,
}