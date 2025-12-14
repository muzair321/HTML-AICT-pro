function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const characters = {
    char1: {name: "Shoya Ishida", weight: "65kg", height: "176cm", age: 17, popularity: "High", personality: "Quiet and Remorseful"},
    char2: {name: "Shoko Nishimiya", weight: "56kg", height: "160cm", age: 17, popularity: "Extremely High", personality: "Gentle and Patient"},
    char3: {name: "Arlecchino", weight: "76kg", height: "173cm", age: 28, popularity: "Extremely High", personality: "Stern and Elegant"},
    char4: {name: "Lee Do", weight: "72kg", height: "181cm", age: 32, popularity: "Medium", personality: "Stoic and Sharp"},
    char5: {name: "Moon Baek", weight: "70kg", height: "179cm", age: 35, popularity: "Extremely High", personality: "Charismatic and Cold"},
    char6: {name: "Daemon Targaryen", weight: "84kg", height: "193cm", age: 43, popularity: "High", personality: "Charismatic and Ambitious"},
    char7: {name: "Dave The Minion", weight: "15kg", height: "60cm", age: 100000000, popularity: "Medium", personality: "Playful and Affectionate"},
    char8: {name: "Gru", weight: "360kg", height: "210cm", age: 46, popularity: "Medium", personality: "Gruff and Caring"},
    char9: {name: "Gojo Satorou", weight: "68kg", height: "190cm", age: 28, popularity: "Extremely High", personality: "Overconfident and Surprisingly Empathetic"},
    char10: {name: "Hiccup Haddock", weight: "62kg", height: "185cm", age: 21, popularity: "High", personality: "Brilliant Strategist and Moral Courage"},
    char11: {name: "Stoick The Vast", weight: "128kg", height: "200cm", age: 50, popularity: "High", personality: "Brave and Honorable"},
    char12: {name: "Lalo Salmanca", weight: "76kg", height: "180cm", age: 42, popularity: "Extremely High", personality: "Charming and Sadistic"},
    char13: {name: "Thorin Oakensheild", weight: "79kg", height: "165cm", age: 195, popularity: "High", personality: "Honorable and Stubborn"},
    char14: {name: "Aragorn", weight: "95kg", height: "198cm", age: 87, popularity: "Extremely High", personality: "Noble and Selfless"},
    char15: {name: "Jessie Pinkman", weight: "70kg", height: "173cm", age: 25, popularity: "High", personality: "Emotional and Empathetic"},
    char16: {name: "Eleven", weight: "46kg", height: "160cm", age: 14, popularity: "High", personality: "Quiet and Brave"},
    char17: {name: "Star Lord", weight: "93kg", height: "188cm", age: 39, popularity: "High", personality: "Charismatic and Humorous"},
    char18: {name: "Tony Stark", weight: "89kg", height: "185cm", age: 47, popularity: "Extremely Popular", personality: "Witty and Emotionally Complex"},
};

let selected = [];
document.querySelectorAll('.char-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const charId = icon.dataset.char;

        if (!selected.includes(charId) && selected.length < 2) {
            selected.push(charId);
            icon.classList.add('selected');
        } else if (selected.includes(charId)) {
            selected = selected.filter(c => c !== charId);
            icon.classList.remove('selected');
        }

        if (selected.length === 2) {
            displayComparison();
        } else {
            clearComparison();
        }
    });
});

function displayComparison() {
    const [char1, char2] = selected;
    const c1 = characters[char1];
    const c2 = characters[char2];
    document.getElementById('char1-name').innerText = c1.name;
    document.getElementById('char2-name').innerText = c2.name;
    document.getElementById('char1-weight').innerText = c1.weight;
    document.getElementById('char2-weight').innerText = c2.weight;
    document.getElementById('char1-height').innerText = c1.height;
    document.getElementById('char2-height').innerText = c2.height;
    document.getElementById('char1-age').innerText = c1.age;
    document.getElementById('char2-age').innerText = c2.age;
    document.getElementById('char1-popularity').innerText = c1.popularity;
    document.getElementById('char2-popularity').innerText = c2.popularity;
    document.getElementById('char1-personality').innerText = c1.personality;
    document.getElementById('char2-personality').innerText = c2.personality;

    const comments = [];

    if (c1.age > c2.age) comments.push(`${c1.name} is older than ${c2.name}.`);
    else if (c1.age < c2.age) comments.push(`${c2.name} is older than ${c1.name}.`);
    else comments.push(`${c1.name} and ${c2.name} are the same age.`);

    if (parseInt(c1.weight) > parseInt(c2.weight)) comments.push(`${c1.name} is heavier than ${c2.name}.`);
    else if (parseInt(c1.weight) < parseInt(c2.weight)) comments.push(`${c2.name} is heavier than ${c1.name}.`);
    else comments.push(`${c1.name} and ${c2.name} weigh the same.`);

    if (parseInt(c1.height) > parseInt(c2.height)) comments.push(`${c1.name} is taller than ${c2.name}.`);
    else if (parseInt(c1.height) < parseInt(c2.height)) comments.push(`${c2.name} is taller than ${c1.name}.`);
    else comments.push(`${c1.name} and ${c2.name} are of the same height.`);

    const popOrder = ["Medium", "High", "Extremely High"];
    if (popOrder.indexOf(c1.popularity) > popOrder.indexOf(c2.popularity)) comments.push(`${c1.name} is more popular than ${c2.name}.`);
    else if (popOrder.indexOf(c1.popularity) < popOrder.indexOf(c2.popularity)) comments.push(`${c2.name} is more popular than ${c1.name}.`);
    else comments.push(`${c1.name} and ${c2.name} have similar popularity.`);

    comments.push(`Personality difference: ${c1.name} is ${c1.personality.toLowerCase()} while ${c2.name} is ${c2.personality.toLowerCase()}.`);

    const commentList = document.getElementById('comparison-comments');
    commentList.innerHTML = '';
    comments.forEach(c => {
        const li = document.createElement('li');
        li.innerText = c;
        commentList.appendChild(li);
    });
}

function clearComparison() {
    ['char1', 'char2'].forEach(c => {
        document.getElementById(`${c}-name`).innerText = c === 'char1' ? "Character 1" : "Character 2";
        document.getElementById(`${c}-weight`).innerText = '';
        document.getElementById(`${c}-height`).innerText = '';
        document.getElementById(`${c}-age`).innerText = '';
        document.getElementById(`${c}-popularity`).innerText = '';
        document.getElementById(`${c}-personality`).innerText = '';
    });
    document.getElementById('comparison-comments').innerHTML = '';
}
