function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
	
}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}


function NegativeValueIntroduced(_d1) {
    this.d1=_d1;

}

NegativeValueIntroduced.prototype.toString=function (){
    return "Impossible de créer ma monnaie la valeur : "+this.d1+" < 0";
}