console.log("Connected !!");

var personalInfo = {
    name:'Victor',
    age:5,
    options:['Yes', 'No']
}
let count=0;

const increaseAge = function(input) {
    count = count + 1;
    renderMe();
}

var appRoot = document.getElementById('root');

var arrayImg = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300"
]

const renderMe = () => {
    var templateTwo = (
        <div>
            <h1>Hello {personalInfo.name}</h1>
            {personalInfo.age > 10 ? <p>{personalInfo.age}</p> : <p>Below Age</p>}
            <button id="simple-button" onClick={increaseAge}>Click Me</button>
            <h3>Count:{count}</h3>
            <ul>
                {
                    arrayImg.map((value) => {
                        return <li><img src={value}></img></li>
                    })
                }
            </ul>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderMe();