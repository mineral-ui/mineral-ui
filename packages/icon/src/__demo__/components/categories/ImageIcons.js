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

import IconAddAPhoto from '../../../lib/IconAddAPhoto';
import IconAddToPhotos from '../../../lib/IconAddToPhotos';
import IconAdjust from '../../../lib/IconAdjust';
import IconAssistant from '../../../lib/IconAssistant';
import IconAssistantPhoto from '../../../lib/IconAssistantPhoto';
import IconAudiotrack from '../../../lib/IconAudiotrack';
import IconBlurCircular from '../../../lib/IconBlurCircular';
import IconBlurLinear from '../../../lib/IconBlurLinear';
import IconBlurOff from '../../../lib/IconBlurOff';
import IconBlurOn from '../../../lib/IconBlurOn';
import IconBrightness1 from '../../../lib/IconBrightness1';
import IconBrightness2 from '../../../lib/IconBrightness2';
import IconBrightness3 from '../../../lib/IconBrightness3';
import IconBrightness4 from '../../../lib/IconBrightness4';
import IconBrightness5 from '../../../lib/IconBrightness5';
import IconBrightness6 from '../../../lib/IconBrightness6';
import IconBrightness7 from '../../../lib/IconBrightness7';
import IconBrokenImage from '../../../lib/IconBrokenImage';
import IconBrush from '../../../lib/IconBrush';
import IconBurstMode from '../../../lib/IconBurstMode';
import IconCamera from '../../../lib/IconCamera';
import IconCameraAlt from '../../../lib/IconCameraAlt';
import IconCameraFront from '../../../lib/IconCameraFront';
import IconCameraRear from '../../../lib/IconCameraRear';
import IconCameraRoll from '../../../lib/IconCameraRoll';
import IconCenterFocusStrong from '../../../lib/IconCenterFocusStrong';
import IconCenterFocusWeak from '../../../lib/IconCenterFocusWeak';
import IconCollections from '../../../lib/IconCollections';
import IconCollectionsBookmark from '../../../lib/IconCollectionsBookmark';
import IconColorLens from '../../../lib/IconColorLens';
import IconColorize from '../../../lib/IconColorize';
import IconCompare from '../../../lib/IconCompare';
import IconControlPoint from '../../../lib/IconControlPoint';
import IconControlPointDuplicate from '../../../lib/IconControlPointDuplicate';
import IconCrop169 from '../../../lib/IconCrop169';
import IconCrop from '../../../lib/IconCrop';
import IconCrop32 from '../../../lib/IconCrop32';
import IconCrop54 from '../../../lib/IconCrop54';
import IconCrop75 from '../../../lib/IconCrop75';
import IconCropDin from '../../../lib/IconCropDin';
import IconCropFree from '../../../lib/IconCropFree';
import IconCropLandscape from '../../../lib/IconCropLandscape';
import IconCropOriginal from '../../../lib/IconCropOriginal';
import IconCropPortrait from '../../../lib/IconCropPortrait';
import IconCropRotate from '../../../lib/IconCropRotate';
import IconCropSquare from '../../../lib/IconCropSquare';
import IconDehaze from '../../../lib/IconDehaze';
import IconDetails from '../../../lib/IconDetails';
import IconEdit from '../../../lib/IconEdit';
import IconExposure from '../../../lib/IconExposure';
import IconExposureNeg1 from '../../../lib/IconExposureNeg1';
import IconExposureNeg2 from '../../../lib/IconExposureNeg2';
import IconExposurePlus1 from '../../../lib/IconExposurePlus1';
import IconExposurePlus2 from '../../../lib/IconExposurePlus2';
import IconExposureZero from '../../../lib/IconExposureZero';
import IconFilter1 from '../../../lib/IconFilter1';
import IconFilter2 from '../../../lib/IconFilter2';
import IconFilter from '../../../lib/IconFilter';
import IconFilter3 from '../../../lib/IconFilter3';
import IconFilter4 from '../../../lib/IconFilter4';
import IconFilter5 from '../../../lib/IconFilter5';
import IconFilter6 from '../../../lib/IconFilter6';
import IconFilter7 from '../../../lib/IconFilter7';
import IconFilter8 from '../../../lib/IconFilter8';
import IconFilter9 from '../../../lib/IconFilter9';
import IconFilter9Plus from '../../../lib/IconFilter9Plus';
import IconFilterBAndW from '../../../lib/IconFilterBAndW';
import IconFilterCenterFocus from '../../../lib/IconFilterCenterFocus';
import IconFilterDrama from '../../../lib/IconFilterDrama';
import IconFilterFrames from '../../../lib/IconFilterFrames';
import IconFilterHdr from '../../../lib/IconFilterHdr';
import IconFilterNone from '../../../lib/IconFilterNone';
import IconFilterTiltShift from '../../../lib/IconFilterTiltShift';
import IconFilterVintage from '../../../lib/IconFilterVintage';
import IconFlare from '../../../lib/IconFlare';
import IconFlashAuto from '../../../lib/IconFlashAuto';
import IconFlashOff from '../../../lib/IconFlashOff';
import IconFlashOn from '../../../lib/IconFlashOn';
import IconFlip from '../../../lib/IconFlip';
import IconGradient from '../../../lib/IconGradient';
import IconGrain from '../../../lib/IconGrain';
import IconGridOff from '../../../lib/IconGridOff';
import IconGridOn from '../../../lib/IconGridOn';
import IconHdrOff from '../../../lib/IconHdrOff';
import IconHdrOn from '../../../lib/IconHdrOn';
import IconHdrStrong from '../../../lib/IconHdrStrong';
import IconHdrWeak from '../../../lib/IconHdrWeak';
import IconHealing from '../../../lib/IconHealing';
import IconImage from '../../../lib/IconImage';
import IconImageAspectRatio from '../../../lib/IconImageAspectRatio';
import IconIso from '../../../lib/IconIso';
import IconLandscape from '../../../lib/IconLandscape';
import IconLeakAdd from '../../../lib/IconLeakAdd';
import IconLeakRemove from '../../../lib/IconLeakRemove';
import IconLens from '../../../lib/IconLens';
import IconLinkedCamera from '../../../lib/IconLinkedCamera';
import IconLooks from '../../../lib/IconLooks';
import IconLooks3 from '../../../lib/IconLooks3';
import IconLooks4 from '../../../lib/IconLooks4';
import IconLooks5 from '../../../lib/IconLooks5';
import IconLooks6 from '../../../lib/IconLooks6';
import IconLooksOne from '../../../lib/IconLooksOne';
import IconLooksTwo from '../../../lib/IconLooksTwo';
import IconLoupe from '../../../lib/IconLoupe';
import IconMonochromePhotos from '../../../lib/IconMonochromePhotos';
import IconMovieCreation from '../../../lib/IconMovieCreation';
import IconMovieFilter from '../../../lib/IconMovieFilter';
import IconMusicNote from '../../../lib/IconMusicNote';
import IconNature from '../../../lib/IconNature';
import IconNaturePeople from '../../../lib/IconNaturePeople';
import IconNavigateBefore from '../../../lib/IconNavigateBefore';
import IconNavigateNext from '../../../lib/IconNavigateNext';
import IconPalette from '../../../lib/IconPalette';
import IconPanorama from '../../../lib/IconPanorama';
import IconPanoramaFishEye from '../../../lib/IconPanoramaFishEye';
import IconPanoramaHorizontal from '../../../lib/IconPanoramaHorizontal';
import IconPanoramaVertical from '../../../lib/IconPanoramaVertical';
import IconPanoramaWideAngle from '../../../lib/IconPanoramaWideAngle';
import IconPhoto from '../../../lib/IconPhoto';
import IconPhotoAlbum from '../../../lib/IconPhotoAlbum';
import IconPhotoCamera from '../../../lib/IconPhotoCamera';
import IconPhotoFilter from '../../../lib/IconPhotoFilter';
import IconPhotoLibrary from '../../../lib/IconPhotoLibrary';
import IconPhotoSizeSelectActual from '../../../lib/IconPhotoSizeSelectActual';
import IconPhotoSizeSelectLarge from '../../../lib/IconPhotoSizeSelectLarge';
import IconPhotoSizeSelectSmall from '../../../lib/IconPhotoSizeSelectSmall';
import IconPictureAsPdf from '../../../lib/IconPictureAsPdf';
import IconPortrait from '../../../lib/IconPortrait';
import IconRemoveRedEye from '../../../lib/IconRemoveRedEye';
import IconRotate90DegreesCcw from '../../../lib/IconRotate90DegreesCcw';
import IconRotateLeft from '../../../lib/IconRotateLeft';
import IconRotateRight from '../../../lib/IconRotateRight';
import IconSlideshow from '../../../lib/IconSlideshow';
import IconStraighten from '../../../lib/IconStraighten';
import IconStyle from '../../../lib/IconStyle';
import IconSwitchCamera from '../../../lib/IconSwitchCamera';
import IconSwitchVideo from '../../../lib/IconSwitchVideo';
import IconTagFaces from '../../../lib/IconTagFaces';
import IconTexture from '../../../lib/IconTexture';
import IconTimelapse from '../../../lib/IconTimelapse';
import IconTimer10 from '../../../lib/IconTimer10';
import IconTimer from '../../../lib/IconTimer';
import IconTimer3 from '../../../lib/IconTimer3';
import IconTimerOff from '../../../lib/IconTimerOff';
import IconTonality from '../../../lib/IconTonality';
import IconTransform from '../../../lib/IconTransform';
import IconTune from '../../../lib/IconTune';
import IconViewComfy from '../../../lib/IconViewComfy';
import IconViewCompact from '../../../lib/IconViewCompact';
import IconVignette from '../../../lib/IconVignette';
import IconWbAuto from '../../../lib/IconWbAuto';
import IconWbCloudy from '../../../lib/IconWbCloudy';
import IconWbIncandescent from '../../../lib/IconWbIncandescent';
import IconWbIridescent from '../../../lib/IconWbIridescent';
import IconWbSunny from '../../../lib/IconWbSunny';

export default function ImageIcons() {
  return (
    <div>
      <CategoryHeader>image</CategoryHeader>
      <FigContainer>
        <Figure tabIndex={0}>
          <IconAddAPhoto />
          <FigCaption>
            IconAddAPhoto
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAddToPhotos />
          <FigCaption>
            IconAddToPhotos
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAdjust />
          <FigCaption>
            IconAdjust
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssistant />
          <FigCaption>
            IconAssistant
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAssistantPhoto />
          <FigCaption>
            IconAssistantPhoto
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAudiotrack />
          <FigCaption>
            IconAudiotrack
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBlurCircular />
          <FigCaption>
            IconBlurCircular
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBlurLinear />
          <FigCaption>
            IconBlurLinear
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBlurOff />
          <FigCaption>
            IconBlurOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBlurOn />
          <FigCaption>
            IconBlurOn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness1 />
          <FigCaption>
            IconBrightness1
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness2 />
          <FigCaption>
            IconBrightness2
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness3 />
          <FigCaption>
            IconBrightness3
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness4 />
          <FigCaption>
            IconBrightness4
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness5 />
          <FigCaption>
            IconBrightness5
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness6 />
          <FigCaption>
            IconBrightness6
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightness7 />
          <FigCaption>
            IconBrightness7
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrokenImage />
          <FigCaption>
            IconBrokenImage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrush />
          <FigCaption>
            IconBrush
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBurstMode />
          <FigCaption>
            IconBurstMode
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCamera />
          <FigCaption>
            IconCamera
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCameraAlt />
          <FigCaption>
            IconCameraAlt
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCameraFront />
          <FigCaption>
            IconCameraFront
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCameraRear />
          <FigCaption>
            IconCameraRear
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCameraRoll />
          <FigCaption>
            IconCameraRoll
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCenterFocusStrong />
          <FigCaption>
            IconCenterFocusStrong
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCenterFocusWeak />
          <FigCaption>
            IconCenterFocusWeak
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCollections />
          <FigCaption>
            IconCollections
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCollectionsBookmark />
          <FigCaption>
            IconCollectionsBookmark
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconColorLens />
          <FigCaption>
            IconColorLens
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconColorize />
          <FigCaption>
            IconColorize
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCompare />
          <FigCaption>
            IconCompare
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconControlPoint />
          <FigCaption>
            IconControlPoint
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconControlPointDuplicate />
          <FigCaption>
            IconControlPointDuplicate
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCrop169 />
          <FigCaption>
            IconCrop169
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCrop />
          <FigCaption>
            IconCrop
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCrop32 />
          <FigCaption>
            IconCrop32
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCrop54 />
          <FigCaption>
            IconCrop54
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCrop75 />
          <FigCaption>
            IconCrop75
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropDin />
          <FigCaption>
            IconCropDin
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropFree />
          <FigCaption>
            IconCropFree
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropLandscape />
          <FigCaption>
            IconCropLandscape
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropOriginal />
          <FigCaption>
            IconCropOriginal
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropPortrait />
          <FigCaption>
            IconCropPortrait
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropRotate />
          <FigCaption>
            IconCropRotate
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCropSquare />
          <FigCaption>
            IconCropSquare
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDehaze />
          <FigCaption>
            IconDehaze
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDetails />
          <FigCaption>
            IconDetails
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconEdit />
          <FigCaption>
            IconEdit
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExposure />
          <FigCaption>
            IconExposure
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExposureNeg1 />
          <FigCaption>
            IconExposureNeg1
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExposureNeg2 />
          <FigCaption>
            IconExposureNeg2
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExposurePlus1 />
          <FigCaption>
            IconExposurePlus1
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExposurePlus2 />
          <FigCaption>
            IconExposurePlus2
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconExposureZero />
          <FigCaption>
            IconExposureZero
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter1 />
          <FigCaption>
            IconFilter1
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter2 />
          <FigCaption>
            IconFilter2
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter />
          <FigCaption>
            IconFilter
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter3 />
          <FigCaption>
            IconFilter3
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter4 />
          <FigCaption>
            IconFilter4
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter5 />
          <FigCaption>
            IconFilter5
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter6 />
          <FigCaption>
            IconFilter6
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter7 />
          <FigCaption>
            IconFilter7
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter8 />
          <FigCaption>
            IconFilter8
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter9 />
          <FigCaption>
            IconFilter9
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilter9Plus />
          <FigCaption>
            IconFilter9Plus
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterBAndW />
          <FigCaption>
            IconFilterBAndW
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterCenterFocus />
          <FigCaption>
            IconFilterCenterFocus
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterDrama />
          <FigCaption>
            IconFilterDrama
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterFrames />
          <FigCaption>
            IconFilterFrames
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterHdr />
          <FigCaption>
            IconFilterHdr
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterNone />
          <FigCaption>
            IconFilterNone
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterTiltShift />
          <FigCaption>
            IconFilterTiltShift
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFilterVintage />
          <FigCaption>
            IconFilterVintage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlare />
          <FigCaption>
            IconFlare
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlashAuto />
          <FigCaption>
            IconFlashAuto
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlashOff />
          <FigCaption>
            IconFlashOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlashOn />
          <FigCaption>
            IconFlashOn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFlip />
          <FigCaption>
            IconFlip
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGradient />
          <FigCaption>
            IconGradient
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGrain />
          <FigCaption>
            IconGrain
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGridOff />
          <FigCaption>
            IconGridOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGridOn />
          <FigCaption>
            IconGridOn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHdrOff />
          <FigCaption>
            IconHdrOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHdrOn />
          <FigCaption>
            IconHdrOn
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHdrStrong />
          <FigCaption>
            IconHdrStrong
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHdrWeak />
          <FigCaption>
            IconHdrWeak
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconHealing />
          <FigCaption>
            IconHealing
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconImage />
          <FigCaption>
            IconImage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconImageAspectRatio />
          <FigCaption>
            IconImageAspectRatio
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconIso />
          <FigCaption>
            IconIso
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLandscape />
          <FigCaption>
            IconLandscape
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLeakAdd />
          <FigCaption>
            IconLeakAdd
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLeakRemove />
          <FigCaption>
            IconLeakRemove
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLens />
          <FigCaption>
            IconLens
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLinkedCamera />
          <FigCaption>
            IconLinkedCamera
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooks />
          <FigCaption>
            IconLooks
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooks3 />
          <FigCaption>
            IconLooks3
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooks4 />
          <FigCaption>
            IconLooks4
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooks5 />
          <FigCaption>
            IconLooks5
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooks6 />
          <FigCaption>
            IconLooks6
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooksOne />
          <FigCaption>
            IconLooksOne
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLooksTwo />
          <FigCaption>
            IconLooksTwo
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLoupe />
          <FigCaption>
            IconLoupe
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconMonochromePhotos />
          <FigCaption>
            IconMonochromePhotos
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconMovieCreation />
          <FigCaption>
            IconMovieCreation
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconMovieFilter />
          <FigCaption>
            IconMovieFilter
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconMusicNote />
          <FigCaption>
            IconMusicNote
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNature />
          <FigCaption>
            IconNature
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNaturePeople />
          <FigCaption>
            IconNaturePeople
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNavigateBefore />
          <FigCaption>
            IconNavigateBefore
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNavigateNext />
          <FigCaption>
            IconNavigateNext
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPalette />
          <FigCaption>
            IconPalette
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPanorama />
          <FigCaption>
            IconPanorama
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPanoramaFishEye />
          <FigCaption>
            IconPanoramaFishEye
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPanoramaHorizontal />
          <FigCaption>
            IconPanoramaHorizontal
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPanoramaVertical />
          <FigCaption>
            IconPanoramaVertical
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPanoramaWideAngle />
          <FigCaption>
            IconPanoramaWideAngle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhoto />
          <FigCaption>
            IconPhoto
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoAlbum />
          <FigCaption>
            IconPhotoAlbum
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoCamera />
          <FigCaption>
            IconPhotoCamera
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoFilter />
          <FigCaption>
            IconPhotoFilter
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoLibrary />
          <FigCaption>
            IconPhotoLibrary
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoSizeSelectActual />
          <FigCaption>
            IconPhotoSizeSelectActual
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoSizeSelectLarge />
          <FigCaption>
            IconPhotoSizeSelectLarge
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPhotoSizeSelectSmall />
          <FigCaption>
            IconPhotoSizeSelectSmall
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPictureAsPdf />
          <FigCaption>
            IconPictureAsPdf
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconPortrait />
          <FigCaption>
            IconPortrait
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRemoveRedEye />
          <FigCaption>
            IconRemoveRedEye
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRotate90DegreesCcw />
          <FigCaption>
            IconRotate90DegreesCcw
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRotateLeft />
          <FigCaption>
            IconRotateLeft
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRotateRight />
          <FigCaption>
            IconRotateRight
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSlideshow />
          <FigCaption>
            IconSlideshow
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStraighten />
          <FigCaption>
            IconStraighten
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStyle />
          <FigCaption>
            IconStyle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSwitchCamera />
          <FigCaption>
            IconSwitchCamera
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSwitchVideo />
          <FigCaption>
            IconSwitchVideo
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTagFaces />
          <FigCaption>
            IconTagFaces
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTexture />
          <FigCaption>
            IconTexture
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTimelapse />
          <FigCaption>
            IconTimelapse
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTimer10 />
          <FigCaption>
            IconTimer10
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTimer />
          <FigCaption>
            IconTimer
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTimer3 />
          <FigCaption>
            IconTimer3
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTimerOff />
          <FigCaption>
            IconTimerOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTonality />
          <FigCaption>
            IconTonality
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTransform />
          <FigCaption>
            IconTransform
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconTune />
          <FigCaption>
            IconTune
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewComfy />
          <FigCaption>
            IconViewComfy
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconViewCompact />
          <FigCaption>
            IconViewCompact
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconVignette />
          <FigCaption>
            IconVignette
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWbAuto />
          <FigCaption>
            IconWbAuto
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWbCloudy />
          <FigCaption>
            IconWbCloudy
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWbIncandescent />
          <FigCaption>
            IconWbIncandescent
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWbIridescent />
          <FigCaption>
            IconWbIridescent
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWbSunny />
          <FigCaption>
            IconWbSunny
          </FigCaption>
        </Figure>
      </FigContainer>
    </div>
  );
}
