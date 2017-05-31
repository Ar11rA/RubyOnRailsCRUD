var SubjectList = React.createClass({
  render: function () {
    var subjectList = this.props.subjects.map((subject, index) => {
      return (
        <div key={index}>
          <p>Name: {subject.name}</p>
          <p>Code: {subject.code}</p>
          <p>Credits: {subject.credits}</p>
        </div>)
    })

    return(
      <div> {subjectList} </div>
    )
  }
});
