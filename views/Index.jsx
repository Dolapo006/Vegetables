const React = require('react');
const DefaultLayout = require('./components/Default');


const Index = (props) => {

  return (
    <DefaultLayout title={"Vegetables Index Page"}>
    <div>
      <h1> Index Route </h1>

      
    <a href="/vegetables/new">Create a New Vegetable</a>


      <ul>
        {
          props.vegetables.map((vegetable, index) => {
            return (
              <li key={index}>
               The  <a href={`/vegetables`}>{vegetable.name}</a> is {vegetable.color} and is {vegetable.readyToEat ? 'Ready to eat!' : 'Not Ready to eat!'}
              </li>// this adds a link to the vegetable.
            )
          })
        }
      </ul>

    </div>
    </DefaultLayout>
  )

}

module.exports = Index;