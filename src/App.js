import React from "react";
import './App.css';
import personas from "./img/personas.png";
import responsiveRedesign from "./img/responsive-redesign.png";
import development from "./img/development.png";
import abtesting from "./img/abtesting.png";

class ProjectCard extends React.Component {
  constructor(props){
    super(props);
  }

  // style={{background: `url(${this.props.img}) no-repeat fixed center`}}
  render(){
    return (
      <button className="project-card" value={this.props.name} onClick={(e) => this.props.handleProjectMenuClick(e)}>
        {/*<h1 id={this.props.name}>{this.props.name}</h1>*/}
        <img src={this.props.img} alt={this.props.name}/>

      </button>
    );
  }
}

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
        {name: "Project A", description: "Description for project A", url: "", img: personas},
        {name: "Project B", description: "Description for project B", url: "", img: responsiveRedesign},
        {name: "Project C", description: "Description for project C", url: "", img: abtesting},
        {name: "Project D", description: "Description for project D", url: "", img: development},
      ],
      project: false,
    };
    this.handleProjectMenuClick = this.handleProjectMenuClick.bind(this);
  }

  handleProjectMenuClick(event) {
    // alert(event.target.value);
    let project = this.state.projects.find(project => project.name === event.target.value);
    this.setState({project: project});
  }

  render() {
    return (
      <div className="main">
        <div className="my-navbar">
          {/*<div className="logo">*/}
          {/*  <h1><a>Home/Logo</a></h1>*/}
          {/*</div>*/}
          <div className="my-navbar-item">
            <button onClick={() => this.setState({project: false})}><h2>Projects</h2></button>
          </div>
          <div className="my-navbar-item">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="content">
          { this.state.project ?
            <Project name={this.state.project.name}/> :<div>{this.state.projects.map((project) => <ProjectCard name={project.name} img={project.img} handleProjectMenuClick={this.handleProjectMenuClick}/>)}</div>
          }
        </div>
      </div>
    )
  }
}

export default App;

