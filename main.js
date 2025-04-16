const { Plugin } = require('obsidian');

module.exports = class ProgressBarInlinePlugin extends Plugin {
    async onload() {
        // 属性进度条
        window.pb = (p, t) => {
            p = Number(p) || 0;
            t = Number(t) || 0;
            let percent = t > 0 ? Math.round(p / t * 100) : 0;
            if (percent > 100) percent = 100;
            let c = "progress-red";
            if (percent === 100) c = "progress-purple";
            else if (percent > 75) c = "progress-green";
            else if (percent > 50) c = "progress-yellow";
            else if (percent > 25) c = "progress-orange";
            return `<span class="progressbar-inline-wrap" style="display:inline-block;position:relative;width:120px;height:16px;vertical-align:middle;"><progress class="progressbar-inline ${c}" value="${percent}" max="100"></progress><span class="progressbar-inline-center">${percent}%</span></span>`;
        };
        // 任务进度条
        window.tb = (d, a) => {
            d = Number(d) || 0;
            a = Number(a) || 0;
            let percent = a > 0 ? Math.round(d / a * 100) : 0;
            if (percent > 100) percent = 100;
            let c = "progress-red";
            if (percent === 100) c = "progress-purple";
            else if (percent > 75) c = "progress-green";
            else if (percent > 50) c = "progress-yellow";
            else if (percent > 25) c = "progress-orange";
            return `<span class="progressbar-inline-wrap" style="display:inline-block;position:relative;width:120px;height:16px;vertical-align:middle;"><progress class="progressbar-inline ${c}" value="${percent}" max="100"></progress><span class="progressbar-inline-count">${d}/${a}</span><span class="progressbar-inline-right">${percent}%</span></span>`;
        };
    }
};