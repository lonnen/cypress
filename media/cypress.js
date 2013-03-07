// RIPCORD STUFF

// create an error MozActivity
(function(){
	var button = document.getElementById("moz-intent"),
		message = function() {
			Ripcord.submit({"test": true}); // null case, not a great idea to call directly
			console.log("MozActivity submitted");
		};

	button.addEventListener("click", message);
})();

// raise an uncaught reference error
(function(){
	var button = document.getElementById("uncaught"),
		triggerUncaught = function() {
			purposefullyUndefinedFunction();
		};

	Ripcord.install(); // setup unhandled listener
	button.addEventListener("click", triggerUncaught);
})();

// raise a reference error and catch it using ripcords instrumented catch
(function(){
	var button = document.getElementById("caught"),
		triggerCaught = function() {
			try{
				purposefullyUndefinedFunction();
			}
			catch (e) {
				console.log("Caught an error!");
				Ripcord.error(e);
			}
		};

	button.addEventListener("click", triggerCaught);
})();
