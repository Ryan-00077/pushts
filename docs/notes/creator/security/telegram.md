---
title: Telegram 客户端安全与防偷跑规范手册
description: 自媒体运营必备：Telegram 媒体文件自动下载关闭、缓存清理、两步验证与防封号安全清单。
createTime: 2026/11/09 13:30:00
author: 推手 · PushLab
permalink: /notes/creator/rtte60cd/
---

# Telegram 客户端安全与防偷跑规范手册

## 流量防偷跑设置步骤

1. 打开 Telegram 客户端设置 -> `Data and Storage`（数据与存储）。
2. 在 `Disk and network usage`（存储使用）中，设置 `Keep Media`（保留媒体）为 **3 天** 或 **1 周**，防止缓存无限膨胀塞满磁盘。
3. 关闭所有环境下的自动媒体下载：
   - 写真、动图（GIF）、大视频与文档均设置为“手动点击才下载”。

## 账号安全防御清单

- **两步验证**：开启独立密码，并绑定可靠的常用个人邮箱。
- **活跃会话检查**：定期在 `Settings -> Devices` 中核对当前已登录设备，发现未知设备立即点击“Terminate All Other Sessions”（终止其他所有会话）。
- **隐私保护**：在 `Privacy and Security` 中，将“Phone Number”（手机号）设置为“Nobody”（无人可见），将“P2P 语音通话”设置为“My Contacts”或“Nobody”，避免通过 P2P 呼叫泄露真实本地 IP。
