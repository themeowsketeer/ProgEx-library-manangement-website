// // Set new default font family and font color to mimic Bootstrap's default styling

// Bar Chart Example
// var ctx = document.getElementById("myBarChart");

const sample_2 = JSON.parse(document.getElementById('data-container').getAttribute('data-array'));
const tooltips = sample_2.map(obj => obj.title);
console.log(sample_2)

var myLineChart = new Chart(document.getElementById("myBarChart"), {
  type: 'bar',
  data: {
    labels: sample_2.map(row => row.id),
    datasets: [{
      label: "Copies",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: sample_2.map(row => row.copies),
      font: 
      {
        size: 20
    }
    }
  ],
  },
  options: {
    plugins: {
      tooltip: {
        font: {
          size: 20
        },
        // Overrides the global setting
        callbacks: 
        {
          title: function(context) {
            return `${tooltips[context[0].dataIndex]}`;
          }
        }
      },
      legend: {
        display: true
      },
      title: {
          display: true,
          text: 'Top 5 books with largest number of copies',
          font: {
              size: 40
          },
          padding: {
              top: 10,
              bottom: 10
          }
      }
    }
}});
