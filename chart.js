import React from 'react'
import Chart from 'chart.js';

class Second extends React.Component {
    componentDidMount() {
        let ctx = this.mount;
        let ctx2 = this.mount2;
        let ctx3 = this.mount3;
        let ctx4 = this.mount4;
        let ctx5 = this.mount5;
        //bubble chart

        let myChart = new Chart(ctx, {
            type: 'bubble',
            data: {
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [{x:12, y:19, r:10},{x:2, y:9, r:8},{x:1, y:4, r:7},{x:5, y:6, r:9},{x:7, y:8, r:10},{x:3, y:1, r:7},{x:5, y:5, r:18},],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    radius:5,
                    hoverBackgroundColor:'rgba(0,0,0,1)'
                 },
                {
                    label: '* of Votes',
                    data: [{x:12, y:9, r:10},{x:2, y:11, r:8},{x:1, y:3, r:7},{x:1, y:9, r:9},{x:1, y:4, r:10},{x:30, y:1, r:7},{x:14, y:5, r:18},],
                    backgroundColor:'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    radius:5
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        //bar chart

        let myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [10,12,14,15,16,13],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor:'rgba(0,0,0,1)'
                 },
                {
                    label: '* of Votes',
                    data: [5,4,6,7,8,9],
                    backgroundColor:'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                   
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        
        //pie

        let myChart3 = new Chart(ctx3, {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [10,12,14,15,16,13],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor:'rgba(0,0,0,1)'
                 },
                {
                    label: '* of Votes',
                    data: [5,4,6,7,8,9],
                    backgroundColor:'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                   
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        //scatter
        let myChart4 = new Chart(ctx4, {
            type: 'polarArea',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    
                    data: [10,12,14,15,16,13],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor:'rgba(0,0,0,1)'
                 },
                {
                   
                    data: [5,4,6,7,8,9],
                    backgroundColor:'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor:'rgba(222,0,0,1)'
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        //donut
       
        let myChart5 = new Chart(ctx5, {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    
                    data: [10,12,14,15,16,13],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor:'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor:'rgba(0,0,0,1)'
                 },
                {
                   
                    data: [5,4,6,7,8,9],
                    backgroundColor:'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor:'rgba(222,0,0,1)'
                }
            ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
    render() {

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6">
                            <canvas ref={(ref) => this.mount = ref}
                             width="50px" 
                    
                             aria-label="Hello ARIA World"
                              role="img">
                            Your browser does not support the canvas element.
                            </canvas>
                        </div>
                        <div className="col-md-6">
                            <canvas ref={(ref) => this.mount2 = ref}
                             width="50px" 
                    
                             aria-label="Hello ARIA World"
                              role="img">
                            Your browser does not support the canvas element.
                            </canvas>
                        </div>
                        <div className="col-md-6">
                            <canvas ref={(ref) => this.mount3 = ref}
                             width="50px" 
                    
                             aria-label="Hello ARIA World"
                              role="img">
                            Your browser does not support the canvas element.
                            </canvas>
                        </div>
                        <div className="col-md-6">
                            <canvas ref={(ref) => this.mount4 = ref}
                             width="50px" 
                    
                             aria-label="Hello ARIA World"
                              role="img">
                            Your browser does not support the canvas element.
                            </canvas>
                        </div>
                        <div className="col-md-6">
                            <canvas ref={(ref) => this.mount5 = ref}
                             width="50px" 
                    
                             aria-label="Hello ARIA World"
                              role="img">
                            Your browser does not support the canvas element.
                            </canvas>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default Second;
