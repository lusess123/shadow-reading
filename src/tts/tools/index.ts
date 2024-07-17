import "colors";

export function elog(...arg: any[]) {
  console.error("[报错]".bgRed, ...arg);
}
export function slog(...arg: any[]) {
  console.log("[成功]".bgGreen, ...arg);
}
export function wlog(...arg: any[]) {
  console.log("[警告]".bgYellow, ...arg);
}
