angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  
 
  var chats = [{
    id: 3604,
    fname: 'Adele',
	lname: 'Sparrow',
    lastText: 'You on your way?',
    face: 'img/Adele.jpeg',
    dob:'2/26/2007'},
    {id: 3763,
    fname: 'Amilla',
    lname:'Jones',
    lastText: '',
    face: 'img/Amila.jpeg',
    dob:'3/5/2007'},
	{id: 1849,
    fname: 'Jane',
	lname:'Doe',
    lastText: '',
    face: 'img/xyz.jpeg',
    dob:'7/31/1998'},
	{id: 1972,
    fname: 'Ben',
	lname: 'Williams',
    lastText: '',
    face: 'img/max.png',
    dob:'8/23/1997'},
	{id: 2186,
    fname: 'Shaun',
	lname: 'Pollock',
    lastText: '',
    face: 'img/mike.png',
    dob:''}	
	];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
		for (var i = 0; i < chats.length; i++) {
		  /*Here mapping is between ID for the record in Mongodb*/
			if (chats[i].id === parseInt(chatId)) {
				return chats[i];
			};
		};
		return null;
    }
  };
});
