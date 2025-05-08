(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$banner = $('#banner');

	breakpoints({
		xlarge:    ['1281px',   '1680px'],
		large:     ['981px',    '1280px'],
		medium:    ['737px',    '980px'],
		small:     ['481px',    '736px'],
		xsmall:    ['361px',    '480px'],
		xxsmall:   [null,       '360px']
	});

	$.fn._parallax = (browser.name == 'ie' || browser.name == 'edge' || browser.mobile) ? function() { return $(this) } : function(intensity) {
		var $window = $(window), $this = $(this);
		if (this.length == 0 || intensity === 0) return $this;
		if (this.length > 1) { for (var i=0; i < this.length; i++) $(this[i])._parallax(intensity); return $this; }
		if (!intensity) intensity = 0.25;
		$this.each(function() {
			var $t = $(this), on, off;
			on = function() {
				$t.css('background-position', 'center 100%, center 100%, center 0px');
				$window.on('scroll._parallax', function() {
					var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
					$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');
				});
			};
			off = function() {
				$t.css('background-position', '');
				$window.off('scroll._parallax');
			};
			breakpoints.on('<=medium', off);
			breakpoints.on('>medium', on);
		});
		$window.off('load._parallax resize._parallax').on('load._parallax resize._parallax', function() {
			$window.trigger('scroll');
		});
		return $(this);
	};

	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	$window.on('unload pagehide', function() {
		window.setTimeout(function() {
			$('.is-transitioning').removeClass('is-transitioning');
		}, 250);
	});

	if (browser.name == 'ie' || browser.name == 'edge')
		$body.addClass('is-ie');

	$('.scrolly').scrolly({
		offset: function() { return $header.height() - 2; }
	});

	var $tiles = $('.tiles > article');
	$tiles.each(function() {
		var $this = $(this),
			$image = $this.find('.image'), $img = $image.find('img'),
			$link = $this.find('.link'), x;
		$this.css('background-image', 'url(' + $img.attr('src') + ')');
		if (x = $img.data('position')) $image.css('background-position', x);
		$image.hide();
		if ($link.length > 0) {
			$x = $link.clone().text('').addClass('primary').appendTo($this);
			$link = $link.add($x);
			$link.on('click', function(event) {
				event.stopPropagation(); event.preventDefault();
				var href = $link.attr('href');
				if ($link.attr('target') == '_blank') {
					window.open(href);
				} else {
					$this.addClass('is-transitioning');
					$wrapper.addClass('is-transitioning');
					window.setTimeout(function() { location.href = href; }, 500);
				}
			});
		}
	});

	if ($banner.length > 0 && $header.hasClass('alt')) {
		$window.on('resize', function() { $window.trigger('scroll'); });
		$window.on('load', function() {
			$banner.scrollex({
				bottom: $header.height() + 10,
				terminate: function() { $header.removeClass('alt'); },
				enter: function() { $header.addClass('alt'); },
				leave: function() { $header.removeClass('alt'); $header.addClass('reveal'); }
			});
			window.setTimeout(function() { $window.triggerHandler('scroll'); }, 100);
		});
	}

	$banner.each(function() {
		var $this = $(this), $image = $this.find('.image'), $img = $image.find('img');
		$this._parallax(0.275);
		if ($image.length > 0) {
			$this.css('background-image', 'url(' + $img.attr('src') + ')');
			$image.hide();
		}
	});

	var $menu = $('#menu'), $menuInner;
	$menu.wrapInner('<div class="inner"></div>');
	$menuInner = $menu.children('.inner');
	$menu._locked = false;
	$menu._lock = function() {
		if ($menu._locked) return false;
		$menu._locked = true;
		window.setTimeout(function() { $menu._locked = false; }, 350);
		return true;
	};
	$menu._show = function() { if ($menu._lock()) $body.addClass('is-menu-visible'); };
	$menu._hide = function() { if ($menu._lock()) $body.removeClass('is-menu-visible'); };
	$menu._toggle = function() { if ($menu._lock()) $body.toggleClass('is-menu-visible'); };

	$menuInner.on('click', function(event) { event.stopPropagation(); })
	.on('click', 'a', function(event) {
		event.preventDefault(); event.stopPropagation();
		var href = $(this).attr('href');
		$menu._hide();
		window.setTimeout(function() { window.location.href = href; }, 250);
	});

	$menu.appendTo($body)
	.on('click', function(event) {
		event.stopPropagation(); event.preventDefault();
		$body.removeClass('is-menu-visible');
	})
	.append('<a class="close" href="#menu">Close</a>');

	$body.on('click', 'a[href="#menu"]', function(event) {
		event.stopPropagation(); event.preventDefault();
		$menu._toggle();
	})
	.on('click', function(event) { $menu._hide(); })
	.on('keydown', function(event) { if (event.keyCode == 27) $menu._hide(); });

})(jQuery);

// ---- Typing headline ----
document.addEventListener('DOMContentLoaded', () => {
	const text   = "Hi, I’m K S Nitin";
	const el     = document.getElementById('typed-headline');
	const cursor = document.querySelector('.typed-cursor');
	let idx = 0;
	function type() {
		if (idx < text.length) {
			el.textContent += text[idx++];
			setTimeout(type, 100);
		}
	}
	type();
});

// ---- Cursor-follow glow ----
(function() {
	const banner = document.getElementById('banner');
	banner.addEventListener('mousemove', e => {
		banner.style.setProperty('--mouse-x',  e.clientX + 'px');
		banner.style.setProperty('--mouse-y',  e.clientY + 'px');
	});
})();

// ---- Parallax on scroll ----
(function() {
	const layers = document.querySelectorAll('.parallax-layer');
	window.addEventListener('scroll', () => {
		const y = window.scrollY;
		layers.forEach(layer => {
			const depth = parseFloat(layer.dataset.depth);
			layer.style.transform = `translate(-50%, ${y * depth}px)`;
		});
	});
})();

// Project card tilt
VanillaTilt.init(document.querySelectorAll("#two .tiles article"), {
	max: 10,
	speed: 400,
	glare: true,
	"max-glare": 0.2
});

// — Header shrink on scroll —
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
	if (window.scrollY > 80) header.classList.add('shrink');
	else header.classList.remove('shrink');
});

// — Active section nav highlighting —
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav .links a');
function highlightNav() {
	let scrollY = window.pageYOffset;
	sections.forEach(sec => {
		const top = sec.offsetTop - header.offsetHeight - 10;
		const bottom = top + sec.offsetHeight;
		const id = sec.getAttribute('id');
		if (scrollY >= top && scrollY < bottom) {
			navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
		}
	});
}
window.addEventListener('scroll', highlightNav);
// 🎧 Global Sound Controls
const dropSound    = document.getElementById('dropSound');
const successSound = document.getElementById('successSound');
const errorSound   = document.getElementById('errorSound');
const timeupSound  = document.getElementById('timeupSound');

/**
 * Play any audio element safely.
 * @param {HTMLAudioElement} audio 
 */
function playSound(audio) {
	if (audio && typeof audio.play === 'function') {
		audio.currentTime = 0;
		audio.play().catch(err => {
			console.warn("Audio playback failed:", err);
		});
	}
}
