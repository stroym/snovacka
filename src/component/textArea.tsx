import React from "react";
import ReactMarkdown from "react-markdown";

export default class TextArea extends React.Component<TextAreaProps> {

  private readonly selfRef: React.RefObject<HTMLDivElement>;

  constructor(props: Readonly<TextAreaProps> | TextAreaProps) {
    super(props);

    this.selfRef = React.createRef<HTMLDivElement>();
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  render() {
    return (
      <div ref={this.selfRef} id="snovacka-text-area">
        <ReactMarkdown source={this.props.content}/>
      </div>
    );
  }

  componentDidMount() {
    this.scrollToTop();
  }

  componentDidUpdate(prevProps: Readonly<TextAreaProps>, prevState: Readonly<{}>, snapshot?: any) {
    this.scrollToTop();
  }

  scrollToTop() {
    if (this.selfRef.current) {
      this.selfRef.current.scrollTo({top: 0, behavior: "auto"});
    }
  }

}

type TextAreaProps = {
  content: string
}