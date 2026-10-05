import type { Context } from 'hydrooj';

export async function apply(ctx: Context) {
    // 本插件通过覆盖 templates/components/user.html 实现:
    // 1. 按用户等级(LV)给用户名上色(内联 color,不受主题影响)
    // 2. 隐藏 LV 标签(不再渲染 badge--lvN),保留 SU / MOD 徽标
    // 无需额外运行时逻辑。
}
