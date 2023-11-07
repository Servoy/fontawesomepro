angular.module('fontawesomeproLib',['servoy'])
.factory("fontawesomeproLib",function($services) 
{
	return {
		load: function() {
			// css from fontawesome pro is automatically loaded
		}
	}
})
.run(function($rootScope,$services)
{
	
})