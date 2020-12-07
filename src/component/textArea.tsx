/* eslint-disable */
import React from "react";
import ReactMarkdown from "react-markdown";

// export class TextArea extends React.Component<TextAreaProps> {
//
//   render() {
//     return (
//       <div id="snovacka-text-area">
//         <div className="snovacka-dummy"/>
//         <ReactMarkdown source={this.props.content}/>
//       </div>
//     );
//   }
//
// }

type TextAreaProps = {
  content: string
}

// noinspection ES6ShorthandObjectProperty
// @ts-ignore
const TextArea = ({content}) => {

  const startRef = React.useRef(null);

  const scrollToTop = () => {
    // @ts-ignore
    startRef.current.scrollIntoView({behavior: "smooth"});
  };

  React.useEffect(scrollToTop);

  return (
    <div id="snovacka-text-area">
      <div ref={startRef}/>
      <ReactMarkdown source={content}/>
    </div>
  );
};

export default TextArea;