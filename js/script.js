'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
*/
const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');


/* [DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}
/*[DONE] add class 'active' to the clicked link */
clickedElement.classList.add('active')
console.log('clickedElement:', clickedElement);
 /* [DONE] remove class 'active' from all articles*/
const activeArticles = document.querySelectorAll('.posts article.active')/*czemu (.posts article.active)i skąd to wziąć?) */
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}
/*[DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
/* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector (articleSelector)
/* add class 'active' to the correct article */
targetArticle.classList.add('active')
}
const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector);

  let html = '';

  for (let article of articles) {
    /* get the article id */
    const articleId = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* insert link into html variable */
    html += linkHTML;
  }

  /* insert all links into titleList */
  titleList.innerHTML = html;

  /* add click event to each generated link */
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();