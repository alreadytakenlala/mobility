/**
 * 格式化图标
 * 从 class 转为 html
 */
export function getIcon(iconClass) {
    return "<svg class='icon' aria-hidden='true'><use xlink:href='#" + iconClass + "'></use></svg>";
}