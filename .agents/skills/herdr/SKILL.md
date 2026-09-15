---
name: herdr
description: >-
  Control Herdr, a terminal multiplexer for coding agents. Use only when the
  user explicitly mentions Herdr or asks to inspect or control panes, tabs,
  workspaces, commands, or another agent. Do not use merely because a task
  could benefit from a background terminal. Requires HERDR_ENV=1.
---

# Herdr

Herdr organizes terminals into workspaces, tabs, and panes, recognizes coding agents in panes, and exposes the current session through the `herdr` CLI.

Requires `HERDR_ENV=1`. If unset or not `1`, say you are not inside Herdr and stop. Do not inspect or control the focused session from outside Herdr.

The `herdr` binary in `PATH` talks to the current session. Learn syntax from the installed CLI (`herdr --help`, then a group with no subcommand: `herdr pane`, `herdr agent`, …). Do not run bare `herdr` (it launches or attaches the TUI). Do not probe a mutating nested command by omitting arguments. Most control commands return JSON; take IDs from those responses.

Default to a sibling pane in the current tab and the current working directory. Prefer `--current`, an explicit pane ID, or a unique agent name; use `--no-focus` unless asked to switch. Do not close workspaces, tabs, panes, or sessions you did not create, and never `herdr server stop`, unless the user explicitly asks. Never kill the main Herdr process.
