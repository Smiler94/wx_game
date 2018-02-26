import Sprite from './sprite.js'

const __ = {
	timer:Symbol('timer'),
}

export default class Animation extends Sprite {
	constructor(imgSrc, width, height) {
		super(imgSrc, width, height)

		this.isPlaying = false

		this.loop = false

		this.interval = 1000/60 // 1秒60次

		this[__.timer] = null // 定时器

		this.index = -1 // 当前播放的帧

		this.count = 0 // 总帧数

		this.imgList = []
	}

	initFrames(imgList) { // 初始化帧
		imgList.forEach((imgSrc) => {
			let img = new Image()
			img.src = imgSrc
			this.imgList.push(img)
		})

		this.count = imgList.length
	}

	aniRender(ctx) { // 渲染动画
		ctx.drawImage(
			this.imgList[this.index],
			this.x,
			this.y,
			this.width * 1.2,
			this.height * 1.2
		)
	}

	playAnimation(index = 0, loop = false) { // 播放动画
		this.visible = false // 隐藏精灵，只展示动画帧

		this.isPlaying = true
		this.loop = loop // 是否循环
		
		this.index = index

		if (this.interval > 0 && this.count) {
			this[__.timer] = setInterval(
				this.frameLoop.bind(this),
				this.interval
			)
		}
	}

	stop() { // 动画停止
		this.isPlaying = false

		if (this[__.timer]) { // 清除对应的定时器
			clearInterval(this[__.timer])
		}
	}

	frameLoop() {
		this.index ++

		if (this.index > this.count - 1) {
			if (this.loop) {
				this.index = 0
			} else {
				this.index --
				this.stop()
			}
		}
	}
}