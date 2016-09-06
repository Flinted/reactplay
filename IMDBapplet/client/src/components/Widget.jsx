var React = require('react')
var FilmList = require('./FilmList')
var ShowTimes = require('./ShowTimes')

var sampleData = [
{id:1, name: "Sausage Party", url:"http://www.google.co.uk"},
{id:2, name: "Tomato Party", url:"http://www.google.co.uk"},
{id:3, name: "Potato Party", url:"http://www.google.co.uk"},
{id:4, name: "Bacon Party", url:"http://www.google.co.uk"},
]
var showtimesURL = "http://www.amazon.com"

var Widget = React.createClass({
  getInitialState: function(){
    return {data: sampleData, showtimesURL:showtimesURL}
  },

  render: function(){
    return(
      <div className='widget-box'>
      <h3>UK Opening This Week</h3>
      <FilmList data={this.state.data}/>
      <h4>See more opening this week >></h4>
      <hr/>
      <ShowTimes url={this.state.showtimesURL}/>
      <hr/>
      </div>

      )
  }

})

module.exports = Widget