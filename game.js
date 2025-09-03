<script>
// --- Data ---------------------------------------------------------------
const GROUPS = [
{
number: 33,
players: [
{ name: "Larry Bird", team: "Celtics" },
{ name: "Zdeno Chára", team: "Bruins" },
{ name: "Kevin Faulk", team: "Patriots" },
{ name: "Jason Varitek", team: "Red Sox" },
],
},
{
number: 4,
players: [
{ name: "Bobby Orr", team: "Bruins" },
{ name: "Bob Cousy", team: "Celtics" },
{ name: "Adam Vinatieri", team: "Patriots" },
{ name: "Joe Cronin", team: "Red Sox" },
],
},
{
number: 12,
players: [
{ name: "Tom Brady", team: "Patriots" },
{ name: "Adam Oates", team: "Bruins" },
{ name: "Chris Ford", team: "Celtics" },
{ name: "Johnny Pesky", team: "Red Sox" },
],
},
{
number: 24,
players: [
{ name: "Ty Law", team: "Patriots" },
{ name: "Sam Jones", team: "Celtics" },
{ name: "Terry O’Reilly", team: "Bruins" },
{ name: "Dwight Evans", team: "Red Sox" },
],
},
];


// Flatten to a 16-card deck
const ALL_PLAYERS = GROUPS.flatMap(g => g.players.map(p => ({ ...p, number: g.number })));


// --- State --------------------------------------------------------------
let deck = [];
let selected = new Set(); // store indexes in deck
let solvedGroups = []; // {number, players[]}


// --- Elements -----------------------------------------------------------
const grid = document.getElementById('grid');
const banner = document.getElementById('banner');
const progress = document.getElementById('progress');
const selectionPill = document.getElementById('selectionPill');
const found = document.getElementById('found');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const shareBtn = document.getElementById('shareBtn');


// --- Utils --------------------------------------------------------------
function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[array[i], array[j]] = [array[j], array[i]];
}
return array;
}
</script>
