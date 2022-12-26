const enum ArrowKeys {
    UP,
    RIGHT,
    LEFT,
    DOWN
}

const leftKey = ArrowKeys.LEFT

function isLeft(key: ArrowKeys) {
    return key===ArrowKeys.LEFT
}

console.log(isLeft(leftKey))
export {}