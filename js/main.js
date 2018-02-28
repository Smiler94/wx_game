import './js/libs/weapp-adapter.js'

import Sprite from './js/base/sprite.js'
import BackGround from './js/runtime/background.js'
import Player from './js/player/index.js'
import Enemy from './js/npc/enemy.js'
import Bullet from './js/player/bullet.js'

let ctx = canvas.getContext('2d')
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let frame = 0

export default class Main {
	constructor() {
		this.aniId = 0
		this.restart()
	}

	restart() {
		this.bg = new BackGround(ctx)
		this.player = new Player(ctx)
		this.bindLoop = this.loop.bind(this)
		this.enemys = []

		this.aniId = window.requestAnimationFrame(
			this.bindLoop,
			canvas
		)
		
	}

	update() {
		
	}

	bgUpdate() {
		this.bg.update()
	}

	enemyUpdate() {
		if (frame % 100) {
			let enemy = new Enemy()
			enemy.init(5)
			this.enemys.push(enemy)
		}
		this.enemys.forEach((enemy) => {
			enemy.update()
			if (enemy.isPlaying) {
				enemy.aniRender(ctx)
			}
		})
	}

	playerUpdate() {
		if (frame % 20 == 0) {
			this.player.shoot()
		}
	}
	generateEnemy() {

	}

	loop() {
		frame++

		this.aniId = window.requestAnimationFrame(
			this.bindLoop,
			canvas
		)
	}
}