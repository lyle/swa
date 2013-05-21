
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$('#personForm').show();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		
		waf.sources.person.save({
			onSuccess: function(event){
				alert('Thanks '+ waf.sources.person.fullName + ' you have been entered.');
				$('#personForm').hide();
			},
			onError: function(event){
				alert('oh, drat '+event.error[0].message);
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
