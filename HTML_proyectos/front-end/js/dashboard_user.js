google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);
 google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(initChart);


$(window).on("throttledresize", function (event) {
    initChart();
});

                  
$(window).resize(function(){
    drawChart();
	drawChart2();
	drawChart3();
	drawChart4();
				
});







/** Grafica  1**/
 function drawChart() {
        var data = google.visualization.arrayToDataTable([
		  ['Task', 'Hours per Day'],
		  ['IBR',    10.93],
		  ['IPC',      6.83],
		]);

        // Set chart options
        var options = {
						'chartArea': {'width': '90%', 'height': '90%'},
						width: '100%',
        				height: '180',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
						colors: ['#6d77a9', '#141414'],
			
			pieSliceBorderColor:"transparent",
			pieSliceText: "none"



};








		

        var chart = new google.visualization.PieChart(document.getElementById('ob_1'));
        chart.draw(data, options);
      }
/** Grafica  2**/
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
		  ['Task', 'Hours per Day'],
		  ['TES TASA FIJA',      5.96],
		  ['CDT',  72.29],
		]);

       var options = {
						'chartArea': {'width': '90%', 'height': '90%'},
						width: '100%',
        				height: '180',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
						colors: ['#bf7813', '#141414'],
			
			pieSliceBorderColor:"transparent",
			pieSliceText: "none"



};

    var chart = new google.visualization.PieChart(document.getElementById('ob_2'));
    chart.draw(data, options);
  } 
/** Grafica  3**/ 
  function drawChart3() {
    var data = google.visualization.arrayToDataTable([
		  ['Task', 'Hours per Day'],
		  ['Pesos',    10],
			['CDT',  72.29],
		]);

         var options = {
						'chartArea': {'width': '90%', 'height': '90%'},
						width: '100%',
        				height: '180',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
						colors: ['#62d9ab', '#141414'],
			
			pieSliceBorderColor:"transparent",
			pieSliceText: "none"



};

    var chart = new google.visualization.PieChart(document.getElementById('ob_3'));
    chart.draw(data, options);
  }

/** Grafica rendir 4**/
  

/** Grafica  4**/ 
  function drawChart4() {
    var data = google.visualization.arrayToDataTable([
		  ['Task', 'Hours per Day'],
		  ['1',    5],
			['2',  5],
		 ['3',    5],
			['4',  5],
		 ['5',    5],
			['6',  5],
		 ['7',    5],
			['8',  5],
		 ['9',    5],
			['10',  5],
		['11',    5],
			['12',  5],
		 ['13',    5],
			['14',  5],
		 ['15',    5],
			['16',  5],
		 
			['17',  5],
		 ['18',    5],
			['19',  5],
		['20',  5],
		]);

         var options = {
						'chartArea': {'width': '90%', 'height': '90%'},
			 pieSliceText: 'label' ,
						width: '100%',
        				height: '180',	
						pieHole: 0.6,
					   'backgroundColor': 'transparent',
					   legend: 'none',
						colors: ['#141414'],
			 			
			
			pieSliceBorderColor:"#373737",
			 pieSliceTextStyle : {color: '#ffffff', fontName: 'Open Sans', fontSize: '9'},
			 slices: {
            13: { color: '#91d961', textStyle: {color: '#000000' } },
           
          }
			 
			 
			



};

    var chart = new google.visualization.PieChart(document.getElementById('obj4'));
    chart.draw(data, options);
  }












function initChart() {
    var options = {
	    legend:'none',
        width: '100%',
        height: '99%',
        colors: ['#ffffff', '#464646'],
		backgroundColor: 'transparent',
		pieSliceBorderColor:"transparent",
		pieSliceText: "none",
		pieHole: 0.5,
        chartArea: {
            left: "0%",
            top: "0%",
            height: "98%",
            width: "100%"
        }
    };

    var data = google.visualization.arrayToDataTable([
        ['racing', 'Overall'],
        ['A', 110],
        ['F', 20]
    ]);
    drawChartO(data, options)
}

function drawChartO(data, options) {
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
}












