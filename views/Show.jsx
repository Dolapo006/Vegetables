const React = require('react');
const Show = (props) => {
  return (
    <div>
      <h1> Show Page </h1>
      <p>
               The {props.vegetable.name} is {props.vegetable.color} and is {props.vegetable.readyToEat ? 'Ready to eat!' : 'Not Ready to eat!'}
              </p>
    </div>
  )
}

module.exports = Show;

//use npm i to install your node module folder again
//use npm init -y to get all the package-json file.