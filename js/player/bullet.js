import Sprite from '../base/sprite.js'

const BULLET_IMG_SRC = 'images/bullet.png'
const BULLET_WIDTH = 16
const BULLET_HEIGHT = 30

const __ = {
	speed:Symbol('speed')
}

export default class Bullet extends Sprite {
	constructor() {
		super(BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT)
	}

	init(x, y, speed) { // 初始化子弹的坐标与速度
		this.x = x
		this.y = y

		this[__.speed] = speed
		this.visble = true
	}

	update() { // 更新子弹
		this.y -= this[__.speed]
	}
}