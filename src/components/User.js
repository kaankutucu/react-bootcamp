import PropTypes from "prop-types";

function User ({name, surname, isLoggedIn, age}) {
    return <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Giriş Yapmadınız."}</h1>;
}


User.prototype = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.number,


};


export default User;

