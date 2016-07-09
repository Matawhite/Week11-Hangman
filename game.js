var dictionary = [
    'bruce',
    'tony',
    'hulk',
    'thor',
    'wasp',
    'time',
    'marvel'
  ];

exports.word = dictionary[Math.floor(Math.random() * dictionary.length)];
