// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })

// $(document).ready(function() {
//    var readMoreHtml = $(".read-more").html();
//    var lessText = readMoreHtml.substr(0,100);

//    if(readMoreHtml.length > 100){
//     $(".read-more").html(lessText).append("<a href='' class='read-more-link'> show more </a>" ); 

//    }else{         

//    	$(".read-more").html(readMoreHtml);
//    }

//   $("body").on("click","read-more-link", function(event){

//   	event.preventDefault();

//   	$(this).parent(".read-more").html(readMoreHtml).append("<a href=''class='show-less-link' >Show Less </a>")
//   })
//   $("body").on("click","show-less-link", function(){
//   	event.preventDefault();

//   	$(this).parent(".read-more").html(readMoreHtml.substr(0,100)).append("<a href=''class='read-more-link' >Show Less </a>")
//   })
  
// });

// $('.carousel').carousel({
//   interval: 2000
// })
// $('.carousel').carousel('cycle')
// // Cycles through the carousel items from left to right.

// $('.carousel').carousel('pause')
// // Stops the carousel from cycling through items.

// $('.carousel').carousel(number)
// // Cycles the carousel to a particular frame (0 based, similar to an array).

// $('.carousel').carousel('prev')
// // Cycles to the previous item.

// $('.carousel').carousel('next')

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});