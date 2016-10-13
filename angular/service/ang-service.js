myApp.factory('SurveyService',function($http){

	// this method first 
	var surveyAPIS  =  {};
	var baseUrl = 'http://poll.theguywithideas.com/api/surveys';
	surveyAPIS.getAllSurveys = function(){

		return $http({

		  method: 'GET',
		  url: baseUrl+'/'

		})		
	}// end get all surveys
	surveyAPIS.createASurvey=function(surveyData){
		return $http.post(baseUrl +'/create',surveyData)
	}
	surveyAPIS.singleViewSurvey=function(surveyId){
		return $http.get(baseUrl +'/'+surveyId)
	}
	surveyAPIS.editASurvey=function(surveyId,surveyData){
		return $http.put(baseUrl+'/'+surveyId+'/edit',surveyData)
	}
	surveyAPIS.deleteSurvey = function(surveyId){

		return $http.post(baseUrl+'/'+surveyId+'/delete',null);

	}
	surveyAPIS.createAQuestion = function(surveyId,questionText){

		return $http.post(baseUrl+'/'+surveyId+'/question'+'/create',questionText);

	}
	surveyAPIS.showAllQuestions = function(surveyId){

		return $http.get(baseUrl+'/'+surveyId+'/questions'+'/all');

	}
	surveyAPIS.loadAQuestion=function(questionId)
	{
		return $http.get(baseUrl+'/questions/'+questionId);
	}
	surveyAPIS.createOptions=function(questionId,optionText){
		return $http.post(baseUrl+'/questions/'+questionId+'/options'+'/create',optionText);
	}
	surveyAPIS.editAQuestion=function(questionId,questionData){
		return $http.put(baseUrl+'/questions/'+questionId+'/edit',questionData)
	}
	surveyAPIS.deleteQuestion = function(questionId){

		return $http.post(baseUrl+'/questions/'+questionId+'/delete',null);

	}

	return surveyAPIS;

});//end of service 