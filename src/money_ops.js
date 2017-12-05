var MoneyOps=function (){
};

MoneyOps.add = function(m1,m2){
    if (m1.getCurrency()!== m2.getCurrency()) {
        throw new DevisesIncompatibleExc(m1.getCurrency(), m2.getCurrency());
    }else{
        return new money(m1.getValue()+m2.getValue(),m1.getCurrency());
    }
};


MoneyOps.sub = function (m1, m2) {

    if (m1.getCurrency() !== m2.getCurrency()) {
        throw new DevisesIncompatibleExc(m1.getCurrency(), m2.getCurrency());
    } else if (m1.getValue() - m2.getValue() < 0) {
        throw new NonPositiveResultExc(m1.getValue(), m2.getValue());
    } else {
        return new money(m1.getValue() - m2.getValue(), m1.getCurrency());
    }

};
