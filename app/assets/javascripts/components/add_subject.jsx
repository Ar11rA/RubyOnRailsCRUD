var AddSubject = React.createClass({
   
   handleChange: function(e) {
    var name = e.target.name;
    this.obj[name] = e.target.value;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.obj);
  },
  render: function() {
    this.obj = {}
    return (
      <div>
        <h2>Create a New Subject</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='name' placeholder='Name' onChange={this.handleChange}/>
          <input name='credits' placeholder='Credits' onChange={this.handleChange} />
          <input name='code' placeholder='Code'onChange={this.handleChange} />
          <input type='button' value='Create' onClick={this.handleSubmit}/>
        </form>        
      </div>
    )
  }
});