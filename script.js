// 显示输入框
function showInput() {
    var input = document.getElementById("input");
    input.style.display = "block";
    input.focus();
}

// 监听回车事件，并获取用户输入
var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        var message = input.value;
        alert("您的回复是：" + message);
    }
});
