import React from 'react';
import './App.css';

type Props = {
  header: React.ReactNode;
  body: React.ReactNode;
}

// const MyComponent: React.FC<Props> = (props) => {
    // return <span>{props.foo}</span>
// }

/** ジェネリックコンポーネント */
type SelectProps<T> = { items: T[] }
class Select<T> extends React.Component<SelectProps<T>, any> { 
  render() {
    return (
      <>{this.props.items}</>
    );
  }
}

/** 使い方 */
const Form: React.FC<SelectProps<string>> = () => {
  return <Select<string> items={['a','b', 'c']} />;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return (
      <>
        {this.props.header}
        {this.props.body}
        <Form items={[]} /> 
      </>
    );
  }
}

function App() {
  return <MyComponent header="これはヘッダーです" body="bbb" />;
}

export default App;
