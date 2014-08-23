/* Custom JQuery Code to included to change website design on a shopping cart platform (http://www.suredone.com/). I was only able to edit the header file and overwrite existing styles  */  



$(document).ready(function(){

	/* ======= Variables set to make functions easier to edit ====*/
	
	var sliderImages = '<li><img src="http://jabber.ifidgetproductions.com/images/slider-image1.jpg" alt="jabberwocky sales"></li><li><img src="http://jabber.ifidgetproductions.com/images/slider-image4.jpg" alt="jabberwocky sales"></li><li><img src="http://jabber.ifidgetproductions.com/images/slider-image5.jpg" alt="jabberwocky sales"></li><li><img src="http://jabber.ifidgetproductions.com/images/slider-image1.jpg" alt="jabberwocky sales"></li><li><img src="http://jabber.ifidgetproductions.com/images/slider-image4.jpg" alt="jabberwocky sales"></li><li><img src="http://jabber.ifidgetproductions.com/images/slider-image5.jpg" alt="jabberwocky sales"></li>';
	
	var searchText = 'Because No Great Library Is Ever Complete';
	
	var contactContent = '<h2>Questions? Contact Us</h2><p>1234 Main St</br>Thornton CO, 80241</br><a href="mailto:derek@jabberwockysales.com">sampleemail@sample.com</a><br/>720.320.1957</p>';
	var socialContent = '<h2>Follow Us Online</h2><a href="https://twitter.com/@JabberwockySale" target="_blank"><img src="http://jabber.ifidgetproductions.com/images/twitter.png" alt="twitter"></a><a href="https://www.facebook.com/JabberwockySales" target="_blank"><img src="http://jabber.ifidgetproductions.com/images/facebook.png" alt="facebook"></a>';
	
	var newsLetterContent = '<h2 class="orange">Join Our Newsletter</h2><p>Sign Up and never miss another deal!<br/><br/><form action="http://www.jabberwockysales.com/" method="post" id="sd-emailListForm" onsubmit="return sdJoinEmailList(this.form)"><input type="text" size="25" name="add_email" id="sd-emailListInput" value="Get Email Updates" onfocus="sdClearValue(this.id)"><input type="submit" src="http://assets.suredone.com/base/icon/go.gif" id="sd-emailListSubmit" alt="Get Email Updates" value="Go"></form></p>';
	var footerText = '<p>Jabberwocky Sales, Inc.  All Rights Reserved<br/>All Prices show are USD.</p>';
	
	
	/*remove class for css menu fallback */
	
	$('#sd-sidebar-nav ul').removeClass('nav-menu').addClass('new-menu');
	$('#mast-bar').append('<a href="http://www.jabberwockysales.com" id="logo">Home</a>');
	
	
	/*menu slide out function used by hoverIntent */
	
	/* ---- insert slider, and change some navigation only if home page ---------*/	
	
	function navigation(){$('#sd-sidebar-nav ul').stop().toggle('slow');};
	
		if($("#sd-site-home").length){
		$('#sd-sidebar-nav').addClass('moveUp');
		$('#mast-nav').addClass('home');
		$('#mast-nav input').attr("placeholder", "       What are you looking for today?")
		$('#mast-nav').before('<div id="mast-nav-title">' +searchText + '</div>');
		$('#sd-site-home').before('<div class="slider"><div class="wrapper" id="slider"><ul>' + sliderImages + '</ul></div></div><div class="three-boxes"><img src="http://jabber.ifidgetproductions.com/images/three-boxes4.jpg"><a href="http://www.jabberwockysales.com/search#q=retro"><img src="http://jabber.ifidgetproductions.com/images/three-boxes5.jpg" alt="shop now"></a><img src="http://jabber.ifidgetproductions.com/images/three-boxes3.jpg">');
	      $('#sd-footer').append('<div class="image-credits"><p>Terms of Use: Some Images are licensed under a <a href="https://creativecommons.org/licenses/by/2.0/" target="blank">Creative Commons Attribution 2.0 License.</a> It is attributed to Grahm Richardson, Joe Haupt and Nan Palmero <a href="http://www.flickr.com" target="blank">Flickr Members.</a> </p></div>');
	}
	
	/* set image slider on page */
	
	$("#slider").easySlider({auto:true,continuous: true,pause:3000, speed:3000});
	$('#sd-sidebar-nav').hoverIntent({over:navigation, out:navigation, timeout:800});
	$('#sd-footer').before('<div class="social-contact-links"><div class="social-contact-box">'+contactContent+'</div><div class="social-contact-box">' +socialContent + '</div><div class="social-contact-box">' +newsLetterContent +'</div></div>');
	$('#sd-footer').wrap('<div class="full-width-footer"></div>');
	$('#sd-details > span, #sd-cart-status').wrapAll('<div class="price-container"></div>');
	$('#foot-nav').append(footerText);
	$('#sd-cart-image').attr("src", "http://jabber.ifidgetproductions.com/images/add_to_cart.png");
	$('#sd-longdescription div').css('text-align', 'left');
	
	/* reordering menu content to group how the client requested */
	
    $('.new-menu a[href*=book]').unwrap().wrapAll('<li><ul class="books" style="display:none"></ul></li>').wrap('<li></li>');
	$('.new-menu a[href*=other]').unwrap().wrapAll('<li><ul class="other" style="display:none"></ul></li>').wrap('<li></li>');
	$('.new-menu a[href*=toys], .new-menu a[href*=model]').unwrap().wrapAll('<li><ul class="toys" style="display:none"></ul></li>').wrap('<li></li>');
	$('.new-menu a[href*=china], .new-menu a[href*=kitchen], .new-menu a[href*=hardware], .new-menu a[href*=tools], .new-menu a[href*=sports], .new-menu a[href*=christmas], .new-menu a[href*=clothing]').unwrap().wrapAll('<li><ul class="household" style="display:none"></ul></li>').wrap('<li></li>');
	$('.new-menu a[href*=collectibles], .new-menu a[href*=vehicles], .new-menu a[href*=memorabilia]').unwrap().wrapAll('<li><ul class="collectibles" style="display:none"></ul></li>').wrap('<li></li>');
	$('.new-menu a[href*=advertisements], .new-menu a[href*=catalog], .new-menu a[href*=magazine], .new-menu a[href*=manual], .new-menu a[href*=maps], .new-menu a[href*=postcard], .new-menu a[href*=photo]').unwrap().wrapAll('<li><ul class="print-media" style="display:none"></ul></li>').wrap('<li></li>');
	$('.new-menu a[href*=cds], .new-menu a[href*=dvd], .new-menu a[href*=vhs], .new-menu a[href*=records], .new-menu a[href*=camera]').unwrap().wrapAll('<li><ul class="media" style="display:none"></ul></li>').wrap('<li></li>');
	
		
}); <!-- end document.ready -->
