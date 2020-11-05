// JavaScript Document
google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
     // google.charts.setOnLoadCallback(drawChart2);
google.charts.setOnLoadCallback(drawChart3);
google.charts.setOnLoadCallback(drawChart4);
google.charts.setOnLoadCallback(drawChart5);
google.charts.setOnLoadCallback(drawChart6);




                  
$(window).resize(function(){
    drawChart();
	//drawChart2();
	drawChart3();
    drawChart4();
    drawChart5();
    drawChart6();
				
});







/** Grafica  1**/
 function drawChart() {
        var data = google.visualization.arrayToDataTable([
		  ['', ''],
		  ['',    95],
		  ['',      5],
		]);

        // Set chart options
        var options = {
						chartArea: {'width': '88%', 'height': '88%', left: "5.55%",
            top: "6.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#2ad1c8', '#604667'],
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


/** Grafica  2**/
  function drawChart2() {
    var data = google.visualization.arrayToDataTable([
            ['', ''],
            ['',  25],
            ['',  20],
            ['',  5],
            ['',  20],
            ['',  30],
		]);

       var options = {
						'chartArea': {'width': '88%', 'height': '88%', left: "5.55%",
            top: "6.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.85,
					   backgroundColor: 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#2ad1c8', '#604667', '#ff8d6c', '#5f7976', '#c5c8c9', '#80746d', '#425462', '#000000'],
           
			pieSliceBorderColor:"transparent",
			pieSliceText: "none", 
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },


};


    var chart = new google.visualization.PieChart(document.getElementById('ob_2'));
    chart.draw(data, options);
  } 
/** Grafica  3**/ 
  function drawChart3() {
    var data = google.visualization.arrayToDataTable([
		   ['', ''],
            ['',  32],
            ['',  20],
            ['',  10],
            ['',  38],
        ['',  32],
            ['',  20],
            ['',  10],
            ['',  38],
       
           
		]);

       var options = {
						'chartArea': {'width': '88%', 'height': '88%', left: "5.55%",
            top: "6.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.85,
					   backgroundColor: 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#2ad1c8', '#604667', '#ff8d6c', '#5f7976', '#c5c8c9', '#80746d', '#425462', '#000000'],
           
			pieSliceBorderColor:"transparent",
			pieSliceText: "none",
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },





};

    var chart = new google.visualization.PieChart(document.getElementById('ob_3'));
    chart.draw(data, options);
  }


  
/** Grafica  4**/ 
  function drawChart4() {
    var data = google.visualization.arrayToDataTable([
        ['', ''],
        ['',  20],
        ['',  40],
        ['',  40],
		]);

       var options = {
						'chartArea': {'width': '88%', 'height': '88%', left: "5.55%",
            top: "6.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#2ad1c8', '#604667', '#ff8d6c', '#5f7976', '#c5c8c9', '#80746d', '#425462', '#000000'],
           
			pieSliceBorderColor:"transparent",
			pieSliceText: "none",
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },





};

    var chart = new google.visualization.PieChart(document.getElementById('ob_4'));
    chart.draw(data, options);
  }





///////////////////////////////////////////

/** Grafica  5**/
  function drawChart5() {
    var data = google.visualization.arrayToDataTable([
            ['', ''],
            ['',  71],
            ['',  29],
           
		]);

       var options = {
						'chartArea': {'width': '88%', 'height': '88%', left: "5.55%",
            top: "6.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#425462', '#e7e7e8'],
           
			pieSliceBorderColor:"transparent",
			pieSliceText: "none", 
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },


};


    var chart = new google.visualization.PieChart(document.getElementById('ob_5'));
    chart.draw(data, options);
  } 
/** Grafica  6**/ 
  function drawChart6() {
    var data = google.visualization.arrayToDataTable([
		   ['', ''],
            ['',  25],
            ['',  25],
          
		]);

       var options = {
						'chartArea': {'width': '88%', 'height': '88%', left: "5.55%",
            top: "6.55%",},
						width: '100%',
        				height: '100%',	
						pieHole: 0.85,
					   'backgroundColor': 'transparent',
					   legend: 'none',
            fontName: 'HPESimpleWeb-Regular',
        fontSize: 12,
						colors: ['#425462', '#e7e7e8'],
           
			pieSliceBorderColor:"transparent",
			pieSliceText: "none",
            animation:{ startup: true,
        duration: 1000,
        easing: 'out',
      },





};

    var chart = new google.visualization.PieChart(document.getElementById('ob_6'));
    chart.draw(data, options);
  }





