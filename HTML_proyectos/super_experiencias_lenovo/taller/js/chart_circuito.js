// JavaScript Document

// JavaScript Document
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
     // google.charts.setOnLoadCallback(drawChart2);




                  
$(window).resize(function(){
    drawChart();
	
	
				
});







/** Grafica  1**/
 function drawChart() {
        var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['',    54],
		  ['',      46],
		]);

        // Set chart options
        var options = {
						'chartArea': {'width': '100%', 'height': '100%', 
            },
						width: '100%',
        				height: '100%',	
           
						pieHole: 0.5,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: '',
        fontSize: 12,
						colors: ['#e01e1b', '#4d4d4d'],
           
			pieSliceBorderColor:"transparent",
			pieSliceText: "none", 
             animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },


};


        var chart = new google.visualization.PieChart(document.getElementById('ob_1'));
        chart.draw(data, options);
      }
