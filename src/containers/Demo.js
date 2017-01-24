import React, { Component } from 'react';
import Zest from 'react-zest';


class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationName: 'beacon',
      animationTrigger: 'click',
      animationDuration: 300,
    };
  }

  render() {
    return (
      <div className="demo">
        <div className="demo__title">Preset Triggers</div>
        <div className="demo__description">
          This is an example of our preset triggers. You can have an animation fire on 'hover' or 'click' events.
          You can also choose from the three available animations, ('beacon', 'pulse', and 'wiggle'), and toggle their durations.
        </div>
        <div className="demo__form">
          <label className="demo__form__label">Animation Name</label>
          <select className="demo__form__input" defaultValue={this.state.animationName} onChange={e => this.setState({ animationName: e.target.value })} >
            <option value="beacon">beacon</option>
            <option value="wiggle">wiggle</option>
            <option value="pulse">pulse</option>
          </select>
          <label className="demo__form__label">Animation Trigger</label>
          <select className="demo__form__input" defaultValue={this.state.animationTrigger} onChange={e => this.setState({ animationTrigger: e.target.value })}>
            <option value="click">click</option>
            <option value="hover">hover</option>
          </select>
          <label className="demo__form__label">Animation Duration (in milliseconds)</label>
          <input className="demo__form__input" onChange={e => this.setState({ animationDuration: e.target.value })} value={this.state.animationDuration} />
        </div>
        <div className="demo__rendering">
          <Zest
            animationName={this.state.animationName}
            animationTrigger={this.state.animationTrigger}
            animationDuration={parseInt(this.state.animationDuration, 10)}
          >
            <button className="demo__rendering__btn">Click Me!</button>
          </Zest>
        </div>
      </div>
    );
  }
}

export default Demo;
