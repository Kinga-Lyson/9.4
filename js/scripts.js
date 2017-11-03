var wysokoscChoinki = prompt('Podaj ilosc wierszy: ');
function drawTree(wysokoscChoinki) {
	for (var i = 0; i < wysokoscChoinki; i++) {
		var star = '';
		var nowaWysokosc = wysokoscChoinki - i;
		var space = ((nowaWysokosc-(nowaWysokosc%2))/2);
		for (var k = 0; k < space; k++) {
			star += ' ';
		}
		for (var j = 0; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}