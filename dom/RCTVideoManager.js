// @flow

import { RCTViewManager } from "react-native-dom";

import RCTVideoView from "./RCTVideoView";
import resizeModes from "./resizeModes";

import type { VideoSource } from "./types";

class RCTVideoManager extends RCTViewManager {
  static moduleName = "RCTVideoManager";

  view() {
    return new RCTVideoView(this.bridge);
  }

  describeProps() {
    return super
      .describeProps()
      .addBooleanProp("controls", this.setControls)
      .addStringProp("id", this.setId)
      .addBooleanProp("muted", this.setMuted)
      .addBooleanProp("paused", this.setPaused)
      .addNumberProp("progressUpdateInterval", this.setProgressUpdateInterval)
      .addBooleanProp("rate", this.setRate)
      .addBooleanProp("repeat", this.setRepeat)
      .addNumberProp("resizeMode", this.setResizeMode)
      .addNumberProp("seek", this.setSeek)
      .addObjectProp("src", this.setSource)
      .addNumberProp("volume", this.setVolume)
      .addDirectEvent("onVideoEnd")
      .addDirectEvent("onVideoError")
      .addDirectEvent("onVideoLoad")
      .addDirectEvent("onVideoLoadStart")
      .addDirectEvent("onVideoProgress");
  }

  dismissFullscreenPlayer() {
    // not currently working
  }

  presentFullscreenPlayer() {
    // not currently working
  }

  setControls(view: RCTVideoView, value: boolean) {
    view.controls = value;
  }

  setId(view: RCTVideoView, value: string) {
    view.id = value;
  }

  setMuted(view: RCTVideoView, value: boolean) {
    view.muted = value;
  }

  setPaused(view: RCTVideoView, value: boolean) {
    view.paused = value;
  }

  setRate(view: RCTVideoView, value: number) {
    view.rate = value;
  }

  setRepeat(view: RCTVideoView, value: boolean) {
    view.repeat = value;
  }

  setResizeMode(view: RCTVideoView, value: number) {
    view.resizeMode = value;
  }

  setSeek(view: RCTVideoView, value: number) {
    view.seek = value;
  }

  setSource(view: RCTVideoView, value: VideoSource) {
    view.source = value;
  }

  constantsToExport() {
    return { ...resizeModes };
  }
}

export default RCTVideoManager;
