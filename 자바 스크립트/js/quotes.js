const quotes = [
  {
    quotes: "열정으로 통치하긴 하지만, 결코 현명하게 통치하지는 못한다 ",
    author: "아브라함 링컨",
  },
  {
    quotes:
      "쁜 자는 단지 마귀 하나로부터 유혹받지만, 한가로운 자는 수많은 마귀들로부터 유혹당한다. ",
    author: "Thomas Fuller ",
  },
  {
    quotes:
      " 만일 내게 나무를 베기 위해 한 시간만 주어진다면, 우선 나는 도끼를 가는데 45분을 쓸 것이다.",
    author: " Abraham Lincoln",
  },
  {
    quotes: "현재가 과거와 다르길 바란다면 과거를 공부하라. ",
    author: " Baruch Spinoza",
  },
  {
    quotes:
      "개선이란 무언가가 좋지 않다고 느낄 수 있는 사람들에 의해서만 만들어질 수 있다 ",
    author: " 프레드리히 니체",
  },
  {
    quotes: " 계획 없는 목표는 한낱 꿈에 불과하다.",
    author: "생텍쥐페리 ",
  },
  {
    quotes: "내가 목표에 달성한 비밀을 말해줄게. 나의 강점은 바로 끈기야 ",
    author: "Louis Pasteur ",
  },
  {
    quotes: " 현재뿐 아니라 미래까지 걱정한다면 인생은 살 가치가 없을 것이다",
    author: "윌리엄 서머셋 모옴 ",
  },
  {
    quotes: "윌리엄 서머셋 모옴 ",
    author: " 존 F. 케네디",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
