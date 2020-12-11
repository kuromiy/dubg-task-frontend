import React from 'react';

type propsType = {
  text: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>)=>void
}

export default class GeneralButton extends React.Component<propsType, {}> {

  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}
