var React = require('react');
var Film = require('./Film')



var FilmList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
  },

  render: function(){
    // var deleter = this.props.deleter

    var filmNodes = this.props.data.map(function(film){
      return (
        <Film key={film.id} url={film.url} name={film.name}></Film>
        )
    }.bind(this))

    return(
      <div className='film-list'>
        {filmNodes}
     </div>
    )

  }
})

module.exports = FilmList;