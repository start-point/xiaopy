import {localCache} from './loaclStorage'

/**
 * 区分时间
 */
export function distinguishTime() {
    let date = new Date();
    if (date.getHours() >= 6 && date.getHours() < 12) {
        return 1; // 早
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
        return 2; // 下
    } else {
        return 3; // 晚
    }
}

/**
 * 随机生成16进制颜色
 * @returns
 */
export function randomColor() {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    while (color.length < 6) {
        color = '0' + color;
    }
    return '#' + color;
}


/**
 * 监听浏览器窗口切换
 */
export function visibilitychangeHandler() {
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') { // 状态判断：显示（切换到当前页面）
            document.title = '欢迎回来🎉'
        } else if (document.visibilityState === 'hidden') { // 状态判断：隐藏（离开当前页面）
            document.title = '需要重新激活哟😘'
        }
    })
}

/**
 * 切换页面主题
 */
export function changeTheme() {
    const root: HTMLElement | null = document.getElementById('root');
    if (!root) return;
    const body: HTMLElement = document.body
    switch (body.className) {
        case "dark":
            body.className = root.className = 'light'
            localCache.setItem('theme', JSON.stringify('light'));
            break;
        case "light":
            body.className = root.className = 'dark';
            localCache.setItem('theme', JSON.stringify('dark'));
            break
        default:
            body.className = root.className = 'dark';
            localCache.setItem('theme', JSON.stringify('dark'));
            break;
    }
}


/**
 * 初始化主题
 */
export function themeInitialize() {
    const root: HTMLElement | null = document.getElementById('root');
    if (!root) return;
    const body: HTMLElement = document.body
    const theme = localCache.getItem('theme');
    console.log(theme, 'theme')
    if (theme) {
        body.className = root.className = theme;
    } else {
        body.className = root.className = 'light';
    }

}


/**
 * 判断是否是开发环境
 */
export function isProduction(): boolean {
    return process.env.NODE_ENV === "production";
}