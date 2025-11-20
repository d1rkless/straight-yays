let user = JSON.parse(localStorage.getItem('syUser')) || null;

const hero = document.getElementById('hero');
const signUpForm = document.getElementById('signUpForm');
const dashboard = document.getElementById('dashboard');
const greeting = document.getElementById('greeting');
const gemCount = document.getElementById('gemCount');

const signUpBtn = document.getElementById('signUpBtn');
const logInBtn = document.getElementById('logInBtn');
const homeBtn = document.getElementById('homeBtn');
const submitSignUp = document.getElementById('submitSignUp');
const googleSignUp = document.getElementById('googleSignUp');

function updateGemDisplay() {
    gemCount.innerText = `Gems: ${user.gems}`;
}

function showDashboard() {
    hero.classList.add('hidden');
    signUpForm.classList.add('hidden');
    dashboard.classList.remove('hidden');
    greeting.innerText = `What do you want to do today? Can I assist you today, ${user.username}?`;
    updateGemDisplay();
}

function showHero() {
    hero.classList.remove('hidden');
    dashboard.classList.add('hidden');
    signUpForm.classList.add('hidden');
}

// Init
if(user) showDashboard();

signUpBtn.onclick = () => {
    hero.classList.add('hidden');
    signUpForm.classList.remove('hidden');
};

logInBtn.onclick = () => {
    hero.classList.add('hidden');
    signUpForm.classList.remove('hidden');
};

submitSignUp.onclick = () => {
    const username = document.getElementById('username').value.trim();
    const gmail = document.getElementById('gmail').value.trim();
    const password = document.getElementById('password').value;
    const favTool = document.getElementById('favTool').value.trim();
    if(!username || !gmail || !password){ alert("Fill all fields"); return;}
    user = { username, gmail, password, favTool, gems:20, lastDaily:new Date().toDateString() };
    localStorage.setItem('syUser', JSON.stringify(user));
    showDashboard();
};

googleSignUp.onclick = () => {
    const username = prompt("Enter a username (do not use full name):");
    if(!username) return;
    user = { username, gmail:"google", password:"google", favTool:"none", gems:20, lastDaily:new Date().toDateString() };
    localStorage.setItem('syUser', JSON.stringify(user));
    showDashboard();
};

homeBtn.onclick = () => { showDashboard(); };
