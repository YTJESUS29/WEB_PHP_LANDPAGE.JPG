const discos = [
  {nombredisco:'Thriller',nombreartista:'Michael Jackson',nombrecanciones:'Wanna Be Startin’ Somethin’, Thriller, Beat It, Billie Jean',MillonesVendidosDisco:70},
  {nombredisco:'Back in Black',nombreartista:'AC/DC',nombrecanciones:'Hells Bells, Shoot to Thrill, Back in Black, You Shook Me All Night Long',MillonesVendidosDisco:50},
  {nombredisco:'The Bodyguard',nombreartista:'Whitney Houston',nombrecanciones:'I Will Always Love You, I Have Nothing, Run to You',MillonesVendidosDisco:45},
  {nombredisco:'Rumours',nombreartista:'Fleetwood Mac',nombrecanciones:'Dreams, Go Your Own Way, Don’t Stop',MillonesVendidosDisco:40},
  {nombredisco:'Hotel California',nombreartista:'Eagles',nombrecanciones:'Hotel California, New Kid in Town, Life in the Fast Lane',MillonesVendidosDisco:42},
  {nombredisco:'Come On Over',nombreartista:'Shania Twain',nombrecanciones:'You’re Still the One, Man! I Feel Like a Woman!, From This Moment On',MillonesVendidosDisco:40},
  {nombredisco:'21',nombreartista:'Adele',nombrecanciones:'Rolling in the Deep, Someone Like You, Set Fire to the Rain',MillonesVendidosDisco:31},
  {nombredisco:'Bad',nombreartista:'Michael Jackson',nombrecanciones:'Bad, Smooth Criminal, Man in the Mirror',MillonesVendidosDisco:35},
  {nombredisco:'Jagged Little Pill',nombreartista:'Alanis Morissette',nombrecanciones:'You Oughta Know, Ironic, Hand in My Pocket',MillonesVendidosDisco:33},
  {nombredisco:'Supernatural',nombreartista:'Santana',nombrecanciones:'Smooth, Maria Maria, Put Your Lights On',MillonesVendidosDisco:30}
];

const container = document.getElementById('discos-container');

// Filtrar solo discos de Michael Jackson
const mjDiscos = discos.filter(d => d.nombreartista === 'Michael Jackson');

mjDiscos.forEach(d => {
  const card = document.createElement('article');
  card.className = 'card';
  card.tabIndex = 0;
  card.innerHTML = `
    <h2>${d.nombredisco}</h2>
    <h3>Artista: ${d.nombreartista}</h3>
    <p><strong>Canciones:</strong> ${d.nombrecanciones}</p>
    <p class="sales">Millones vendidos: ${d.MillonesVendidosDisco} M</p>
    <button type="button">Ver Disco</button>
  `;
  card.querySelector('button').onclick = () => alert(`Disco: ${d.nombredisco}\nArtista: ${d.nombreartista}`);
  container.appendChild(card);
});
