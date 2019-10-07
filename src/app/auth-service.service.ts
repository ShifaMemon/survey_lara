import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { 

  }

  getSurveyList(){
    return [
        {survey_id : 1 ,name : "Survey 1", start_date : "2019-12-12", end_date : "2020-12-12", },
        {survey_id : 2 ,name : "Survey 2", start_date : "2019-12-12", end_date : "2020-12-12", },
        {survey_id : 3 ,name : "Survey 3", start_date : "2019-12-12", end_date : "2020-12-12", }
      ]
    }
  
  getSurveyDetail(data){
    return  {
          survey_id : 1 ,
          name : "Survey 1", 
          start_date : "2019-12-12", 
          end_date : "2020-12-12",
          questions: [
            {question_id : 1, title : "What is your name" , answer : "", type : "OpenEnded"},
            {question_id : 2, title : "What is you address" , answer : "", type : "OpenEndedMultiLine"},
            {question_id : 3, title : "What is your Hobbies" , answer : "", type : "MultiChoise" , options : ["reading", "singing", "dancing"]},
            {question_id : 4, title : "What is your eduction" , answer : "", type : "Choise",  options : ["MCA", "MBA", "MBBS"] },
            {question_id : 5, title : "What is your Hobbies" , answer : "", type : "MultiChoiseSelect" , options : ["reading", "singing", "dancing"]},
            {question_id : 6, title : "What is your eduction" , answer : "", type : "ChoiseSelect",  options : ["MCA", "MBA", "MBBS"] },
            
          ]
      }
    }     
}