import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import axios from "axios";
import { toVoice } from "../../../tts";

import * as crypto from "crypto";

function hashString(str: string): string {
  return crypto.createHash("sha256").update(str).digest("hex");
}

// const originalString = "This is a very long string that needs to be shortened.";
// const hashedString = hashString(originalString);
// console.log(hashedString); // Output: a unique hash of the string



export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const s = url.searchParams.get("s");
  const v = url.searchParams.get("v");
  if (!s) {
    return NextResponse.json({ error: "缺少音频文件参数" });
  }
  if (!v) {
    return NextResponse.json({ error: "缺少音频文件参数角色" });
  }
  const cacheDir = path.resolve(process.cwd(), "audio_cache", v);

// 确保缓存目录存在
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir);
}

  // const audioUrl = `https://dict.youdao.com/dictvoice?audio=${s}&type=1`;
  const shash = hashString(s);

  const fileName = `${encodeURIComponent(shash)}.mp3`;
  const localPath = path.join(cacheDir, fileName);

  // 检查文件是否已缓存
  if (fs.existsSync(localPath)) {
    console.log(`从缓存中读取音频文件: ${localPath}`);
    return sendFile(localPath);
  }

  try {
    await toVoice(s, localPath, {
      voice: v || 'en-US-AndrewNeural', // use voices() get voice package
      rate: 0, // +30% speak rate
      volume: 10, // +10% sound
      pitch: 10, // +10Hz pitch
    });

    // // 请求音频文件
    // const response = await axios({
    //   method: "get",
    //   url: audioUrl,
    //   responseType: "stream",
    // });

    // // 创建写入流
    // const writer = fs.createWriteStream(localPath);
    // response.data.pipe(writer);

    // await new Promise((resolve, reject) => {
    //   writer.on("finish", resolve);
    //   writer.on("error", reject);
    // });

    console.log(`音频文件已缓存到: ${localPath}`);
    return sendFile(localPath);
  } catch (error) {
    console.error("请求音频文件时出错:", error);
    return NextResponse.json({ error: "请求音频文件失败" }, { status: 500 });
  }
}

async function sendFile(filePath: string) {
  const fileBuffer = await fs.promises.readFile(filePath);
  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Content-Length": fileBuffer.length.toString(),
      "Accept-Ranges": "bytes",
      "Access-Control-Allow-Origin": "*", // 如果需要跨域
    },
  });
}
