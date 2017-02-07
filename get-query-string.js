<script>

//
//  This code is taking the url http://example.com/index.asp?person=john
//	We're after the value from the parameter 'person' and setting it to an inputbox on the page
//

function getParameterByName(name, url) {    
	//	If the URL variable is null
	if (!url) {
	//	Set the var to the current URL, this includes the query string
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");

	//
	//	Use http://regexr.com/ to help the REGEX building
	//

	//	[?&] = look for ? and & - which are used to start and join query strings

	//	insert the name var

	//	( starts the group
	//	= looks for this character
	//	( start of 2nd group
	//	[^&#] match anything apart from these characters
	//	* match 0 or more results
	//	| means OR
	//	$ look until the end of the string or multiline

	//	we're looking for person=john

	//	find the string ... 
	//	= ( ? or &) name = value we're after

	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);

	//	results[0] = &person=john
	//	results[1] = =john
	//	results[2] = john

	//	we want results[2]

	if (!results) return "No person detected";
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function GetInputBoxes() {
	var person;

	//	use function to look for the person query string param
	person = getParameterByName('person', window.location.href);

	//	get the element on the page we want to enter the value into
	var personElement = document.querySelector('input[title="Title Of Inputbox"]');
	personElement.value = person;
}

//	Timeout needed as the page takes some time to load.
setTimeout(GetInputBoxes, 1000); 

</script>
