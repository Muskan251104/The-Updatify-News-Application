const main = document.getElementById("articles-container");
// console.log(main);
//main.innerHTML = "<h1>Hello from DOM</h1>"

// const heading = 'Aaj kis taaza khabar';
// const description = 'this is the latest news about india';
// const link ="";

let data;
let dataLength = 0;
async function getData()
{
    const res = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json");
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    renderUI();
}
getData();
function renderUI(){
for(let i=1;i<=12;i++){
const article = document.createElement('article');
// console.log(article);
article.innerHTML = `<img src="${data[i].urlToImage}" class="article-image">
<div class="article-content">
    <h2><a href="${data[i].url}" target="_blank">${data[i].title}</a></h2>
    <p>${data[i].description}</p>
    
</div>`;
main.appendChild(article);
}}

const main1 = document.getElementById("articles-container1");
// console.log(main);
//main.innerHTML = "<h1>Hello from DOM</h1>"

// const heading = 'Aaj kis taaza khabar';
// const description = 'this is the latest news about india';
// const link ="";

let data1;
let dataLength1 = 0;
async function getData1()
{
    const res1 = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json");
    const result1 = await res1.json();
    data1 = result1.articles;
    dataLength1 = data1.length;
    renderUI1();
}
getData1();
function renderUI1(){
for(let i=1;i<=4;i++){
const article = document.createElement('article');
// console.log(article);
article.style.display="flex";
article.style.flexDirection="column";
article.style.margin="30px 10px";
article.style.border="2px solid black";
article.style.backgroundColor="white";
article.style.borderRadius="5%";
article.style.boxShadow="0.5rem 1rem 1rem black";
article.innerHTML = `<img src="${data1[i].urlToImage}" class="article-image1">
<div class="article-content1">
    <h2><a href="${data1[i].url}" target="_blank">${data1[i].title}</a></h2>
    
    
</div>`;

main1.appendChild(article);
}}


