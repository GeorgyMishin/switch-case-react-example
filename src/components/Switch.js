import React from "react";
import Case from "./Case";

class Switch extends React.Component {
  render() {
    const { children, renderAllEquals = false } = this.props;

    const currentChildren = React.Children.toArray(children);
    const currentChildrenWithValue = currentChildren.filter(this._finder);

    const defaultChild =
      currentChildren.find(child => child.props.default) || null;

    return renderAllEquals
      ? currentChildrenWithValue.length
        ? currentChildrenWithValue
        : defaultChild
      : currentChildren.find(this._finder) || defaultChild;
  }

  _finder = child => {
    const { value, comparisonFunc } = this.props;

    return (
      (comparisonFunc
        ? comparisonFunc(value, child.props.value)
        : child.props.value === value) && child.type === Case
    );
  };
}

export default Switch;
