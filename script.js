Modernizr.load([
	demo.url + '/js/vendor/three.min.js',
	{
		load: [
			demo.url + '/js/utils.js',
			demo.url + '/js/app.js',
			demo.url + '/js/world.js',
			demo.url + '/js/character.js'
		],
		complete: function () {
			basicScene = new BasicScene();
			function animate () {
				requestAnimationFrame(animate);
				basicScene.frame();
			}
			animate();
		}
	}
]);
