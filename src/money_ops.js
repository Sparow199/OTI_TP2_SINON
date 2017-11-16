var MoneyOps=function (){
}

MoneyOps.add = function(m1,m2){
    if (m1.getCurrency()!== m2.getCurrency()) {
        throw new DevisesIncompatibleExc (m1.getCurrency(),m1.getCurrency());
    }else{
        return new money(m1.getValue()+m2.getValue(),m1.getCurrency());
    }
}
