import { GaugeContainer, GaugeValueArc, GaugeReferenceArc, useGaugeState} from '@mui/x-charts/Gauge';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import "./home.css";

export const HomeStats = () => {

  function GaugePointer() {
    const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  
    if (valueAngle === null) {
      // No value to display
      return null;
    }
  
    const target = {
      x: cx + outerRadius * Math.sin(valueAngle),
      y: cy - outerRadius * Math.cos(valueAngle),
    };
    return (
      <g>
        <circle cx={cx} cy={cy} r={5} fill="red" />
        <path
          d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
          stroke="red"
          strokeWidth={3}
        />
      </g>
    );
  }

  return <div className="home-stats flex-d-col flex-a-cen-j-cen">
    <div className="heading text-center font-48 semi-bold">
      Statistics
    </div>

    <div className="stats flex-j-cen">
      <div className="card flex-d-col">
        <GaugeContainer
          width={200}
          height={200}
          startAngle={-110}
          endAngle={110}
          value={70}
        >
          <GaugeReferenceArc />
          <GaugeValueArc />
          <GaugePointer />
        </GaugeContainer>
      </div>
      <div className="card">
        <Stack direction="row" sx={{ width: '100%' }}>
          <Box sx={{ flexGrow: 1 }}>
            <SparkLineChart
              data={[0, 1, 2, 1, 4, 3, 6, 8, 5, 10, 13]}
              height={170}
              curve="natural"
              area
            />
          </Box>
        </Stack>
      </div>
      <div className="card">
        <PieChart
          series={[
            {
              data: [ {value: 5, color: "green"}, {value: 95, color: "grey"} ],
              innerRadius: 15,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: 0,
              endAngle: 360,
              cx: 125,
              cy: 100,
            }
          ]}
        />
      </div>
    </div>
  </div>
}