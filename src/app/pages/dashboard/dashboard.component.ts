import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  spendings: any[] = [];
  spendingReason: string = '';
  spend!: number | any;
  budget!: number | any;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {}
  addBudget(budgetForm: NgForm) {
    this.chartService.newBudget.emit(this.budget);
    this.budget = null;
    budgetForm.resetForm();
  }
  addSpendingReason(spendingForm: NgForm) {
    this.spendings.push({
      value: this.spend,
      name: this.spendingReason,
    });
    this.chartService.newSpending.emit({
      value: this.spend,
      name: this.spendingReason,
    });
    this.spendingReason = '';
    this.spend = null;
    spendingForm.resetForm();
  }
  removeSpending(index: number) {
    this.spendings.splice(index, 1);
    this.chartService.removeSpending.emit(index);
  }
}
