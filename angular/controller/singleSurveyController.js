
myApp.controller('singleSurveyController',['$http','SurveyService','$routeParams','$location',function($http,SurveyService,$routeParams,$location) {

  //create a context
  var main = this;
  var length;
  this.surveyId = $routeParams.surveyId;
  console.log(this.surveyId);
  this.currentQuestionIndex=0;
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
         $location.path('/'+surveyId+'/questions/all')
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
         main.options=main.questions.options;
         console.log(main.currentQuestionIndex);
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  }
  this.questionId = $routeParams.questionId;
  console.log(this.questionId);
  this.loadQuestion=function(questionId)
  {
      SurveyService.loadAQuestion(this.questionId)
      .then(function successCallback(response) {
        main.questions=response.data.data;
        main.questionText=main.questions.questionText;
        main.questionId=main.questions.questionId;
        main.surveyId=main.questions.surveyId;
        main.options=main.questions.options;
        main.optionText=main.options.optionText;
        console.log(main.options);
        console.log(main.optionText)
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
  }
   this.createAnswer=function(questionId)
      {
        var myData = {
          selectedOptionNumber: main.selectedOptionNumber,
        }
        console.log(questionId);
        console.log(main.selectedOptionNumber);
         if (main.currentQuestionIndex >= main.questions.length -1) {
            main.currentQuestionIndex=-1;
        }
        else {
            main.currentQuestionIndex++;
        }
        console.log(main.currentQuestionIndex);
        SurveyService.createAanswer(questionId,myData)
        .then(function successCallback(response) {
         alert("answer is created successfully");
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

      }
  this.editthisQuestion = function(questionId,surveyId){

      var myData = {

          questionText : main.questions.questionText,
      }
      console.log(myData);
      SurveyService.editAQuestion(this.questionId,myData)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          console.log(response);
          alert("survey edited successfully");
          console.log(response.data);
          $location.path('/'+surveyId+'/questions/all')

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
        alert("Question deleted successfully");
          
        main.questions.splice(index,1);
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });

      }
     this.createOption=function(questionId,surveyId)
      {
        var myData = {
          optionText: main.optionText
        }
        length=main.options.length;
        if(length<5)
        {
        SurveyService.createAOption(this.questionId,myData)
        .then(function successCallback(response) {
        alert("A new option is created successfully");
         $location.path('/'+surveyId+'/questions/all')
        },function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
        });
      }
      else
      {
        alert("You cannot add more than 5 options")
        $location.path('/'+surveyId+'/questions/all')
      }

      }
      
}]); // end controller

