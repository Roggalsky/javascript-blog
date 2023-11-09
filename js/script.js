'use strict';
//document.getElementById('test-button').addEventListener('click', function(){
//  });
const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!');
    event.preventDefault();
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    clickedElement.classList.add('active');
    /* [IN PROGRESS] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    /* [DONE] remove class 'active' from all articles */
    const articleSelector = ('href')
    getAttribute.clickedElement('href')
    console.log(articleSelector)
    /* get 'href' attribute from the clicked link */
    const targetArticle = document.querySelector('href')
    console.log(targetArticle)
    /* find the correct article using the selector (value of 'href' attribute) */
    targetArticle.classList.add('active')
    /* add class 'active' to the correct article */
  }
  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }