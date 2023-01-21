let studentScore = +prompt("Hello , enter your score");
if (studentScore < 80){
   alert("Your score is not enough")
}else if( studentScore >= 80 && studentScore < 100){
    var studentMoney = +prompt('Congratulations, you have been accepted to OXFORD University on a super contract basis \n Super contract fee 3000 per year,  How much money do you have?')
    if ( studentMoney >= 3000){
        alert(`Congratulations you entered to our university in a super contract way you have also ${studentMoney - 3000}dollar money`)
    }else {
        alert(`Unfortunately your money is not enough for studying in this university you need also ${studentMoney - 3000}dollar money`)
    }
}
if ( studentScore >= 100 && studentScore < 130){
    var studentMoneyTwo = +prompt('Congratulations, you have been accepted to OXFORD University on a contract basis \n Contract fee 2000 per year,  How much money do you have?')
    if (studentMoneyTwo >= 2000){
        alert(`Congratulations you entered to our university you have also ${studentMoneyTwo - 2000}dollar money`)
    }else {
        alert(`Unfortunately your money is not enough you need for studying in a contract basis also ${studentMoneyTwo - 2000}dollar money`)
    }
}
if (studentScore => 130 && studentScore <= 180){
    alert('Congratulations dear, your score is very high and you won a grant ')
}else if (studentScore > 180){
    alert('Go jump in the river, this score is not exist')
}





