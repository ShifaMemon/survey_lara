import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-employee-survey',
  templateUrl: './employee-survey.page.html',
  styleUrls: ['./employee-survey.page.scss'],
})
export class EmployeeSurveyPage implements OnInit {

  surveyList : any = []
  constructor(private auService : AuthServiceService) { }

  ngOnInit() {
    this.surveyList = this.auService.getSurveyList();
  }

}
