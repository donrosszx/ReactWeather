var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About</h3>
//         );
//     }
// });

//stateless functional component syntax
var About = (props) => {
    return (
        <h3>About Component</h3>
    )
};

module.exports = About;