// 容器监听的回调
const cb = function (mutationList, observer) {
  console.log(1111, mutationList, observer);
  // for (const mutation of mutationList) {
  //   if (mutation.type === "childList") {
  //     const { removedNodes = [] } = mutation;
  //     // 如果监听到水印容器变化，那么就清空页面并重载
  //     const node = Array.prototype.find.apply(removedNodes, [
  //       (node) => node.id === "page-watermark",
  //     ]);
  //     if (node) {
  //       targetNode.innerHTML = "";
  window.location.reload();
  //     }
  //   }
  // }
};

const canvansWatermark = function (target, txt) {
  if (!target) return false;
  // 目标DOM结点
  const dom =
    document.querySelector(`${target}`) ||
    document.querySelector(`.${target}`) ||
    document.querySelector(`#${target}`);
  if (dom) {
    dom.style.position = "absolute";
    dom.style.left = "0px";
    dom.style.right = "0px";
    dom.style.top = "0px";
    dom.style.bottom = "0px";
  }

  let length = txt.length * 20; // 根据内容生成画布大小，20代表比例
  let canvas = document.createElement("canvas");
  canvas.width = canvas.height = length;
  canvas.style.display = "none";
  document.body.appendChild(canvas);
  let context = canvas.getContext("2d");
  context.font =
    '12px "PingFangSC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
  context.fillStyle = "rgba(0,0,0,0.1)";
  context.rotate((-15 * Math.PI) / 180); // 画布里面文字的旋转角度
  context.fillText(txt, length / 2, length); // 文字的位置
  dom.style.backgroundImage = `url(${canvas.toDataURL("image/png")})`;

  // 创建监听
  const observer = new MutationObserver(cb);
  observer.observe(dom, {
    attributes: true,
    childList: true,
  });
};

export default canvansWatermark;
