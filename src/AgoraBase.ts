import { MediaSourceType, RenderModeType } from './AgoraMediaBase';

/**
 * The channel profile.
 */
export enum ChannelProfileType {
  /**
   * 0: Communication. Use this profile when there are only two users in the channel.
   */
  ChannelProfileCommunication = 0,
  /**
   * 1: Live streaming. Live streaming. Use this profile when there are more than two users in the channel.
   */
  ChannelProfileLiveBroadcasting = 1,
  /**
   * 2: Gaming. This profile is deprecated.
   */
  ChannelProfileGame = 2,
  /**
   * Cloud gaming. The scenario is optimized for latency. Use this profile if the use case requires frequent interactions between users.
   */
  ChannelProfileCloudGaming = 3,
  /**
   * @ignore
   */
  ChannelProfileCommunication1v1 = 4,
}

/**
 * @ignore
 */
export enum WarnCodeType {
  /**
   * @ignore
   */
  WarnInvalidView = 8,
  /**
   * @ignore
   */
  WarnInitVideo = 16,
  /**
   * @ignore
   */
  WarnPending = 20,
  /**
   * @ignore
   */
  WarnNoAvailableChannel = 103,
  /**
   * @ignore
   */
  WarnLookupChannelTimeout = 104,
  /**
   * @ignore
   */
  WarnLookupChannelRejected = 105,
  /**
   * @ignore
   */
  WarnOpenChannelTimeout = 106,
  /**
   * @ignore
   */
  WarnOpenChannelRejected = 107,
  /**
   * @ignore
   */
  WarnSwitchLiveVideoTimeout = 111,
  /**
   * @ignore
   */
  WarnSetClientRoleTimeout = 118,
  /**
   * @ignore
   */
  WarnOpenChannelInvalidTicket = 121,
  /**
   * @ignore
   */
  WarnOpenChannelTryNextVos = 122,
  /**
   * @ignore
   */
  WarnChannelConnectionUnrecoverable = 131,
  /**
   * @ignore
   */
  WarnChannelConnectionIpChanged = 132,
  /**
   * @ignore
   */
  WarnChannelConnectionPortChanged = 133,
  /**
   * @ignore
   */
  WarnChannelSocketError = 134,
  /**
   * @ignore
   */
  WarnAudioMixingOpenError = 701,
  /**
   * @ignore
   */
  WarnAdmRuntimePlayoutWarning = 1014,
  /**
   * @ignore
   */
  WarnAdmRuntimeRecordingWarning = 1016,
  /**
   * @ignore
   */
  WarnAdmRecordAudioSilence = 1019,
  /**
   * @ignore
   */
  WarnAdmPlayoutMalfunction = 1020,
  /**
   * @ignore
   */
  WarnAdmRecordMalfunction = 1021,
  /**
   * @ignore
   */
  WarnAdmRecordAudioLowlevel = 1031,
  /**
   * @ignore
   */
  WarnAdmPlayoutAudioLowlevel = 1032,
  /**
   * @ignore
   */
  WarnAdmWindowsNoDataReadyEvent = 1040,
  /**
   * @ignore
   */
  WarnApmHowling = 1051,
  /**
   * @ignore
   */
  WarnAdmGlitchState = 1052,
  /**
   * @ignore
   */
  WarnAdmImproperSettings = 1053,
  /**
   * @ignore
   */
  WarnAdmWinCoreNoRecordingDevice = 1322,
  /**
   * @ignore
   */
  WarnAdmWinCoreNoPlayoutDevice = 1323,
  /**
   * @ignore
   */
  WarnAdmWinCoreImproperCaptureRelease = 1324,
}

/**
 * @ignore
 */
export enum ErrorCodeType {
  /**
   * @ignore
   */
  ErrOk = 0,
  /**
   * @ignore
   */
  ErrFailed = 1,
  /**
   * @ignore
   */
  ErrInvalidArgument = 2,
  /**
   * @ignore
   */
  ErrNotReady = 3,
  /**
   * @ignore
   */
  ErrNotSupported = 4,
  /**
   * @ignore
   */
  ErrRefused = 5,
  /**
   * @ignore
   */
  ErrBufferTooSmall = 6,
  /**
   * @ignore
   */
  ErrNotInitialized = 7,
  /**
   * @ignore
   */
  ErrInvalidState = 8,
  /**
   * @ignore
   */
  ErrNoPermission = 9,
  /**
   * @ignore
   */
  ErrTimedout = 10,
  /**
   * @ignore
   */
  ErrCanceled = 11,
  /**
   * @ignore
   */
  ErrTooOften = 12,
  /**
   * @ignore
   */
  ErrBindSocket = 13,
  /**
   * @ignore
   */
  ErrNetDown = 14,
  /**
   * @ignore
   */
  ErrJoinChannelRejected = 17,
  /**
   * @ignore
   */
  ErrLeaveChannelRejected = 18,
  /**
   * @ignore
   */
  ErrAlreadyInUse = 19,
  /**
   * @ignore
   */
  ErrAborted = 20,
  /**
   * @ignore
   */
  ErrInitNetEngine = 21,
  /**
   * @ignore
   */
  ErrResourceLimited = 22,
  /**
   * @ignore
   */
  ErrInvalidAppId = 101,
  /**
   * @ignore
   */
  ErrInvalidChannelName = 102,
  /**
   * @ignore
   */
  ErrNoServerResources = 103,
  /**
   * @ignore
   */
  ErrTokenExpired = 109,
  /**
   * @ignore
   */
  ErrInvalidToken = 110,
  /**
   * @ignore
   */
  ErrConnectionInterrupted = 111,
  /**
   * @ignore
   */
  ErrConnectionLost = 112,
  /**
   * @ignore
   */
  ErrNotInChannel = 113,
  /**
   * @ignore
   */
  ErrSizeTooLarge = 114,
  /**
   * @ignore
   */
  ErrBitrateLimit = 115,
  /**
   * @ignore
   */
  ErrTooManyDataStreams = 116,
  /**
   * @ignore
   */
  ErrStreamMessageTimeout = 117,
  /**
   * @ignore
   */
  ErrSetClientRoleNotAuthorized = 119,
  /**
   * @ignore
   */
  ErrDecryptionFailed = 120,
  /**
   * @ignore
   */
  ErrInvalidUserId = 121,
  /**
   * @ignore
   */
  ErrClientIsBannedByServer = 123,
  /**
   * @ignore
   */
  ErrEncryptedStreamNotAllowedPublish = 130,
  /**
   * @ignore
   */
  ErrLicenseCredentialInvalid = 131,
  /**
   * @ignore
   */
  ErrInvalidUserAccount = 134,
  /**
   * @ignore
   */
  ErrModuleNotFound = 157,
  /**
   * @ignore
   */
  ErrCertRaw = 157,
  /**
   * @ignore
   */
  ErrCertJsonPart = 158,
  /**
   * @ignore
   */
  ErrCertJsonInval = 159,
  /**
   * @ignore
   */
  ErrCertJsonNomem = 160,
  /**
   * @ignore
   */
  ErrCertCustom = 161,
  /**
   * @ignore
   */
  ErrCertCredential = 162,
  /**
   * @ignore
   */
  ErrCertSign = 163,
  /**
   * @ignore
   */
  ErrCertFail = 164,
  /**
   * @ignore
   */
  ErrCertBuf = 165,
  /**
   * @ignore
   */
  ErrCertNull = 166,
  /**
   * @ignore
   */
  ErrCertDuedate = 167,
  /**
   * @ignore
   */
  ErrCertRequest = 168,
  /**
   * @ignore
   */
  ErrPcmsendFormat = 200,
  /**
   * @ignore
   */
  ErrPcmsendBufferoverflow = 201,
  /**
   * @ignore
   */
  ErrLoginAlreadyLogin = 428,
  /**
   * @ignore
   */
  ErrLoadMediaEngine = 1001,
  /**
   * @ignore
   */
  ErrAdmGeneralError = 1005,
  /**
   * @ignore
   */
  ErrAdmInitPlayout = 1008,
  /**
   * @ignore
   */
  ErrAdmStartPlayout = 1009,
  /**
   * @ignore
   */
  ErrAdmStopPlayout = 1010,
  /**
   * @ignore
   */
  ErrAdmInitRecording = 1011,
  /**
   * @ignore
   */
  ErrAdmStartRecording = 1012,
  /**
   * @ignore
   */
  ErrAdmStopRecording = 1013,
  /**
   * @ignore
   */
  ErrVdmCameraNotAuthorized = 1501,
}

/**
 * The operation permissions of the SDK on the audio session.
 */
export enum AudioSessionOperationRestriction {
  /**
   * No restriction, the SDK can change the audio session.
   */
  AudioSessionOperationRestrictionNone = 0,
  /**
   * The SDK cannot change the audio session category.
   */
  AudioSessionOperationRestrictionSetCategory = 1,
  /**
   * The SDK cannot change the audio session category, mode, or categoryOptions.
   */
  AudioSessionOperationRestrictionConfigureSession = 1 << 1,
  /**
   * The SDK keeps the audio session active when the user leaves the channel, for example, to play an audio file in the background.
   */
  AudioSessionOperationRestrictionDeactivateSession = 1 << 2,
  /**
   * Completely restricts the operation permissions of the SDK on the audio session; the SDK cannot change the audio session.
   */
  AudioSessionOperationRestrictionAll = 1 << 7,
}

/**
 * Reasons for a user being offline.
 */
export enum UserOfflineReasonType {
  /**
   * 0: The user quits the call.
   */
  UserOfflineQuit = 0,
  /**
   * 1: The SDK times out and the user drops offline because no data packet is received within a certain period of time.If the user quits the call and the message is not passed to the SDK (due to an unreliable channel), the SDK assumes the user dropped offline.
   */
  UserOfflineDropped = 1,
  /**
   * 2: The user switches the client role from the host to the audience.
   */
  UserOfflineBecomeAudience = 2,
}

/**
 * @ignore
 */
export enum InterfaceIdType {
  /**
   * @ignore
   */
  AgoraIidAudioDeviceManager = 1,
  /**
   * @ignore
   */
  AgoraIidVideoDeviceManager = 2,
  /**
   * @ignore
   */
  AgoraIidParameterEngine = 3,
  /**
   * @ignore
   */
  AgoraIidMediaEngine = 4,
  /**
   * @ignore
   */
  AgoraIidAudioEngine = 5,
  /**
   * @ignore
   */
  AgoraIidVideoEngine = 6,
  /**
   * @ignore
   */
  AgoraIidRtcConnection = 7,
  /**
   * @ignore
   */
  AgoraIidSignalingEngine = 8,
  /**
   * @ignore
   */
  AgoraIidMediaEngineRegulator = 9,
  /**
   * @ignore
   */
  AgoraIidCloudSpatialAudio = 10,
  /**
   * @ignore
   */
  AgoraIidLocalSpatialAudio = 11,
  /**
   * @ignore
   */
  AgoraIidMediaRecorder = 12,
}

/**
 * Network quality types.
 */
export enum QualityType {
  /**
   * 0: The network quality is unknown.
   */
  QualityUnknown = 0,
  /**
   * 1: The network quality is excellent.
   */
  QualityExcellent = 1,
  /**
   * 2: The network quality is quite good, but the bitrate may be slightly lower than excellent.
   */
  QualityGood = 2,
  /**
   * 3: Users can feel the communication is slightly impaired.
   */
  QualityPoor = 3,
  /**
   * 4: Users cannot communicate smoothly.
   */
  QualityBad = 4,
  /**
   * 5: The quality is so bad that users can barely communicate.
   */
  QualityVbad = 5,
  /**
   * 6: The network is down and users cannot communicate at all.
   */
  QualityDown = 6,
  /**
   * 7: Users cannot detect the network quality. (Not in use.)
   */
  QualityUnsupported = 7,
  /**
   * 8: Detecting the network quality.
   */
  QualityDetecting = 8,
}

/**
 * @ignore
 */
export enum FitModeType {
  /**
   * @ignore
   */
  ModeCover = 1,
  /**
   * @ignore
   */
  ModeContain = 2,
}

/**
 * The clockwise rotation of the video.
 */
export enum VideoOrientation {
  /**
   * 0: (Default) No rotation.
   */
  VideoOrientation0 = 0,
  /**
   * 90: 90 degrees.
   */
  VideoOrientation90 = 90,
  /**
   * 180: 180 degrees.
   */
  VideoOrientation180 = 180,
  /**
   * 270: 270 degrees.
   */
  VideoOrientation270 = 270,
}

/**
 * Video frame rate.
 */
export enum FrameRate {
  /**
   * 1: 1 fps
   */
  FrameRateFps1 = 1,
  /**
   * 7: 7 fps
   */
  FrameRateFps7 = 7,
  /**
   * 10: 10 fps
   */
  FrameRateFps10 = 10,
  /**
   * 15: 15 fps
   */
  FrameRateFps15 = 15,
  /**
   * 24: 24 fps
   */
  FrameRateFps24 = 24,
  /**
   * 30: 30 fps
   */
  FrameRateFps30 = 30,
  /**
   * @ignore
   */
  FrameRateFps60 = 60,
}

/**
 * @ignore
 */
export enum FrameWidth {
  /**
   * @ignore
   */
  FrameWidth640 = 640,
}

/**
 * @ignore
 */
export enum FrameHeight {
  /**
   * @ignore
   */
  FrameHeight360 = 360,
}

/**
 * The video frame type.
 */
export enum VideoFrameType {
  /**
   * 0: A black frame.
   */
  VideoFrameTypeBlankFrame = 0,
  /**
   * 3: Key frame.
   */
  VideoFrameTypeKeyFrame = 3,
  /**
   * 4: Delta frame.
   */
  VideoFrameTypeDeltaFrame = 4,
  /**
   * 5: The B frame.
   */
  VideoFrameTypeBFrame = 5,
  /**
   * 6: A discarded frame.
   */
  VideoFrameTypeDroppableFrame = 6,
  /**
   * Unknown frame.
   */
  VideoFrameTypeUnknow = 7,
}

/**
 * Video output orientation mode.
 */
export enum OrientationMode {
  /**
   * 0: (Default) The output video always follows the orientation of the captured video. The receiver takes the rotational information passed on from the video encoder. This mode applies to scenarios where video orientation can be adjusted on the receiver.If the captured video is in landscape mode, the output video is in landscape mode.If the captured video is in portrait mode, the output video is in portrait mode.
   */
  OrientationModeAdaptive = 0,
  /**
   * @ignore
   */
  OrientationModeFixedLandscape = 1,
  /**
   * @ignore
   */
  OrientationModeFixedPortrait = 2,
}

/**
 * Video degradation preferences when the bandwidth is a constraint.
 */
export enum DegradationPreference {
  /**
   * 0: (Default) Prefers to reduce the video frame rate while maintaining video quality during video encoding under limited bandwidth. This degradation preference is suitable for scenarios where video quality is prioritized.In the COMMUNICATION channel profile, the resolution of the video sent may change, so remote users need to handle this issue. See onVideoSizeChanged .
   */
  MaintainQuality = 0,
  /**
   * 1: Prefers to reduce the video quality while maintaining the video frame rate during video encoding under limited bandwidth. This degradation preference is suitable for scenarios where smoothness is prioritized and video quality is allowed to be reduced.
   */
  MaintainFramerate = 1,
  /**
   * 2: Reduces the video frame rate and video quality simultaneously during video encoding under limited bandwidth. TheMaintainBalanced has a lower reduction thanMaintainQuality andMaintainFramerate, and this preference is suitable for scenarios where both smoothness and video quality are a priority.The resolution of the video sent may change, so remote users need to handle this issue. See onVideoSizeChanged .
   */
  MaintainBalanced = 2,
  /**
   * 3: When the bandwidth is limited, the video frame rate is preferentially reduced during video encoding.
   */
  MaintainResolution = 3,
  /**
   * @ignore
   */
  Disabled = 100,
}

/**
 * The video dimension.
 */
export class VideoDimensions {
  /**
   * The width (pixels) of the video.
   */
  width?: number;
  /**
   * The height (pixels) of the video.
   */
  height?: number;
}

/**
 * Video codec types.
 */
export enum VideoCodecType {
  /**
   * @ignore
   */
  VideoCodecNone = 0,
  /**
   * 1: Standard VP8.
   */
  VideoCodecVp8 = 1,
  /**
   * 2: Standard H.264.
   */
  VideoCodecH264 = 2,
  /**
   * @ignore
   */
  VideoCodecH265 = 3,
  /**
   * @ignore
   */
  VideoCodecGeneric = 6,
  /**
   * @ignore
   */
  VideoCodecGenericH264 = 7,
  /**
   * @ignore
   */
  VideoCodecAv1 = 12,
  /**
   * @ignore
   */
  VideoCodecVp9 = 13,
  /**
   * @ignore
   */
  VideoCodecGenericJpeg = 20,
}

/**
 * @ignore
 */
export enum TCcMode {
  /**
   * @ignore
   */
  CcEnabled = 0,
  /**
   * @ignore
   */
  CcDisabled = 1,
}

/**
 * @ignore
 */
export class SenderOptions {
  /**
   * @ignore
   */
  ccMode?: TCcMode;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  targetBitrate?: number;
}

/**
 * The codec type of audio.
 */
export enum AudioCodecType {
  /**
   * 1: OPUS.
   */
  AudioCodecOpus = 1,
  /**
   * 3: PCMA.
   */
  AudioCodecPcma = 3,
  /**
   * 4: PCMU.
   */
  AudioCodecPcmu = 4,
  /**
   * 5: G722.
   */
  AudioCodecG722 = 5,
  /**
   * 8: LC-AAC.
   */
  AudioCodecAaclc = 8,
  /**
   * 9: HE-AAC.
   */
  AudioCodecHeaac = 9,
  /**
   * 10: JC1.
   */
  AudioCodecJc1 = 10,
  /**
   * 11: HE-AAC v2.
   */
  AudioCodecHeaac2 = 11,
  /**
   * @ignore
   */
  AudioCodecLpcnet = 12,
}

/**
 * Audio encoding type.
 */
export enum AudioEncodingType {
  /**
   * AAC encoding format, 16000 Hz sampling rate, bass quality. A file with an audio duration of 10 minutes is approximately 1.2 MB after encoding.
   */
  AudioEncodingTypeAac16000Low = 0x010101,
  /**
   * AAC encoding format, 16000 Hz sampling rate, medium sound quality. A file with an audio duration of 10 minutes is approximately 2 MB after encoding.
   */
  AudioEncodingTypeAac16000Medium = 0x010102,
  /**
   * AAC encoding format, 32000 Hz sampling rate, bass quality. A file with an audio duration of 10 minutes is approximately 1.2 MB after encoding.
   */
  AudioEncodingTypeAac32000Low = 0x010201,
  /**
   * AAC encoding format, 32000 Hz sampling rate, medium sound quality. A file with an audio duration of 10 minutes is approximately 2 MB after encoding.
   */
  AudioEncodingTypeAac32000Medium = 0x010202,
  /**
   * AAC encoding format, 32000 Hz sampling rate, high sound quality. A file with an audio duration of 10 minutes is approximately 3.5 MB after encoding.
   */
  AudioEncodingTypeAac32000High = 0x010203,
  /**
   * AAC encoding format, 48000 Hz sampling rate, medium sound quality. A file with an audio duration of 10 minutes is approximately 2 MB after encoding.
   */
  AudioEncodingTypeAac48000Medium = 0x010302,
  /**
   * AAC encoding format, 48000 Hz sampling rate, high sound quality. A file with an audio duration of 10 minutes is approximately 3.5 MB after encoding.
   */
  AudioEncodingTypeAac48000High = 0x010303,
  /**
   * OPUS encoding format, 16000 Hz sampling rate, bass quality. A file with an audio duration of 10 minutes is approximately 2 MB after encoding.
   */
  AudioEncodingTypeOpus16000Low = 0x020101,
  /**
   * OPUS encoding format, 16000 Hz sampling rate, medium sound quality. A file with an audio duration of 10 minutes is approximately 2 MB after encoding.
   */
  AudioEncodingTypeOpus16000Medium = 0x020102,
  /**
   * OPUS encoding format, 48000 Hz sampling rate, medium sound quality. A file with an audio duration of 10 minutes is approximately 2 MB after encoding.
   */
  AudioEncodingTypeOpus48000Medium = 0x020302,
  /**
   * OPUS encoding format, 48000 Hz sampling rate, high sound quality. A file with an audio duration of 10 minutes is approximately 3.5 MB after encoding.
   */
  AudioEncodingTypeOpus48000High = 0x020303,
}

/**
 * The adaptation mode of the watermark.
 */
export enum WatermarkFitMode {
  /**
   * @ignore
   */
  FitModeCoverPosition = 0,
  /**
   * @ignore
   */
  FitModeUseImageRatio = 1,
}

/**
 * @ignore
 */
export class EncodedAudioFrameAdvancedSettings {
  /**
   * @ignore
   */
  speech?: boolean;
  /**
   * @ignore
   */
  sendEvenIfEmpty?: boolean;
}

/**
 * Audio information after encoding.
 */
export class EncodedAudioFrameInfo {
  /**
   * Audio Codec type: AudioCodecType .
   */
  codec?: AudioCodecType;
  /**
   * Audio sample rate (Hz).
   */
  sampleRateHz?: number;
  /**
   * The number of audio samples per channel.
   */
  samplesPerChannel?: number;
  /**
   * The number of audio channels.
   */
  numberOfChannels?: number;
  /**
   * This function is not currently supported.
   */
  advancedSettings?: EncodedAudioFrameAdvancedSettings;
  /**
   * @ignore
   */
  captureTimeMs?: number;
}

/**
 * @ignore
 */
export class AudioPcmDataInfo {
  /**
   * @ignore
   */
  samplesPerChannel?: number;
  /**
   * @ignore
   */
  channelNum?: number;
  /**
   * @ignore
   */
  samplesOut?: number;
  /**
   * @ignore
   */
  elapsedTimeMs?: number;
  /**
   * @ignore
   */
  ntpTimeMs?: number;
}

/**
 * @ignore
 */
export enum H264PacketizeMode {
  /**
   * @ignore
   */
  NonInterleaved = 0,
  /**
   * @ignore
   */
  SingleNalUnit = 1,
}

/**
 * The type of video streams.
 */
export enum VideoStreamType {
  /**
   * 0: High-quality video stream.
   */
  VideoStreamHigh = 0,
  /**
   * 1: Low-quality video stream.
   */
  VideoStreamLow = 1,
}

/**
 * @ignore
 */
export class VideoSubscriptionOptions {
  /**
   * @ignore
   */
  type?: VideoStreamType;
  /**
   * @ignore
   */
  encodedFrameOnly?: boolean;
}

/**
 * The information about the external encoded video frame.
 */
export class EncodedVideoFrameInfo {
  /**
   * The codec type of the local video stream. See VideoCodecType . The default value isVideoCodecH264(2).
   */
  codecType?: VideoCodecType;
  /**
   * The width (pixel) of the video frame.
   */
  width?: number;
  /**
   * The height (pixel) of the video frame.
   */
  height?: number;
  /**
   * The number of video frames per second.When this parameter is not0, you can use it to calculate the Unix timestamp of the external encoded video frames.
   */
  framesPerSecond?: number;
  /**
   * The video frame type, see VideoFrameType .
   */
  frameType?: VideoFrameType;
  /**
   * The rotation information of the video frame, see VideoOrientation .
   */
  rotation?: VideoOrientation;
  /**
   * Reserved for future use.
   */
  trackId?: number;
  /**
   * @ignore
   */
  captureTimeMs?: number;
  /**
   * The user ID to push the the external encoded video frame.
   */
  uid?: number;
  /**
   * The type of video streams.See VideoStreamType .
   */
  streamType?: VideoStreamType;
}

/**
 * Video mirror mode.
 */
export enum VideoMirrorModeType {
  /**
   * 0: (Default) The SDK determines the mirror mode.
   */
  VideoMirrorModeAuto = 0,
  /**
   * 1: Enable mirror mode.
   */
  VideoMirrorModeEnabled = 1,
  /**
   * 2: Disable mirror mode.
   */
  VideoMirrorModeDisabled = 2,
}

/**
 * Video encoder configurations.
 */
export class VideoEncoderConfiguration {
  /**
   * The codec type of the local video stream. See VideoCodecType .
   */
  codecType?: VideoCodecType;
  /**
   * The dimensions of the encoded video (px). This parameter measures the video encoding quality in the format of length × width.
   */
  dimensions?: VideoDimensions;
  /**
   * The frame rate (fps) of the encoding video frame. The default value is 15. See FrameRate .
   */
  frameRate?: number;
  /**
   * The encoding bitrate (Kbps) of the video.See
   */
  bitrate?: number;
  /**
   * The minimum encoding bitrate (Kbps) of the video.The SDK automatically adjusts the encoding bitrate to adapt to the network conditions. Using a value greater than the default value forces the video encoder to output high-quality images but may cause more packet loss and sacrifice the smoothness of the video transmission. Unless you have special requirements for image quality, Agora does not recommend changing this value.This parameter only applies to the interactive streaming profile.
   */
  minBitrate?: number;
  /**
   * The orientation mode of the encoded video. See OrientationMode .
   */
  orientationMode?: OrientationMode;
  /**
   * Video degradation preference under limited bandwidth.
   */
  degradationPreference?: DegradationPreference;
  /**
   * Sets the mirror mode of the published local video stream. It only affects the video that the remote user sees. See VideoMirrorModeType .By default, the video is not mirrored.
   */
  mirrorMode?: VideoMirrorModeType;
}

/**
 * The configurations for the data stream.
 * The following table shows the SDK behaviors under different parameter settings:
 */
export class DataStreamConfig {
  /**
   * Whether to synchronize the data packet with the published audio packet.true: Synchronize the data packet with the audio packet.false: Do not synchronize the data packet with the audio packet.When you set the data packet to synchronize with the audio, then if the data packet delay is within the audio delay, the SDK triggers the onStreamMessage callback when the synchronized audio packet is played out. Do not set this parameter astrue if you need the receiver to receive the data packet immediately. Agora recommends that you set this parameter to true only when you need to implement specific functions, for example, lyric synchronization.
   */
  syncWithAudio?: boolean;
  /**
   * Whether the SDK guarantees that the receiver receives the data in the sent order.true: Guarantee that the receiver receives the data in the sent order.false: Do not guarantee that the receiver receives the data in the sent order.Do not set this parameter astrue if you need the receiver to receive the data packet immediately.
   */
  ordered?: boolean;
}

/**
 * @ignore
 */
export enum SimulcastStreamMode {
  /**
   * @ignore
   */
  AutoSimulcastStream = -1,
  /**
   * @ignore
   */
  DisableSimulcastStrem = 0,
  /**
   * @ignore
   */
  EnableSimulcastStream = 1,
}

/**
 * The configuration of the low-quality video stream.
 */
export class SimulcastStreamConfig {
  /**
   * The video dimension.See VideoDimensions .The default value is 160 × 120.
   */
  dimensions?: VideoDimensions;
  /**
   * Video receive bitrate (Kbps). The default value is 65.
   */
  bitrate?: number;
  /**
   * The capture frame rate (fps) of the local video. The default value is 5.
   */
  framerate?: number;
}

/**
 * The location of the target area relative to the screen or window. If you do not set this parameter, the SDK selects the whole screen or window.
 */
export class Rectangle {
  /**
   * The horizontal offset from the top-left corner.
   */
  x?: number;
  /**
   * The vertical offset from the top-left corner.
   */
  y?: number;
  /**
   * The width of the target area.
   */
  width?: number;
  /**
   * The height of the target area.
   */
  height?: number;
}

/**
 * The position and size of the watermark on the screen.
 * The position and size of the watermark on the screen are determined byxRatio,yRatio, andwidthRatio:(xRatio,yRatio) refers to the coordinates of the upper left corner of the watermark, which determines the distance from the upper left corner of the watermark to the upper left corner of the screen.ThewidthRatio determines the width of the watermark.
 */
export class WatermarkRatio {
  /**
   * The x-coordinate of the upper left corner of the watermark. The horizontal position relative to the origin, where the upper left corner of the screen is the origin, and the x-coordinate is the upper left corner of the watermark. The value range is [0.0,1.0], and the default value is 0.
   */
  xRatio?: number;
  /**
   * The y-coordinate of the upper left corner of the watermark. The vertical position relative to the origin, where the upper left corner of the screen is the origin, and the y-coordinate is the upper left corner of the screen. The value range is [0.0,1.0], and the default value is 0.
   */
  yRatio?: number;
  /**
   * The width of the watermark. The SDK calculates the height of the watermark proportionally according to this parameter value to ensure that the enlarged or reduced watermark image is not distorted. The value range is [0,1], and the default value is 0, which means no watermark is displayed.
   */
  widthRatio?: number;
}

/**
 * Configurations of the watermark image.
 */
export class WatermarkOptions {
  /**
   * Reserved for future use.
   */
  visibleInPreview?: boolean;
  /**
   * When the adaptation mode of the watermark isFIT_MODE_COVER_POSITION, it is used to set the area of the watermark image in landscape mode. SeeFIT_MODE_COVER_POSITION for details.
   */
  positionInLandscapeMode?: Rectangle;
  /**
   * When the adaptation mode of the watermark isFIT_MODE_COVER_POSITION, it is used to set the area of the watermark image in portrait mode. SeeFIT_MODE_COVER_POSITION for details.
   */
  positionInPortraitMode?: Rectangle;
  /**
   * When the watermark adaptation mode isFIT_MODE_USE_IMAGE_RATIO, this parameter is used to set the watermark coordinates. See WatermarkRatio .
   */
  watermarkRatio?: WatermarkRatio;
  /**
   * The adaptation mode of the watermark. See WATERMARK_FIT_MODE .
   */
  mode?: WatermarkFitMode;
}

/**
 * Statistics of the channel.
 */
export class RtcStats {
  /**
   * Call duration of the local user in seconds, represented by an aggregate value.
   */
  duration?: number;
  /**
   * Total number of bytes transmitted, represented by an aggregate value.
   */
  txBytes?: number;
  /**
   * Total number of bytes received, represented by an aggregate value.
   */
  rxBytes?: number;
  /**
   * Total number of audio bytes sent, represented by an aggregate value.
   */
  txAudioBytes?: number;
  /**
   * The total number of video bytes sent, represented by an aggregate value.
   */
  txVideoBytes?: number;
  /**
   * The total number of audio bytes received, represented by an aggregate value.
   */
  rxAudioBytes?: number;
  /**
   * The total number of video bytes received, represented by an aggregate value.
   */
  rxVideoBytes?: number;
  /**
   * Video transmission bitrate (Kbps), represented by an instantaneous value.
   */
  txKBitRate?: number;
  /**
   * The receiving bitrate (Kbps), represented by an instantaneous value.
   */
  rxKBitRate?: number;
  /**
   * Audio receive bitrate (Kbps), represented by an instantaneous value.
   */
  rxAudioKBitRate?: number;
  /**
   * The bitrate (Kbps) of sending the audio packet.
   */
  txAudioKBitRate?: number;
  /**
   * Video receive bitrate (Kbps), represented by an instantaneous value.
   */
  rxVideoKBitRate?: number;
  /**
   * The bitrate (Kbps) of sending the video.
   */
  txVideoKBitRate?: number;
  /**
   * The client-to-server delay (ms).
   */
  lastmileDelay?: number;
  /**
   * The number of users in the channel.
   */
  userCount?: number;
  /**
   * Application CPU usage (%).The value ofcpuTotalUsage is always reported as 0 in the onLeaveChannel callback.
   */
  cpuAppUsage?: number;
  /**
   * The system CPU usage (%).The value ofcpuTotalUsage is always reported as 0 in the onLeaveChannel callback.As of Android 8.1, you cannot get the CPU usage from this attribute due to system limitations.
   */
  cpuTotalUsage?: number;
  /**
   * The round-trip time delay (ms) from the client to the local router.This property is disabled on devices running iOS 14 or later, and enabled on devices running versions earlier than iOS 14 by default.To enable this property on devices running iOS 14 or later,.On Android, to getgatewayRtt, ensure that you add theandroid.permission.ACCESS_WIFI_STATE permission after</application> in theAndroidManifest.xml file in your project.
   */
  gatewayRtt?: number;
  /**
   * The memory ratio occupied by the app (%).This value is for reference only. Due to system limitations, you may not get this value.
   */
  memoryAppUsageRatio?: number;
  /**
   * The memory occupied by the system (%).This value is for reference only. Due to system limitations, you may not get this value.
   */
  memoryTotalUsageRatio?: number;
  /**
   * The memory size occupied by the app (KB).This value is for reference only. Due to system limitations, you may not get this value.
   */
  memoryAppUsageInKbytes?: number;
  /**
   * The duration (ms) between the SDK starts connecting and the connection is established. If the value reported is 0, it means invalid.
   */
  connectTimeMs?: number;
  /**
   * @ignore
   */
  firstAudioPacketDuration?: number;
  /**
   * @ignore
   */
  firstVideoPacketDuration?: number;
  /**
   * @ignore
   */
  firstVideoKeyFramePacketDuration?: number;
  /**
   * @ignore
   */
  packetsBeforeFirstKeyFramePacket?: number;
  /**
   * @ignore
   */
  firstAudioPacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoPacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFramePacketDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFrameDecodedDurationAfterUnmute?: number;
  /**
   * @ignore
   */
  firstVideoKeyFrameRenderedDurationAfterUnmute?: number;
  /**
   * The packet loss rate (%) from the client to the Agora server before applying the anti-packet-loss algorithm.
   */
  txPacketLossRate?: number;
  /**
   * The packet loss rate (%) from the Agora server to the client before using the anti-packet-loss method.
   */
  rxPacketLossRate?: number;
}

/**
 * The capture type of the custom video source.
 */
export enum VideoSourceType {
  /**
   * @ignore
   */
  VideoSourceCameraPrimary = 0,
  /**
   * The camera.
   */
  VideoSourceCamera = 0,
  /**
   * The secondary camera.
   */
  VideoSourceCameraSecondary = 1,
  /**
   * The primary screen.
   */
  VideoSourceScreenPrimary = 2,
  /**
   * The screen.
   */
  VideoSourceScreen = 2,
  /**
   * The secondary screen.
   */
  VideoSourceScreenSecondary = 3,
  /**
   * The custom video source.
   */
  VideoSourceCustom = 4,
  /**
   * The video source from the media player.
   */
  VideoSourceMediaPlayer = 5,
  /**
   * The video source is a PNG image.
   */
  VideoSourceRtcImagePng = 6,
  /**
   * The video source is a JPEG image.
   */
  VideoSourceRtcImageJpeg = 7,
  /**
   * The video source is a GIF image.
   */
  VideoSourceRtcImageGif = 8,
  /**
   * The video source is remote video acquired by the network.
   */
  VideoSourceRemote = 9,
  /**
   * A transcoded video source.
   */
  VideoSourceTranscoded = 10,
  /**
   * An unknown video source.
   */
  VideoSourceUnknown = 100,
}

/**
 * The user role in the interactive live streaming.
 */
export enum ClientRoleType {
  /**
   * 1: Host. A host can both send and receive streams.
   */
  ClientRoleBroadcaster = 1,
  /**
   * 2: (Default) Audience. An audience member can only receive streams.
   */
  ClientRoleAudience = 2,
}

/**
 * Quality change of the local video in terms of target frame rate and target bit rate since last count.
 */
export enum QualityAdaptIndication {
  /**
   * 0: The local video quality stays the same.
   */
  AdaptNone = 0,
  /**
   * 1: The local video quality improves because the network bandwidth increases.
   */
  AdaptUpBandwidth = 1,
  /**
   * 2: The local video quality deteriorates because the network bandwidth decreases.
   */
  AdaptDownBandwidth = 2,
}

/**
 * The latency level of an audience member in interactive live streaming. This enum takes effect only when the user role is set toClientRoleAudience .
 */
export enum AudienceLatencyLevelType {
  /**
   * 1: Low latency.
   */
  AudienceLatencyLevelLowLatency = 1,
  /**
   * 2: (Default) Ultra low latency.
   */
  AudienceLatencyLevelUltraLowLatency = 2,
}

/**
 * The detailed options of a user.
 */
export class ClientRoleOptions {
  /**
   * The latency level of an audience member in interactive live streaming.See AudienceLatencyLevelType .
   */
  audienceLatencyLevel?: AudienceLatencyLevelType;
}

/**
 * The Quality of Experience (QoE) of the local user when receiving a remote audio stream.
 */
export enum ExperienceQualityType {
  /**
   * 0: The QoE of the local user is good.
   */
  ExperienceQualityGood = 0,
  /**
   * 1: The QoE of the local user is poor.
   */
  ExperienceQualityBad = 1,
}

/**
 * @ignore
 */
export enum ExperiencePoorReason {
  /**
   * @ignore
   */
  ExperienceReasonNone = 0,
  /**
   * @ignore
   */
  RemoteNetworkQualityPoor = 1,
  /**
   * @ignore
   */
  LocalNetworkQualityPoor = 2,
  /**
   * @ignore
   */
  WirelessSignalPoor = 4,
  /**
   * @ignore
   */
  WifiBluetoothCoexist = 8,
}

/**
 * Audio statistics of the remote user.
 */
export class RemoteAudioStats {
  /**
   * The user ID of the remote user.
   */
  uid?: number;
  /**
   * The quality of the audio stream sent by the user.  QualityType
   */
  quality?: number;
  /**
   * The network delay (ms) from the sender to the receiver.
   */
  networkTransportDelay?: number;
  /**
   * The network delay (ms) from the audio receiver to the jitter buffer.When the receiving end is an audience member andaudienceLatencyLevel of ClientRoleOptions is 1, this parameter does not take effect.
   */
  jitterBufferDelay?: number;
  /**
   * The frame loss rate (%) of the remote audio stream in the reported interval.
   */
  audioLossRate?: number;
  /**
   * The number of audio channels.
   */
  numChannels?: number;
  /**
   * The sampling rate of the received audio stream in the reported interval.
   */
  receivedSampleRate?: number;
  /**
   * The average bitrate (Kbps) of the received audio stream in the reported interval.
   */
  receivedBitrate?: number;
  /**
   * The total freeze time (ms) of the remote audio stream after the remote user joins the channel. In a session, audio freeze occurs when the audio frame loss rate reaches 4%.
   */
  totalFrozenTime?: number;
  /**
   * The total audio freeze time as a percentage (%) of the total time when the audio is available. The audio is considered available when the remote user neither stops sending the audio stream nor disables the audio module after joining the channel.
   */
  frozenRate?: number;
  /**
   * The quality of the remote audio stream in the reported interval. The quality is determined by the Agora real-time audio MOS (Mean Opinion Score) measurement method. The return value range is [0, 500]. Dividing the return value by 100 gets the MOS score, which ranges from 0 to 5. The higher the score, the better the audio quality.The subjective perception of audio quality corresponding to the Agora real-time audio MOS scores is as follows:MOS scorePerception of audio qualityGreater than 4Excellent. The audio sounds clear and smooth.From 3.5 to 4Good. The audio has some perceptible impairment but still sounds clear.From 3 to 3.5Fair. The audio freezes occasionally and requires attentive listening.From 2.5 to 3Poor. The audio sounds choppy and requires considerable effort to understand.From 2 to 2.5Bad. The audio has occasional noise. Consecutive audio dropouts occur, resulting in some information loss. The users can communicate only with difficulty.Less than 2Very bad. The audio has persistent noise. Consecutive audio dropouts are frequent, resulting in severe information loss. Communication is nearly impossible.
   */
  mosValue?: number;
  /**
   * The total active time (ms) between the start of the audio call and the callback of the remote user.The active time refers to the total duration of the remote user without the mute state.
   */
  totalActiveTime?: number;
  /**
   * The total duration (ms) of the remote audio stream.
   */
  publishDuration?: number;
  /**
   * The Quality of Experience (QoE) of the local user when receiving a remote audio stream.
   */
  qoeQuality?: number;
  /**
   * @ignore
   */
  qualityChangedReason?: number;
}

/**
 * The audio profile.
 */
export enum AudioProfileType {
  /**
   * 0: The default audio profile.For the interactive streaming profile: A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps.For the communication profile:A sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
   */
  AudioProfileDefault = 0,
  /**
   * 1: A sample rate of 32 kHz, audio encoding, mono, and a bitrate of up to 18 Kbps.
   */
  AudioProfileSpeechStandard = 1,
  /**
   * 2: A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 64 Kbps.
   */
  AudioProfileMusicStandard = 2,
  /**
   * 3: A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 80 Kbps.To implement stereo audio, you also need to call setAdvancedAudioOptions and setaudioProcessingChannels toAdvancedAudioOptions inAudioProcessingStereo.
   */
  AudioProfileMusicStandardStereo = 3,
  /**
   * 4: A sample rate of 48 kHz, music encoding, mono, and a bitrate of up to 96 Kbps.
   */
  AudioProfileMusicHighQuality = 4,
  /**
   * 5: A sample rate of 48 kHz, music encoding, stereo, and a bitrate of up to 128 Kbps.To implement stereo audio, you also need to call setAdvancedAudioOptions and setaudioProcessingChannels toAdvancedAudioOptions inAudioProcessingStereo.
   */
  AudioProfileMusicHighQualityStereo = 5,
  /**
   *
   */
  AudioProfileIot = 6,
  /**
   * @ignore
   */
  AudioProfileNum = 7,
}

/**
 * The audio scenario.
 */
export enum AudioScenarioType {
  /**
   * 0: (Default) Automatic scenario, where the SDK chooses the appropriate audio quality according to the user role and audio route.
   */
  AudioScenarioDefault = 0,
  /**
   * 3: High-quality audio scenario, where users mainly play music.
   */
  AudioScenarioGameStreaming = 3,
  /**
   * 5: Chatroom scenario, where users need to frequently switch the user role or mute and unmute the microphone. In this scenario, audience members receive a pop-up window to request permission of using microphones.
   */
  AudioScenarioChatroom = 5,
  /**
   * 7: Real-time chorus scenario, where users have good network conditions and require ultra-low latency.
   */
  AudioScenarioChorus = 7,
  /**
   * @ignore
   */
  AudioScenarioMeeting = 8,
  /**
   * The number of enumerations.
   */
  AudioScenarioNum = 9,
}

/**
 * The format of the video frame.
 */
export class VideoFormat {
  /**
   * The width (px) of the video frame.
   */
  width?: number;
  /**
   * The height (px) of the video frame.
   */
  height?: number;
  /**
   * The video frame rate (fps).
   */
  fps?: number;
}

/**
 * The content hint for screen sharing.
 */
export enum VideoContentHint {
  /**
   * (Default) No content hint.
   */
  ContentHintNone = 0,
  /**
   * Motion-intensive content. Choose this option if you prefer smoothness or when you are sharing a video clip, movie, or video game.
   */
  ContentHintMotion = 1,
  /**
   * Motionless content. Choose this option if you prefer sharpness or when you are sharing a picture, PowerPoint slides, or texts.
   */
  ContentHintDetails = 2,
}

/**
 * @ignore
 */
export enum ScreenScenarioType {
  /**
   * @ignore
   */
  ScreenScenarioDocument = 1,
  /**
   * @ignore
   */
  ScreenScenarioGaming = 2,
  /**
   * @ignore
   */
  ScreenScenarioVideo = 3,
  /**
   * @ignore
   */
  ScreenScenarioRdc = 4,
}

/**
 * @ignore
 */
export enum CaptureBrightnessLevelType {
  /**
   * @ignore
   */
  CaptureBrightnessLevelInvalid = -1,
  /**
   * @ignore
   */
  CaptureBrightnessLevelNormal = 0,
  /**
   * @ignore
   */
  CaptureBrightnessLevelBright = 1,
  /**
   * @ignore
   */
  CaptureBrightnessLevelDark = 2,
}

/**
 * The state of the local audio.
 */
export enum LocalAudioStreamState {
  /**
   * 0: The local audio is in the initial state.
   */
  LocalAudioStreamStateStopped = 0,
  /**
   * 1: The local audio capturing device starts successfully.
   */
  LocalAudioStreamStateRecording = 1,
  /**
   * 2: The first audio frame encodes successfully.
   */
  LocalAudioStreamStateEncoding = 2,
  /**
   * 3: The local audio fails to start.
   */
  LocalAudioStreamStateFailed = 3,
}

/**
 * Local audio state error codes.
 */
export enum LocalAudioStreamError {
  /**
   * 0: The local audio is normal.
   */
  LocalAudioStreamErrorOk = 0,
  /**
   * 1: No specified reason for the local audio failure. Remind your users to try to rejoin the channel.
   */
  LocalAudioStreamErrorFailure = 1,
  /**
   * 2: No permission to use the local audio capturing device. Remind your users to grant permission.Deprecated:This enumerator is deprecated. Please use RecordAudio in the onPermissionError callback instead.
   */
  LocalAudioStreamErrorDeviceNoPermission = 2,
  /**
   * 3:
   */
  LocalAudioStreamErrorDeviceBusy = 3,
  /**
   * 4: The local audio capture fails.
   */
  LocalAudioStreamErrorRecordFailure = 4,
  /**
   * 5: The local audio encoding fails.
   */
  LocalAudioStreamErrorEncodeFailure = 5,
  /**
   * @ignore
   */
  LocalAudioStreamErrorNoRecordingDevice = 6,
  /**
   * @ignore
   */
  LocalAudioStreamErrorNoPlayoutDevice = 7,
  /**
   * @ignore
   */
  LocalAudioStreamErrorInterrupted = 8,
  /**
   * @ignore
   */
  LocalAudioStreamErrorRecordInvalidId = 9,
  /**
   * @ignore
   */
  LocalAudioStreamErrorPlayoutInvalidId = 10,
}

/**
 * Local video state types.
 */
export enum LocalVideoStreamState {
  /**
   * 0: The local video is in the initial state.
   */
  LocalVideoStreamStateStopped = 0,
  /**
   * 1: The local video capturing device starts successfully.
   */
  LocalVideoStreamStateCapturing = 1,
  /**
   * 2: The first video frame is successfully encoded.
   */
  LocalVideoStreamStateEncoding = 2,
  /**
   * 3: Fails to start the local video.
   */
  LocalVideoStreamStateFailed = 3,
}

/**
 * Local video state error code.
 */
export enum LocalVideoStreamError {
  /**
   * 0: The local video is normal.
   */
  LocalVideoStreamErrorOk = 0,
  /**
   * 1: No specified reason for the local video failure.
   */
  LocalVideoStreamErrorFailure = 1,
  /**
   * 2: No permission to use the local video capturing device. Remind the user to grant permission and rejoin the channel.Deprecated:This enumerator is deprecated. Please use CAMERA in the onPermissionError callback instead.
   */
  LocalVideoStreamErrorDeviceNoPermission = 2,
  /**
   * 3: The local video capturing device is in use. Remind the user to check whether another application occupies the camera.
   */
  LocalVideoStreamErrorDeviceBusy = 3,
  /**
   * 4: The local video capture fails. Remind the user to check whether the video capture device is working properly or the camera is occupied by another application, and then to rejoin the channel.
   */
  LocalVideoStreamErrorCaptureFailure = 4,
  /**
   * 5: The local video encoding fails.
   */
  LocalVideoStreamErrorEncodeFailure = 5,
  /**
   * 6: (For iOS only)The app is in the background. Remind the user that video capture cannot be performed normally when the app is in the background.
   */
  LocalVideoStreamErrorCaptureInbackground = 6,
  /**
   * 7: (For iOS only) The current application window is running in Slide Over, Split View, or Picture in Picture mode, and another app is occupying the camera. Remind the user that the application cannot capture video properly when the app is running in Slide Over, Split View, or Picture in Picture mode and another app is occupying the camera.
   */
  LocalVideoStreamErrorCaptureMultipleForegroundApps = 7,
  /**
   * 8: Fails to find a local video capture device. Remind the user to check whether the camera is connected to the device properly or the camera is working properly, and then to rejoin the channel.
   */
  LocalVideoStreamErrorDeviceNotFound = 8,
  /**
   * @ignore
   */
  LocalVideoStreamErrorDeviceDisconnected = 9,
  /**
   * @ignore
   */
  LocalVideoStreamErrorDeviceInvalidId = 10,
  /**
   * @ignore
   */
  LocalVideoStreamErrorDeviceSystemPressure = 101,
  /**
   * @ignore
   */
  LocalVideoStreamErrorScreenCaptureWindowMinimized = 11,
  /**
   * @ignore
   */
  LocalVideoStreamErrorScreenCaptureWindowClosed = 12,
  /**
   * @ignore
   */
  LocalVideoStreamErrorScreenCaptureWindowOccluded = 13,
  /**
   * @ignore
   */
  LocalVideoStreamErrorScreenCaptureWindowNotSupported = 20,
}

/**
 * Remote audio states.
 */
export enum RemoteAudioState {
  /**
   * 0: The local audio is in the initial state. The SDK reports this state in the case ofRemoteAudioStateReasonLocalMuted,RemoteAudioStateReasonRemoteMuted orRemoteAudioStateReasonRemoteOffline.
   */
  RemoteAudioStateStopped = 0,
  /**
   * 1: The first remote audio packet is received.
   */
  RemoteAudioStateStarting = 1,
  /**
   * 2: The remote audio stream is decoded and plays normally. The SDK reports this state in the case ofRemoteAudioStateReasonNetworkRecovery,RemoteAudioStateReasonLocalUnmuted orRemoteAudioStateReasonRemoteUnmuted.
   */
  RemoteAudioStateDecoding = 2,
  /**
   * 3: The remote audio is frozen. The SDK reports this state in the case ofRemoteAudioStateReasonNetworkCongestion.
   */
  RemoteAudioStateFrozen = 3,
  /**
   * 4: The remote audio fails to start. The SDK reports this state in the case ofRemoteAudioStateReasonInternal.
   */
  RemoteAudioStateFailed = 4,
}

/**
 * The reason for the remote audio state change.
 */
export enum RemoteAudioStateReason {
  /**
   * @ignore
   */
  RemoteAudioReasonInternal = 0,
  /**
   * @ignore
   */
  RemoteAudioReasonNetworkCongestion = 1,
  /**
   * @ignore
   */
  RemoteAudioReasonNetworkRecovery = 2,
  /**
   * @ignore
   */
  RemoteAudioReasonLocalMuted = 3,
  /**
   * @ignore
   */
  RemoteAudioReasonLocalUnmuted = 4,
  /**
   * @ignore
   */
  RemoteAudioReasonRemoteMuted = 5,
  /**
   * @ignore
   */
  RemoteAudioReasonRemoteUnmuted = 6,
  /**
   * @ignore
   */
  RemoteAudioReasonRemoteOffline = 7,
}

/**
 * The state of the remote video.
 */
export enum RemoteVideoState {
  /**
   * 0: The remote video is in the initial state. The SDK reports this state in the case ofRemoteVideoStateReasonLocalMuted,RemoteVideoStateReasonRemoteMuted, orRemoteVideoStateReasonRemoteOffline.
   */
  RemoteVideoStateStopped = 0,
  /**
   * 1: The first remote video packet is received.
   */
  RemoteVideoStateStarting = 1,
  /**
   * 2: The remote video stream is decoded and plays normally. The SDK reports this state in the case ofRemoteVideoStateReasonNetworkRecovery,RemoteVideoStateReasonLocalUnmuted, orRemoteVideoStateReasonRemoteUnmuted.
   */
  RemoteVideoStateDecoding = 2,
  /**
   * 3: The remote video is frozen. The SDK reports this state in the case ofRemoteVideoStateReasonNetworkCongestion.
   */
  RemoteVideoStateFrozen = 3,
  /**
   * 4: The remote video fails to start. The SDK reports this state in the case ofRemoteVideoStateReasonInternal.
   */
  RemoteVideoStateFailed = 4,
}

/**
 * The reason for the remote video state change.
 */
export enum RemoteVideoStateReason {
  /**
   * 0: The SDK reports this reason when the video state changes.
   */
  RemoteVideoStateReasonInternal = 0,
  /**
   * 1: Network congestion.
   */
  RemoteVideoStateReasonNetworkCongestion = 1,
  /**
   * 2: Network recovery.
   */
  RemoteVideoStateReasonNetworkRecovery = 2,
  /**
   * 3: The local user stops receiving the remote video stream or disables the video module.
   */
  RemoteVideoStateReasonLocalMuted = 3,
  /**
   * 4: The local user resumes receiving the remote video stream or enables the video module.
   */
  RemoteVideoStateReasonLocalUnmuted = 4,
  /**
   * 5: The remote user stops sending the video stream or disables the video module.
   */
  RemoteVideoStateReasonRemoteMuted = 5,
  /**
   * 6: The remote user resumes sending the video stream or enables the video module.
   */
  RemoteVideoStateReasonRemoteUnmuted = 6,
  /**
   * 7: The remote user leaves the channel.
   */
  RemoteVideoStateReasonRemoteOffline = 7,
  /**
   * @ignore
   */
  RemoteVideoStateReasonAudioFallback = 8,
  /**
   * @ignore
   */
  RemoteVideoStateReasonAudioFallbackRecovery = 9,
  /**
   * @ignore
   */
  RemoteVideoStateReasonVideoStreamTypeChangeToLow = 10,
  /**
   * @ignore
   */
  RemoteVideoStateReasonVideoStreamTypeChangeToHigh = 11,
  /**
   * @ignore
   */
  RemoteVideoStateReasonSdkInBackground = 12,
}

/**
 * @ignore
 */
export enum RemoteUserState {
  /**
   * @ignore
   */
  UserStateMuteAudio = 1 << 0,
  /**
   * @ignore
   */
  UserStateMuteVideo = 1 << 1,
  /**
   * @ignore
   */
  UserStateEnableVideo = 1 << 4,
  /**
   * @ignore
   */
  UserStateEnableLocalVideo = 1 << 8,
}

/**
 * @ignore
 */
export class VideoTrackInfo {
  /**
   * @ignore
   */
  isLocal?: boolean;
  /**
   * @ignore
   */
  ownerUid?: number;
  /**
   * @ignore
   */
  trackId?: number;
  /**
   * @ignore
   */
  channelId?: string;
  /**
   * @ignore
   */
  streamType?: VideoStreamType;
  /**
   * @ignore
   */
  codecType?: VideoCodecType;
  /**
   * @ignore
   */
  encodedFrameOnly?: boolean;
  /**
   * @ignore
   */
  sourceType?: VideoSourceType;
  /**
   * @ignore
   */
  observationPosition?: number;
}

/**
 * @ignore
 */
export enum RemoteVideoDownscaleLevel {
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevelNone = 0,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel1 = 1,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel2 = 2,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel3 = 3,
  /**
   * @ignore
   */
  RemoteVideoDownscaleLevel4 = 4,
}

/**
 * The volume information of users.
 */
export class AudioVolumeInfo {
  /**
   * The user ID.In the local user's callback,uid = 0.In the remote users' callback,uid is the user ID of a remote user whose instantaneous volume is one of the three highest.
   */
  uid?: number;
  /**
   * The volume of the user. The value ranges between 0 (the lowest volume) and 255 (the highest volume).
   */
  volume?: number;
  /**
   * Voice activity status of the local user.0: The local user is not speaking.1: The local user is speaking.Thevad parameter does not report the voice activity status of remote users. In a remote user's callback, the value ofvad is always 1.To use this parameter, you must setreportVad totrue when calling enableAudioVolumeIndication .
   */
  vad?: number;
  /**
   * The voice pitch (Hz) of the local user. The value ranges between 0.0 and 4000.0.ThevoicePitch parameter does not report the voice pitch of remote users. In the remote users' callback, the value ofvoicePitch is always 0.0.
   */
  voicePitch?: number;
}

/**
 * @ignore
 */
export class DeviceInfo {
  /**
   * @ignore
   */
  isLowLatencyAudioSupported?: boolean;
}

/**
 * @ignore
 */
export class Packet {
  /**
   * @ignore
   */
  buffer?: Uint8Array;
  /**
   * @ignore
   */
  size?: number;
}

/**
 * The audio sampling rate of the stream to be pushed to the CDN.
 */
export enum AudioSampleRateType {
  /**
   * 32000: 32 kHz
   */
  AudioSampleRate32000 = 32000,
  /**
   * 44100: 44.1 kHz
   */
  AudioSampleRate44100 = 44100,
  /**
   * 48000: (Default) 48 kHz
   */
  AudioSampleRate48000 = 48000,
}

/**
 * The codec type of the output video.
 */
export enum VideoCodecTypeForStream {
  /**
   * 1: (Default) H.264.
   */
  VideoCodecH264ForStream = 1,
  /**
   * 2: H.265.
   */
  VideoCodecH265ForStream = 2,
}

/**
 * Video codec profile types.
 */
export enum VideoCodecProfileType {
  /**
   * 66: Baseline video codec profile. Generally used for video calls on mobile phones.
   */
  VideoCodecProfileBaseline = 66,
  /**
   * 77: Main video codec profile. Generally used in mainstream electronics such as MP4 players, portable video players, PSP, and iPads.
   */
  VideoCodecProfileMain = 77,
  /**
   * 100: (Default) High video codec profile. Generally used in high-resolution live streaming or television.
   */
  VideoCodecProfileHigh = 100,
}

/**
 * Self-defined audio codec profile.
 */
export enum AudioCodecProfileType {
  /**
   * 0: (Default) LC-AAC.
   */
  AudioCodecProfileLcAac = 0,
  /**
   * 1: HE-AAC.
   */
  AudioCodecProfileHeAac = 1,
  /**
   * 2: HE-AAC v2.
   */
  AudioCodecProfileHeAacV2 = 2,
}

/**
 * Local audio statistics.
 */
export class LocalAudioStats {
  /**
   * The number of audio channels.
   */
  numChannels?: number;
  /**
   * The sampling rate (Hz) of sending the local user's audio stream.
   */
  sentSampleRate?: number;
  /**
   * The average bitrate (Kbps) of sending the local user's audio stream.
   */
  sentBitrate?: number;
  /**
   * The internal payload codec.
   */
  internalCodec?: number;
  /**
   * The packet loss rate (%) from the local client to the Agora server before applying the anti-packet loss strategies.
   */
  txPacketLossRate?: number;
  /**
   * The delay of the audio device module when playing or recording audio.
   */
  audioDeviceDelay?: number;
}

/**
 * States of the Media Push.
 */
export enum RtmpStreamPublishState {
  /**
   * 0: The Media Push has not started or has ended. This state is also triggered after you remove a RTMP or RTMPS stream from the CDN by calling removePublishStreamUrl .
   */
  RtmpStreamPublishStateIdle = 0,
  /**
   * 1: The SDK is connecting to Agora's streaming server and the CDN server. This state is triggered after you call the addPublishStreamUrl method.
   */
  RtmpStreamPublishStateConnecting = 1,
  /**
   * 2: The RTMP or RTMPS streaming publishes. The SDK successfully publishes the RTMP or RTMPS streaming and returns this state.
   */
  RtmpStreamPublishStateRunning = 2,
  /**
   * 3: The RTMP or RTMPS streaming is recovering. When exceptions occur to the CDN, or the streaming is interrupted, the SDK tries to resume RTMP or RTMPS streaming and returns this state.If the SDK successfully resumes the streaming,RtmpStreamPublishStateRunning(2) returns.If the streaming does not resume within 60 seconds or server errors occur,RtmpStreamPublishStateFailure(4) returns. You can also reconnect to the server by calling the removePublishStreamUrl and addPublishStreamUrl methods.
   */
  RtmpStreamPublishStateRecovering = 3,
  /**
   * 4: The RTMP or RTMPS streaming fails. See the errCode parameter for the detailed error information. You can also call the addPublishStreamUrl method to publish the RTMP or RTMPS streaming again.
   */
  RtmpStreamPublishStateFailure = 4,
  /**
   * 5: The SDK is disconnecting from the Agora streaming server and CDN. When you call removePublishStreamUrl or stopRtmpStream to stop the streaming normally, the SDK reports the streaming state asRtmpStreamPublishStateDisconnecting andRtmpStreamPublishStateIdle in sequence.
   */
  RtmpStreamPublishStateDisconnecting = 5,
}

/**
 * Error codes of the RTMP or RTMPS streaming.
 */
export enum RtmpStreamPublishErrorType {
  /**
   * 0: The RTMP or RTMPS streaming publishes successfully.
   */
  RtmpStreamPublishErrorOk = 0,
  /**
   * 1: Invalid argument used. Check the parameter setting. For example, if you do not call addPublishStreamUrl to set the transcoding parameters before calling setLiveTranscoding , the SDK returns this error.
   */
  RtmpStreamPublishErrorInvalidArgument = 1,
  /**
   * 2: The RTMP or RTMPS streaming is encrypted and cannot be published.
   */
  RtmpStreamPublishErrorEncryptedStreamNotAllowed = 2,
  /**
   * 3: Timeout for the RTMP or RTMPS streaming. Call the addPublishStreamUrl method to publish the streaming again.
   */
  RtmpStreamPublishErrorConnectionTimeout = 3,
  /**
   * 4: An error occurs in Agora's streaming server. Call the addPublishStreamUrl method to publish the streaming again.
   */
  RtmpStreamPublishErrorInternalServerError = 4,
  /**
   * 5: An error occurs in the CDN server.
   */
  RtmpStreamPublishErrorRtmpServerError = 5,
  /**
   * 6: The RTMP or RTMPS streaming publishing requests are too frequent.
   */
  RtmpStreamPublishErrorTooOften = 6,
  /**
   * 7: The host publishes more than 10 URLs. Delete the unnecessary URLs before adding new ones.
   */
  RtmpStreamPublishErrorReachLimit = 7,
  /**
   * 8: The host manipulates other hosts' URLs. For example, the host updates or stops other hosts' streams. Check your app logic.
   */
  RtmpStreamPublishErrorNotAuthorized = 8,
  /**
   * 9: Agora's server fails to find the RTMP or RTMPS streaming.
   */
  RtmpStreamPublishErrorStreamNotFound = 9,
  /**
   * 10: The format of the RTMP or RTMPS streaming URL is not supported. Check whether the URL format is correct.
   */
  RtmpStreamPublishErrorFormatNotSupported = 10,
  /**
   * 11: The user role is not host, so the user cannot use the CDN live streaming function. Check your app code logic.
   */
  RtmpStreamPublishErrorNotBroadcaster = 11,
  /**
   * 13: The updateRtmpTranscoding or setLiveTranscoding method is called to update the transcoding configuration in a scenario where there is streaming without transcoding. Check your application code logic.
   */
  RtmpStreamPublishErrorTranscodingNoMixStream = 13,
  /**
   * 14: Errors occurred in the host's network.
   */
  RtmpStreamPublishErrorNetDown = 14,
  /**
   * 15: Your App ID does not have permission to use the CDN live streaming function.
   */
  RtmpStreamPublishErrorInvalidAppid = 15,
  /**
   * @ignore
   */
  RtmpStreamPublishErrorInvalidPrivilege = 16,
  /**
   * 100: The streaming has been stopped normally. After you call removePublishStreamUrl to stop streaming, the SDK returns this value.
   */
  RtmpStreamUnpublishErrorOk = 100,
}

/**
 * Events during the media push.
 */
export enum RtmpStreamingEvent {
  /**
   * 1: An error occurs when you add a background image or a watermark image in the media push.
   */
  RtmpStreamingEventFailedLoadImage = 1,
  /**
   * 2: The streaming URL is already being used for CDN live streaming. If you want to start new streaming, use a new streaming URL.
   */
  RtmpStreamingEventUrlAlreadyInUse = 2,
  /**
   * 3: The feature is not supported.
   */
  RtmpStreamingEventAdvancedFeatureNotSupport = 3,
  /**
   * 4: Reserved.
   */
  RtmpStreamingEventRequestTooOften = 4,
}

/**
 * Image properties.
 * This class sets the properties of the watermark and background images in the live video.
 */
export class RtcImage {
  /**
   * The HTTP/HTTPS URL address of the image in the live video. The maximum length of this parameter is 1024 bytes.
   */
  url?: string;
  /**
   * The x coordinate (pixel) of the image on the video frame (taking the upper left corner of the video frame as the origin).
   */
  x?: number;
  /**
   * The y coordinate (pixel) of the image on the video frame (taking the upper left corner of the video frame as the origin).
   */
  y?: number;
  /**
   * The width (pixel) of the image on the video frame.
   */
  width?: number;
  /**
   * The height (pixel) of the image on the video frame.
   */
  height?: number;
  /**
   * The layer index of the watermark or background image. When you use the watermark array to add a watermark or multiple watermarks, you must pass a value tozOrder in the range [1,255]; otherwise, the SDK reports an error. In other cases,zOrder can optionally be passed in the range [0,255], with 0 being the default value. 0 means the bottom layer and 255 means the top layer.
   */
  zOrder?: number;
  /**
   * The transparency of the watermark or background image. The value ranges between 0.0 and 1.0:0.0: Completely transparent.1.0: (Default) Opaque.
   */
  alpha?: number;
}

/**
 * The configuration for advanced features of the RTMP or RTMPS streaming with transcoding.
 * If you want to enable the advanced features of streaming with transcoding, contact.
 */
export class LiveStreamAdvancedFeature {
  /**
   * The feature names, including LBHQ (high-quality video with a lower bitrate) and VEO (optimized video encoder).
   */
  featureName?: string;
  /**
   * Whether to enable the advanced features of streaming with transcoding:true: Enable the advanced features.false: (Default) Do not enable the advanced features.
   */
  opened?: boolean;
}

/**
 * Connection states.
 */
export enum ConnectionStateType {
  /**
   * 1: The SDK is disconnected from the Agora edge server. The state indicates the SDK is in one of the following phases:Theinitial state before calling thejoinChannelWithOptions method.The app calls the leaveChannel method.
   */
  ConnectionStateDisconnected = 1,
  /**
   * 2: The SDK is connecting to the Agora edge server. This state indicates that the SDK is establishing a connection with the specified channel after the app callsjoinChannelWithOptions.If the SDK successfully joins the channel, it triggers the onConnectionStateChanged callback and the connection state switches toConnectionStateConnected.After the connection is established, the SDK also initializes the media and triggers onJoinChannelSuccess when everything is ready.
   */
  ConnectionStateConnecting = 2,
  /**
   * 3: The SDK is connected to the Agora edge server. This state also indicates that the user has joined a channel and can now publish or subscribe to a media stream in the channel. If the connection to the channel is lost because, for example, if the network is down or switched, the SDK automatically tries to reconnect and triggers onConnectionStateChanged callback, notifying that the current network state becomesConnectionStateReconnecting.
   */
  ConnectionStateConnected = 3,
  /**
   * 4: The SDK keeps reconnecting to the Agora edge server. The SDK keeps rejoining the channel after being disconnected from a joined channel because of network issues.If the SDK cannot rejoin the channel within 10 seconds, it triggers onConnectionLost , stays in theConnectionStateReconnecting state, and keeps rejoining the channel.If the SDK fails to rejoin the channel 20 minutes after being disconnected from the Agora edge server, the SDK triggers the onConnectionStateChanged callback, switches to theConnectionStateFailed state, and stops rejoining the channel.
   */
  ConnectionStateReconnecting = 4,
  /**
   * 5: The SDK fails to connect to the Agora edge server or join the channel. This state indicates that the SDK stops trying to rejoin the channel. You must call leaveChannel to leave the channel.You can calljoinChannelWithOptions to rejoin the channel.If the SDK is banned from joining the channel by the Agora edge server through the RESTful API, the SDK triggers the onConnectionStateChanged callback.
   */
  ConnectionStateFailed = 5,
}

/**
 * Transcoding configurations of each host.
 */
export class TranscodingUser {
  /**
   * The user ID of the host.
   */
  uid?: number;
  /**
   * The x coordinate (pixel) of the host's video on the output video frame (taking the upper left corner of the video frame as the origin). The value range is [0, width], where width is thewidth set in LiveTranscoding .
   */
  x?: number;
  /**
   * The y coordinate (pixel) of the host's video on the output video frame (taking the upper left corner of the video frame as the origin). The value range is [0, height], where height is theheight set in LiveTranscoding .
   */
  y?: number;
  /**
   * The width (pixel) of the host's video.
   */
  width?: number;
  /**
   * The height (pixel) of the host's video.
   */
  height?: number;
  /**
   * The layer index number of the host's video. The value range is [0,100].0: (Default) The host's video is the bottom layer.100: The host's video is the top layer.If the value is less than 0 or greater than 100, the errorERR_INVALID_ARGUMENT is returned.Starting from v2.3, setting zOrder to 0 is supported.
   */
  zOrder?: number;
  /**
   * The transparency of the host's video. The value range is [0.0,1.0].0.0: Completely transparent.1.0: (Default) Opaque.
   */
  alpha?: number;
  /**
   * The audio channel used by the host's audio in the output audio. The default value is 0, and the value range is [0, 5].0: (Recommended) The defaut setting, which supports dual channels at most and depends on the upstream of the host.1: The host's audio uses the FL audio channel. If the host's upstream uses multiple audio channels, the Agora server mixes them into mono first.2: The host's audio uses the FC audio channel. If the host's upstream uses multiple audio channels, the Agora server mixes them into mono first.3: The host's audio uses the FR audio channel. If the host's upstream uses multiple audio channels, the Agora server mixes them into mono first.4: The host's audio uses the BL audio channel. If the host's upstream uses multiple audio channels, the Agora server mixes them into mono first.5: The host's audio uses the BR audio channel. If the host's upstream uses multiple audio channels, the Agora server mixes them into mono first.0xFF or a value greater than5: The host's audio is muted, and the Agora server removes the host's audio.If the value is not0, a special player is required.
   */
  audioChannel?: number;
}

/**
 * Transcoding configurations for Media Push.
 */
export class LiveTranscoding {
  /**
   * The width of the video in pixels. The default value is 360.When pushing video streams to the CDN, the value range ofwidth is [64,1920]. If the value is less than 64, Agora server automatically adjusts it to 64; if the value is greater than 1920, Agora server automatically adjusts it to 1920.When pushing audio streams to the CDN, setwidth andheight as 0.
   */
  width?: number;
  /**
   * The height of the video in pixels. The default value is 640.When pushing video streams to the CDN, the value range ofheight is [64,1080]. If the value is less than 64, Agora server automatically adjusts it to 64; if the value is greater than 1080, Agora server automatically adjusts it to 1080.When pushing audio streams to the CDN, setwidth andheight as 0.
   */
  height?: number;
  /**
   * Bitrate of the output video stream for Media Push in Kbps. The default value is 400 Kbps.
   */
  videoBitrate?: number;
  /**
   * Frame rate (in fps) of the output video stream set for Media Push. The default value is 15 , and the value range is (0,30].The Agora server adjusts any value over 30 to 30.
   */
  videoFramerate?: number;
  /**
   * DeprecatedThis parameter is deprecated.Latency mode:true: Low latency with unassured quality.false: (Default) High latency with assured quality.
   */
  lowLatency?: boolean;
  /**
   * GOP (Group of Pictures) in fps of the video frames for Media Push. The default value is 30.
   */
  videoGop?: number;
  /**
   * Video codec profile type for Media Push. Set it as 66, 77, or 100 (default). See VideoCodecProfileType for details.If you set this parameter to any other value, Agora adjusts it to the default value.
   */
  videoCodecProfile?: VideoCodecProfileType;
  /**
   * The background color in RGB hex value. Value only. Do not include a preceeding #. For example, 0xFFB6C1 (light pink). The default value is 0x000000 (black).
   */
  backgroundColor?: number;
  /**
   * Video codec profile types for Media Push. See VideoCodecTypeForStream .
   */
  videoCodecType?: VideoCodecTypeForStream;
  /**
   * The number of users in the video mixing. The value range is [0,17].
   */
  userCount?: number;
  /**
   * Manages the user layout configuration in the Media Push. Agora supports a maximum of 17 transcoding users in a Media Push channel. See TranscodingUser .
   */
  transcodingUsers?: TranscodingUser[];
  /**
   * Reserved property. Extra user-defined information to send SEI for the H.264/H.265 video stream to the CDN client. Maximum length: 4096 bytes. For more information on SEI, seeSEI-related questions.
   */
  transcodingExtraInfo?: string;
  /**
   * DeprecatedThis parameter is deprecated.The metadata sent to the CDN client.
   */
  metadata?: string;
  /**
   * The watermark on the live video. The image format needs to be PNG. See RtcImage .You can add one watermark, or add multiple watermarks using an array.This parameter is used withwatermarkCount.
   */
  watermark?: RtcImage[];
  /**
   * The number of watermarks on the live video. The total number of watermarks and background images can range from 0 to 10. This parameter is used withwatermark.
   */
  watermarkCount?: number;
  /**
   * The number of background images on the live video. The image format needs to be PNG. See RtcImage .You can add a background image or use an array to add multiple background images. This parameter is used withbackgroundImageCount.
   */
  backgroundImage?: RtcImage[];
  /**
   * The number of background images on the live video. The total number of watermarks and background images can range from 0 to 10. This parameter is used withbackgroundImage.
   */
  backgroundImageCount?: number;
  /**
   * The audio sampling rate (Hz) of the output media stream. See AudioSampleRateType .
   */
  audioSampleRate?: AudioSampleRateType;
  /**
   * Bitrate (Kbps) of the audio output stream for Media Push. The default value is 48, and the highest value is 128.
   */
  audioBitrate?: number;
  /**
   * The number of audio channels for Media Push. Agora recommends choosing 1 (mono), or 2 (stereo) audio channels. Special players are required if you choose 3, 4, or 5.1: (Default) Mono.2: Stereo.3: Three audio channels.4: Four audio channels.5: Five audio channels.
   */
  audioChannels?: number;
  /**
   * Audio codec profile type for Media Push. See AudioCodecProfileType .
   */
  audioCodecProfile?: AudioCodecProfileType;
  /**
   * Advanced features of the Media Push with transcoding. See LiveStreamAdvancedFeature .
   */
  advancedFeatures?: LiveStreamAdvancedFeature[];
  /**
   * The number of enabled advanced features. The default value is 0.
   */
  advancedFeatureCount?: number;
}

/**
 * The video streams for the video mixing on the local client.
 */
export class TranscodingVideoStream {
  /**
   * The source type of video for the video mixing on the local client. See VideoSourceType .
   */
  sourceType?: MediaSourceType;
  /**
   * The ID of the remote user.Use this parameter only when the source type of the video for the video mixing on the local client isVideoSourceRemote.
   */
  remoteUserUid?: number;
  /**
   * The URL of the image.Use this parameter only when the source type of the video for the video mixing on the local client is
   */
  imageUrl?: string;
  /**
   * The horizontal displacement of the top-left corner of the video for the video mixing on the client relative to the top-left corner (origin) of the canvas for this video mixing.
   */
  x?: number;
  /**
   * The vertical displacement of the top-left corner of the video for the video mixing on the client relative to the top-left corner (origin) of the canvas for this video mixing.
   */
  y?: number;
  /**
   * The width (px) of the video for the video mixing on the local client.
   */
  width?: number;
  /**
   * The height (px) of the video for the video mixing on the local client.
   */
  height?: number;
  /**
   * The number of the layer to which the video for the video mixing on the local client belongs. The value range is [0,100].0: (Default) The layer is at the bottom.100: The layer is at the top.
   */
  zOrder?: number;
  /**
   * The transparency of the video for the video mixing on the local client. The value range is [0.0,1.0]. 0.0 means the transparency is completely transparent. 1.0 means the transparency is opaque.
   */
  alpha?: number;
  /**
   * Whether to mirror the video for the video mixing on the local client.true: Mirror the captured video.false: (Default) Do not mirror the captured video.The paramter only works for videos with the source type
   */
  mirror?: boolean;
}

/**
 * The configuration of the video mixing on the local client.
 */
export class LocalTranscoderConfiguration {
  /**
   * The number of the video streams for the video mixing on the local client.
   */
  streamCount?: number;
  /**
   * The video streams for the video mixing on the local client. See TranscodingVideoStream .
   */
  VideoInputStreams?: TranscodingVideoStream[];
  /**
   * The encoding configuration of the mixed video stream after the video mixing on the local client. See VideoEncoderConfiguration .
   */
  videoOutputConfiguration?: VideoEncoderConfiguration;
}

/**
 * Configurations of the last-mile network test.
 */
export class LastmileProbeConfig {
  /**
   * Sets whether to test the uplink network. Some users, for example, the audience members in a LIVE_BROADCASTING channel, do not need such a test.true: Test.false: Not test.
   */
  probeUplink?: boolean;
  /**
   * Sets whether to test the downlink network:true: Test.false: Not test.
   */
  probeDownlink?: boolean;
  /**
   * The expected maximum uplink bitrate (bps) of the local user. The value range is [100000, 5000000]. Agora recommends setVideoEncoderConfiguration referring to to set the value.
   */
  expectedUplinkBitrate?: number;
  /**
   * The expected maximum downlink bitrate (bps) of the local user. The value range is [100000,5000000].
   */
  expectedDownlinkBitrate?: number;
}

/**
 * The status of the last-mile probe test.
 */
export enum LastmileProbeResultState {
  /**
   * 1: The last-mile network probe test is complete.
   */
  LastmileProbeResultComplete = 1,
  /**
   * 2: The last-mile network probe test is incomplete because the bandwidth estimation is not available due to limited test resources. One possible reason is that testing resources are temporarily limited.
   */
  LastmileProbeResultIncompleteNoBwe = 2,
  /**
   * 3: The last-mile network probe test is not carried out. Probably due to poor network conditions.
   */
  LastmileProbeResultUnavailable = 3,
}

/**
 * Results of the uplink or downlink last-mile network test.
 */
export class LastmileProbeOneWayResult {
  /**
   * The packet loss rate (%).
   */
  packetLossRate?: number;
  /**
   * The network jitter (ms).
   */
  jitter?: number;
  /**
   * The estimated available bandwidth (bps).
   */
  availableBandwidth?: number;
}

/**
 * Results of the uplink and downlink last-mile network tests.
 */
export class LastmileProbeResult {
  /**
   * The status of the last-mile probe test. See LastmileProbeResultState .
   */
  state?: LastmileProbeResultState;
  /**
   * Results of the uplink last-mile network test. See LastmileProbeOneWayResult .
   */
  uplinkReport?: LastmileProbeOneWayResult;
  /**
   * Results of the downlink last-mile network test. See LastmileProbeOneWayResult .
   */
  downlinkReport?: LastmileProbeOneWayResult;
  /**
   * The round-trip time (ms).
   */
  rtt?: number;
}

/**
 * Reasons causing the change of the connection state.
 */
export enum ConnectionChangedReasonType {
  /**
   * 0: The SDK is connecting to the Agora edge server.
   */
  ConnectionChangedConnecting = 0,
  /**
   * 1: The SDK has joined the channel successfully.
   */
  ConnectionChangedJoinSuccess = 1,
  /**
   * 2: The connection between the SDK and the Agora edge server is interrupted.
   */
  ConnectionChangedInterrupted = 2,
  /**
   * 3: The connection between the SDK and the Agora edge server is banned by the Agora edge server. This error occurs when the user is kicked out of the channel by the server.
   */
  ConnectionChangedBannedByServer = 3,
  /**
   * 4: The SDK fails to join the channel. When the SDK fails to join the channel for more than 20 minutes, this error occurs and the SDK stops reconnecting to the channel.
   */
  ConnectionChangedJoinFailed = 4,
  /**
   * 5: The SDK has left the channel.
   */
  ConnectionChangedLeaveChannel = 5,
  /**
   * 6: The connection failed because the App ID is not valid. Please rejoin the channel with a valid App ID.
   */
  ConnectionChangedInvalidAppId = 6,
  /**
   * 7: The connection failed since channel name is not valid. Please rejoin the channel with a valid channel name.
   */
  ConnectionChangedInvalidChannelName = 7,
  /**
   * 8: The connection failed because the token is not valid. Typical reasons include:The App Certificate for the project is enabled in Agora Console, but you do not use a token when joining the channel. If you enable the App Certificate, you must use a token to join the channel.The uid specified when callingjoinChannelWithOptions to join the channel is inconsistent with the uid passed in when generating the token.
   */
  ConnectionChangedInvalidToken = 8,
  /**
   * 9: The connection failed since token is expired.
   */
  ConnectionChangedTokenExpired = 9,
  /**
   * 10: The connection is rejected by server. Typical reasons include:The user is already in the channel and still calls a method, for example,joinChannelWithOptions, to join the channel. Stop calling this method to clear this error.The user tries to join the channel when conducting a pre-call test. The user needs to call the channel after the call test ends.
   */
  ConnectionChangedRejectedByServer = 10,
  /**
   * 11: The connection state changed to reconnecting because the SDK has set a proxy server.
   */
  ConnectionChangedSettingProxyServer = 11,
  /**
   * 12: The connection state changed because the token is renewed.
   */
  ConnectionChangedRenewToken = 12,
  /**
   * 13: The IP address of the client has changed, possibly because the network type, IP address, or port has been changed.
   */
  ConnectionChangedClientIpAddressChanged = 13,
  /**
   * 14: Timeout for the keep-alive of the connection between the SDK and the Agora edge server. The connection state changes to .
   */
  ConnectionChangedKeepAliveTimeout = 14,
  /**
   * 15: The SDK has rejoined the channel successfully.
   */
  ConnectionChangedRejoinSuccess = 15,
  /**
   * 16: The connection between the SDK and the server is lost.
   */
  ConnectionChangedLost = 16,
  /**
   * 17: The connection state changes due to the echo test.
   */
  ConnectionChangedEchoTest = 17,
  /**
   * @ignore
   */
  ConnectionChangedClientIpAddressChangedByUser = 18,
  /**
   * @ignore
   */
  ConnectionChangedSameUidLogin = 19,
  /**
   * @ignore
   */
  ConnectionChangedTooManyBroadcasters = 20,
}

/**
 * @ignore
 */
export enum ClientRoleChangeFailedReason {
  /**
   * @ignore
   */
  ClientRoleChangeFailedTooManyBroadcasters = 1,
  /**
   * @ignore
   */
  ClientRoleChangeFailedNotAuthorized = 2,
  /**
   * @ignore
   */
  ClientRoleChangeFailedRequestTimeOut = 3,
  /**
   * @ignore
   */
  ClientRoleChangeFailedConnectionFailed = 4,
}

/**
 * @ignore
 */
export enum WlaccMessageReason {
  /**
   * @ignore
   */
  WlaccMessageReasonWeakSignal = 0,
  /**
   * @ignore
   */
  WlaccMessageReasonChannelCongestion = 1,
}

/**
 * @ignore
 */
export enum WlaccSuggestAction {
  /**
   * @ignore
   */
  WlaccSuggestActionCloseToWifi = 0,
  /**
   * @ignore
   */
  WlaccSuggestActionConnectSsid = 1,
  /**
   * @ignore
   */
  WlaccSuggestActionCheck5g = 2,
  /**
   * @ignore
   */
  WlaccSuggestActionModifySsid = 3,
}

/**
 * @ignore
 */
export class WlAccStats {
  /**
   * @ignore
   */
  e2eDelayPercent?: number;
  /**
   * @ignore
   */
  frozenRatioPercent?: number;
  /**
   * @ignore
   */
  lossRatePercent?: number;
}

/**
 * Network types.
 */
export enum NetworkType {
  /**
   * -1: The network type is unknown.
   */
  NetworkTypeUnknown = -1,
  /**
   * 0: The SDK disconnects from the network.
   */
  NetworkTypeDisconnected = 0,
  /**
   * 1: The network type is LAN.
   */
  NetworkTypeLan = 1,
  /**
   * 2: The network type is Wi-Fi (including hotspots).
   */
  NetworkTypeWifi = 2,
  /**
   * 3: The network type is mobile 2G.
   */
  NetworkTypeMobile2g = 3,
  /**
   * 4: The network type is mobile 3G.
   */
  NetworkTypeMobile3g = 4,
  /**
   * 5: The network type is mobile 4G.
   */
  NetworkTypeMobile4g = 5,
}

/**
 * @ignore
 */
export enum VideoViewSetupMode {
  /**
   * @ignore
   */
  VideoViewSetupReplace = 0,
  /**
   * @ignore
   */
  VideoViewSetupAdd = 1,
  /**
   * @ignore
   */
  VideoViewSetupRemove = 2,
}

/**
 * Attributes of video canvas object.
 */
export class VideoCanvas {
  /**
   * Video display window.
   */
  view?: any;
  /**
   * The rendering mode of the video. See RenderModeType .
   */
  renderMode?: RenderModeType;
  /**
   * The mirror mode of the view. See VideoMirrorModeType .For the mirror mode of the local video view: If you use a front camera, the SDK enables the mirror mode by default; if you use a rear camera, the SDK disables the mirror mode by default.For the remote user: The mirror mode is disabled by default.
   */
  mirrorMode?: VideoMirrorModeType;
  /**
   * The user ID.
   */
  uid?: number;
  /**
   * @ignore
   */
  isScreenView?: boolean;
  /**
   * @ignore
   */
  priv?: number[];
  /**
   * @ignore
   */
  priv_size?: number;
  /**
   * The type of the video source, see VideoSourceType .
   */
  sourceType?: VideoSourceType;
  /**
   * @ignore
   */
  cropArea?: Rectangle;
  /**
   * @ignore
   */
  setupMode?: VideoViewSetupMode;
}

/**
 * The contrast level.
 */
export enum LighteningContrastLevel {
  /**
   * @ignore
   */
  LighteningContrastLow = 0,
  /**
   * 1: (Default) Normal contrast level.
   */
  LighteningContrastNormal = 1,
  /**
   * 2: High contrast level.
   */
  LighteningContrastHigh = 2,
}

/**
 * Image enhancement options.
 */
export class BeautyOptions {
  /**
   * The contrast level, used with thelighteningLevel parameter. The larger the value, the greater the contrast between light and dark.
   */
  lighteningContrastLevel?: LighteningContrastLevel;
  /**
   * The brightening level, in the range [0.0,1.0], where 0.0 means the original brightening. The default value is
   */
  lighteningLevel?: number;
  /**
   * The smoothness level, in the range [0.0,1.0], where 0.0 means the original smoothness. The default value is
   */
  smoothnessLevel?: number;
  /**
   * The redness level, in the range [0.0,1.0], where 0.0 means the original redness. The default value is
   */
  rednessLevel?: number;
  /**
   * The sharpness level, in the range [0.0,1.0], where 0.0 means the original sharpness. The default value is
   */
  sharpnessLevel?: number;
}

/**
 * @ignore
 */
export enum LowLightEnhanceMode {
  /**
   * @ignore
   */
  LowLightEnhanceAuto = 0,
  /**
   * @ignore
   */
  LowLightEnhanceManual = 1,
}

/**
 * @ignore
 */
export enum LowLightEnhanceLevel {
  /**
   * @ignore
   */
  LowLightEnhanceLevelHighQuality = 0,
  /**
   * @ignore
   */
  LowLightEnhanceLevelFast = 1,
}

/**
 * @ignore
 */
export class LowlightEnhanceOptions {
  /**
   * @ignore
   */
  mode?: LowLightEnhanceMode;
  /**
   * @ignore
   */
  level?: LowLightEnhanceLevel;
}

/**
 * @ignore
 */
export enum VideoDenoiserMode {
  /**
   * @ignore
   */
  VideoDenoiserAuto = 0,
  /**
   * @ignore
   */
  VideoDenoiserManual = 1,
}

/**
 * @ignore
 */
export enum VideoDenoiserLevel {
  /**
   * @ignore
   */
  VideoDenoiserLevelHighQuality = 0,
  /**
   * @ignore
   */
  VideoDenoiserLevelFast = 1,
  /**
   * @ignore
   */
  VideoDenoiserLevelStrength = 2,
}

/**
 * @ignore
 */
export class VideoDenoiserOptions {
  /**
   * @ignore
   */
  mode?: VideoDenoiserMode;
  /**
   * @ignore
   */
  level?: VideoDenoiserLevel;
}

/**
 * @ignore
 */
export class ColorEnhanceOptions {
  /**
   * @ignore
   */
  strengthLevel?: number;
  /**
   * @ignore
   */
  skinProtectLevel?: number;
}

/**
 * The type of the custom background image.
 */
export enum BackgroundSourceType {
  /**
   * 1: (Default) The background image is a solid color.
   */
  BackgroundColor = 1,
  /**
   * The background image is a file in PNG or JPG format.
   */
  BackgroundImg = 2,
  /**
   * The background image is the blurred background.
   */
  BackgroundBlur = 3,
}

/**
 * The degree of blurring applied to the custom background image.
 */
export enum BackgroundBlurDegree {
  /**
   * 1: The degree of blurring applied to the custom background image is low. The user can almost see the background clearly.
   */
  BlurDegreeLow = 1,
  /**
   * The degree of blurring applied to the custom background image is medium. It is difficult for the user to recognize details in the background.
   */
  BlurDegreeMedium = 2,
  /**
   * (Default) The degree of blurring applied to the custom background image is high. The user can barely see any distinguishing features in the background.
   */
  BlurDegreeHigh = 3,
}

/**
 * The custom background image.
 */
export class VirtualBackgroundSource {
  /**
   * @ignore
   */
  background_source_type?: BackgroundSourceType;
  /**
   * The color of the custom background image. The format is a hexadecimal integer defined by RGB, without the # sign, such as 0xFFB6C1 for light pink. The default value is 0xFFFFFF, which signifies white. The value range is [0x000000, 0xffffff]. If the value is invalid, the SDK replaces the original background image with a white background image.This parameter takes effect only when the type of the custom background image isBackgroundColor.
   */
  color?: number;
  /**
   * The local absolute path of the custom background image. PNG and JPG formats are supported. If the path is invalid, the SDK replaces the original background image with a white background image.This parameter takes effect only when the type of the custom background image isBackgroundImg.
   */
  source?: string;
  /**
   * The degree of blurring applied to the custom background image.This parameter takes effect only when the type of the custom background image isBackgroundBlur.
   */
  blur_degree?: BackgroundBlurDegree;
}

/**
 * @ignore
 */
export enum SegModelType {
  /**
   * @ignore
   */
  SegModelAi = 1,
  /**
   * @ignore
   */
  SegModelGreen = 2,
}

/**
 * @ignore
 */
export class SegmentationProperty {
  /**
   * @ignore
   */
  modelType?: SegModelType;
  /**
   * @ignore
   */
  greenCapacity?: number;
}

/**
 * The options for SDK preset voice beautifier effects.
 */
export enum VoiceBeautifierPreset {
  /**
   * Turn off voice beautifier effects and use the original voice.
   */
  VoiceBeautifierOff = 0x00000000,
  /**
   * A more magnetic voice.Agora recommends using this enumerator to process a male-sounding voice; otherwise, you may experience vocal distortion.
   */
  ChatBeautifierMagnetic = 0x01010100,
  /**
   * A fresher voice.Agora recommends using this enumerator to process a female-sounding voice; otherwise, you may experience vocal distortion.
   */
  ChatBeautifierFresh = 0x01010200,
  /**
   * A more vital voice.Agora recommends using this enumerator to process a female-sounding voice; otherwise, you may experience vocal distortion.
   */
  ChatBeautifierVitality = 0x01010300,
  /**
   * Singing beautifier effect.If you call setVoiceBeautifierPreset (SingingBeautifier), you can beautify a male-sounding voice and add a reverberation effect that sounds like singing in a small room. Agora recommends using this enumerator to process a male-sounding voice; otherwise, you might experience vocal distortion.If you call setVoiceBeautifierParameters (SingingBeautifier, param1, param2), you can beautify a male or female-sounding voice and add a reverberation effect.
   */
  SingingBeautifier = 0x01020100,
  /**
   * A more vigorous voice.
   */
  TimbreTransformationVigorous = 0x01030100,
  /**
   * A deep voice.
   */
  TimbreTransformationDeep = 0x01030200,
  /**
   * A mellower voice.
   */
  TimbreTransformationMellow = 0x01030300,
  /**
   * Falsetto.
   */
  TimbreTransformationFalsetto = 0x01030400,
  /**
   * A fuller voice.
   */
  TimbreTransformationFull = 0x01030500,
  /**
   * A clearer voice.
   */
  TimbreTransformationClear = 0x01030600,
  /**
   * A more resounding voice.
   */
  TimbreTransformationResounding = 0x01030700,
  /**
   * A more ringing voice.
   */
  TimbreTransformationRinging = 0x01030800,
  /**
   * A ultra-high quality voice, which makes the audio clearer and restores more details.To achieve better audio effect quality, Agora recommends that you set theprofile of toAudioProfileMusicHighQuality(4) orAudioProfileMusicHighQualityStereo(5) andscenario toAudioScenarioGameStreaming(3) before calling setVoiceBeautifierPreset .If you have an audio capturing device that can already restore audio details to a high degree, Agora recommends that you do not enable ultra-high quality; otherwise, the SDK may over-restore audio details, and you may not hear the anticipated voice effect.
   */
  UltraHighQualityVoice = 0x01040100,
}

/**
 * Preset audio effects.
 * To get better audio effects, Agora recommends calling setAudioProfile and setting theprofile parameter as recommended below before using the preset audio effects.
 */
export enum AudioEffectPreset {
  /**
   * Turn off voice effects, that is, use the original voice.
   */
  AudioEffectOff = 0x00000000,
  /**
   * The voice effect typical of a KTV venue.
   */
  RoomAcousticsKtv = 0x02010100,
  /**
   * The voice effect typical of a concert hall.
   */
  RoomAcousticsVocalConcert = 0x02010200,
  /**
   * The voice effect typical of a recording studio.
   */
  RoomAcousticsStudio = 0x02010300,
  /**
   * The voice effect typical of a vintage phonograph.
   */
  RoomAcousticsPhonograph = 0x02010400,
  /**
   * The virtual stereo effect, which renders monophonic audio as stereo audio.
   */
  RoomAcousticsVirtualStereo = 0x02010500,
  /**
   * A more spatial voice effect.
   */
  RoomAcousticsSpacial = 0x02010600,
  /**
   * A more ethereal voice effect.
   */
  RoomAcousticsEthereal = 0x02010700,
  /**
   * A 3D voice effect that makes the voice appear to be moving around the user. The default cycle period is 10 seconds. After setting this effect, you can call setAudioEffectParameters to modify the movement period.If the 3D voice effect is enabled, users need to use stereo audio playback devices to hear the anticipated voice effect.
   */
  RoomAcoustics3dVoice = 0x02010800,
  /**
   * @ignore
   */
  RoomAcousticsVirtualSurroundSound = 0x02010900,
  /**
   * A middle-aged man's voice.Agora recommends using this preset to process a male-sounding voice; otherwise, you may not hear the anticipated voice effect.
   */
  VoiceChangerEffectUncle = 0x02020100,
  /**
   * An older man's voice.Agora recommends using this preset to process a male-sounding voice; otherwise, you may not hear the anticipated voice effect.
   */
  VoiceChangerEffectOldman = 0x02020200,
  /**
   * A boy's voice.Agora recommends using this preset to process a male-sounding voice; otherwise, you may not hear the anticipated voice effect.
   */
  VoiceChangerEffectBoy = 0x02020300,
  /**
   * A young woman's voice.Agora recommends using this preset to process a female-sounding voice; otherwise, you may not hear the anticipated voice effect.
   */
  VoiceChangerEffectSister = 0x02020400,
  /**
   * A girl's voice.Agora recommends using this preset to process a female-sounding voice; otherwise, you may not hear the anticipated voice effect.
   */
  VoiceChangerEffectGirl = 0x02020500,
  /**
   * The voice of Pig King, a character in Journey to the West who has a voice like a growling bear.
   */
  VoiceChangerEffectPigking = 0x02020600,
  /**
   * The Hulk's voice.
   */
  VoiceChangerEffectHulk = 0x02020700,
  /**
   * The voice effect typical of R&B music.
   */
  StyleTransformationRnb = 0x02030100,
  /**
   * The voice effect typical of popular music.
   */
  StyleTransformationPopular = 0x02030200,
  /**
   * A pitch correction effect that corrects the user's pitch based on the pitch of the natural C major scale. After setting this voice effect, you can call setAudioEffectParameters to adjust the basic mode of tuning and the pitch of the main tone.
   */
  PitchCorrection = 0x02040100,
}

/**
 * The options for SDK preset voice conversion effects.
 */
export enum VoiceConversionPreset {
  /**
   * Turn off voice conversion effects and use the original voice.
   */
  VoiceConversionOff = 0x00000000,
  /**
   * A gender-neutral voice. To avoid audio distortion, ensure that you use this enumerator to process a female-sounding voice.
   */
  VoiceChangerNeutral = 0x03010100,
  /**
   * A sweet voice. To avoid audio distortion, ensure that you use this enumerator to process a female-sounding voice.
   */
  VoiceChangerSweet = 0x03010200,
  /**
   * A steady voice. To avoid audio distortion, ensure that you use this enumerator to process a male-sounding voice.
   */
  VoiceChangerSolid = 0x03010300,
  /**
   * A deep voice. To avoid audio distortion, ensure that you use this enumerator to process a male-sounding voice.
   */
  VoiceChangerBass = 0x03010400,
}

/**
 * @ignore
 */
export class ScreenCaptureParameters {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  frameRate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  captureMouseCursor?: boolean;
  /**
   * @ignore
   */
  windowFocus?: boolean;
  /**
   * @ignore
   */
  excludeWindowList?: any[];
  /**
   * @ignore
   */
  excludeWindowCount?: number;
  /**
   * @ignore
   */
  highLightWidth?: number;
  /**
   * @ignore
   */
  highLightColor?: number;
  /**
   * @ignore
   */
  enableHighLight?: boolean;
}

/**
 * Recording quality.
 */
export enum AudioRecordingQualityType {
  /**
   * 0: Low quality. The sample rate is 32 kHz, and the file size is around 1.2 MB after 10 minutes of recording.
   */
  AudioRecordingQualityLow = 0,
  /**
   * 1: Medium quality. The sample rate is 32 kHz, and the file size is around 2 MB after 10 minutes of recording.
   */
  AudioRecordingQualityMedium = 1,
  /**
   * 2: High quality. The sample rate is 32 kHz, and the file size is around 3.75 MB after 10 minutes of recording.
   */
  AudioRecordingQualityHigh = 2,
  /**
   * @ignore
   */
  AudioRecordingQualityUltraHigh = 3,
}

/**
 * Recording content. Set in startAudioRecording .
 */
export enum AudioFileRecordingType {
  /**
   * 1: Only records the audio of the local user.
   */
  AudioFileRecordingMic = 1,
  /**
   * 2: Only records the audio of all remote users.
   */
  AudioFileRecordingPlayback = 2,
  /**
   * 3: Records the mixed audio of the local and all remote users.
   */
  AudioFileRecordingMixed = 3,
}

/**
 * @ignore
 */
export enum AudioEncodedFrameObserverPosition {
  /**
   * @ignore
   */
  AudioEncodedFrameObserverPositionRecord = 1,
  /**
   * @ignore
   */
  AudioEncodedFrameObserverPositionPlayback = 2,
  /**
   * @ignore
   */
  AudioEncodedFrameObserverPositionMixed = 3,
}

/**
 * Recording configuration.
 */
export class AudioRecordingConfiguration {
  /**
   * The absolute path (including the filename extensions) of the recording file. For example:C:\music\audio.mp4.Ensure that the path for the recording file exists and is writable.
   */
  filePath?: string;
  /**
   * Whether to encode the audio data:true: Encode audio data in AAC.false: (Default) Do not encode audio data, but save the recorded audio data directly.
   */
  encode?: boolean;
  /**
   * Recording sample rate (Hz).16000(Default) 320004410048000If you set this parameter to 44100 or 48000, Agora recommends recording WAV files, or AAC files withquality to be AgoraAudioRecordingQualityMedium or AgoraAudioRecordingQualityHigh for better recording quality.
   */
  sampleRate?: number;
  /**
   *
   */
  fileRecordingType?: AudioFileRecordingType;
  /**
   * Recording quality. See AudioRecordingQualityType .Note: This parameter applies to AAC files only.
   */
  quality?: AudioRecordingQualityType;
  /**
   * @ignore
   */
  recordingChannel?: number;
}

/**
 * @ignore
 */
export class AudioEncodedFrameObserverConfig {
  /**
   * @ignore
   */
  postionType?: AudioEncodedFrameObserverPosition;
  /**
   * @ignore
   */
  encodingType?: AudioEncodingType;
}

/**
 * @ignore
 */
export interface IAudioEncodedFrameObserver {
  /**
   * @ignore
   */
  onRecordAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;

  /**
   * @ignore
   */
  onPlaybackAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;

  /**
   * @ignore
   */
  onMixedAudioEncodedFrame?(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void;
}

/**
 * The region for connection, which is the region where the server the SDK connects to is located.
 */
export enum AreaCode {
  /**
   * Mainland China.
   */
  AreaCodeCn = 0x00000001,
  /**
   * North America.
   */
  AreaCodeNa = 0x00000002,
  /**
   * Europe.
   */
  AreaCodeEu = 0x00000004,
  /**
   * Asia, excluding Mainland China.
   */
  AreaCodeAs = 0x00000008,
  /**
   * Japan.
   */
  AreaCodeJp = 0x00000010,
  /**
   * India.
   */
  AreaCodeIn = 0x00000020,
  /**
   * Global.
   */
  AreaCodeGlob = 0xffffffff,
}

/**
 * @ignore
 */
export enum AreaCodeEx {
  /**
   * @ignore
   */
  AreaCodeOc = 0x00000040,
  /**
   * @ignore
   */
  AreaCodeSa = 0x00000080,
  /**
   * @ignore
   */
  AreaCodeAf = 0x00000100,
  /**
   * @ignore
   */
  AreaCodeKr = 0x00000200,
  /**
   * @ignore
   */
  AreaCodeHkmc = 0x00000400,
  /**
   * @ignore
   */
  AreaCodeUs = 0x00000800,
  /**
   * @ignore
   */
  AreaCodeOvs = 0xfffffffe,
}

/**
 * The error code of the channel media relay.
 */
export enum ChannelMediaRelayError {
  /**
   * 0: No error.
   */
  RelayOk = 0,
  /**
   * 1: An error occurs in the server response.
   */
  RelayErrorServerErrorResponse = 1,
  /**
   * 2: No server response.You can call leaveChannel to leave the channel.This error can also occur if your project has not enabled co-host token authentication. You can to enable the service for cohosting across channels before starting a channel media relay.
   */
  RelayErrorServerNoResponse = 2,
  /**
   * 3: The SDK fails to access the service, probably due to limited resources of the server.
   */
  RelayErrorNoResourceAvailable = 3,
  /**
   * 4: Fails to send the relay request.
   */
  RelayErrorFailedJoinSrc = 4,
  /**
   * 5: Fails to accept the relay request.
   */
  RelayErrorFailedJoinDest = 5,
  /**
   * 6: The server fails to receive the media stream.
   */
  RelayErrorFailedPacketReceivedFromSrc = 6,
  /**
   * 7: The server fails to send the media stream.
   */
  RelayErrorFailedPacketSentToDest = 7,
  /**
   * 8: The SDK disconnects from the server due to poor network connections. You can call leaveChannel to leave the channel.
   */
  RelayErrorServerConnectionLost = 8,
  /**
   * 9: An internal error occurs in the server.
   */
  RelayErrorInternalError = 9,
  /**
   * 10: The token of the source channel has expired.
   */
  RelayErrorSrcTokenExpired = 10,
  /**
   * 11: The token of the destination channel has expired.
   */
  RelayErrorDestTokenExpired = 11,
}

/**
 * The event code of channel media relay.
 */
export enum ChannelMediaRelayEvent {
  /**
   * 0: The user disconnects from the server due to a poor network connection.
   */
  RelayEventNetworkDisconnected = 0,
  /**
   * 1: The user is connected to the server.
   */
  RelayEventNetworkConnected = 1,
  /**
   * 2: The user joins the source channel.
   */
  RelayEventPacketJoinedSrcChannel = 2,
  /**
   * 3: The user joins the destination channel.
   */
  RelayEventPacketJoinedDestChannel = 3,
  /**
   * 4: The SDK starts relaying the media stream to the destination channel.
   */
  RelayEventPacketSentToDestChannel = 4,
  /**
   * 5: The server receives the audio stream from the source channel.
   */
  RelayEventPacketReceivedVideoFromSrc = 5,
  /**
   * 6: The server receives the audio stream from the source channel.
   */
  RelayEventPacketReceivedAudioFromSrc = 6,
  /**
   * 7: The destination channel is updated.
   */
  RelayEventPacketUpdateDestChannel = 7,
  /**
   * 8: The destination channel update fails due to internal reasons.
   */
  RelayEventPacketUpdateDestChannelRefused = 8,
  /**
   * 9: The destination channel does not change, which means that the destination channel fails to be updated.
   */
  RelayEventPacketUpdateDestChannelNotChange = 9,
  /**
   * 10: The destination channel name isNULL.
   */
  RelayEventPacketUpdateDestChannelIsNull = 10,
  /**
   * 11: The video profile is sent to the server.
   */
  RelayEventVideoProfileUpdate = 11,
  /**
   * 12: The SDK successfully pauses relaying the media stream to destination channels.
   */
  RelayEventPauseSendPacketToDestChannelSuccess = 12,
  /**
   * 13: The SDK fails to pause relaying the media stream to destination channels.
   */
  RelayEventPauseSendPacketToDestChannelFailed = 13,
  /**
   * 14: The SDK successfully resumes relaying the media stream to destination channels.
   */
  RelayEventResumeSendPacketToDestChannelSuccess = 14,
  /**
   * 15: The SDK fails to resume relaying the media stream to destination channels.
   */
  RelayEventResumeSendPacketToDestChannelFailed = 15,
}

/**
 * The state code of the channel media relay.
 */
export enum ChannelMediaRelayState {
  /**
   * 0: The initial state. After you successfully stop the channel media relay by calling stopChannelMediaRelay , the onChannelMediaRelayStateChanged callback returns this state.
   */
  RelayStateIdle = 0,
  /**
   * 1: The SDK tries to relay the media stream to the destination channel.
   */
  RelayStateConnecting = 1,
  /**
   * 2: The SDK successfully relays the media stream to the destination channel.
   */
  RelayStateRunning = 2,
  /**
   * 3: An error occurs. Seecode in onChannelMediaRelayStateChanged for the error code.
   */
  RelayStateFailure = 3,
}

/**
 * The definition ofChannelMediaInfo.
 */
export class ChannelMediaInfo {
  /**
   * The channel name.
   */
  channelName?: string;
  /**
   * The token that enables the user to join the channel.
   */
  token?: string;
  /**
   * The user ID.
   */
  uid?: number;
}

/**
 * The definition ofChannelMediaRelayConfiguration.
 */
export class ChannelMediaRelayConfiguration {
  /**
   * The information of the source channel ChannelMediaInfo . It contains the following members:channelName: The name of the source channel. The default value isNULL, which means the SDK applies the name of the current channel.uid: The unique ID to identify the relay stream in the source channel. The default value is 0, which means the SDK generates a randomuid. You must set it as 0.token: Thetoken for joining the source channel. It is generated with thechannelName anduid you set insrcInfo.If you have not enabled the App Certificate, set this parameter as the default valueNULL, which means the SDK applies the App ID.If you have enabled the App Certificate, you must use thetoken generated with thechannelName anduid, and theuid must be set as 0.
   */
  srcInfo?: ChannelMediaInfo;
  /**
   * The information of the destination channelChannelMediaInfo. It contains the following members:channelName: The name of the destination channel.uid: The unique ID to identify the relay stream in the destination channel. The value ranges from 0 to (232-1). To avoid UID conflicts, this UID must be different from any other UID in the destination channel. The default value is 0, which means the SDK generates a random UID. Do not set this parameter as the UID of the host in the destination channel, and ensure that this UID is different from any other UID in the channel.token: Thetoken for joining the destination channel. It is generated with thechannelName anduid you set indestInfos.If you have not enabled the App Certificate, set this parameter as the default valueNULL, which means the SDK applies the App ID.If you have enabled the App Certificate, you must use thetoken generated with thechannelName anduid.
   */
  destInfos?: ChannelMediaInfo[];
  /**
   * The number of destination channels. The default value is 0, and the value range is from 0 to 4. Ensure that the value of this parameter corresponds to the number ofChannelMediaInfo structs you define indestInfo.
   */
  destCount?: number;
}

/**
 * The uplink network information.
 */
export class UplinkNetworkInfo {
  /**
   * The target video encoder bitrate (bps).
   */
  video_encoder_target_bitrate_bps?: number;
}

/**
 * @ignore
 */
export class PeerDownlinkInfo {
  /**
   * @ignore
   */
  uid?: string;
  /**
   * @ignore
   */
  stream_type?: VideoStreamType;
  /**
   * @ignore
   */
  current_downscale_level?: RemoteVideoDownscaleLevel;
  /**
   * @ignore
   */
  expected_bitrate_bps?: number;
}

/**
 * @ignore
 */
export class DownlinkNetworkInfo {
  /**
   * @ignore
   */
  lastmile_buffer_delay_time_ms?: number;
  /**
   * @ignore
   */
  bandwidth_estimation_bps?: number;
  /**
   * @ignore
   */
  total_downscale_level_count?: number;
  /**
   * @ignore
   */
  peer_downlink_info?: PeerDownlinkInfo[];
  /**
   * @ignore
   */
  total_received_video_count?: number;
}

/**
 * The built-in encryption mode.
 * Agora recommends usingAes128Gcm2 orAes256Gcm2 encrypted mode. These two modes support the use of salt for higher security.
 */
export enum EncryptionMode {
  /**
   * 1: 128-bit AES encryption, XTS mode.
   */
  Aes128Xts = 1,
  /**
   * 2: 128-bit AES encryption, ECB mode.
   */
  Aes128Ecb = 2,
  /**
   * 3: 256-bit AES encryption, XTS mode.
   */
  Aes256Xts = 3,
  /**
   * 4: 128-bit SM4 encryption, ECB mode.
   */
  Sm4128Ecb = 4,
  /**
   * 5: 128-bit AES encryption, GCM mode.
   */
  Aes128Gcm = 5,
  /**
   * 6: 256-bit AES encryption, GCM mode.
   */
  Aes256Gcm = 6,
  /**
   * 7: (Default) 128-bit AES encryption, GCM mode. This encryption mode requires the setting of salt (encryptionKdfSalt).
   */
  Aes128Gcm2 = 7,
  /**
   * 8: 256-bit AES encryption, GCM mode. This encryption mode requires the setting of salt (encryptionKdfSalt).
   */
  Aes256Gcm2 = 8,
  /**
   * Enumerator boundary.
   */
  ModeEnd = 9,
}

/**
 * Built-in encryption configurations.
 */
export class EncryptionConfig {
  /**
   * The built-in encryption mode. See EncryptionMode . Agora recommends usingAes128Gcm2 orAes256Gcm2 encrypted mode. These two modes support the use of salt for higher security.
   */
  encryptionMode?: EncryptionMode;
  /**
   * Encryption key in string type with unlimited length. Agora recommends using a 32-byte key.If you do not set an encryption key or set it asNULL, you cannot use the built-in encryption, and the SDK returns-2.
   */
  encryptionKey?: string;
  /**
   * Salt, 32 bytes in length. Agora recommends that you use OpenSSL to generate salt on the server side. See Media Stream Encryption for details.This parameter takes effect only inAes128Gcm2 orAes256Gcm2 encrypted mode. In this case, ensure that this parameter is not0.
   */
  encryptionKdfSalt?: number[];
}

/**
 * Encryption error type.
 */
export enum EncryptionErrorType {
  /**
   * 0: Internal reason.
   */
  EncryptionErrorInternalFailure = 0,
  /**
   * 1: Decryption errors. Ensure that the receiver and the sender use the same encryption mode and key.
   */
  EncryptionErrorDecryptionFailure = 1,
  /**
   * 2: Encryption errors.
   */
  EncryptionErrorEncryptionFailure = 2,
}

/**
 * @ignore
 */
export enum UploadErrorReason {
  /**
   * @ignore
   */
  UploadSuccess = 0,
  /**
   * @ignore
   */
  UploadNetError = 1,
  /**
   * @ignore
   */
  UploadServerError = 2,
}

/**
 * The type of the device permission.
 */
export enum PermissionType {
  /**
   * 0: Permission for the audio capture device.
   */
  RecordAudio = 0,
  /**
   * 1: Permission for the camera.
   */
  Camera = 1,
  /**
   * @ignore
   */
  ScreenCapture = 2,
}

/**
 * The maximum length of the user account.
 */
export enum MaxUserAccountLengthType {
  /**
   * The maximum length of the user account is 256 bytes.
   */
  MaxUserAccountLength = 256,
}

/**
 * The subscribing state.
 */
export enum StreamSubscribeState {
  /**
   * 0: The initial publishing state after joining the channel.
   */
  SubStateIdle = 0,
  /**
   * 1: Fails to subscribe to the remote stream. Possible reasons:The remote user:Calls muteLocalAudioStream (true) or muteLocalVideoStream (true) to stop sending local media stream.Calls disableAudio or disableVideo to disable the local audio or video module.Calls enableLocalAudio (false) or enableLocalVideo (false) to disable local audio or video capture.The role of the remote user is audience.The local user calls the following methods to stop receiving remote streams:Call muteRemoteAudioStream (true) or muteAllRemoteAudioStreams (true) to stop receiving the remote audio stream.Call muteRemoteVideoStream (true) or muteAllRemoteVideoStreams (true) to stop receiving the remote video stream.
   */
  SubStateNoSubscribed = 1,
  /**
   * 2: Subscribing.
   */
  SubStateSubscribing = 2,
  /**
   * 3: The remote stream is received, and the subscription is successful.
   */
  SubStateSubscribed = 3,
}

/**
 * The publishing state.
 */
export enum StreamPublishState {
  /**
   * 0: The initial publishing state after joining the channel.
   */
  PubStateIdle = 0,
  /**
   * 1: Fails to publish the local stream. Possible reasons:The local user calls muteLocalAudioStream (true) or muteLocalVideoStream (true) to stop sending local media streams.The local user calls disableAudio or disableVideo to disable the local audio or video module.The local user calls enableLocalAudio (false) or enableLocalVideo (false) to disable the local audio or video capture.The role of the local user is audience.
   */
  PubStateNoPublished = 1,
  /**
   * 2: Publishing.
   */
  PubStatePublishing = 2,
  /**
   * 3: Publishes successfully.
   */
  PubStatePublished = 3,
}

/**
 * @ignore
 */
export class EchoTestConfiguration {
  /**
   * @ignore
   */
  view?: any;
  /**
   * @ignore
   */
  enableAudio?: boolean;
  /**
   * @ignore
   */
  enableVideo?: boolean;
  /**
   * @ignore
   */
  token?: string;
  /**
   * @ignore
   */
  channelId?: string;
}

/**
 * The information of the user.
 */
export class UserInfo {
  /**
   * The user ID.
   */
  uid?: number;
  /**
   * User account.The maximum data length is MaxUserAccountLengthType .
   */
  userAccount?: string;
}

/**
 * The audio filter of in-ear monitoring.
 */
export enum EarMonitoringFilterType {
  /**
   * 1: Do not add an audio filter to the in-ear monitor.
   */
  EarMonitoringFilterNone = 1 << 0,
  /**
   * 2: Add an audio filter to the in-ear monitor. If you implement functions such as voice beautifier and audio effect, users can hear the voice after adding these effects.
   */
  EarMonitoringFilterBuiltInAudioFilters = 1 << 1,
  /**
   * 4: Enable noise suppression to the in-ear monitor.
   */
  EarMonitoringFilterNoiseSuppression = 1 << 2,
}

/**
 * @ignore
 */
export enum ThreadPriorityType {
  /**
   * @ignore
   */
  Lowest = 0,
  /**
   * @ignore
   */
  Low = 1,
  /**
   * @ignore
   */
  Normal = 2,
  /**
   * @ignore
   */
  High = 3,
  /**
   * @ignore
   */
  Highest = 4,
  /**
   * @ignore
   */
  Critical = 5,
}

/**
 * @ignore
 */
export class ScreenVideoParameters {
  /**
   * @ignore
   */
  dimensions?: VideoDimensions;
  /**
   * @ignore
   */
  frameRate?: number;
  /**
   * @ignore
   */
  bitrate?: number;
  /**
   * @ignore
   */
  contentHint?: VideoContentHint;
}

/**
 * @ignore
 */
export class ScreenAudioParameters {
  /**
   * @ignore
   */
  sampleRate?: number;
  /**
   * @ignore
   */
  channels?: number;
  /**
   * @ignore
   */
  captureSignalVolume?: number;
}

/**
 * @ignore
 */
export class ScreenCaptureParameters2 {
  /**
   * @ignore
   */
  captureAudio?: boolean;
  /**
   * @ignore
   */
  audioParams?: ScreenAudioParameters;
  /**
   * @ignore
   */
  captureVideo?: boolean;
  /**
   * @ignore
   */
  videoParams?: ScreenVideoParameters;
}

/**
 * @ignore
 */
export class SpatialAudioParams {
  /**
   * @ignore
   */
  speaker_azimuth?: number;
  /**
   * @ignore
   */
  speaker_elevation?: number;
  /**
   * @ignore
   */
  speaker_distance?: number;
  /**
   * @ignore
   */
  speaker_orientation?: number;
  /**
   * @ignore
   */
  enable_blur?: boolean;
  /**
   * @ignore
   */
  enable_air_absorb?: boolean;
  /**
   * @ignore
   */
  speaker_attenuation?: number;
}
