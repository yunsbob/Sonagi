import { ResponsivePie } from '@nivo/pie';
import DonutChart from 'react-donut-chart';

const GraphByDay = () => {
  //   return (
  //     <div
  //       style={{
  //         width: '80vw',
  //         height: '80vw',
  //         backgroundColor: 'grey',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         marginLeft: 'auto',
  //         marginRight: 'auto',
  //       }}
  //     >
  //       <div
  //         style={{
  //           width: '90%',
  //           height: '90%',
  //           backgroundColor: 'red',
  //           borderRadius: '50%',
  //         }}
  //       >
  //         <span
  //           style={{
  //             position: 'relative',
  //             left: '45%',
  //             top: '-10%',
  //             // translate: 'transform(50%)',
  //           }}
  //         >
  //           12
  //         </span>
  //         <span
  //           style={{
  //             position: 'relative',
  //             left: '70%',
  //             top: '-3%',
  //             // translate: 'transform(50%)',
  //           }}
  //         >
  //           1
  //         </span>
  //         <span
  //           style={{
  //             position: 'relative',
  //             left: '85%',
  //             top: '13%',
  //             // translate: 'transform(50%)',
  //           }}
  //         >
  //           2
  //         </span>
  //         <span
  //           style={{
  //             position: 'relative',
  //             left: '90%',
  //             top: '45%',
  //             // translate: 'transform(50%)',
  //           }}
  //         >
  //           3
  //         </span>
  //         <span>4</span>
  //         <span>5</span>
  //         <span>6</span>
  //         <span>7</span>
  //         <span>8</span>
  //         <span>9</span>
  //         <span>10</span>
  //         <span>11</span>
  //       </div>
  //     </div>
  //   );

  const data = [
    {
      id: 'go',
      label: 'go',
      value: 546,
      color: 'hsl(102, 70%, 50%)',
    },
    {
      id: 'rust',
      label: 'rust',
      value: 47,
      color: 'hsl(166, 70%, 50%)',
    },
    {
      id: 'sass',
      label: 'sass',
      value: 148,
      color: 'hsl(76, 70%, 50%)',
    },
    {
      id: 'css',
      label: 'css',
      value: 401,
      color: 'hsl(132, 70%, 50%)',
    },
    {
      id: 'c',
      label: 'c',
      value: 306,
      color: 'hsl(135, 70%, 50%)',
    },
  ];

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export { GraphByDay };
