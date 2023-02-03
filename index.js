import { LitElement, html } from '@polymer/lit-element';
import Chart from 'chart.js';

class MyElement extends LitElement {
  static get properties() {
    return {
      Test: { type: String },
      myChart: { type: Object },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    const ctx = this.renderRoot.querySelector('#myChart2').getContext('2d');

    this.myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['On Line', 'Off Line'],
        datasets: [
          {
            label: '# of Votes',
            data: [65, 5],
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
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + 'em sans-serif';
            ctx.textBaseline = 'middle';

            var text = '75%',
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
        <p>Inside Render:</p>
        <div>
          <canvas id="myChart2" width="200" height="200"></canvas>
        </div>
      `;
  }
}

customElements.define('my-element', MyElement);
