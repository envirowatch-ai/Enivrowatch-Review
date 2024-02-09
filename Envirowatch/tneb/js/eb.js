$(function(){
	$('.demo5').easyTicker({
		direction: 'up',
		visible: 2,
		interval: 2500,
		controls: {
			up: '.btnUp',
			down: '.btnDown',
			toggle: '.btnToggle'
		}
	});
    $('.demo6').easyTicker({
		direction: 'up',
		visible: 1,
		interval: 3500,
		controls: {
			up: '.btnUp',
			down: '.btnDown',
			toggle: '.btnToggle'
		}
	});
});
    //  date and 
    var d = new Date();
	document.getElementById("dat").innerHTML = d.toDateString();