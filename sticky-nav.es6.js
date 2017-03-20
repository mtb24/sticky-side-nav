// Sticky Nav
// =============

(function($){
  let contentSections = $('.sticky-parent'),
      navigationItems = $('#vertical-nav a'),
      elm = $('#vertical-nav'),
      topSpacing = 100,
      bottomSpacing = 420;

  updateNavigation();
  $(window).on('scroll', function(){
    
    updateNavigation();

    let elementPosition = document.querySelector('.sell--device').getBoundingClientRect();

    if ( elementPosition.top <= topSpacing && elementPosition.bottom >= bottomSpacing ) {
      elm.addClass('showNav');
    } else {
      elm.removeClass('showNav');
    }

  });

  //smooth scroll to the section
  navigationItems.on('click', function(event){
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  function updateNavigation() {
    contentSections.each(function(){
      let $this = $(this);
      let activeSection = $('#vertical-nav a[href="#'+$this.data('section')+'"]').data('number') - 1;
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && 
           ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        navigationItems.eq(activeSection).addClass('active');
      }else {
        navigationItems.eq(activeSection).removeClass('active');
      }
    });
  }

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          600
        );
  }
})(jQuery);
