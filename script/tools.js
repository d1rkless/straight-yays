function deductGem(cost=1){
    if(user.gems>=cost){ user.gems-=cost; localStorage.setItem('syUser',JSON.stringify(user)); updateGemDisplay(); return true; }
    else{ alert("Not enough gems!"); return false; }
}

// Grade Calculator
function calcGrade(){ if(!deductGem()) return;
    const scores = prompt("Enter scores like 80,90,100");
    if(!scores) return;
    let nums = scores.split(",").map(Number);
    alert("Average: "+(nums.reduce((a,b)=>a+b)/nums.length).toFixed(2)+"%");
}

// Word Counter
function countWords(){ if(!deductGem()) return;
    const text = prompt("Enter text to count words:");
    if(!text) return;
    alert("Words: "+text.trim().split(/\s+/).length);
}

// Flashcards
function addFlashcard(){ if(!deductGem()) return;
    const front = prompt("Front:"); const back = prompt("Back:");
    alert(`Flashcard added: ${front} → ${back}`);
}

// Study Timer
function startTimer(){ if(!deductGem()) return;
    const minutes = parseInt(prompt("Minutes:")); if(!minutes) return;
    alert(`Timer started for ${minutes} minutes!`);
}

// MLA Formatter
function mla(){ if(!deductGem()) return;
    const author = prompt("Author:"); const title = prompt("Title:");
    const site = prompt("Website:"); const date = prompt("Date:");
    alert(`${author}. "${title}." ${site}, ${date}.`);
}
