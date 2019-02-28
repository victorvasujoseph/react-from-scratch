'use strict';

console.log("Connected !!");

var personalInfo = {
    name: 'Victor',
    age: 5,
    options: ['Yes', 'No']
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello ',
        personalInfo.name
    ),
    personalInfo.age > 10 ? React.createElement(
        'p',
        null,
        personalInfo.age
    ) : React.createElement(
        'p',
        null,
        'Below Age'
    )
);

var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);
