import React from 'react';

class Tooltip extends React.Component {
  classn = () => {
    return `${this.props.position}`;
  };

  render() {
    return (
      <div className={`${this.classn()}`}>!! i am a hovered tooltip !!</div>
    );
  }
}

export default Tooltip;
