"use strict";

console.log("Connected !!");

var showBool = false;

var showEvent = function showEvent() {
    showBool = showBool ? false : true;
    renderMe();
};

var appRoot = document.getElementById('root');

var renderMe = function renderMe() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggler"
        ),
        React.createElement(
            "button",
            { id: "show-button", onClick: showEvent },
            showBool ? "Hide Details" : "Show Details"
        ),
        showBool && React.createElement(
            "h3",
            null,
            "Victor Is Cool"
        )
    );

    ReactDOM.render(template, appRoot);
};

renderMe();
