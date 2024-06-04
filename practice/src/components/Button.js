function Button(props) {
    switch (props.color) {
      case 'green': {
        return (
          <button
            style={{ background: 'green', color: 'white' }}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      case 'red': {
        return (
          <button
            style={{ background: 'red', color: 'white' }}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        );
      }
      default: {
        return <button onClick={props.onClick}>{props.children}</button>;
      }
    }
  }
  
  export default Button;