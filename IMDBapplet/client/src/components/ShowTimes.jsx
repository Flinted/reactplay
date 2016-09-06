var React = require('react')


var ShowTimes = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

render: function(){
  return(
    <div className='showtimes'>
      <a href={this.props.url}>Get Showtimes</a>
    </div>
  )
}

})
module.exports = ShowTimes;