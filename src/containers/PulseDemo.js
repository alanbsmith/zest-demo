import React, { Component } from 'react';
import Zest from 'react-zest';


class PulseDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationName: 'pulse',
      animationTrigger: 'click',
      animationDuration: 3000,
      input: '',
      valid: true
    };
  }

  validateInput() {
    if (this.state.input.length < 3) { return this.setState({ valid: false }); }
    return this.setState({ valid: true });
  }

  massageTrigger() {
    if (this.state.animationTrigger === 'true') { return true; }
    if (this.state.animationTrigger === 'false') { return false; }
    return this.state.animationTrigger;
  }

  render() {
    return (
      <div className="demo">
        <div className="demo__title">Custom Trigger</div>
        <div className="demo__description">
          This is an example of a custom trigger. You can have an animation fire based on an external attribute returning `true`.
          For this particular example, if the text length less than three characters, the 'pulse' animation will be triggered.
          The validation occurs `onBlur` (when you click away from the input).
        </div>
        <div className="demo__form">
          <label className="demo__form__label">Animation Name</label>
          <select className="demo__form__input" disabled defaultValue={this.state.animationName} onChange={e => this.setState({ animationName: e.target.value })} >
            <option value="pulse">pulse</option>
          </select>
          <label className="demo__form__label">Animation Trigger</label>
          <select className="demo__form__input" disabled={true} defaultValue={this.state.animationTrigger} onChange={e => this.setState({ animationTrigger: e.target.value })}>
            <option value={this.state.valid}>{'!this.state.valid (input < 3)'}</option>
          </select>
          <label className="demo__form__label">Animation Duration (in milliseconds)</label>
          <input className="demo__form__input" onChange={e => this.setState({ animationDuration: e.target.value })} value={this.state.animationDuration} />
        </div>
        <div className="demo__rendering">
          <Zest
            animationName={this.state.animationName}
            animationTrigger={!this.state.valid}
            animationDuration={parseInt(this.state.animationDuration, 10)}
          >
            <input
              className="demo__rendering__input"
              type="text"
              placeholder="add some text"
              value={this.state.input}
              onChange={e => this.setState({ input: e.target.value })}
              onBlur={() => this.validateInput()}
            />
          </Zest>
        </div>
      </div>
    );
  }
}

export default PulseDemo;
