$(function () {
	
    $('#container1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Result of your Survey'
        },
        
        xAxis: {
            categories: [
                'Post1',
                'Post2',
                'Post3',
                'Post4'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Answers'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Birthday',
            data: [49, 71, 106, 129]

        }, {
            name: 'Graduation',
            data: [83, 78, 98, 93]

        }, {
            name: 'Wedding',
            data: [48, 38, 39, 41]

        }, {
            name: 'New Year',
            data: [42, 33, 34, 39]

        }]
    });
    
    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Result of your Survey'
        },
        
         xAxis: {
            categories: [
                'Post1',
                'Post2',
                'Post3',
                'Post4'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Answers'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Birthday',
            data: [49, 71, 106, 129]

        }, {
            name: 'Graduation',
            data: [83, 78, 98, 93]

        }, {
            name: 'Wedding',
            data: [48, 38, 39, 41]

        }, {
            name: 'New Year',
            data: [42, 33, 34, 39]

        }]
    });
    
    $('#container3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Result of your Survey'
        },
        
         xAxis: {
            categories: [
                'Post1',
                'Post2',
                'Post3',
                'Post4'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Answers'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Birthday',
            data: [49, 71, 106, 129]

        }, {
            name: 'Graduation',
            data: [83, 78, 98, 93]

        }, {
            name: 'Wedding',
            data: [48, 38, 39, 41]

        }, {
            name: 'New Year',
            data: [42, 33, 34, 39]

        }]
    });

});