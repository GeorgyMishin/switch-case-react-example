import React from "react";

export interface ISwitch {
  value: any;
  renderAllEquals?: boolean;
  comparisonFunc?: (value: any, childValue: any) => boolean;
}

export interface ICase {
  value?: any;
  default?: boolean;
}

declare const Switch: React.SFC<ISwitch>;

declare const Case: React.SFC<ICase>;
