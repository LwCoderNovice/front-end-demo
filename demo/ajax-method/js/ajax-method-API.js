(function($){

	'use strict';

	jQuery.extend({
		AjaxResultMethod: AjaxResultMethod
	});
	/*
	 *API function
	 */	
	function AjaxResultMethod(_url,_type,_success){
		var type = IsStringEmpty(_type) ? 'get' : _type;
		var Success = IsStringEmpty(_success) ? SuccessDefalut : _success;
		$.ajax({
			url:_url,
			type: type,
			dataType: "json",
			success: Success,
			error: NoSuccess
		});
	};
	/*
	 * Set Json
	 * TODO set Json to serve
	 */
	function AjaxJsonMethod(_url,_type,_data,_success) {

		$.ajax({
			url: _url,
			type: _type,
			data: JSON.stringfy(_data),
			contentType: "application/json",
			success: Success,
			error: NoSuccess,
		});
	}
	/*
	 * If success callback function
	 */
	function SuccessDefalut(data) {
		console.log('ajax callback is success');
		console.log(data);
	};

	/*
	 *If error callback function
	 */
	function NoSuccess(err) {
		console.log('ajax callback is error Code:' + err.code);
	};

	/*
	 *Test string is null	
	 */
	function IsStringEmpty(input) {
		return input == undefined || $.trim(input) == '';
	};

	/*
	 *Test string is not null
	 */
	function IsNotStringEmpty(input) {
		return !IsStringEmpty(input);
	};

}(jQuery));