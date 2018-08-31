'use strict';
jQuery(document).ready(function($) {
	var SINGLETON = function() {
		// Private Properties

		// Public Properties

		// Private Method
		function listenClickAccordion() {
			$('.panel-heading').on('click', function() {
				var $parent = $(this).parent().parent().parent();
				$parent.siblings().find('.panel-body').slideUp(200);
				$('.content').slideUp();
				$('.panel-body', $parent).slideToggle(200);
				console.log($('.panel-body', $parent));
			});
		}

		function listenClickQuestion() {
			$('.title').on('click', function(e) {
				e.stopPropagation();

				var $content = $(this).parent().find('.content');
				// console.log($content);
				var flag = false;
				if($content.css('display') == 'block') flag = true;

				$('.content').slideUp();

				if(!flag) $content.slideToggle();
			});
		}

		// Public Method
		return function() {
			listenClickAccordion();
			listenClickQuestion();
		}
	}

	SINGLETON()();
});