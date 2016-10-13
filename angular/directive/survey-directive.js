myApp.directive("surveyCard",function(){
	return{

		restrict : "E", // restrict element
		templateUrl : "./views/survey-card.html",

		controller  : function($scope){

			console.log("directive scope");
		}// end controller


	}

});