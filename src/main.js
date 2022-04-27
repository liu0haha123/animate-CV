let html = document.querySelector("#html")
let style = document.querySelector("#style")
let str1 = `/* 你好这是一个会动的前端页面
 *展示一下过程
 *首先准备一个div
 */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来这个div会变成一个太极图
 *首先变成一个圆形
 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/* 阴阳形成
 * 一黑一白
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 神秘的两个圆出现了*/

#div1::before {
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

#div1::after {
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

`

let str2 = ""
let n = 0

console.log(style);
let step = () => {
    setTimeout(() => {
        // 用额外的字符串处理换行，如果是回车就替换
        if (str1[n] === "\n") {
            str2 += "<br>"
        }
        else if (str1[n] === " ") {
            str2 += "&nbsp;"
        }
        else {
            str2 = str2 + str1[n]
        }
        html.innerHTML = str2
        style.innerHTML = str1.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < str1.length - 1) {
            //n不是最后一个就继续
            n += 1;
            step();
        }
    }, 0)

};

step()

