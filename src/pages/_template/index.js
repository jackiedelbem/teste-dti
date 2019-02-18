import React from "react";
import "./template.scss";

class TemplatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page__template">
        <span>TemplatePage</span>
        {this.props.children}
      </div>
    );
  }
}

export default TemplatePage;
