import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <div>
      <center>
        <h1>{title}</h1>
      </center>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
