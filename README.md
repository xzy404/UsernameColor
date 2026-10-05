# hydro-lv

Hydro 插件:根据用户等级(LV)给**用户名上色**,并**隐藏 LV 标签**(不再显示 `badge--lvN` 徽标)。

## 颜色规则

| 等级 | 颜色 | 色值 |
|---|---|---|
| LV 0 | 灰色 | `#bfbfbf` |
| LV 1 | 蓝色 | `#3498db` |
| LV 2 ~ LV 4 | 绿色 | `#52c41a` |
| LV 5 ~ LV 7 | 橙色 | `#f39c11` |
| LV 8 ~ LV 10 | 红色 | `#fe4c61` |

等级(LV)沿用 Hydro 内置的洛谷风格等级系统(`model.builtin.LEVELS`,按 RP 排名百分位计算),本插件只负责显示层。

## 工作原理

覆盖官方模板 `templates/components/user.html`(官方模板机制:addon 的 `templates/` 同名文件覆盖 ui-default):

- 用户名 `<a>` 增加内联 `color`,按 `udoc.level` 取值,深浅色主题均可见;
- 删除 LV 徽标输出块(`badge--lvN` 不再渲染);
- **保留** SU / MOD 徽标和用户自定义徽标(`udoc.badge`);
- 未定义等级(LV0)和"未知用户"显示灰色。

覆盖全局生效:排行榜、讨论区、题解、比赛榜单、回复等所有通过 `user.render_inline` 渲染用户名的位置。

## 安装

```bash
# 服务器 root
mkdir -p /root/.hydro/addons
mv /home/ubuntu/hydro-lv /root/.hydro/addons/
hydrooj addon add /root/.hydro/addons/hydro-lv
pm2 restart hydrooj
```

## 卸载

```bash
hydrooj addon remove /root/.hydro/addons/hydro-lv
pm2 restart hydrooj
```

## 注意事项

- 依赖官方模板 `components/user.html` 的结构;升级 Hydro 大版本后若该模板结构变化,需重新基于新版模板生成覆盖文件(本插件文件即新版母版 + 三处修改)。
- 若想调整颜色,直接改 `templates/components/user.html` 中的 `lvColor` 表达式。
