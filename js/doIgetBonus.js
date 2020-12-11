const bonusTime = (salary, bonus) => {return bonus === true ? '£'+(salary*10).toString() : '£'+salary.toString()}
bonusTime(60000, false); //'£60000'