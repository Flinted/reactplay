var React = require('react')


var Film = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

render: function(){
  return(
    <div className='film'>
      <a href= {this.props.url}>{this.props.name}</a>
    </div>
  )
}
})
module.exports = Film;