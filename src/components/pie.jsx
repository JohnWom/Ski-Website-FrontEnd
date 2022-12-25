import React from "react";
// For call, num = numerator, den = denominator, terrain = if the text should be a %
// Ex: <Pie num={34} color="purple" den={100} terrain='True' or 'False/>

const Circle = ({ color, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ num, den, terrain }) => {
  if (terrain) {
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
      >
        {num}%
      </text>
    );
  }
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {num}/{den}
    </text>
  );
};

const Pie = ({ num, color, den, terrain }) => {
  const pct = (num / den) * 100;
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="lightgrey" />
        <Circle color={color} pct={pct} />
      </g>
      <Text num={num} den={den} terrain={terrain} />
    </svg>
  );
};

export default Pie;
