if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    lineChart();
    barsChart();
    pieChart();
    doughnutChart();
    polarArea();
    radarArea();
}

function lineChart() {
    var data = {
        labels : ["Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : CComprasAP,
            label : 'Compras 2016'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : CComprasA,
            label : 'Compras 2017'
        }
        ]
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx).Line(data);

    legend(document.getElementById("lineLegend"), data);
}

function barsChart() {
    var data = {
        labels : ["Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets : [
            {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : CComprasA,
            label : 'Tigers'
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : CComprasAP,
            label : 'Bears'
        }
        ]
    };

    var ctx = document.getElementById("barsChart").getContext("2d");
    new Chart(ctx).Bar(data);

    legend(document.getElementById("barsLegend"), data);
}
function pieChart() {
    var data1 = [
        {
            value: 30,
            color:"#F38630",
            label: 'E-mail'
        },
        {
            value : 50,
            color : "#E0E4CC",
            label: 'SAC'
        },
        {
            value : 100,
            color : "#69D2E7",
            label: 'Facebook'
        }
    ];

    var ctx = document.getElementById("pieChart").getContext("2d");
    var pieChart = new Chart(ctx).Pie(data1);

    legend(document.getElementById("pieLegend"), data1, pieChart);
}


function doughnutChart() {
    var data = [
        {
            value: VCO,
            color:"#9ACD32",
            label: 'Concluídas'
        },
        {
            value : VAB,
            color : "#FFC125",
            label: 'Abertas'
        },
        {
            value : VCA,
            color : "#E9967A",
            label: 'Canceladas'
        }
    ];

    var ctx = document.getElementById("doughnutChart").getContext("2d");
    var doughnutChart = new Chart(ctx).Doughnut(data);

    legend(document.getElementById("doughnutLegend"), data, doughnutChart);
}


function polarArea() {
	var data = [
		{
			value: 300,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label: "Red"
		},
		{
			value: 50,
			color: "#46BFBD",
			highlight: "#5AD3D1",
			label: "Green"
		},
		{
			value: 100,
			color: "#FDB45C",
			highlight: "#FFC870",
			label: "Yellow"
		},
		{
			value: 40,
			color: "#949FB1",
			highlight: "#A8B3C5",
			label: "Grey"
		},
		{
			value: 120,
			color: "#4D5360",
			highlight: "#616774",
			label: "Dark Grey"
		}

	];

	var ctx = document.getElementById("polarChart").getContext("2d");
	var polarChart = new Chart(ctx).PolarArea(data);

	legend(document.getElementById("polarLegend"), data, polarChart);

}


function radarArea() {
	var data = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56,55,40]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(151,187,205,0.2)",
				strokeColor: "rgba(151,187,205,1)",
				pointColor: "rgba(151,187,205,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28,48,40,19,96,27,100]
			}
		]
	};

	
	var ctx = document.getElementById("radarChart").getContext("2d");
	var radarChart = new Chart(ctx).Radar(data,{responsive: true});

	legend(document.getElementById("radarLegend"), data, radarChart);
}