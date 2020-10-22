var React = require('react');

var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2

var x = 1

var myTitle = React.createClass({
  render () {
    x++
    return (
      div(null,
        h1({ style: { color: this.props.color } }, this.props.title),
        h2(null, x)
      )
    )
  }
})

module.exports = myTitle
