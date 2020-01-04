let conteneur = $('.conteneur')
let enclenche = $('.enclenche')
let non_enclenche = $('.non_enclenche')
let mine = $('.mine')
let gene =false;



//ALEAT
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}



//INIT

for (var colo = 1; colo < 11; colo++) {
	
	for (var lig = 1; lig < 11; lig++) {
		$('.colone'+colo + ".ligne"+lig).html(0);
	}
}

//GENEBOMB
function geneb() {
	for (var nbmine = 10; nbmine >= 0; nbmine--) {
		var x,y;
		x = getRandomIntInclusive(1,10);
		y = getRandomIntInclusive(1,10);

		while ( $('.colone'+x + ".ligne"+y).html() > 0) {
			x = getRandomIntInclusive(1,10);
			y = getRandomIntInclusive(1,10);
		}
		$('.colone'+x + ".ligne"+y).html(9);
		//$('.colone'+x + ".ligne"+y).addClass('mine')
	}
	gene = true;
}

//GENENB
function number() {
	for (var x = 1; x < 11; x++) {
		for (var y = 1; y < 11; y++) {
			if ( $('.colone'+x + ".ligne"+y).html() >= 9 ) {
				console.log("trouver");
				console.log(x,y);
				$('.colone'+(x -1) + ".ligne"+(y -1)).html(parseInt($('.colone'+(x -1) + ".ligne"+(y -1)).html(), 10)+1)
				$('.colone'+(x -1) + ".ligne"+(y)).html(parseInt($('.colone'+(x -1) + ".ligne"+(y)).html(), 10)+1)
				$('.colone'+(x -1) + ".ligne"+(y+1)).html(parseInt($('.colone'+(x -1) + ".ligne"+(y+1)).html(), 10)+1)
				
				$('.colone'+(x) + ".ligne"+(y-1)).html(parseInt($('.colone'+(x) + ".ligne"+(y-1)).html(), 10)+1)
				$('.colone'+(x) + ".ligne"+(y+1)).html(parseInt($('.colone'+(x) + ".ligne"+(y+1)).html(), 10)+1)

				$('.colone'+(x+1) + ".ligne"+(y+1)).html(parseInt($('.colone'+(x+1) + ".ligne"+(y+1)).html(), 10)+1)
				$('.colone'+(x+1) + ".ligne"+(y)).html(parseInt($('.colone'+(x+1) + ".ligne"+(y)).html(), 10)+1)
				$('.colone'+(x+1) + ".ligne"+(y-1)).html(parseInt($('.colone'+(x+1) + ".ligne"+(y-1)).html(), 10)+1)



			}
		}
	}
}


function clearzero() {
	for (var x = 1; x < 11; x++) {
		for (var y = 1; y < 11; y++) {
			if ($('.colone'+x + ".ligne"+y).html() == 0) {
				$('.colone'+x + ".ligne"+y).html("")
			}
		}
	}
}


function decouvre(casei) {
	let classi;
	let nbcolone;
	let nbligne;

	casei.removeClass("enclenche")
	casei.addClass("non_enclenche")

	//console.log(casei.attr("class"))
	classi = casei.attr("class");
	classi = classi.split(" ");
	console.log(classi)

	//extrait le nb
	nbcolone = parseInt(classi[0].replace('colone',''))
	nbligne = parseInt(classi[1].replace('ligne',''))
	console.log(nbcolone)
	console.log(nbligne)

	if ( $('.colone'+ (nbcolone-1)+'.ligne'+(nbligne -1)).html() <9  ) {
		
		$('.colone'+ (nbcolone-1)+'.ligne'+(nbligne-1)).removeClass("enclenche")
		$('.colone'+ (nbcolone-1)+'.ligne'+(nbligne-1)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone-1)+'.ligne'+(nbligne -1)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone-1)+'.ligne'+(nbligne -1)))
		}
	}

	if ( $('.colone'+ (nbcolone-1)+'.ligne'+(nbligne )).html() <9  ) {
		
		$('.colone'+ (nbcolone-1)+'.ligne'+(nbligne)).removeClass("enclenche")
		$('.colone'+ (nbcolone-1)+'.ligne'+(nbligne)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone-1)+'.ligne'+(nbligne)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone-1)+'.ligne'+(nbligne)))
		}
	}

	if ( $('.colone'+ (nbcolone-1)+'.ligne'+(nbligne +1)).html() <9  ) {
		
		$('.colone'+ (nbcolone-1)+'.ligne'+(nbligne+1)).removeClass("enclenche")
		$('.colone'+ (nbcolone-1)+'.ligne'+(nbligne+1)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone-1)+'.ligne'+(nbligne +1)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone-1)+'.ligne'+(nbligne +1)))
		}
	}

	if ( $('.colone'+ (nbcolone)+'.ligne'+(nbligne -1)).html() <9  ) {
		
		$('.colone'+ (nbcolone)+'.ligne'+(nbligne-1)).removeClass("enclenche")
		$('.colone'+ (nbcolone)+'.ligne'+(nbligne-1)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone)+'.ligne'+(nbligne -1)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone)+'.ligne'+(nbligne -1)))
		}
	}

	if ( $('.colone'+ (nbcolone)+'.ligne'+(nbligne +1)).html() <9 ) {
		
		$('.colone'+ (nbcolone)+'.ligne'+(nbligne+1)).removeClass("enclenche")
		$('.colone'+ (nbcolone)+'.ligne'+(nbligne+1)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone)+'.ligne'+(nbligne +1)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone)+'.ligne'+(nbligne +1)))
		}
	}

	if ( $('.colone'+ (nbcolone+1)+'.ligne'+(nbligne+1 )).html() <9  ) {
		
		$('.colone'+ (nbcolone+1)+'.ligne'+(nbligne+1)).removeClass("enclenche")
		$('.colone'+ (nbcolone+1)+'.ligne'+(nbligne+1)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone+1)+'.ligne'+(nbligne+1)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone+1)+'.ligne'+(nbligne+1)))
		}
	}

	if ( $('.colone'+ (nbcolone+1)+'.ligne'+(nbligne )).html() <9  ) {
		
		$('.colone'+ (nbcolone+1)+'.ligne'+(nbligne)).removeClass("enclenche")
		$('.colone'+ (nbcolone+1)+'.ligne'+(nbligne)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone+1)+'.ligne'+(nbligne)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone+1)+'.ligne'+(nbligne)))
		}
	}

	if ( $('.colone'+ (nbcolone+1)+'.ligne'+(nbligne-1 )).html() <9  ) {
		
		$('.colone'+ (nbcolone+1)+'.ligne'+(nbligne-1)).removeClass("enclenche")
		$('.colone'+ (nbcolone+1)+'.ligne'+(nbligne-1)).addClass("non_enclenche")

		if ($('.colone'+ (nbcolone+1)+'.ligne'+(nbligne-1)).html() == "" ) {
			decouvre($('.colone'+ (nbcolone+1)+'.ligne'+(nbligne-1)))
		}
	}



}






//JEUX
enclenche.on('click',function() {
	if (gene == false) {
		geneb();
		number();
		clearzero();
	}
	if ($(this).html()<=8) {
		console.log($(this));
		decouvre($(this))
	}

})