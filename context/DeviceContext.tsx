'use client';
import React, { createContext, useContext, useMemo } from 'react';
import type { DeviceType } from './parseUserAgent';
import { useViewport } from './useViewport';

export interface ServerInfo {
  deviceType: DeviceType;
  os?: string;
  browser?: string;
  isTouchLikely: boolean;
}

interface DeviceValue extends ServerInfo {
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isTV: boolean;
  isWearable: boolean;
}

const DeviceContext = createContext<DeviceValue | null>(null);

export function useDevice() {
  const ctx = useContext(DeviceContext);
  if (!ctx) throw new Error('useDevice must be inside DeviceProvider');
  return ctx;
}

export default function DeviceProvider({
  children,
  serverInfo
}: {
  children: React.ReactNode;
  serverInfo: ServerInfo;
}) {
  const { width, height, orientation } = useViewport(120);

  const value = useMemo<DeviceValue>(() => {
    const type = serverInfo.deviceType;
    return {
      ...serverInfo,
      width,
      height,
      orientation,
      isMobile: type === 'mobile',
      isTablet: type === 'tablet',
      isDesktop: type === 'desktop',
      isTV: type === 'tv',
      isWearable: type === 'wearable',
    };
  }, [serverInfo, width, height, orientation]);

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}