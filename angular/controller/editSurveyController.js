
myApp.controller('editSurveyController',['$http','SurveyService','$routeParams','$location',function($http,SurveyService,$routeParams,$location) {

  //create a context
  var main = this;
  this.surveyId = $routeParams.surveyId;
  console.log(this.survey)
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

  this.editthisSurvey = function(surveyId){

      var myData = {

          surveyTitle : main.survey.surveyTitle,
          surveySubtitle  :  main.survey.surveySubtitle,
          instructions   :  main.survey.instructions

      }
      console.log(myData);
      SurveyService.editASurvey(this.surveyId,myData)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          alert("survey edited successfully");
          console.log(response.data);
          $location.path('/'+surveyId);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }
   


}]); // end controller