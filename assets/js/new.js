var pages = document.getElementsByClassName('page');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var books = document.getElementsByClassName('book');
    
    for (var b = 0; b < books.length; b++) {
      var pages = books[b].getElementsByClassName('page');
      
      for (var i = 0; i < pages.length; i++) {
        pages[i].pageNum = i + 1;
        pages[i].onclick = function() {
          var isEven = this.pageNum % 2 === 0;
          
          if (isEven) {
            this.classList.remove('flipped');
            this.previousElementSibling.classList.remove('flipped');
          } else {
            this.classList.add('flipped');
            this.nextElementSibling.classList.add('flipped');
          }
        };
      }
    }
  });
  