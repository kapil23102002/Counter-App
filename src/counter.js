import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./counter.css";

// With Class Components

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState(this.count);
    }
  };

  Reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <div>{this.state.count}</div>
        <div className="container">
          <Button
            as="a"
            variant="success"
            className="m-2"
            onClick={this.Increment}
          >
            Increment
          </Button>
          <Button
            as="a"
            variant="primary"
            className="m-2"
            onClick={this.Decrement}
          >
            Decrement
          </Button>

          <Alert show={this.state.count === 0} variant="danger">
            <Alert.Heading>Oh snap!</Alert.Heading>
            <h3>If the value is ZERO than You got an error!</h3>
          </Alert>

          <Button as="a" variant="danger" className="m-2" onClick={this.Reset}>
            Reset
          </Button>
        </div>
      </>
    );
  }
}
export default Counter;

// With Functional Components

// const Counter = () => {
//   const [count, setCounter] = useState(1);

//   const Increment = () => {
//     setCounter(count + 1);
//   };

//   const Decrement = () => {
//     if (count > 0) {
//       setCounter(count - 1);
//     } else {
//       setCounter(count);
//     }
//   };

//   const Reset = () => {
//     setCounter(0);
//   };

//   return (
//     <>
//       <h1>Counter App</h1>
//       <div>{count}</div>
//       <div className="container">
//         <Button as="a" variant="success" className="m-2" onClick={Increment}>
//           Increment
//         </Button>
//         <Button as="a" variant="primary" className="m-2" onClick={Decrement}>
//           Decrement
//         </Button>

//         <Alert show={count === 0} variant="danger">
//           <Alert.Heading>Oh snap!</Alert.Heading>
//           <h3>If the value is ZERO than You got an error!</h3>
//         </Alert>

//         <Button as="a" variant="danger" className="m-2" onClick={Reset}>
//           Reset
//         </Button>
//       </div>
//     </>
//   );
// };

// export default Counter;
