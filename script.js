


//app that selects a random quote from an array when the user clicks on a button.

//define variables
const button = document.querySelector('#button');
const content = document.querySelector('#content');
const quotes = [`"Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.”
― Roy T. Bennett, The Light in the Heart`,`"Anger is the ultimate destroyer of your own peace of mind." - Dalai Lama`,`"Emotional empathy is what motivates us to help others." - Brian Goldman, The Power of Kindness`,`"You can be rich and famous and still end up being unhappy." - Ryanne Knight, Success`,`"Accept full responsibility for everything that happens in your life." - Russell Gerald Johnston, Random Wisdom`,`“Talent hits a target no one else can hit; Genius hits a target no one else can see." - Arthur Schopenhauer`];
let select

//select a random quote from the array in a function that contains a for loop
const randomQuote = async () => {
    for (let i = 0; i < quotes.length; i++) {
        //console.log(quotes[i]);
        select = quotes[Math.floor(Math.random() * quotes.length)];
    }
    return select;
}

randomQuote();

//function that changes the content of an html div to add our random quote
const appKid = async () =>{
    sel = await randomQuote();
    content.innerHTML = `${sel}`;
    button.innerHTML = 'Get another quote! :D'
}