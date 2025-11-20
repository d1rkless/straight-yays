function checkDailyGems() {
    const today = new Date().toDateString();
    if(user.lastDaily !== today){
        user.gems += 20;
        if(user.gems>50) user.gems = 50;
        user.lastDaily = today;
        localStorage.setItem('syUser', JSON.stringify(user));
        updateGemDisplay();
    }
}

if(user) checkDailyGems();
