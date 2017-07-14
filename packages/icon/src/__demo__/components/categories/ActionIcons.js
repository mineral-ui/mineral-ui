/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import React from 'react';
import Figure from '../../components/Figure';
import FigCaption from '../../components/FigCaption';
import FigContainer from '../../components/FigContainer';
import CategoryHeader from '../../components/CategoryHeader';

import Icon3DRotation from '../../../lib/Icon3DRotation';
import IconAccessibility from '../../../lib/IconAccessibility';
import IconAccessible from '../../../lib/IconAccessible';
import IconAccountBalance from '../../../lib/IconAccountBalance';
import IconAccountBalanceWallet from '../../../lib/IconAccountBalanceWallet';
import IconAccountBox from '../../../lib/IconAccountBox';
import IconAccountCircle from '../../../lib/IconAccountCircle';
import IconAddShoppingCart from '../../../lib/IconAddShoppingCart';
import IconAlarm from '../../../lib/IconAlarm';
import IconAlarmAdd from '../../../lib/IconAlarmAdd';
import IconAlarmOff from '../../../lib/IconAlarmOff';
import IconAlarmOn from '../../../lib/IconAlarmOn';
import IconAllOut from '../../../lib/IconAllOut';
import IconAndroid from '../../../lib/IconAndroid';
import IconAnnouncement from '../../../lib/IconAnnouncement';
import IconAspectRatio from '../../../lib/IconAspectRatio';
import IconAssessment from '../../../lib/IconAssessment';
import IconAssignment from '../../../lib/IconAssignment';
import IconAssignmentInd from '../../../lib/IconAssignmentInd';
import IconAssignmentLate from '../../../lib/IconAssignmentLate';
import IconAssignmentReturn from '../../../lib/IconAssignmentReturn';
import IconAssignmentReturned from '../../../lib/IconAssignmentReturned';
import IconAssignmentTurnedIn from '../../../lib/IconAssignmentTurnedIn';
import IconAutorenew from '../../../lib/IconAutorenew';
import IconBackup from '../../../lib/IconBackup';
import IconBook from '../../../lib/IconBook';
import IconBookmark from '../../../lib/IconBookmark';
import IconBookmarkBorder from '../../../lib/IconBookmarkBorder';
import IconBugReport from '../../../lib/IconBugReport';
import IconBuild from '../../../lib/IconBuild';
import IconCached from '../../../lib/IconCached';
import IconCameraEnhance from '../../../lib/IconCameraEnhance';
import IconCardGiftcard from '../../../lib/IconCardGiftcard';
import IconCardMembership from '../../../lib/IconCardMembership';
import IconCardTravel from '../../../lib/IconCardTravel';
import IconChangeHistory from '../../../lib/IconChangeHistory';
import IconCheckCircle from '../../../lib/IconCheckCircle';
import IconChromeReaderMode from '../../../lib/IconChromeReaderMode';
import IconClass from '../../../lib/IconClass';
import IconCode from '../../../lib/IconCode';
import IconCompareArrows from '../../../lib/IconCompareArrows';
import IconCopyright from '../../../lib/IconCopyright';
import IconCreditCard from '../../../lib/IconCreditCard';
import IconDashboard from '../../../lib/IconDashboard';
import IconDateRange from '../../../lib/IconDateRange';
import IconDelete from '../../../lib/IconDelete';
import IconDeleteForever from '../../../lib/IconDeleteForever';
import IconDescription from '../../../lib/IconDescription';
import IconDns from '../../../lib/IconDns';
import IconDone from '../../../lib/IconDone';
import IconDoneAll from '../../../lib/IconDoneAll';
import IconDonutLarge from '../../../lib/IconDonutLarge';
import IconDonutSmall from '../../../lib/IconDonutSmall';
import IconEject from '../../../lib/IconEject';
import IconEuroSymbol from '../../../lib/IconEuroSymbol';
import IconEvent from '../../../lib/IconEvent';
import IconEventSeat from '../../../lib/IconEventSeat';
import IconExitToApp from '../../../lib/IconExitToApp';
import IconExplore from '../../../lib/IconExplore';
import IconExtension from '../../../lib/IconExtension';
import IconFace from '../../../lib/IconFace';
import IconFavorite from '../../../lib/IconFavorite';
import IconFavoriteBorder from '../../../lib/IconFavoriteBorder';
import IconFeedback from '../../../lib/IconFeedback';
import IconFindInPage from '../../../lib/IconFindInPage';
import IconFindReplace from '../../../lib/IconFindReplace';
import IconFingerprint from '../../../lib/IconFingerprint';
import IconFlightLand from '../../../lib/IconFlightLand';
import IconFlightTakeoff from '../../../lib/IconFlightTakeoff';
import IconFlipToBack from '../../../lib/IconFlipToBack';
import IconFlipToFront from '../../../lib/IconFlipToFront';
import IconGTranslate from '../../../lib/IconGTranslate';
import IconGavel from '../../../lib/IconGavel';
import IconGetApp from '../../../lib/IconGetApp';
import IconGif from '../../../lib/IconGif';
import IconGrade from '../../../lib/IconGrade';
import IconGroupWork from '../../../lib/IconGroupWork';
import IconHelp from '../../../lib/IconHelp';
import IconHelpOutline from '../../../lib/IconHelpOutline';
import IconHighlightOff from '../../../lib/IconHighlightOff';
import IconHistory from '../../../lib/IconHistory';
import IconHome from '../../../lib/IconHome';
import IconHourglassEmpty from '../../../lib/IconHourglassEmpty';
import IconHourglassFull from '../../../lib/IconHourglassFull';
import IconHttp from '../../../lib/IconHttp';
import IconHttps from '../../../lib/IconHttps';
import IconImportantDevices from '../../../lib/IconImportantDevices';
import IconInfo from '../../../lib/IconInfo';
import IconInfoOutline from '../../../lib/IconInfoOutline';
import IconInput from '../../../lib/IconInput';
import IconInvertColors from '../../../lib/IconInvertColors';
import IconLabel from '../../../lib/IconLabel';
import IconLabelOutline from '../../../lib/IconLabelOutline';
import IconLanguage from '../../../lib/IconLanguage';
import IconLaunch from '../../../lib/IconLaunch';
import IconLightbulbOutline from '../../../lib/IconLightbulbOutline';
import IconLineStyle from '../../../lib/IconLineStyle';
import IconLineWeight from '../../../lib/IconLineWeight';
import IconList from '../../../lib/IconList';
import IconLock from '../../../lib/IconLock';
import IconLockOpen from '../../../lib/IconLockOpen';
import IconLockOutline from '../../../lib/IconLockOutline';
import IconLoyalty from '../../../lib/IconLoyalty';
import IconMarkunreadMailbox from '../../../lib/IconMarkunreadMailbox';
import IconMotorcycle from '../../../lib/IconMotorcycle';
import IconNoteAdd from '../../../lib/IconNoteAdd';
import IconOfflinePin from '../../../lib/IconOfflinePin';
import IconOpacity from '../../../lib/IconOpacity';
import IconOpenInBrowser from '../../../lib/IconOpenInBrowser';
import IconOpenInNew from '../../../lib/IconOpenInNew';
import IconOpenWith from '../../../lib/IconOpenWith';
import IconPageview from '../../../lib/IconPageview';
import IconPanTool from '../../../lib/IconPanTool';
import IconPayment from '../../../lib/IconPayment';
import IconPermCameraMic from '../../../lib/IconPermCameraMic';
import IconPermContactCalendar from '../../../lib/IconPermContactCalendar';
import IconPermDataSetting from '../../../lib/IconPermDataSetting';
import IconPermDeviceInformation from '../../../lib/IconPermDeviceInformation';
import IconPermIdentity from '../../../lib/IconPermIdentity';
import IconPermMedia from '../../../lib/IconPermMedia';
import IconPermPhoneMsg from '../../../lib/IconPermPhoneMsg';
import IconPermScanWifi from '../../../lib/IconPermScanWifi';
import IconPets from '../../../lib/IconPets';
import IconPictureInPicture from '../../../lib/IconPictureInPicture';
import IconPictureInPictureAlt from '../../../lib/IconPictureInPictureAlt';
import IconPlayForWork from '../../../lib/IconPlayForWork';
import IconPolymer from '../../../lib/IconPolymer';
import IconPowerSettingsNew from '../../../lib/IconPowerSettingsNew';
import IconPregnantWoman from '../../../lib/IconPregnantWoman';
import IconPrint from '../../../lib/IconPrint';
import IconQueryBuilder from '../../../lib/IconQueryBuilder';
import IconQuestionAnswer from '../../../lib/IconQuestionAnswer';
import IconReceipt from '../../../lib/IconReceipt';
import IconRecordVoiceOver from '../../../lib/IconRecordVoiceOver';
import IconRedeem from '../../../lib/IconRedeem';
import IconRemoveShoppingCart from '../../../lib/IconRemoveShoppingCart';
import IconReorder from '../../../lib/IconReorder';
import IconReportProblem from '../../../lib/IconReportProblem';
import IconRestore from '../../../lib/IconRestore';
import IconRestorePage from '../../../lib/IconRestorePage';
import IconRoom from '../../../lib/IconRoom';
import IconRoundedCorner from '../../../lib/IconRoundedCorner';
import IconRowing from '../../../lib/IconRowing';
import IconSchedule from '../../../lib/IconSchedule';
import IconSearch from '../../../lib/IconSearch';
import IconSettings from '../../../lib/IconSettings';
import IconSettingsApplications from '../../../lib/IconSettingsApplications';
import IconSettingsBackupRestore from '../../../lib/IconSettingsBackupRestore';
import IconSettingsBluetooth from '../../../lib/IconSettingsBluetooth';
import IconSettingsBrightness from '../../../lib/IconSettingsBrightness';
import IconSettingsCell from '../../../lib/IconSettingsCell';
import IconSettingsEthernet from '../../../lib/IconSettingsEthernet';
import IconSettingsInputAntenna from '../../../lib/IconSettingsInputAntenna';
import IconSettingsInputComponent from '../../../lib/IconSettingsInputComponent';
import IconSettingsInputComposite from '../../../lib/IconSettingsInputComposite';
import IconSettingsInputHdmi from '../../../lib/IconSettingsInputHdmi';
import IconSettingsInputSvideo from '../../../lib/IconSettingsInputSvideo';
import IconSettingsOverscan from '../../../lib/IconSettingsOverscan';
import IconSettingsPhone from '../../../lib/IconSettingsPhone';
import IconSettingsPower from '../../../lib/IconSettingsPower';
import IconSettingsRemote from '../../../lib/IconSettingsRemote';
import IconSettingsVoice from '../../../lib/IconSettingsVoice';
import IconShop from '../../../lib/IconShop';
import IconShopTwo from '../../../lib/IconShopTwo';
import IconShoppingBasket from '../../../lib/IconShoppingBasket';
import IconShoppingCart from '../../../lib/IconShoppingCart';
import IconSpeakerNotes from '../../../lib/IconSpeakerNotes';
import IconSpeakerNotesOff from '../../../lib/IconSpeakerNotesOff';
import IconSpellcheck from '../../../lib/IconSpellcheck';
import IconStars from '../../../lib/IconStars';
import IconStore from '../../../lib/IconStore';
import IconSubject from '../../../lib/IconSubject';
import IconSupervisorAccount from '../../../lib/IconSupervisorAccount';
import IconSwapHoriz from '../../../lib/IconSwapHoriz';
import IconSwapVert from '../../../lib/IconSwapVert';
import IconSwapVerticalCircle from '../../../lib/IconSwapVerticalCircle';
import IconSystemUpdateAlt from '../../../lib/IconSystemUpdateAlt';
import IconTab from '../../../lib/IconTab';
import IconTabUnselected from '../../../lib/IconTabUnselected';
import IconTheaters from '../../../lib/IconTheaters';
import IconThumbDown from '../../../lib/IconThumbDown';
import IconThumbUp from '../../../lib/IconThumbUp';
import IconThumbsUpDown from '../../../lib/IconThumbsUpDown';
import IconTimeline from '../../../lib/IconTimeline';
import IconToc from '../../../lib/IconToc';
import IconToday from '../../../lib/IconToday';
import IconToll from '../../../lib/IconToll';
import IconTouchApp from '../../../lib/IconTouchApp';
import IconTrackChanges from '../../../lib/IconTrackChanges';
import IconTranslate from '../../../lib/IconTranslate';
import IconTrendingDown from '../../../lib/IconTrendingDown';
import IconTrendingFlat from '../../../lib/IconTrendingFlat';
import IconTrendingUp from '../../../lib/IconTrendingUp';
import IconTurnedIn from '../../../lib/IconTurnedIn';
import IconTurnedInNot from '../../../lib/IconTurnedInNot';
import IconUpdate from '../../../lib/IconUpdate';
import IconVerifiedUser from '../../../lib/IconVerifiedUser';
import IconViewAgenda from '../../../lib/IconViewAgenda';
import IconViewArray from '../../../lib/IconViewArray';
import IconViewCarousel from '../../../lib/IconViewCarousel';
import IconViewColumn from '../../../lib/IconViewColumn';
import IconViewDay from '../../../lib/IconViewDay';
import IconViewHeadline from '../../../lib/IconViewHeadline';
import IconViewList from '../../../lib/IconViewList';
import IconViewModule from '../../../lib/IconViewModule';
import IconViewQuilt from '../../../lib/IconViewQuilt';
import IconViewStream from '../../../lib/IconViewStream';
import IconViewWeek from '../../../lib/IconViewWeek';
import IconVisibility from '../../../lib/IconVisibility';
import IconVisibilityOff from '../../../lib/IconVisibilityOff';
import IconWatchLater from '../../../lib/IconWatchLater';
import IconWork from '../../../lib/IconWork';
import IconYoutubeSearchedFor from '../../../lib/IconYoutubeSearchedFor';
import IconZoomIn from '../../../lib/IconZoomIn';
import IconZoomOut from '../../../lib/IconZoomOut';

export default function ActionIcons() {
  return (
    <div>
      <CategoryHeader>action</CategoryHeader>
      <FigContainer>
        <Figure tabIndex={0}>
          <Icon3DRotation />
          <FigCaption>
            Icon3DRotation
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccessibility />
          <FigCaption>
            IconAccessibility
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccessible />
          <FigCaption>
            IconAccessible
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccountBalance />
          <FigCaption>
            IconAccountBalance
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccountBalanceWallet />
          <FigCaption>
            IconAccountBalanceWallet
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccountBox />
          <FigCaption>
            IconAccountBox
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccountCircle />
          <FigCaption>
            IconAccountCircle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAddShoppingCart />
          <FigCaption>
            IconAddShoppingCart
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAlarm />
          <FigCaption>
            IconAlarm
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAlarmAdd />
          <FigCaption>
            IconAlarmAdd
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAlarmOff />
          <FigCaption>
            IconAlarmOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAlarmOn />
          <FigCaption>
            IconAlarmOn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAllOut />
          <FigCaption>
            IconAllOut
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAndroid />
          <FigCaption>
            IconAndroid
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAnnouncement />
          <FigCaption>
            IconAnnouncement
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAspectRatio />
          <FigCaption>
            IconAspectRatio
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssessment />
          <FigCaption>
            IconAssessment
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssignment />
          <FigCaption>
            IconAssignment
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssignmentInd />
          <FigCaption>
            IconAssignmentInd
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssignmentLate />
          <FigCaption>
            IconAssignmentLate
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssignmentReturn />
          <FigCaption>
            IconAssignmentReturn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssignmentReturned />
          <FigCaption>
            IconAssignmentReturned
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssignmentTurnedIn />
          <FigCaption>
            IconAssignmentTurnedIn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAutorenew />
          <FigCaption>
            IconAutorenew
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBackup />
          <FigCaption>
            IconBackup
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBook />
          <FigCaption>
            IconBook
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBookmark />
          <FigCaption>
            IconBookmark
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBookmarkBorder />
          <FigCaption>
            IconBookmarkBorder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBugReport />
          <FigCaption>
            IconBugReport
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBuild />
          <FigCaption>
            IconBuild
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCached />
          <FigCaption>
            IconCached
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCameraEnhance />
          <FigCaption>
            IconCameraEnhance
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCardGiftcard />
          <FigCaption>
            IconCardGiftcard
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCardMembership />
          <FigCaption>
            IconCardMembership
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCardTravel />
          <FigCaption>
            IconCardTravel
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconChangeHistory />
          <FigCaption>
            IconChangeHistory
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCheckCircle />
          <FigCaption>
            IconCheckCircle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconChromeReaderMode />
          <FigCaption>
            IconChromeReaderMode
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconClass />
          <FigCaption>
            IconClass
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCode />
          <FigCaption>
            IconCode
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCompareArrows />
          <FigCaption>
            IconCompareArrows
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCopyright />
          <FigCaption>
            IconCopyright
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCreditCard />
          <FigCaption>
            IconCreditCard
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDashboard />
          <FigCaption>
            IconDashboard
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDateRange />
          <FigCaption>
            IconDateRange
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDelete />
          <FigCaption>
            IconDelete
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDeleteForever />
          <FigCaption>
            IconDeleteForever
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDescription />
          <FigCaption>
            IconDescription
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDns />
          <FigCaption>
            IconDns
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDone />
          <FigCaption>
            IconDone
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDoneAll />
          <FigCaption>
            IconDoneAll
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDonutLarge />
          <FigCaption>
            IconDonutLarge
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDonutSmall />
          <FigCaption>
            IconDonutSmall
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconEject />
          <FigCaption>
            IconEject
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconEuroSymbol />
          <FigCaption>
            IconEuroSymbol
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconEvent />
          <FigCaption>
            IconEvent
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconEventSeat />
          <FigCaption>
            IconEventSeat
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExitToApp />
          <FigCaption>
            IconExitToApp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExplore />
          <FigCaption>
            IconExplore
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExtension />
          <FigCaption>
            IconExtension
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFace />
          <FigCaption>
            IconFace
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFavorite />
          <FigCaption>
            IconFavorite
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFavoriteBorder />
          <FigCaption>
            IconFavoriteBorder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFeedback />
          <FigCaption>
            IconFeedback
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFindInPage />
          <FigCaption>
            IconFindInPage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFindReplace />
          <FigCaption>
            IconFindReplace
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFingerprint />
          <FigCaption>
            IconFingerprint
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlightLand />
          <FigCaption>
            IconFlightLand
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlightTakeoff />
          <FigCaption>
            IconFlightTakeoff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlipToBack />
          <FigCaption>
            IconFlipToBack
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlipToFront />
          <FigCaption>
            IconFlipToFront
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGTranslate />
          <FigCaption>
            IconGTranslate
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGavel />
          <FigCaption>
            IconGavel
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGetApp />
          <FigCaption>
            IconGetApp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGif />
          <FigCaption>
            IconGif
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGrade />
          <FigCaption>
            IconGrade
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGroupWork />
          <FigCaption>
            IconGroupWork
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHelp />
          <FigCaption>
            IconHelp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHelpOutline />
          <FigCaption>
            IconHelpOutline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHighlightOff />
          <FigCaption>
            IconHighlightOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHistory />
          <FigCaption>
            IconHistory
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHome />
          <FigCaption>
            IconHome
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHourglassEmpty />
          <FigCaption>
            IconHourglassEmpty
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHourglassFull />
          <FigCaption>
            IconHourglassFull
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHttp />
          <FigCaption>
            IconHttp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHttps />
          <FigCaption>
            IconHttps
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconImportantDevices />
          <FigCaption>
            IconImportantDevices
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconInfo />
          <FigCaption>
            IconInfo
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconInfoOutline />
          <FigCaption>
            IconInfoOutline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconInput />
          <FigCaption>
            IconInput
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconInvertColors />
          <FigCaption>
            IconInvertColors
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLabel />
          <FigCaption>
            IconLabel
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLabelOutline />
          <FigCaption>
            IconLabelOutline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLanguage />
          <FigCaption>
            IconLanguage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLaunch />
          <FigCaption>
            IconLaunch
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLightbulbOutline />
          <FigCaption>
            IconLightbulbOutline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLineStyle />
          <FigCaption>
            IconLineStyle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLineWeight />
          <FigCaption>
            IconLineWeight
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconList />
          <FigCaption>
            IconList
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLock />
          <FigCaption>
            IconLock
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLockOpen />
          <FigCaption>
            IconLockOpen
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLockOutline />
          <FigCaption>
            IconLockOutline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLoyalty />
          <FigCaption>
            IconLoyalty
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconMarkunreadMailbox />
          <FigCaption>
            IconMarkunreadMailbox
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconMotorcycle />
          <FigCaption>
            IconMotorcycle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNoteAdd />
          <FigCaption>
            IconNoteAdd
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconOfflinePin />
          <FigCaption>
            IconOfflinePin
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconOpacity />
          <FigCaption>
            IconOpacity
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconOpenInBrowser />
          <FigCaption>
            IconOpenInBrowser
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconOpenInNew />
          <FigCaption>
            IconOpenInNew
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconOpenWith />
          <FigCaption>
            IconOpenWith
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPageview />
          <FigCaption>
            IconPageview
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPanTool />
          <FigCaption>
            IconPanTool
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPayment />
          <FigCaption>
            IconPayment
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermCameraMic />
          <FigCaption>
            IconPermCameraMic
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermContactCalendar />
          <FigCaption>
            IconPermContactCalendar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermDataSetting />
          <FigCaption>
            IconPermDataSetting
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermDeviceInformation />
          <FigCaption>
            IconPermDeviceInformation
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermIdentity />
          <FigCaption>
            IconPermIdentity
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermMedia />
          <FigCaption>
            IconPermMedia
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermPhoneMsg />
          <FigCaption>
            IconPermPhoneMsg
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPermScanWifi />
          <FigCaption>
            IconPermScanWifi
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPets />
          <FigCaption>
            IconPets
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPictureInPicture />
          <FigCaption>
            IconPictureInPicture
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPictureInPictureAlt />
          <FigCaption>
            IconPictureInPictureAlt
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPlayForWork />
          <FigCaption>
            IconPlayForWork
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPolymer />
          <FigCaption>
            IconPolymer
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPowerSettingsNew />
          <FigCaption>
            IconPowerSettingsNew
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPregnantWoman />
          <FigCaption>
            IconPregnantWoman
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPrint />
          <FigCaption>
            IconPrint
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconQueryBuilder />
          <FigCaption>
            IconQueryBuilder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconQuestionAnswer />
          <FigCaption>
            IconQuestionAnswer
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconReceipt />
          <FigCaption>
            IconReceipt
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRecordVoiceOver />
          <FigCaption>
            IconRecordVoiceOver
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRedeem />
          <FigCaption>
            IconRedeem
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRemoveShoppingCart />
          <FigCaption>
            IconRemoveShoppingCart
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconReorder />
          <FigCaption>
            IconReorder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconReportProblem />
          <FigCaption>
            IconReportProblem
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRestore />
          <FigCaption>
            IconRestore
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRestorePage />
          <FigCaption>
            IconRestorePage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRoom />
          <FigCaption>
            IconRoom
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRoundedCorner />
          <FigCaption>
            IconRoundedCorner
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRowing />
          <FigCaption>
            IconRowing
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSchedule />
          <FigCaption>
            IconSchedule
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSearch />
          <FigCaption>
            IconSearch
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettings />
          <FigCaption>
            IconSettings
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsApplications />
          <FigCaption>
            IconSettingsApplications
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsBackupRestore />
          <FigCaption>
            IconSettingsBackupRestore
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsBluetooth />
          <FigCaption>
            IconSettingsBluetooth
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsBrightness />
          <FigCaption>
            IconSettingsBrightness
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsCell />
          <FigCaption>
            IconSettingsCell
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsEthernet />
          <FigCaption>
            IconSettingsEthernet
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsInputAntenna />
          <FigCaption>
            IconSettingsInputAntenna
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsInputComponent />
          <FigCaption>
            IconSettingsInputComponent
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsInputComposite />
          <FigCaption>
            IconSettingsInputComposite
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsInputHdmi />
          <FigCaption>
            IconSettingsInputHdmi
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsInputSvideo />
          <FigCaption>
            IconSettingsInputSvideo
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsOverscan />
          <FigCaption>
            IconSettingsOverscan
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsPhone />
          <FigCaption>
            IconSettingsPhone
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsPower />
          <FigCaption>
            IconSettingsPower
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsRemote />
          <FigCaption>
            IconSettingsRemote
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsVoice />
          <FigCaption>
            IconSettingsVoice
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconShop />
          <FigCaption>
            IconShop
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconShopTwo />
          <FigCaption>
            IconShopTwo
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconShoppingBasket />
          <FigCaption>
            IconShoppingBasket
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconShoppingCart />
          <FigCaption>
            IconShoppingCart
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSpeakerNotes />
          <FigCaption>
            IconSpeakerNotes
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSpeakerNotesOff />
          <FigCaption>
            IconSpeakerNotesOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSpellcheck />
          <FigCaption>
            IconSpellcheck
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStars />
          <FigCaption>
            IconStars
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStore />
          <FigCaption>
            IconStore
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSubject />
          <FigCaption>
            IconSubject
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSupervisorAccount />
          <FigCaption>
            IconSupervisorAccount
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSwapHoriz />
          <FigCaption>
            IconSwapHoriz
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSwapVert />
          <FigCaption>
            IconSwapVert
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSwapVerticalCircle />
          <FigCaption>
            IconSwapVerticalCircle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSystemUpdateAlt />
          <FigCaption>
            IconSystemUpdateAlt
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTab />
          <FigCaption>
            IconTab
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTabUnselected />
          <FigCaption>
            IconTabUnselected
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTheaters />
          <FigCaption>
            IconTheaters
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconThumbDown />
          <FigCaption>
            IconThumbDown
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconThumbUp />
          <FigCaption>
            IconThumbUp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconThumbsUpDown />
          <FigCaption>
            IconThumbsUpDown
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTimeline />
          <FigCaption>
            IconTimeline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconToc />
          <FigCaption>
            IconToc
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconToday />
          <FigCaption>
            IconToday
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconToll />
          <FigCaption>
            IconToll
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTouchApp />
          <FigCaption>
            IconTouchApp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTrackChanges />
          <FigCaption>
            IconTrackChanges
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTranslate />
          <FigCaption>
            IconTranslate
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTrendingDown />
          <FigCaption>
            IconTrendingDown
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTrendingFlat />
          <FigCaption>
            IconTrendingFlat
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTrendingUp />
          <FigCaption>
            IconTrendingUp
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTurnedIn />
          <FigCaption>
            IconTurnedIn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTurnedInNot />
          <FigCaption>
            IconTurnedInNot
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconUpdate />
          <FigCaption>
            IconUpdate
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconVerifiedUser />
          <FigCaption>
            IconVerifiedUser
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewAgenda />
          <FigCaption>
            IconViewAgenda
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewArray />
          <FigCaption>
            IconViewArray
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewCarousel />
          <FigCaption>
            IconViewCarousel
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewColumn />
          <FigCaption>
            IconViewColumn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewDay />
          <FigCaption>
            IconViewDay
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewHeadline />
          <FigCaption>
            IconViewHeadline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewList />
          <FigCaption>
            IconViewList
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewModule />
          <FigCaption>
            IconViewModule
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewQuilt />
          <FigCaption>
            IconViewQuilt
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewStream />
          <FigCaption>
            IconViewStream
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewWeek />
          <FigCaption>
            IconViewWeek
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconVisibility />
          <FigCaption>
            IconVisibility
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconVisibilityOff />
          <FigCaption>
            IconVisibilityOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWatchLater />
          <FigCaption>
            IconWatchLater
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWork />
          <FigCaption>
            IconWork
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconYoutubeSearchedFor />
          <FigCaption>
            IconYoutubeSearchedFor
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconZoomIn />
          <FigCaption>
            IconZoomIn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconZoomOut />
          <FigCaption>
            IconZoomOut
          </FigCaption>
        </Figure>
      </FigContainer>
    </div>
  );
}
