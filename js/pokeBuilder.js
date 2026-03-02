/* AI GENERATED JAVASCRIPT with slight modifications */
const cache = {};
let currentPokemon = null;
const team = [];
const MAX_TEAM = 6;

const input       = document.getElementById('pokemon-input');
const searchBtn   = document.getElementById('search-btn');
const errorMsg    = document.getElementById('error-msg');
const pokeSection = document.getElementById('pokemon-section');
const pokeName    = document.getElementById('pokemon-name');
const pokeSprite  = document.getElementById('pokemon-sprite');
const cryBtn      = document.getElementById('cry-btn');
const addBtn      = document.getElementById('add-btn');
const teamMsg     = document.getElementById('team-msg');
const teamCount   = document.getElementById('team-count');
const teamGrid    = document.getElementById('team-grid');
const moveSelects = [
  document.getElementById('move1'),
  document.getElementById('move2'),
  document.getElementById('move3'),
  document.getElementById('move4'),
];

// Search on button click or Enter key
searchBtn.addEventListener('click', doSearch);
input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

async function doSearch() {
  const query = input.value.trim().toLowerCase();
  if (!query) return;

  errorMsg.textContent = '';
  pokeSection.style.display = 'none';
  currentPokemon = null;

  try {
    const pokemon = await fetchPokemon(query);
    currentPokemon = pokemon;
    displayPokemon(pokemon);
    populateMoves(pokemon.moves);
    pokeSection.style.display = 'block';
    teamMsg.textContent = '';
  } catch (err) {
    errorMsg.textContent = err.message;
  }
}

async function fetchPokemon(query) {
  // Return cached result if available
  if (cache[query]) return cache[query];

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
  if (!res.ok) throw new Error(`Pokemon "${query}" not found.`);

  const data = await res.json();
  // Cache by query, name, and id
  cache[query]     = data;
  cache[data.name] = data;
  cache[data.id]   = data;
  return data;
}

function displayPokemon(pokemon) {
  pokeName.textContent = pokemon.name + ' (#' + pokemon.id + ')';
  pokeSprite.src = pokemon.sprites.front_default || '';
  pokeSprite.alt = pokemon.name;

  const cryUrl = pokemon.cries?.latest || pokemon.cries?.legacy || null;
  cryBtn.onclick = () => {
    if (cryUrl) new Audio(cryUrl).play();
  };
  cryBtn.disabled = !cryUrl;
}

function populateMoves(moves) {
  const names = moves.map(m => m.move.name).sort();
  moveSelects.forEach((sel, i) => {
    sel.innerHTML = '<option value="">-- None --</option>';
    names.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name.replace(/-/g, ' ');
      sel.appendChild(opt);
    });
    // Pre-select the first 4 moves
    if (names[i]) sel.value = names[i];
  });
}

addBtn.addEventListener('click', () => {
  if (!currentPokemon) return;

  if (team.length >= MAX_TEAM) {
    teamMsg.textContent = 'Team is full! (max 6)';
    return;
  }

  const moves = moveSelects.map(s => s.value).filter(Boolean);

  team.push({
    name:   currentPokemon.name,
    id:     currentPokemon.id,
    sprite: currentPokemon.sprites.front_default || '',
    moves,
  });

  renderTeam();
});

function renderTeam() {
  teamCount.textContent = team.length;
  teamGrid.innerHTML = '';

  team.forEach((member, idx) => {
    const card = document.createElement('div');
    card.className = 'team-card';

    const img = document.createElement('img');
    img.src = member.sprite;
    img.alt = member.name;

    const name = document.createElement('strong');
    name.textContent = member.name + ' (#' + member.id + ')';

    const moveList = document.createElement('div');
    member.moves.forEach(m => {
      const p = document.createElement('p');
      p.textContent = m.replace(/-/g, ' ');
      moveList.appendChild(p);
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      team.splice(idx, 1);
      renderTeam();
    });

    card.appendChild(img);
    card.appendChild(document.createElement('br'));
    card.appendChild(name);
    card.appendChild(moveList);
    card.appendChild(removeBtn);
    teamGrid.appendChild(card);
  });
}