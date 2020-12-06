import React, {HTMLProps} from "react";
import PropTypes from "prop-types";

export class TextArea extends React.Component<TextAreaProps & HTMLProps<HTMLDivElement>, TextAreaProps> {

  static props = {
    content: PropTypes.string
  }

  constructor(props: Readonly<TextAreaProps> | TextAreaProps) {
    super(props);

    this.state = {
      content: ""
    };
  }

  static getDerivedStateFromProps(props: TextAreaProps) {
    return {
      content: props.content
    };
  }

  render() {
    return <div id="text-area">{this.props.content}</div>;
  }

}

type TextAreaProps = {
  content?: string
}