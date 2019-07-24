import React from "react";
import Case from "./Case";

class Switch extends React.Component {
  render() {
    const { children, renderAllEquals = false } = this.props;

    const currentChildren = React.Children.toArray(children);

    const defaultChild = currentChildren.find(child => child.props.default);

    if (!renderAllEquals) {
      const renderItem = currentChildren.find(this._finder) || defaultChild;
      return renderItem;
    } else if (renderAllEquals) {
      const renderItems = currentChildren.filter(this._finder);

      return renderItems.length ? renderItems : defaultChild;
    } else {
      return null;
    }
  }

  _finder = child => {
    const { value, comparisonFunc } = this.props;

    return (
      (comparisonFunc
        ? comparisonFunc(value, child.props.value)
        : child.props.value === value) && child.type === Case
    );
  };

  _defaultFinder = child => {};
}

export default Switch;
