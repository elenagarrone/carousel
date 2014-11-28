if (Meteor.isClient) {
  Template.document_ready.rendered = function(){
    $('.carousel').carousel({
      interval: false
    })
    $('.carousel').carousel('pause')

    var car = document.getElementById('carousel-example-generic');
    var hammertime = new Hammer(car); 
    hammertime.get('swipe').set({direction: Hammer.DIRECTION_ALL})
    hammertime.on('swipeleft', function(){
        alert('swiping')
        $('.carousel').carousel('next'); 
    })

    $('.carousel').hammer().on('swiperight', function(){
      $('.carousel').carousel('prev'); 
    })
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
