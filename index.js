import { LitElement, html } from '@polymer/lit-element';
import Chart from 'chart.js';
import './line-chart.js';

class MyElement extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      labels: { type: Array },
      insideText: { type: String },
    };
  }

  constructor() {
    super();
    debugger;
    this.data = [65, 5];
    this.labels = ['On Line', ' Off Line'];
    this.insideText = '65';
  }

  firstUpdated() {
    const ctx = this.renderRoot.querySelector('#pieChart').getContext('2d');

    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '# of Votes',
            data: this.data,
            backgroundColor: ['green', 'gray'],
            borderColor: ['white', 'white'],
          },
        ],
      },
      plugins: [
        {
          id: 'text',
          beforeDraw: (chart, a, b) => {
            const width = chart.width;
            const height = chart.height;
            const ctx = chart.ctx;

            ctx.restore();
            const fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + 'em sans-serif';
            ctx.textBaseline = 'middle';

            const text = this.insideText,
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ],
      options: {
        cutoutPercentage: 80,
        legend: {
          display: false,
          labels: {
            fontSize: 16, //point style's size is based on font style not boxed width.
            usePointStyle: true,
          },
        },
      },
    });
  }

  render() {
    return html`
        <p>Example Chart</p>
        <div>
          <canvas id="pieChart" width="200" height="200"></canvas>
        </div>
      `;
  }
}

customElements.define('my-element', MyElement);
