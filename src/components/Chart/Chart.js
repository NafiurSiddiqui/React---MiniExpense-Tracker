import ChartBar from './ChartBar';

function Chart(props) {
 // PROPS:ChartDataPoints
 // map the dataPoints value
 const dataPointValue = props.dataPoints.map((dataPoints) => dataPoints.value);
 console.log(dataPointValue);
 //get the maxAmount from the datapoint
 const totalMaximum = Math.max(...dataPointValue);
 //since the dataPoint return is an array,it is destructured here to get the math max work.
 return (
  <div className="chart">
   {props.dataPoints.map((dataPoints) => (
    <ChartBar
     key={dataPoints.label}
     value={dataPoints.value}
     maxValue={totalMaximum}
     label={dataPoints.label}
    />
   ))}
   ;
  </div>
 );
}

export default Chart;
