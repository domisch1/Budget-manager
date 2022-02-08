import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  chartData = [
    // { value: 1048, name: 'Search Engine' },
    // { value: 735, name: 'Direct' },
    // { value: 580, name: 'Email' },
    // { value: 484, name: 'Union Ads' },
    // { value: 300, name: 'Video Ads' },
  ];
  chartSpendingReason: string = '';
  chartSpend: number = 0;
  newSpending = new EventEmitter();
  newBudget = new EventEmitter<number>();
  removeSpending = new EventEmitter<number>();

  constructor() {}
  setSpending(spend: number, spendingReason: string) {
    this.chartSpendingReason = spendingReason;
    this.chartSpend = spend;
  }
}
