var money= (function(){
	function money(v,curr) {

        curr = String(curr);

		if(v<0){
			throw new NegativeValueIntroduced(v)
        } else if (curr.length > 3 && curr.length !== 9) {
            throw new IncorrectCurrencySizeExc(curr, curr.length)
        }
        else {
            this.v=v;
            if (typeof (curr) === "string"){
                this.curr = curr.toUpperCase();
            }
		}

	}

	money.prototype.getCurrency=function () {
		return this.curr;
    };
	money.prototype.getValue=function () {
		return this.v;
    };
	money.prototype.equals=function (otherM) {
        return (otherM.getValue() === this.getValue() && (otherM.getCurrency().toLowerCase() === this.getCurrency().toLowerCase()));
    };
	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
    };


return money;
})();
