const chatLog = document.getElementById('chatLog');
const chatInput = document.getElementById('chatInput');
const sendChat = document.getElementById('sendChat');

sendChat.onclick = () => {
    const msg = chatInput.value.trim();
    if(!msg) return;
    if(user.gems<0.5){ alert("Not enough gems!"); return; }
    user.gems-=0.5; localStorage.setItem('syUser', JSON.stringify(user)); updateGemDisplay();
    const userDiv = document.createElement('div'); userDiv.innerText = `You: ${msg}`; chatLog.appendChild(userDiv);
    const botDiv = document.createElement('div'); botDiv.innerText = `Helper: ${getBotResponse(msg)}`; chatLog.appendChild(botDiv);
    chatInput.value=''; chatLog.scrollTop = chatLog.scrollHeight;
};

function getBotResponse(msg){
    msg = msg.toLowerCase();
    if(msg.includes("grade")) return "Use the Grade Calculator tool!";
    if(msg.includes("timer")) return "Try the Study Timer!";
    return "I'm here to help with your school tasks!";
}
