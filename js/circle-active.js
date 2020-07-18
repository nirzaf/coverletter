;(function($) {
    "use strict";
  

    
    function initSkillBars() {
		var el = $('.circle_progress');

		if (el.length) {
			el.each(function() {
				var $this = $(this),
					inner = $this.find('.circle_progress_inner'),
					percentage = $this.attr('data-percentage') + '%';
				if ($this.hasClass('circular')) {
                    var dataparcent = $this.attr('data-percentage');
					var progress = inner.circleProgress({
						value: 0,
						size:175,
						thickness: $this.data('thickness'),
						startAngle: Math.PI * -0.501411705537642,
						emptyFill: $this.data('empty-fill'),
						animation: {duration: 1100},
						reverse: ($this.data('inverse') == false) ? false : false,
						fill: {
							gradient: [$this.data('start-color'), $this.data('end-color')],
							gradientAngle: Math.PI * 3.501411705537642
						}
					}).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(dataparcent * progress) + '<i>%</i>');
              });
					progress.on('circle-animation-progress', function(e, p, v) {
						var progressBarInner = $(this),
							instance = progressBarInner.data('circle-progress'),
							size = instance.size,
							thickness = instance.getThickness(),
							radius = size / 2 - thickness / 2,
							angle = 2 * v * Math.PI + instance.startAngle,
							x = radius * Math.cos(angle),
							y = radius * Math.sin(angle);
							
						progressBarInner.parent().siblings().find('.percentage').text(parseInt(p * parseInt(percentage), 10), 10);
						progressBarInner.parents('.style-polygon').find('.percentage').css({
							left: x + size / 2 - 10,
							top: y + size / 2 - 11 
						})
					});
				};
				$this.one('inview', function(event, visible) {
					if (visible) {
						if ($this.not('.circular').find('.percentage').length) {
							$this.find('.percentage').countTo({
								from: 0,
								to: parseInt(percentage, 0),
								speed: 900,
								refreshInterval: 5
							}).end().addClass('animated');
						};
						if ($this.hasClass('horizontal')) {
							inner.width(percentage);
						} else if ($this.hasClass('vertical')) {
							inner.height(percentage);
						};
						if ($this.hasClass('circular')) {
							inner.circleProgress({value: parseInt(percentage, 10) / 100});
						};
					};
				});
			});
		};
	};
    
    initSkillBars();
    
    
})(jQuery)