function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 

function openExpTab(evt, exptabName) {
    // Declare all variables
    var i, exptabcontent, exptablinks;

    // Get all elements with class="tabcontent" and hide them
    exptabcontent = document.getElementsByClassName("exptabcontent");
    for (i = 0; i < exptabcontent.length; i++) {
      exptabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    exptablinks = document.getElementsByClassName("exptablinks");
    for (i = 0; i < exptablinks.length; i++) {
      exptablinks[i].className = exptablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(exptabName).style.display = "block";
    evt.currentTarget.className += " active";
} 

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function tabify (element) {
    const header = element.querySelector('.gator-tabs-header');
    const content = element.querySelector('.gator-tabs');
    const tab_headers = [...header.children];
    const tab_contents = [...content.children];
    tab_contents.forEach( x => x.style.display = 'none');
    let current_tab_index = -1;
  
    function setTab (index) {
        if (current_tab_index > -1 )
        {
            tab_headers[ current_tab_index ].style.color = "#666";
            tab_contents[ current_tab_index ].style.display = 'none';
        }
        tab_headers[ index ].style.color = "white";
        tab_contents[ index ].style.display = 'block';
        current_tab_index = index;
    }
  
    default_tab_index = tab_headers.findIndex( x => {
        return [...x.classList].indexOf('default-gator-tab') > -1;
    });
  
    default_tab_index = default_tab_index === -1 ? 0 : default_tab_index;
    setTab( default_tab_index );
    tab_headers.forEach((x,i) => x.onclick = event => setTab(i));
}
  
// this is where the magic happens!
[...document.querySelectorAll('.gator-tabs-container')].forEach(x => tabify(x));