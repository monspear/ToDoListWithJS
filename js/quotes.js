const quotes = [
    {
        quote: "호의가 계속되면은, 그게 권리인 줄 알아요.",
        author: "영화 '부당거래'중",
    },
    {
        quote: "내일만 사는 놈은 오늘만 사는 놈한테 죽는다.",
        author: "영화 '아저씨'중",
    },
    {
        quote: "아직 신에게는 열두 척의 배가 남아있사옵니다.",
        author: "영화 '명량'",
    },
    {
        quote: "우리가 돈이 없지 가오가 없어?",
        author: "영화 '베테랑'",
    },
    {
        quote: "국민이 정부를 두려워해서는 안돼. 정부가 국민을 두려워해야지.",
        author: "영화 '브이 포 벤데타'",
    },
    {
        quote: "매너가 사람을 만든다.",
        author: "영화 '킹스맨1'",
    },
    {
        quote: "인생이란 원래 자기 생각대로 되지 않는 법이란다.",
        author: "영화 '짱구는 못말려 극장판 핸더랜드의 모험'",
    },
    {
        quote: "우린 답을 찾을 것이다. 늘 그랬듯이.",
        author: "영화 '인터스텔라'",
    },
    {
        quote: "중요한 건 꺽이지않는 마음.",
        author: "리그오브레전드 김혁규(Deft)선수와의 인터뷰를 올린 문대찬 기자",
    },
    {
        quote: "부디 당신의 책을 찾으실 수 있기를.",
        author: "라이브러리 오브 루이나, 앤젤라의 접대 코멘트",
    },
];

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

const randomCount = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomCount];


quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;