import { LitElement, html } from '@polymer/lit-element';
import Chart from 'chart.js';

class LineChart extends LitElement {
  constructor() {
    super();
  }

  firstUpdated() {
    debugger;
    const ctx = this.renderRoot.querySelector('#lineChart').getContext('2d');

    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: 'SYSTEM 1',
            borderColor: '#3e95cd',
            fill: false,
          },
          {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: 'SYSTEM 2',
            borderColor: '#8e5ea2',
            fill: false,
          },
          {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: 'SYSTEM 3',
            borderColor: '#3cba9f',
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Load',
        },
      },
    });
  }

  render() {
    return html`
        <p>Example Multi Line Chart</p>
        <div>
          <canvas id="lineChart" width="200" height="200"></canvas>
        </div>
      `;
  }
}

customElements.define('line-chart', LineChart);
