const { Plugin } = require('obsidian');

module.exports = class ProgressBarInlinePlugin extends Plugin {
    async onload() {
        // 当前笔记属性进度条
        window.pb = (p, t) => {
            p = Number(p) || 0;
            t = Number(t) || 0;
            let percent = t > 0 ? Math.round(p / t * 100) : 0;
            if (percent > 100) percent = 100;
            let c = "progress-red";
            if (percent > 75) c = "progress-green";
            else if (percent > 50) c = "progress-yellow";
            else if (percent > 25) c = "progress-orange";
            return `<progress class="progressbar-inline ${c}" value="${percent}" max="100"></progress> ${p}/${t} (${percent}%)`;
        };
        // 当前笔记任务进度条
        window.tb = (d, a) => {
            d = Number(d) || 0;
            a = Number(a) || 0;
            let percent = a > 0 ? Math.round(d / a * 100) : 0;
            if (percent > 100) percent = 100;
            let c = "progress-red";
            if (percent > 75) c = "progress-green";
            else if (percent > 50) c = "progress-yellow";
            else if (percent > 25) c = "progress-orange";
            return `<progress class="progressbar-inline ${c}" value="${percent}" max="100"></progress> ${d}/${a} (${percent}%)`;
        };
    }
};