const { Plugin } = require('obsidian');

module.exports = class ProgressBarDivPlugin extends Plugin {
    async onload() {
        // 属性进度条
        window.pb = (p, t) => {
            p = Number(p) || 0;
            t = Number(t) || 0;
            let percent = t > 0 ? Math.round(p / t * 100) : 0;
            if (percent > 100) percent = 100;
            let color = "#f44336";
            if (percent === 100) color = "#9c27b0";
            else if (percent > 75) color = "#4caf50";
            else if (percent > 50) color = "#ffeb3b";
            else if (percent > 25) color = "#ff9800";
            return `<div class="my-progressbar-outer"><div class="my-progressbar-inner" style="width:${percent}%;background:${color};"></div><span class="my-progressbar-label">${percent}%</span></div>`;
        };
        // 任务进度条
        window.tb = (d, a) => {
            d = Number(d) || 0;
            a = Number(a) || 0;
            let percent = a > 0 ? Math.round(d / a * 100) : 0;
            if (percent > 100) percent = 100;
            let color = "#f44336";
            if (percent === 100) color = "#9c27b0";
            else if (percent > 75) color = "#4caf50";
            else if (percent > 50) color = "#ffeb3b";
            else if (percent > 25) color = "#ff9800";
            return `<div class="my-progressbar-outer"><div class="my-progressbar-inner" style="width:${percent}%;background:${color};"></div><span class="my-progressbar-label my-progressbar-label-left">${d}/${a}</span><span class="my-progressbar-label my-progressbar-label-right">${percent}%</span></div>`;
        };
    }
};