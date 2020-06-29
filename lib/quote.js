const quotes = [
    'If you can not look on the bright side, then I will sit with you in the doNotTrack.',
    'You are entirely bonkers but I will tell you a secret. All the best people are!',
    'I knew who I was this morning but I have changed since then.',
    'Everyone wants some magical solution for their problem and everyone refuses to believe in magic.',
    'You are trying to understand madness with logic. This is not unlike searching for darkness with a torch.',
    'Screw the box, I think outside the straight jacket.',
    'A dream is not reality, but who is to say which is which?',
    'If you knew Time as well as I do, you would not talk about wasting it!'    
];

exports.getQuote = function(){
    var idx = Math.floor(Math.random() * quotes.length);
    return quotes[idx];
}