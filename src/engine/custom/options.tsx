import React, {ReactElement} from "react";

// export class OptionsContainer implements React.FunctionComponent<IOptions> {
//
//   render() {
//     return <div id="options-container"/>;
//   }
//
//   contextTypes: React.ValidationMap<any>;
//   defaultProps: Partial<IOptions>;
//   displayName: string;
//   propTypes: React.WeakValidationMap<IOptions>;
//
// }

export class OptionSelector extends React.Component<React.HTMLProps<HTMLSpanElement>, React.HTMLProps<HTMLAnchorElement>> {

  // static propTypes: { onClick: Validator<NonNullable<(...args: any[]) => any>>; content: Validator<NonNullable<string>> };

  render() {
    return <span className="option-selector" onClick={this.props.onClick}>{this.props.content}</span>;
  }

}

// OptionSelector.propTypes = {
//
//   onClick: PropTypes.func.isRequired,
//   content: PropTypes.string.isRequired
//
// };

export interface IOptions {
  children: ReactElement<OptionSelector> | Array<ReactElement<OptionSelector>>;
}