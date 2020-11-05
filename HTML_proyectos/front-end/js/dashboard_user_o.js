  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);
  google.setOnLoadCallback(drawChart2);
  google.setOnLoadCallback(drawChart3);
 google.setOnLoadCallback(drawChart4);
google.setOnLoadCallback(drawChart5);
google.setOnLoadCallback(drawChart6);


                  
$(window).resize(function(){
    drawChart();
	drawChart2();
	drawChart3();
	drawChart4();
	drawChart5();
	drawChart6();
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





/** Grafica  5**/ 
  function drawChart5() {
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
			 pieSliceText: 'none' ,
						width: '100%',
        				height: '180',	
						pieHole: 0.68,
					    backgroundColor: { stroke: "transparent", strokeWidth: 0, fill: "transparent" },
					   legend: 'none',
						colors: ['rgba(190,190,190,0.4)'],
			 			
			
			pieSliceBorderColor:"#373737",
			 pieSliceTextStyle : {color: '#ffffff', fontName: 'Open Sans', fontSize: '9'},
			 slices: {0: {color: '#d46c43'}, 1:{color: '#d46c43'}, 2:{color: '#d46c43'}, 3: {color: '#d46c43'}, 4:{color: '#d46c43'}, 5:{color: '#d46c43'}, 6:{color: '#d46c43'}, 7:{color: '#d46c43'}, 8:{color: '#d46c43'}, 9:{color: '#d46c43'}, 10: {color: '#d46c43'}, 11:{color: '#d46c43'}, 12:{color: '#d46c43'}, 13: {color: '#d46c43'}, 14:{color: '#d46c43'}, 15:{color: '#d46c43'}, 16:{color: '#d46c43'}, 17:{color: '#d46c43'}, 18:{color: '#d46c43'}, 19:{color: '#d46c43'}},
			
			 
			
           
        
			 
			 
			



};

    var chart = new google.visualization.PieChart(document.getElementById('obj5'));
    chart.draw(data, options);
  }





/** Grafica  6**/ 
  function drawChart6() {
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
			
		]);

         var options = {
						'chartArea': {'width': '90%', 'height': '90%'},
			 pieSliceText: 'none' ,
						width: '100%',
        				height: '180',	
						pieHole: 0.75,
					    backgroundColor: { stroke: "transparent", strokeWidth: 0, fill: "transparent" },
					   legend: 'none',
						colors: ['#141414'],
			 			
			
			pieSliceBorderColor:"#373737",
			 pieSliceTextStyle : {color: '#ffffff', fontName: 'Open Sans', fontSize: '9'},
			 slices: {0: {color: '#d46c43'}, 1:{color: '#d46c43'}, 2:{color: '#d46c43'}, 3: {color: '#d46c43'}, 4:{color: '#d46c43'}},
			
			 
			
           
        
			 
			 
			



};

    var chart = new google.visualization.PieChart(document.getElementById('ob_6'));
    chart.draw(data, options);
  }









///////////////////////


