myApp.controller('questionOperationController',['$http','SurveyService','$location','$routeParams',function($http,SurveyService,$routeParams,$location) {
  var main = this;
  this.questionId = $routeParams.questionId;
  console.log(this.questionId);
  this.loadQuestion=function()
  {
  		SurveyService.loadAQuestion(this.questionId)
  		.then(function successCallback(response) {
  			main.questions=response.data.data;
        main.questionText=main.questions.questionText;
        console.log(main.question);
  		}, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  }
  this.editthisQuestion = function(questionId){

      var myData = {

          questionText : main.questions.questionText,
      }
      console.log(myData);
      SurveyService.editAQuestion(this.questionyId,myData)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          alert("survey edited successfully");
          console.log(response.data);
          $location.path('/'+questionId)

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });


  }
  this.deleteAQuestion=function(questionId,index)
      {
        var myData = {};
        SurveyService.deleteQuestion(questionId)
        .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          //console.log(response);
        alert("Survey deleted successfully");
          
        main.questions.splice(index,1);
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

      }
  this.createAoptions=function(questionId)
      {
        
        var myData={
          optionText:main.optionText
        }
        console.log(optionText)
        SurveyService.createOptions(this.questionId,myData)
        .then(function successCallback(response) {
         alert("Options created Successfully");
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
      }


}]);