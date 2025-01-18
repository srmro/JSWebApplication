//create a single web application

const API_KEY = '1285f6cc76fe4982b0d6fb6db253aedc'
//need to access an external API

async function getRandomNews() {
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?q=games&apiKey=1285f6cc76fe4982b0d6fb6db253aedc`)
            console.log(response);

        if (!response.ok) {
            throw new Error('There was a problem with the API');
        }

        const data = await response.json();
        console.log(data.articles);

        const newsImg = data.articles.urlToImage;
        const imgElement = document.getElementById("newsImg")

        imgElement.src = newsImg;
        imgElement.style.display = "block";

        console.log(imgElement)

        const element = document.querySelector('button');
        button.addEventListener
        console.log(element);



 } catch(error) {
        console.error(error.status);
    }


}
getRandomNews()

//fetch the API to communicate with external web API

//use data to populate your application's content and features


//create user interactioin with API through a search feature(should) use get requests to retrieve associated data


//enable user manipulation of data within the API through the use of POST,PUT,PATCH

//ensure API suppports these features,


//Make use of promises, asyn/await as appropiate


//organize js code into atleast 3 different module files
//and import functions and data acorss files as necessary


//ensure the program runs as expected, without any undesired behavior cause
//by misunderstanding of the js event loop



//create engaging use experience through the use of HTML and CSS


//Ensure program runs without errors.


//commit frequently to git repository