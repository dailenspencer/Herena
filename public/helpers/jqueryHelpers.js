export function fadeElements() {
	this.arguments.forEach(function(element){
		element.fadeOut();
	})
}

export function hideElement(element) {
	$(element).css('display','none')
}

export function showElement(element) {
	$(element).css('display','inline')
}

export function fadeOutElement(element, time) {
	$(element).animate({
        opacity: '0'
    }, time, function() {
    	$(element).css('display','none');
    });
}

export function fadeInElement(element, time) {
	$(element).css('display','inline');
	$(element).animate({
        opacity: '1'
    }, time);
}

export function removeScroll() {
	$('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
}

export function addScroll() {
	$('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
}

export function dimBackground() {
	$('#Blanket').css('display','inline')
}


export function undimBackground() {
	$('#Blanket').css('display','none')
}

export function isMobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	 return true;
	}
	return false;
}