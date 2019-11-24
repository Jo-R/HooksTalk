class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem("myValueInLocalStorage") || ""
    };
  }
  componentDidUpdate() {
    localStorage.setItem("myValueInLocalStorage", this.state.value);
  }
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>
        <input value={this.state.value} type="text" onChange={this.onChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

const App = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );
  React.useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", value);
  }, [value]);
  const onChange = event => setValue(event.target.value);
  return (
    <div>
      <h1>Hello React Function Component!</h1>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};

// source: https://www.robinwieruch.de/react-hooks-migration
