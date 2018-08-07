function fillstar(Obj){
var stars=document.getElementsByName(Obj.name)

for(i=0;i<stars.length;i++){

	if (i<=Obj.id){stars[i].src="fullstar.jpg"}
	else{stars[i].src="emptystar.jpg"}
}
