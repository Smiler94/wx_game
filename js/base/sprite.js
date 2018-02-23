/**
 * 游戏基础的精灵类
 */
export default class Sprite {
	constructor(imgSrc = '', width = 0, height = 0, x = 0, y = 0) {
		this.img = new Image() // 图形
		this.img.src = imgSrc
		this.width = width // 宽
		this.height = height // 高
		this.x = x // 横坐标
		this.y = y // 纵坐标

		this.visible = true // 是否可见
	}

	drawToCanvas(ctx) { // 将精灵图绘制在画布上
	    if (!this.visible) {
	        return
        }

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    isCollideWith(sp) { // 检测与另外一个精灵是否碰撞
	    if (!this.visible || !sp.visible) {
	        return false; // 有一个不可见，返回 false
        }

        let spX = sp.x + sp.width/2;
        let spY = sp.y + sp.height/2;

        return (spX <= this.x + this.width &&
                spX >= this.x &&
                spY <= this.y + this.height &&
                spY >= this.y)
    }
}