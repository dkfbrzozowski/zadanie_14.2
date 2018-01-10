var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'http://via.placeholder.com/350x150'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://via.placeholder.com/350x150'
  },
  {
    id: 3,
    title: 'Gladiator',
    desc: 'film o gladiatorze, który zabił cesarza',
    img: 'http://via.placeholder.com/350x150'
  },
  {
    id: 4,
    title: 'Star Wars: Powrót Jedi',
    desc: 'jeden z filmów sagi Star Wars',
    img: 'http://via.placeholder.com/350x150'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
/*
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, 'Harry Potter'),
        React.createElement('p', {}, 'Film o czarodzieju')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, 'Król Lew'),
        React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
      )
    )
  );
*/
ReactDOM.render(element, document.getElementById('app'));