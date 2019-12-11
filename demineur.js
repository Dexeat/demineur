let conteneur = $('.conteneur')
let enclenche = $('.enclenche')
let non_enclenche = $('.non_enclenche')
let mine = $('.mine')
let nbmine = 10;

let tableau = new Array();

for (var i = 0; i < 10; i++) {

	for (var y = 0; y < 10; y++) {

		tableau[i] = new Array();
	}
}	


for (var u = 0; u < 10; u++) {

	for (var w = 0; w < 10; w++) {

		tableau[u][w] = 0;
	}
}	



for (var u = 0; u < 10; u++) {

	for (var w = 0; w < 10; w++) {

		console.log(tableau[u][w]);	}
}	





$('#'+1).html("test")


$('.colone'+i+".ligne"+j).html();