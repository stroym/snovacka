import React from "react";
import PropTypes from "prop-types";
import {OptionSelector} from "./optionSelector";
import {Scene} from "../base/scene";

export class OptionsContainer extends React.Component<ContainerProps, ContainerState> {

  static props = {
    children: PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf([OptionSelector]),
      }),
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf([OptionSelector]),
        })
      ),
    ]).isRequired
  }

  constructor(props: Readonly<ContainerProps> | ContainerProps) {
    super(props);

    this.state = {
      scenes: []
    };
  }

  //TODO change key
  render() {
    return (
      <div id="options-container">
        {
          this.props.scenes.map((scene) => (
            <OptionSelector key={scene.id} content={scene.prompt} onClick={function () {
              scene.render();
            }
            }/>))
        }
      </div>
    );
  }

}

type ContainerProps = {
  scenes: Scene[]
}

type ContainerState = {
  scenes: Scene[]
  // children: OptionSelector[]
}