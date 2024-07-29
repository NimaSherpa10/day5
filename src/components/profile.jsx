import PropTypes from "prop-types";

function Profile({ name, age, bio }) {
  return (
    <div className="profile">
      My name is {name}. My age is {age} and i am a {bio}
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Profile;
