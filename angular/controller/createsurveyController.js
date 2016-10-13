myApp.controller('createsurveyController',['$http','SurveyService','$location',function($http,SurveyService,$location) {

  //create a context
  var main = this;
  this.createNewSurvey= function(){

      var myData = {

          surveyTitle     : main.surveyTitle,
          surveySubtitle : main.surveySubtitle,
          instructions    : main.instructions
      }

      console.log(myData);
        SurveyService.createASurvey(myData)
        .then(function successCallback(response) {
          alert("A new survey is created successfully");
          $location.path('/')

        }, function errorCallback(response) {
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  }// end load all blogs
}]); // end controller