class Subjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subjects: this.props.subjects
    }
  }
  saveSub(obj) {
    const data = { name: obj.name, code: obj.code, credits: obj.credits }
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/subjects",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "ab49f970-ebe1-1312-d237-04fcd7ced661"
      },
      "data": {
        "name": `${obj.name}`,
        "code": `${obj.code}`,
        "credits": `${obj.credits}`
      }
    }
    var that = this
    $.ajax(settings).done(function (response) {
      prevSubs = that.state.subjects
      console.log('prev subs', prevSubs)
      prevSubs.push(obj)
      that.setState({
        subjects: prevSubs
      })
    });

  }
  render() {
    return (
      <div>
        <AddSubject onFormSubmit={this.saveSub.bind(this)} />
        <SubjectList subjects={this.props.subjects} />
      </ div>
    )
  }
}
