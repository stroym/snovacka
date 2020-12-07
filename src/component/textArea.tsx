import React from "react";
import ReactMarkdown from "react-markdown";

export class TextArea extends React.Component<TextAreaProps> {

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
    return (
      <div id="text-area">
        <ReactMarkdown source={this.props.content}/>
      </div>
    );
  }

}

type TextAreaProps = {
  content: string
}