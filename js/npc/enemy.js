import Animation from '../base/animation.js'

const ENEMY_IMG_SRC = 'images/enemy.png'
const ENEMY_WIDTH = 60
const ENEMY_HEIGHT = 60

const __ = {
	speed:Symbol('speed')
}

function rnd(start, end) { // 随机生成敌机的横坐标
	return Math.floor(Math.random() * (end - start) + start)
}

export default class Enemy extends Animation{
	constructor(){
		super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT)

		this.initExplosionAnimation() // 初始化爆炸动画
	}

	init(speed) {
		this.x = rnd(0, window.innerWidth - ENEMY_WIDTH) // 随机横坐标
		this.y = - this.height // 初始在屏幕外

		this[__.speed] = speed // 敌机速度
		this.visible = true // 可见
	}

	initExplosionAnimation() { // 爆炸动画
		let frames = []

		const EXPLO_IMG_PREFX = 'images/explosion' // 爆炸图片前缀
		const EXPLO_FRAME_COUNT = 19

		for(let i  = 0; i < EXPLO_FRAME_COUNT; i++) { // 爆炸图片的帧动画
			frames.push(EXPLO_IMG_PREFX + (i+1) + '.png')
		}

		this.initFrames(frames) // 初始化帧
	}

	update() {
		this.y += this[__.speed]
	}
}