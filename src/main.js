import React from 'react';
import ReactDOM from 'react-dom';

class Greeter extends React.Component {
 render() {
	return <h1>Hello {this.props.name}</h1>
    }
}
const GreeterFactory = React.createFactory(Greeter);

class App extends React.Component {
  render() {
        return <Greeter name=" reactors!" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
