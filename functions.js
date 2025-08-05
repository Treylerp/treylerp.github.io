var currentplayers = 5;
var Roles = [];
var recent = 0;
var cardnum = 1;

function createCards(playnumber) {
	if(cardnum != 1){
		const target = document.getElementById('rowofcards');
		target.innerHTML = "";
		cardnum = 1;
		createCards(playnumber);
	}else{
	for(i = 0; i<playnumber; i++){
	var cardattr = "myCard('card0"+cardnum+"')";
	cardattr.toString();
	var colattr = "col0"+cardnum;
	colattr.toString();
	var cardid = "card0"+cardnum;
	cardid.toString();
	const targetElement = document.getElementById('rowofcards');
	var newcol = document.createElement("div");
	var newcard = document.createElement("a");
	var newimg = document.createElement("img");
	newcol.setAttribute('class', 'col-4 col-md-2 col-lg-1');
	newcol.setAttribute('id', colattr);
	newcard.setAttribute('onclick',cardattr); 
	newimg.setAttribute('src', "partymembership.png");
	newimg.setAttribute('class', "cardimg");
	newimg.setAttribute('id', cardid);
	newimg.setAttribute('draggable', "false");
	
	targetElement.append(newcol);
	newcol.append(newcard);
	newcard.append(newimg);
		
	newcol.animate([
        { transform: 'translateX(1000%)', opacity: 0},
        { transform: 'translateX(0)', opacity: 1}
    ], {
        duration: 1000,
        easing: 'ease-out',
        fill: 'forwards' // Keep the final state after animation
    });
	
	cardnum = cardnum + 1;
	}}
	
}


function playernum(players) {
	currentplayers = Number(players);
	switch(currentplayers){
	case 5:
		Roles = ["liberal", "liberal", "liberal", "fascist", "hitler"];
	break;
	case 6:
		Roles = ["liberal", "liberal", "liberal", "liberal", "fascist", "hitler"];
	break;
	case 7:
		Roles = ["liberal", "liberal", "liberal", "liberal", "fascist", "fascist", "hitler"];
	break;
	case 8:
		Roles = ["liberal", "liberal", "liberal", "liberal", "liberal", "fascist", "fascist", "hitler"];
	break;
	case 9:
		Roles = ["liberal", "liberal", "liberal", "liberal", "liberal", "fascist", "fascist", "fascist", "hitler"];
	break;
	case 10:
		Roles = ["liberal", "liberal", "liberal", "liberal", "liberal", "liberal", "fascist", "fascist", "fascist", "hitler"];
	break;
	default:
	console.log("default");
	
}
createCards(currentplayers);
}
function imDone() {
	const activeElem = document.getElementById("Active");
	const donebutton = document.getElementById("donebutton");

	
	 donebutton.animate(
      [
        { transform: 'scale(1)' }, // Start at original size
        { transform: 'scale(0.01)'} // Shrink to 80%
      ],
      {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
        fill: 'forwards' // Keep the final state after animation
      }
    );
		 activeElem.parentElement.parentElement.animate(
      [
        { transform: 'translateX(0%)' }, // Start at original size
        { transform: 'translate(1000%)' } // Shrink to 80%
      ],
      {
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
        fill: 'forwards' // Keep the final state after animation
      }
    );
	setTimeout(() => {activeElem.parentElement.parentElement.remove()}, 1000);
	setTimeout(() => {donebutton.style = "opacity:0;"}, 1000);
	setTimeout(() => {recent = 0}, 1100);
}




function myCard(id) {
	if(recent == 1) return;

const done = document.getElementById("donebutton");
const selectedElement = document.getElementById(id);
done.style="opacity:1;";
		 done.animate(
      [
        { transform: 'scale(0.1)' }, // Start at original size
        { transform: 'scale(1)' } // Shrink to 80%
      ],
      {
        duration: 500, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation timing function
        fill: 'forwards' // Keep the final state after animation
      }
    );
	for (i=0; i<Roles.length; i++) {
			var rand = Math.floor(Math.random() * (i+1));
			[Roles[i], Roles[rand]] = [Roles[rand], Roles[i]];		
}
var select = 0;

//Math.floor(Math.random() * (Roles.length - 0));
console.log(Roles[select]);
	if(Roles[select] == 'liberal'){
		selectedElement.setAttribute('id', "Active");
		selectedElement.src="membership-liberal.png";
		Roles.shift();
		
}	else if(Roles[select] == 'fascist'){
	selectedElement.setAttribute('id', "Active");
	selectedElement.src="membership-fascist.png";
	Roles.shift();
}	else if(Roles[select] == 'hitler'){
	selectedElement.setAttribute('id', "Active");
	selectedElement.src="hitler0.png";
	selectedElement.alt="Hitler!";
	Roles.shift();
	}
	recent = 1;
}
//selectedElement.parentElement.parentElement.remove()