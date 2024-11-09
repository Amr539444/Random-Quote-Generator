function clicked() {
  let quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“If you tell the truth, you don`t have to remember anything”",
  ];
  let quotes_random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("output").innerHTML = quotes_random;
}
