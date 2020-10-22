var React = require('react');
var ReactDOM = require('react-dom');

var div = React.DOM.div
var myTitle = require('./myTitle')

var myTitleFact = React.createFactory(myTitle)
var ce = React.createElement

var myFirstComponent = (
  div({ style: { color: 'red' } },
    myTitleFact({ title: 'Props are great', color: 'mediumaquamarine' }),
    React.createElement(myTitle, { title: 'Use Props everywhere', color: 'peru' }),
    ce(myTitle, { title: 'Props are the best', color: 'blue' })
  )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))
