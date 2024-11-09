const quote=document.querySelector(".quote");
const author=document.querySelector(".author");
const new_quote_btn=document.querySelector("#new-quote")
const linkedin_btn=document.querySelector("#Linkedin");

const api_url="https://quotes-api-self.vercel.app/quote";

getQuote(api_url);
async function getQuote(api_url) {
    const response=await fetch(api_url);
    var data=await response.json();
    quote.innerHTML=`<p><span>"</span>${data.quote}<span>"</span></p>`;
    author.innerHTML=`- ${data.author}`
}

new_quote_btn.addEventListener("click",()=>{
    getQuote(api_url);
})

linkedin_btn.addEventListener("click",()=>{
    const quoteText = encodeURIComponent(quote.textContent);
    const authorText = encodeURIComponent(author.textContent);
    const source = encodeURIComponent("Daily Quote API");
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url={articleUrl}&title=${quoteText}&summary=${authorText}&source=${source}`;
    window.open(linkedInUrl, "Linkedin Window", "width=500,height=500");
})