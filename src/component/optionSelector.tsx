import React, {Component} from "react";
import PropTypes from "prop-types";

export class OptionSelector extends Component<OptionProps> {

  static props = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.any.isRequired
  }

  render() {
    return <span className="option-selector" onClick={this.props.onClick}>{this.props.content}</span>;
  }

}

type OptionProps = {
  content: string,
  onClick: any
}

