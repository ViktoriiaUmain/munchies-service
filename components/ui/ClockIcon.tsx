import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function ClockIcon() {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <Path
        d="M9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5Z"
        stroke="#FF5252"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 2V5L7 6"
        stroke="#FF5252"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
