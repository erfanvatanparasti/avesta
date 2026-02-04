import { UAParser } from "ua-parser-js";

export type DeviceType = | "mobile"  | "tablet"  | "desktop"  | "tv" | "wearable" | "bot" | "unknown";

interface DeviceInfoServer {
  deviceType: DeviceType;
  os?: string;
  browser?: string;
  isTouchLikely: boolean;
}

const TV_REGEX =
  /(SmartTV|HbbTV|Tizen|Web0S|NetCast|Viera|AppleTV|CrKey|AFTM|AFTT|Roku|PlayStation|Xbox)/i;
const WEAR_REGEX = /(Watch|SM-R\d+|Wear\s?OS|Pixel\sWatch)/i;
const BOT_REGEX = /(bot|crawler|spider|crawling)/i;

export function parseUserAgent(ua?: string | null): DeviceInfoServer {
  if (!ua)
    return {
      deviceType: "unknown",
      os: undefined,
      browser: undefined,
      isTouchLikely: false,
    };
  const parser = new UAParser(ua);
  const device = parser.getDevice();
  const os = parser.getOS()?.name;
  const browser = parser.getBrowser()?.name;
  const uaLower = ua.toLowerCase();

  if (BOT_REGEX.test(uaLower)) {
    return { deviceType: "bot", os, browser, isTouchLikely: false };
  }

  if (TV_REGEX.test(ua))
    return { deviceType: "tv", os, browser, isTouchLikely: false };
  if (WEAR_REGEX.test(ua))
    return { deviceType: "wearable", os, browser, isTouchLikely: true };

  let type: DeviceType = "unknown";
  switch (device.type) {
    case "mobile":
      type = "mobile";
      break;
    case "tablet":
      type = "tablet";
      break;
    default:
      type = "desktop";
  }

  // Tweak heuristics
  if (type === "desktop" && /Mobile/i.test(ua) && !/iPad|Tablet/i.test(ua)) {
    type = "mobile";
  }

  const isTouchLikely = ["mobile", "tablet", "wearable"].includes(type);

  return { deviceType: type, os, browser, isTouchLikely };
}
