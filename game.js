import './js/libs/symbol'
import './js/libs/weapp-adapter.js'

import Sprite from './js/base/sprite.js'
import BackGround from './js/runtime/background.js'
import Player from './js/player/index.js'
import Enemy from './js/npc/enemy.js'
import Bullet from './js/player/bullet.js'

let ctx = canvas.getContext('2d')
let bg = new BackGround(ctx)
let player = new Player(ctx)
let enemy = new Enemy()
enemy.init(1)
let aniId = 0
let frame = 0

let loop = function() {
	// bg.update()
	bg.render(ctx)
	player.drawToCanvas(ctx)
	enemy.drawToCanvas(ctx)
	enemy.update()
	if (frame % 20 == 0) {
		player.shoot()
	}
	player.bullets.forEach((bullet) => {
		bullet.update()
		bullet.drawToCanvas(ctx)
	})
	if (enemy.y == window.innerHeight - enemy.height) {
		enemy.playAnimation()
	}
	if (enemy.isPlaying) {
		enemy.aniRender(ctx)
	}

    aniId = window.requestAnimationFrame(
        loop,
        canvas
    )
	frame ++
}

aniId = window.requestAnimationFrame(
    loop,
    canvas
)
