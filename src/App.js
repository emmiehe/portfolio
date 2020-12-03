import React from "react";
import './App.css';

class Project extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="project">
        <h1 id={this.props.name}>{this.props.name}</h1>
      </div>
    );
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {name: "Project A", description: "Description for project A", url: ""},
        {name: "Project B", description: "Description for project B", url: ""},
        {name: "Project C", description: "Description for project C", url: ""},
        {name: "Project D", description: "Description for project D", url: ""},
      ],
      project: {name: "Project A", description: "Description for project A", url: ""}
    };
    this.handleProjectMenuClick = this.handleProjectMenuClick.bind(this);
  }

  handleProjectMenuClick(event){
    this.setState({project: this.state.projects.find( project => project.name === event.target.value)});
  }

  render() {
    return (
      <div className="main">
        <div className="my-navbar">
          <div className="logo">
            <h1><a href={"#"}>Home/Logo</a></h1>
            <img/>
          </div>
          <div>
            <h2>Projects</h2>
            <ul>
              {this.state.projects.map((project) => <li><button onClick={this.handleProjectMenuClick} value={project.name}>{project.name}</button></li>)}
            </ul>
          </div>
          <div>
            <h2>Contact Me</h2>
          </div>
        </div>
        <div>
          <Project name={this.state.project.name}/>
          {/*{this.state.projects.map((project) => <Project name={project.name}/>)}*/}
        </div>
      </div>
    )
  }
}

export default App;

