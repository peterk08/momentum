const quotes = [
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "We must not allow other people’s limited perceptions to define us.",
        author: "Virginia Satir",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
        author: "Bernard M. Baruch",
    },
    {
        quote: "This above all: to thine own self be true.",
        author: "William Shakespeare",
    },
    {
        quote: "If you cannot do great things, do small things in a great way",
        author: "Napoleon Hill",
    },
    {
        quote: "If opportunity doesn’t knock, build a door.",
        author: " Milton Berle",
    },
    {
        quote: "Wise men speak because they have something to say; fools because they have to say something.",
        author: "Plato",
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;