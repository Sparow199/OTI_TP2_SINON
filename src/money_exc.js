function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
	
}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
};


function NegativeValueIntroduced(_d1) {
    this.d1=_d1;

}

NegativeValueIntroduced.prototype.toString=function (){
    return "Impossible de créer ma monnaie la valeur : "+this.d1+" < 0";
};


//#
function NonPositiveResultExc(_value1, _value2) {
    this.value1 = _value1;
    this.value2 = _value2;

}

NonPositiveResultExc.prototype.toString = function () {
    return this.value1 + " is smaller than " + this.value2;
};


//#
function UnexistingCurrencyException(_curr) {
    this.curr = _curr;

}

UnexistingCurrencyException.prototype.toString = function () {
    return "currency " + this.curr + " is unknown !";
};


//#
function IncorrectCurrencySizeExc(_curr, _size) {
    this.curr = _curr;
    this.size = _size;
}

IncorrectCurrencySizeExc.prototype.toString = function () {
    return this.curr + ", incorrect currency size Expected size 3 found: " + this.size;
};