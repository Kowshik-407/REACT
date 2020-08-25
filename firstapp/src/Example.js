import React from 'react';

class Example extends React.Component{
    render() {
    //   return <h2> Hello Everyone!! This is Kowshik407 </h2>
      return (
          <div>
              <h2> My name is { this.props.name } </h2>
              { this.props.children }
          </div>
      )
    }
}

export default Example;
