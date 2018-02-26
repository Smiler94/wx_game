import Sprite from '../base/sprite.js'
import Bullet from '../player/bullet.js'

const IMG_SRC = 'images/hero.png'
const PLAYER_WIDTH = 80
const PLAYER_HEIGHT = 80

const BULLET_SPEED = 10

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class Player extends Sprite{
	constructor(ctx) {
		super(IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT) // 调用父类构造函数，设定图片和尺寸

		this.x = (screenWidth - this.width)/2 // 初始横坐标
		this.y = screenHeight - this.height - 30 // 初始纵坐标
 
		this.initEvent() // 初始化监听行为
		this.bullets = []
	}

	isTouchOnAir(x, y) { // 判断是否触碰到机体上,触碰点在机体所在的方形里
		return x <= this.x + this.width &&
				x >= this.x &&
				y <= this.y + this.height &&
				y >= this.y
	}

	setAirPosAcrossFingerPosZ(x, y) { // 将机体移动到手指所在的位置
		let disX = x - this.width/2;
		let disY = y - this.height/2;

		if (disX < 0) { // 是否超出屏幕范围
			disX = 0
		} else if (disX > (screenWidth - this.width)) {
			disX = screenWidth - this.width
		}

		if (disY < 0) { // 是否超出屏幕范围
			disY = 0
		} else if (disY > (screenHeight - this.height)) {
			disY = screenHeight - this.height
		}
		this.x = disX
		this.y = disY
	}

	initEvent() {
		canvas.addEventListener('touchstart', ((e) => { // 监听触碰开始
			e.preventDefault()
			
			let x = e.touches[0].clientX
			let y = e.touches[0].clientY

			if (this.isTouchOnAir(x, y)) {
				this.touched = true
				this.setAirPosAcrossFingerPosZ(x, y)
			}
		}).bind(this))

		canvas.addEventListener('touchmove', ((e) => { // 移动
			e.preventDefault()

			if (this.touched) { // 碰触时，改变机体位置
				let x = e.touches[0].clientX
				let y = e.touches[0].clientY

				this.setAirPosAcrossFingerPosZ(x, y)
			}

		}).bind(this))

		canvas.addEventListener('touchend', ((e) => { // 结束
			e.preventDefault()

			this.touched = false;
		}).bind(this))
	}

	shoot() {
		let bullet = new Bullet() // 生成新的子弹

		bullet.init(this.x + this.width/2, this.y, BULLET_SPEED)
		this.bullets.push(bullet)
	}
}