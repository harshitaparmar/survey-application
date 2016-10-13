//var myApp = angular.module('blogApp', ['ngRoute']); 

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/index-view.html',
        	// Which controller it should use 
            controller 		: 'allsurveyController',
            // what is the alias of that controller.
        	controllerAs 	: 'allSurvey'
        })
        .when('/all',{
            // location of the template
            templateUrl     : 'views/show-surveys.html',
            // Which controller it should use 
            controller      : 'allsurveyController',
            // what is the alias of that controller.
            controllerAs    : 'allSurvey'
        })
        .when('/create',{
            templateUrl : 'views/create-survey.html',
            controller:  'createsurveyController',
            controllerAs: 'createSurvey'
        })
        .when('/:surveyId',{
            templateUrl:'views/survey-view.html',
            controller: 'singleSurveyController',
            controllerAs:'singlesurvey'
        })
        .when('/:surveyId/edit',{
            templateUrl:'views/edit-survey.html',
            controller:'editSurveyController',
            controllerAs:'editsurvey'
        })
        .when('/:surveyId/question/create',{
            templateUrl:'views/create-question.html',
            controller:'singleSurveyController',
            controllerAs:'singlesurvey'
        })
        .when('/:surveyId/questions/all',{
            templateUrl:'views/show-all-questions.html',
            controller:'singleSurveyController',
            controllerAs:'singlesurvey'
        })
         .when('/:surveyId/questions/all',{
            templateUrl:'views/show-all-questions.html',
            controller:'singleSurveyController',
            controllerAs:'singlesurvey'
        })
        .when('/questions/:questionId/options/create',{
            templateUrl:'views/create-options.html',
            controller:'questionOperationController',
            controllerAs:'questionOperation'
        })
        .when('/questions/:questionId/edit',{
            templateUrl:'views/edit-question.html',
            controller:'questionOperationController',
            controllerAs:'questionOperation'
        })
        .when('/questions/:questionId',{
            templateUrl:'views/show-question.html',
            controller:'questionOperationController',
            controllerAs:'questionOperation'
        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);