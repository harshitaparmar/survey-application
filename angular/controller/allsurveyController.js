// this is without $scope
myApp.controller('allsurveyController',['$http','SurveyService',function($http,SurveyService) {
  var main = this;
  this.surveys = [];
  console.log(this.surveys);
    console.log("hello");

      SurveyService.getAllSurveys()
      .then(function successCallback(response) {
          main.surveys = response.data.data;
          console.log(main.surveys);

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);

        });
      this.deleteASurvey=function(surveyId,index)
      {
        var myData = {};
        SurveyService.deleteSurvey(surveyId)
        .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
        alert("Survey deleted successfully");
          
        main.surveys.splice(index,1);
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

      }
      
}]); // end controller