import React, {Component} from 'react'
import {Route, IndexRoute, Link} from 'react-router'

const headerStyle = {
  marginTop: 120
}

const detailedInfoStyle = {
  float: 'right'
}

// main Component
class App extends Component {
  componentDidMount() {
    document.body.className='';
  }

  render() {
    return (
      <div>
      <header className="intro-header" style= {headerStyle} >
      <div className="container">
        <h1> Secret Cat Daily </h1>
          <nav>
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/work"> Work </Link></li>
              <li><Link to="/contact"> Contact </Link></li>
            </ul>
          </nav>
          <div style={detailedInfoStyle}>
            { this.props.children }
          </div>
      </div>
      </header>
      <body>
        
      </body>
      </div>
    );
  }
}

// Pages
class Home extends Component {
  render() {
    return (
      <div>
        <h2> Home </h2>
        <div> This is the home of Cat Tina. </div>
      </div>
    );
  }
}
class About extends Component {
  render(){
    return (
      <div>
        <h2>About</h2>
        <div>Some about page content</div>
      </div>
    )
  }
}
class Work extends Component {
  render(){
    return (
      <div>
        <h2>Work</h2>
        <div>Some work page content</div>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <div>Some contact page content</div>
      </div>
    )
  }
}
class NoMatch extends Component {
  render(){
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About} />
    <Route path="work" component={Work}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
