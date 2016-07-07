var dictionary = [
    'ant man',
    'black panther',
    'black widow',
    'captain america',
    'captain marvel',
    'hawkeye',
    'hulk',
    'iron man',
    'luke cage',
    'quicksilver',
    'thor',
    'vision',
    'wasp'
  ];

exports.word = dictionary[Math.floor(Math.random() * dictionary.length)];
