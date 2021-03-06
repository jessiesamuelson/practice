var Note = React.createClass({
  getInitialState: function() {
    return { editing: false }
  },
  edit: function() {
    this.setState({ editing: true });
  },
  save: function() {
    // this.refs.newText is the name of the variable defined in renderForm textarea
    // getDOMNode is going to look for the value of that textarea
    var val = this.refs.newText.getDOMNode().value;
    alert("TODO: Save note value " + val);
    this.setState({ editing: false });
  },
  remove: function() {
    alert('removing note');
  },
  renderDisplay: function() {
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit}
            className="btn btn-primary glyphicon glyphicon-pencil"/>
          <button onClick={this.remove}
            className="btn btn-danger glyphicon glyphicon-trash"/>
        </span>
      </div>
    );
  },
  renderForm: function() {
    return (
      <div className="note">
        <textarea
          ref="newText" 
          defaultValue={this.props.children}
          className="form-control">
        </textarea>
        <button
          onClick={this.save}
          className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    )
  },
  render: function() {
    console.log(this.state.editing);
    if ( this.state.editing ) {
      return this.renderForm();
    }
    else {
      return this.renderDisplay();
    }
  }
});


var Board = React.createClass({
  // propTypes is part of react library, and helps with handling validation
  propTypes: {
    count: function( props, propName ) {
      if ( typeof props[propName]!== "number" ) {
        return new Error('The count property must be a number');
      }
      if ( props[propName] > 100 ) {
        return new Error('Creating ' + props[propName] + " notes is ridiculous"); 
      }
    }

  },
  getInitialState: function(){
    return {
      notes: [
        'Do something 1',
        'Do something 2',
        'Do something 3',
        'Do something 4'
      ]
    };
  },

  render: function() {
    return (
      <div className="board">
        {this.state.notes.map(function(note, i) {
          return(
            <Note key={i}>{note}</Note>
          );

        })}
      </div>
    )
  }
})

React.render(
  <Board count={10}/>,
  document.getElementById('react-container')
);