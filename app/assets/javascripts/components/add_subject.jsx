var AddSubject = React.createClass({
   
   handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },
  render: function() {
    return (
      <div>
        <h2>Create a New Subject</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='name' placeholder='Name' onChange={this.handleChange}/>
          <input name='credits' placeholder='Credits' onChange={this.handleChange} />
          <input name='code' placeholder='Code' onChange={this.handleChange} />
          <input type='submit' value='Create' />
        </form>        
      </div>
    )
  }
});