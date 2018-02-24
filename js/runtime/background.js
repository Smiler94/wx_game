import Sprite from '../base/sprite.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC = 'images/bg.jpg'
const BG_WIDTH = 512
const BG_HEIGHT = 512

export default class BackGround extends Sprite {
	constructor(ctx) {
		super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT) // 调用父类构造函数

		this.render(ctx) // 渲染背景
		this.top = 0
	}

	render(ctx) { // 渲染
		// 上半部分背景
		ctx.drawImage(this.img, 0, 0, screenWidth, screenWidth, 0, -screenHeight + this.top, screenWidth, screenHeight) 
		// 下半部分背景
		ctx.drawImage(this.img, 0, 0, screenWidth, screenWidth, 0, this.top, screenWidth, screenHeight)
	}

	update() { // 更新
		this.top += 2

		if (this.top >= screenHeight) {
			this.top = 0
		}
	}
}