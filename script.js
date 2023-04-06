// 定义雪花数量
var NUMBER_OF_FLAKES = 50;

// 获取容器元素
var container = document.querySelector('.snowflakes');

// 创建雪花元素
for (var i = 0; i < NUMBER_OF_FLAKES; i++) {
    var flake = document.createElement('div');
    flake.classList.add('snowflake');
    container.appendChild(flake);

    // 随机设置雪花的位置和速度
    flake.style.left = Math.random() * 100 + '%';
    flake.style.animationDuration = Math.random() * 3 + 2 + 's';
}

