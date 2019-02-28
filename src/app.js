console.log("Connected !!");

var personalInfo = {
    name:'Victor',
    age:5,
    options:['Yes', 'No']
}

var templateTwo = (
    <div>
        <h1>Hello {personalInfo.name}</h1>
        {personalInfo.age > 10 ? <p>{personalInfo.age}</p> : <p>Below Age</p>}
    </div>
);

var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);
