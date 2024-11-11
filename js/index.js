
const onClick = [
  {'author': `― Allen Saunders`, 
   'quote': `“Life is what happens to us while we are making other plans.”`
  },
  {'author': `― Thomas A. Edison`, 
   'quote': `“I have not failed. Ive just found 10,000 ways that wont work.”`
  },
  {'author': `― Mark Twain`, 
   'quote': `“The man who does not read has no advantage over the man who cannot read.”`
  },
  {'author': `― Eleanor Roosevelt`, 
   'quote': `“A woman is like a tea bag; you never know how strong it is until it's in hot water.”`
  },
  {'author': `― Dr. Seuss`, 
   'quote': `“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”`
  },
  {'author': `― Oscar Wilde`, 
   'quote': `“Be yourself; everyone else is already taken.”`
  },
];

function clicked(){
  const random = Number.parseInt(Math.random()*onClick.length + 1);
  document.querySelector('#output').textContent = `\"${onClick[random].quote}\"`;
  document.querySelector('#output2').textContent = `--${onClick[random].author}`;
  
}
