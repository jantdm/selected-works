

$(document).ready(function()
{
	init();
});


function init()
{
	$('.pack').click(toggle);
	$('.more').click(toggle);
}

function toggle()
{
	var pack = $(this);
	var art = pack.parent();
	var more = art.find('.more');
	var div = art.find('#description');
	
		
	if (div.is(':hidden')) 
	{
		div.slideDown('slow');
		more.text('hide details');
	}
	else
	{
		div.slideUp('slow');
		more.text('show details');
	}
}