import React from "react";
import ReactMarkdown from "react-markdown";

export class TextArea extends React.Component<TextAreaProps> {

  render() {
    return (
      <div id="snovacka-text-area">
        <ReactMarkdown source={this.props.content}/>
      </div>
    );
  }

}

type TextAreaProps = {
  content: string
}