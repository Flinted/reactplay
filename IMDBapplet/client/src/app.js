var React = require('react');
var ReactDOM = require('react-dom');
var Widget = require('./components/Widget.jsx');

window.onload = function(){
  ReactDOM.render(
    <Widget/>,
    document.getElementById('app')
  );
}
