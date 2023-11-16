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
    (console.log ('remove active class'))
}

/*[IN PROGRESS] add class 'active' to the clicked link */
clickedElement.classList.add('active')
console.log('clickedElement:', clickedElement);
/**
 console.log('clickedElement (with plus): ' + clickedElement);.(przy takim zapisie konsola wyrzuca nam link https na stronę artykułu)
 a tak kieruje nas do liku href.
 */

 /* [DONE] remove class 'active' from all articles */
const activeArticles = document.querySelectorAll('.posts article.active')/*czemu (.posts article.active)i skąd to wziąć?) */
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    console.log('remove active from Article') /**co z nim jest nie tak? */
    }

/* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
    console.log('get href')

/* find the correct article using the selector (value of 'href' attribute) */
const targetArticle = document.querySelector (articleSelector)

/* add class 'active' to the correct article */
targetArticle.classList.add('active')

}
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}