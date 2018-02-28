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
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let enemys = []
let aniId = 0
let frame = 0
let score = 0

let atlas = new Image()
atlas.src = 'images/Common.png'

let loop = function() {
//     // bg.update()
//     bg.render(ctx)
//     player.drawToCanvas(ctx)
//     if (frame % 20 == 0) {
//         player.shoot()
//     }
//     if (frame % 100 == 0) {
//         let enemy = new Enemy()
//         enemy.init(5)
//         enemys.push(enemy)
//     }
//     player.bullets.forEach((bullet) => {
//         bullet.update()
//         bullet.drawToCanvas(ctx)
//         enemys.forEach((enemy) => {
//             if (enemy.isCollideWith(bullet)) {
//                 enemy.playAnimation()
//                 score++
//             }
//         })
//     })
//     enemys.forEach((enemy) => {
//         if (enemy.isPlaying) {
//             enemy.aniRender(ctx)
//         }
//         enemy.update()
//         enemy.drawToCanvas(ctx)
//     })
// 	ctx.fillStyle = "#ffffff"
// 	ctx.font = "20px Arial"
// 	ctx.fillText(
// 		score, 10, 30
// 	)
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
