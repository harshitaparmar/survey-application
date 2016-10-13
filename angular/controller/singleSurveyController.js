
myApp.controller('singleSurveyController',['$http','SurveyService','$routeParams',function($http,SurveyService,$routeParams) {

  //create a context
  var main = this;
  this.surveyId = $routeParams.surveyId;
  console.log(this.surveyId);
  this.loadSingleSurvey=function()
  {
    SurveyService.singleViewSurvey(this.surveyId)
      .then(function successCallback(response) {
          console.log("hello"+response);
          main.survey = response.data.data;
          main.surveyTitle=main.survey.surveyTitle;
          main.surveySubtitle=main.survey.surveySubtitle;
          main.instructions=main.survey.instructions;
          console.log(main.survey);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
    }
    this.createQuestion=function(surveyId)
      {
        var myData = {
          questionText: main.questionText,
        }
        console.log(myData);
        SurveyService.createAQuestion(this.surveyId,myData)
        .then(function successCallback(response) {
         alert("A new question is created successfully");
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

      }
      this.showQuestions=function(surveyId)
      {
        SurveyService.showAllQuestions(this.surveyId)
        .then(function successCallback(response) {
         main.questions=response.data.data;
         main.questionId=main.questions.questionId;
         console.log(main.questionId);
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
      }
      
}]); // end controller

