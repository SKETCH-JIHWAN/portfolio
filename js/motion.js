  //counter
  const countEl = document.getElementById("counter");
updateVisitCount();
function updateVisitCount() {
	fetch("https://api.countapi.xyz/update/sketchwan/mysite?amount=1").then(res => res.json()).then(res => {
		countEl.innerHTML = res.value;
	});
}
// filtering
/*
$(".container input[type='radio'] + label").click(function(){
	$(".container label").removeClass("active");
	$(this).addClass("active");
});

const filterItems = $(".container input[type='radio']");

filterItems.click(function(){
	var filterId = $(this).attr("id");
	if(filterId == "sketch"){
		$(".filter > *").removeClass("invisible");
		$(".filter > .modeling, .filter > .etc").addClass("invisible");
	} else if(filterId == "modeling") {
		$(".filter > *").removeClass("invisible");
		$(".filter > .sketch, .filter > .etc").addClass("invisible");
	} else if(filterId == "etc") {
		$(".filter > *").removeClass("invisible");
		$(".filter > .modeling, .filter > .sketch").addClass("invisible");
	} else if(filterId == "all") {
		$(".filter > *").removeClass("invisible");
	}
});

*/
$(window).load(function(){
	
	$('#masonry-grid').masonry({
		columnWidth: 270,
		itemSelector: '.grid-item'
	});
	
	
	// This does the filter by binding an event on the change of a select box
	$("#grid-filter li").click(function() {
		var group = $(this).data('category');
		var group_class = "." + group;
		
		if(group == "*"){
			$(".grid-item").show();
			$('#masonry-grid').masonry('layout');
			}
		else if(group != "") {
			$(".grid-item").hide();
			$(group_class).show();
			$('#masonry-grid').masonry('layout');
		} else {
			$(".grid-item").show();
			$('#masonry-grid').masonry('layout');
		}
		$("#grid-filter li").removeClass("active");
		$(this).addClass("active");
	});

});

//modal

$(".grid-item").click(function(){
	itemImg = $(this).find("img").attr("src");
	console.log(itemImg);
	itemTitle = $(this).find("h2").text();
	console.log(itemTitle);
	itemContent = $(this).find("p").text();
	console.log(itemContent);
	$(".modal .modal-inner .modal-title").text("");
	$(".modal .modal-inner .modal-title").text(itemTitle);
	$(".modal .modal-inner .modal-content p").text("");
	$(".modal .modal-inner .modal-content p").text(itemContent);
	$(".modal .modal-inner .modal-content img").attr("src", "");
	$(".modal .modal-inner .modal-content img").attr("src", itemImg);
	$(".modal").addClass("fade-in");
});
$(".modal .close").click(function(){
	$(".modal").removeClass("fade-in");
})