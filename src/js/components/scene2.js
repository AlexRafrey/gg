 
export  class Scene2{ 
	constructor() {
		this.start(); 
	}

	start() {
		setTimeout(() => {
		$('#light').css({'opacity': '0', 'background-color': 'transporent', 'box-shadow': 'inset 0px 0px 195px 10px' });
		}, 10);
		this.rain();
		this.music();
		this.firstItem();  
	}
	firstItem (){ 
		let that = this; 
			setTimeout(() => {
				$('.scene2').append('<div class="scroll"><div class="scrollact"></div></div><div class="protection"></div>'); 
				$('.scrollact').click(openLetter);
			}, 900);

			 function  openLetter() {    
				$('body').append('<audio autoplay="autoplay" ><source src="https://sound-pack.net/download/Sound_19337.mp3" type="audio/mpeg" /></audio> '); 
					$('.scrollact').css({"animation": "none", "z-index":"0" })
					$('.scoll_open').attr({"style": "transform: scale(1)"}) 
					that.secondItem();
					setTimeout(() => {
						$('.scoll_open').click(function () { 
							$('.scoll_open').css({"transform": "scale(0)"});
							$('.scrollact').css({ "z-index":"11" })	 
						}) 
					}, 1500); 
			}   
	}
	secondItem(){  
		if (!$('.protection').length == 0) {
			setTimeout(() => {
				$('.protection').append('<div class="protectionact"></div>'); 
				$('.protectionact').click(function () { 
					$('body').append('<audio autoplay="autoplay" ><source src="https://sound-pack.net/download/Sound_18684.mp3" type="audio/mpeg" /></audio> ');
					$('.protectionact').css({"animation": "none", "z-index":"0" })
					$('.box_open').attr({"style": "transform: scale(1)"}) 
					$('.dwinf').click(function(){ 
						$('#musicbg').remove();  
					})
				}); 
			}, 900); 
		}
		
	}

	music(){
		$('body').append('<audio autoplay="autoplay" id="musicbg"><source src="https://s47man.storage.yandex.net/get-mp3/4c8d9650cf0a38610222ca7e0f8a70f4/00057805fe84ef72/music/6/8/data-0.6:21868838369:4816770?track-id=31786440&play=false" type="audio/mpeg" /></audio> ');
	}

	rain() {  
		$('.rain').empty(); 
		var increment = 0;
		var drops = "";
		var backDrops = "";
	
		while (increment < 100) { 
		var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1)); 
		var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2)); 
		increment += randoFiver; 
		drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
		}
	
		$('.rain.front-row').append(drops);
		$('.rain.back-row').append(backDrops);  
	}
}