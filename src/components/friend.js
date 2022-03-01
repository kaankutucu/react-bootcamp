import PropTypes from "prop-types";


function Friend() {
    return (
        <>
            <h1>{["Kaan2", "Kaan3", "Kaan4"]}</h1>;

            {
                Friend.map((Friend) => (
                    <div>{Friend}</div>
                ))}
        </>
    )
}

Friend.prototype = {
    Friend: PropTypes.array.isRequired,
}

export default Friend;