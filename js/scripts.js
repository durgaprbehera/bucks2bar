document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function updateChart() {
        var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        var incomeData = [];
        var expensesData = [];

        months.forEach(function (month) {
            var income = parseFloat(document.getElementById(month + '-income').value) || 0;
            var expenses = parseFloat(document.getElementById(month + '-expenses').value) || 0;
            incomeData.push(income);
            expensesData.push(expenses);
        });

        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();
    }

    document.getElementById('chart-tab').addEventListener('click', updateChart);

    document.getElementById('download-chart').addEventListener('click', function () {
        var link = document.createElement('a');
        link.href = myChart.toBase64Image();
        link.download = 'chart.png';
        link.click();
    });
});