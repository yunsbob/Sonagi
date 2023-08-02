import React from 'react';

const OurBabyPage = ({ time = '14:00' }) => {
  const slices = [];
  const numbers = [];
  const innerRadius = 50; // Define inner radius for doughnut
  const outerRadius = 100; // Define outer radius for doughnut
  const textRadius = outerRadius + 20; // A little outside the doughnut
  const centerX = 150;
  const centerY = 150;

  // Convert time into corresponding slice
  const [hour, minute] = time.split(':');
  const totalMinutes = (parseInt(hour) * 60 + parseInt(minute)) % 720;

  for (let i = 0; i < 720; i++) {
    const startAngle = ((i * 0.5 - 90) * Math.PI) / 180;
    const endAngle = (((i + 1) * 0.5 - 90) * Math.PI) / 180;

    const x1 = centerX + outerRadius * Math.cos(startAngle);
    const y1 = centerY + outerRadius * Math.sin(startAngle);
    const x2 = centerX + outerRadius * Math.cos(endAngle);
    const y2 = centerY + outerRadius * Math.sin(endAngle);

    const ix1 = centerX + innerRadius * Math.cos(startAngle);
    const iy1 = centerY + innerRadius * Math.sin(startAngle);
    const ix2 = centerX + innerRadius * Math.cos(endAngle);
    const iy2 = centerY + innerRadius * Math.sin(endAngle);

    const color = i === totalMinutes ? 'red' : 'white';

    slices.push(
      <path
        key={i}
        d={`M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${ix2} ${iy2} A ${innerRadius} ${innerRadius} 0 0 0 ${ix1} ${iy1} Z`}
        fill={color}
      ></path>
    );
  }

  for (let i = 1; i <= 24; i++) {
    const angle = ((i * 15 - 90) * Math.PI) / 180; // Center the text in each slice
    const x = centerX + textRadius * Math.cos(angle);
    const y = centerY + textRadius * Math.sin(angle);

    numbers.push(
      <text key={i} x={x} y={y} textAnchor="middle" alignmentBaseline="middle">
        {i}
      </text>
    );
  }

  return (
    <svg width="300" height="300">
      {slices}
      {numbers}
    </svg>
  );
};

export default OurBabyPage;
