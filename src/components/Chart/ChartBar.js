function ChartBar(props) {
 // Props:filteredExpense

 // set barHeight for fills to init value
 let barHeight = '0%';
 //set the barHeight calculating max value under condition
 console.log(props);
 if (props.maxValue > 0) {
  barHeight = Math.round((props.value / props.maxValue) * 100) + '%';
 }
 return (
  <div className="chart-bar">
   <div className="chart-bar__inner">
    <div className="chart-bar__fill" style={{ height: barHeight }}></div>
   </div>

   <div className="chart-bar__label">{props.label}</div>
  </div>
 );
}

export default ChartBar;
