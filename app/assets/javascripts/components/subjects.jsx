class Subjects extends React.Component {
  render() {
   <AddSubject />
   const subjectList = this.props.subjects.map((subject)=>
   {return(
   <div>  
   <p>Name: {subject.name}</p>
   <p>Code: {subject.code}</p>
   <p>Credits: {subject.credits}</p>
   </div>)})
    return (
      <div>
      <AddSubject />
      {subjectList}
      </div>
    )
  }
}