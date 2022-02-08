import { Component, OnInit } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  budget: number = 0;
  budgetAfterSpendings: number = 0;
  spendingsOverall: number = 0;
  options: any;
  updateOptions: any;
  data: any[] = [];
  triggerUpdate: any;
  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.newSpending.subscribe((spending) => {
      this.budgetAfterSpendings -= spending.value;
      this.spendingsOverall += spending.value;
      this.data.push(spending);
      this.triggerUpdate();
    });
    this.chartService.newBudget.subscribe((budget) => {
      this.budget = budget;
      this.budgetAfterSpendings = this.budget - this.spendingsOverall;
    });
    this.chartService.removeSpending.subscribe((index) => {
      this.budgetAfterSpendings += this.data[index].value;
      this.spendingsOverall -= this.data[index].value;
      this.data.splice(index, 1);
      this.triggerUpdate();
    });
    this.data = [];
    for (let i = 0; i < this.chartService.chartData.length; i++) {
      this.data.push(this.chartService.chartData[i]);
    }
    this.options = {
      title: {
        text: 'Spending Overview',
        subtext: 'Your Spendings',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        bottom: 0,
        left: 'left',
      },
      series: [
        {
          name: 'Spending',
          type: 'pie',
          radius: '50%',
          data: this.data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    this.triggerUpdate = () => {
      this.updateOptions = {
        series: [
          {
            data: this.data,
          },
        ],
      };
    };
  }
}
