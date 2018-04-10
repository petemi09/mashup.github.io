/*add this to your html -> <script src="https://storage.googleapis.com/code-snippets/rapidapi.min.js"></script> */
var rapid = new RapidAPI("default-application_5acbbc33e4b04378c0ca1f96", "dd9415cb-4ec4-4979-94c8-3341ec980442");

rapid.call('Zomato', 'searchCity', { 
	'apiKey': '73eb9c82759265ceabc018a124798225',
	'searchQuery': 'Decorah'

}).on('success', function (payload) {
	 /*YOUR CODE GOES HERE*/ 
}).on('error', function (payload) {
	 /*YOUR CODE GOES HERE*/ 
});