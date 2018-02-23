import './js/libs/symbol'
import './js/libs/weapp-adapter.js'

import Sprite from './js/base/sprite.js'
import BackGround from './js/runtime/background.js'

let ctx = canvas.getContext('2d')
let bg = new BackGround(ctx)
let aniId = 0

let loop = function() {
	// bg.update()
	bg.render(ctx)

    aniId = window.requestAnimationFrame(
        loop,
        canvas
    )
}

aniId = window.requestAnimationFrame(
    loop,
    canvas
)
