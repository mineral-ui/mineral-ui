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

import IconAccessAlarm from '../../../lib/IconAccessAlarm';
import IconAccessAlarms from '../../../lib/IconAccessAlarms';
import IconAccessTime from '../../../lib/IconAccessTime';
import IconAddAlarm from '../../../lib/IconAddAlarm';
import IconAirplanemodeActive from '../../../lib/IconAirplanemodeActive';
import IconAirplanemodeInactive from '../../../lib/IconAirplanemodeInactive';
import IconBattery20 from '../../../lib/IconBattery20';
import IconBattery30 from '../../../lib/IconBattery30';
import IconBattery50 from '../../../lib/IconBattery50';
import IconBattery60 from '../../../lib/IconBattery60';
import IconBattery80 from '../../../lib/IconBattery80';
import IconBattery90 from '../../../lib/IconBattery90';
import IconBatteryAlert from '../../../lib/IconBatteryAlert';
import IconBatteryCharging20 from '../../../lib/IconBatteryCharging20';
import IconBatteryCharging30 from '../../../lib/IconBatteryCharging30';
import IconBatteryCharging50 from '../../../lib/IconBatteryCharging50';
import IconBatteryCharging60 from '../../../lib/IconBatteryCharging60';
import IconBatteryCharging80 from '../../../lib/IconBatteryCharging80';
import IconBatteryCharging90 from '../../../lib/IconBatteryCharging90';
import IconBatteryChargingFull from '../../../lib/IconBatteryChargingFull';
import IconBatteryFull from '../../../lib/IconBatteryFull';
import IconBatteryStd from '../../../lib/IconBatteryStd';
import IconBatteryUnknown from '../../../lib/IconBatteryUnknown';
import IconBluetooth from '../../../lib/IconBluetooth';
import IconBluetoothConnected from '../../../lib/IconBluetoothConnected';
import IconBluetoothDisabled from '../../../lib/IconBluetoothDisabled';
import IconBluetoothSearching from '../../../lib/IconBluetoothSearching';
import IconBrightnessAuto from '../../../lib/IconBrightnessAuto';
import IconBrightnessHigh from '../../../lib/IconBrightnessHigh';
import IconBrightnessLow from '../../../lib/IconBrightnessLow';
import IconBrightnessMedium from '../../../lib/IconBrightnessMedium';
import IconDataUsage from '../../../lib/IconDataUsage';
import IconDeveloperMode from '../../../lib/IconDeveloperMode';
import IconDevices from '../../../lib/IconDevices';
import IconDvr from '../../../lib/IconDvr';
import IconGpsFixed from '../../../lib/IconGpsFixed';
import IconGpsNotFixed from '../../../lib/IconGpsNotFixed';
import IconGpsOff from '../../../lib/IconGpsOff';
import IconGraphicEq from '../../../lib/IconGraphicEq';
import IconLocationDisabled from '../../../lib/IconLocationDisabled';
import IconLocationSearching from '../../../lib/IconLocationSearching';
import IconNetworkCell from '../../../lib/IconNetworkCell';
import IconNetworkWifi from '../../../lib/IconNetworkWifi';
import IconNfc from '../../../lib/IconNfc';
import IconScreenLockLandscape from '../../../lib/IconScreenLockLandscape';
import IconScreenLockPortrait from '../../../lib/IconScreenLockPortrait';
import IconScreenLockRotation from '../../../lib/IconScreenLockRotation';
import IconScreenRotation from '../../../lib/IconScreenRotation';
import IconSdStorage from '../../../lib/IconSdStorage';
import IconSettingsSystemDaydream from '../../../lib/IconSettingsSystemDaydream';
import IconSignalCellular0Bar from '../../../lib/IconSignalCellular0Bar';
import IconSignalCellular1Bar from '../../../lib/IconSignalCellular1Bar';
import IconSignalCellular2Bar from '../../../lib/IconSignalCellular2Bar';
import IconSignalCellular3Bar from '../../../lib/IconSignalCellular3Bar';
import IconSignalCellular4Bar from '../../../lib/IconSignalCellular4Bar';
import IconSignalCellularConnectedNoInternet0Bar from '../../../lib/IconSignalCellularConnectedNoInternet0Bar';
import IconSignalCellularConnectedNoInternet1Bar from '../../../lib/IconSignalCellularConnectedNoInternet1Bar';
import IconSignalCellularConnectedNoInternet2Bar from '../../../lib/IconSignalCellularConnectedNoInternet2Bar';
import IconSignalCellularConnectedNoInternet3Bar from '../../../lib/IconSignalCellularConnectedNoInternet3Bar';
import IconSignalCellularConnectedNoInternet4Bar from '../../../lib/IconSignalCellularConnectedNoInternet4Bar';
import IconSignalCellularNoSim from '../../../lib/IconSignalCellularNoSim';
import IconSignalCellularNull from '../../../lib/IconSignalCellularNull';
import IconSignalCellularOff from '../../../lib/IconSignalCellularOff';
import IconSignalWifi0Bar from '../../../lib/IconSignalWifi0Bar';
import IconSignalWifi1Bar from '../../../lib/IconSignalWifi1Bar';
import IconSignalWifi1BarLock from '../../../lib/IconSignalWifi1BarLock';
import IconSignalWifi2Bar from '../../../lib/IconSignalWifi2Bar';
import IconSignalWifi2BarLock from '../../../lib/IconSignalWifi2BarLock';
import IconSignalWifi3Bar from '../../../lib/IconSignalWifi3Bar';
import IconSignalWifi3BarLock from '../../../lib/IconSignalWifi3BarLock';
import IconSignalWifi4Bar from '../../../lib/IconSignalWifi4Bar';
import IconSignalWifi4BarLock from '../../../lib/IconSignalWifi4BarLock';
import IconSignalWifiOff from '../../../lib/IconSignalWifiOff';
import IconStorage from '../../../lib/IconStorage';
import IconUsb from '../../../lib/IconUsb';
import IconWallpaper from '../../../lib/IconWallpaper';
import IconWidgets from '../../../lib/IconWidgets';
import IconWifiLock from '../../../lib/IconWifiLock';
import IconWifiTethering from '../../../lib/IconWifiTethering';

export default function DeviceIcons() {
  return (
    <div>
      <CategoryHeader>device</CategoryHeader>
      <FigContainer>
        <Figure tabIndex={0}>
          <IconAccessAlarm />
          <FigCaption>
            IconAccessAlarm
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccessAlarms />
          <FigCaption>
            IconAccessAlarms
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAccessTime />
          <FigCaption>
            IconAccessTime
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAddAlarm />
          <FigCaption>
            IconAddAlarm
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAirplanemodeActive />
          <FigCaption>
            IconAirplanemodeActive
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconAirplanemodeInactive />
          <FigCaption>
            IconAirplanemodeInactive
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBattery20 />
          <FigCaption>
            IconBattery20
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBattery30 />
          <FigCaption>
            IconBattery30
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBattery50 />
          <FigCaption>
            IconBattery50
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBattery60 />
          <FigCaption>
            IconBattery60
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBattery80 />
          <FigCaption>
            IconBattery80
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBattery90 />
          <FigCaption>
            IconBattery90
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryAlert />
          <FigCaption>
            IconBatteryAlert
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryCharging20 />
          <FigCaption>
            IconBatteryCharging20
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryCharging30 />
          <FigCaption>
            IconBatteryCharging30
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryCharging50 />
          <FigCaption>
            IconBatteryCharging50
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryCharging60 />
          <FigCaption>
            IconBatteryCharging60
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryCharging80 />
          <FigCaption>
            IconBatteryCharging80
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryCharging90 />
          <FigCaption>
            IconBatteryCharging90
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryChargingFull />
          <FigCaption>
            IconBatteryChargingFull
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryFull />
          <FigCaption>
            IconBatteryFull
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryStd />
          <FigCaption>
            IconBatteryStd
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBatteryUnknown />
          <FigCaption>
            IconBatteryUnknown
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBluetooth />
          <FigCaption>
            IconBluetooth
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBluetoothConnected />
          <FigCaption>
            IconBluetoothConnected
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBluetoothDisabled />
          <FigCaption>
            IconBluetoothDisabled
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBluetoothSearching />
          <FigCaption>
            IconBluetoothSearching
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightnessAuto />
          <FigCaption>
            IconBrightnessAuto
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightnessHigh />
          <FigCaption>
            IconBrightnessHigh
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightnessLow />
          <FigCaption>
            IconBrightnessLow
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconBrightnessMedium />
          <FigCaption>
            IconBrightnessMedium
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDataUsage />
          <FigCaption>
            IconDataUsage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDeveloperMode />
          <FigCaption>
            IconDeveloperMode
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDevices />
          <FigCaption>
            IconDevices
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconDvr />
          <FigCaption>
            IconDvr
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGpsFixed />
          <FigCaption>
            IconGpsFixed
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGpsNotFixed />
          <FigCaption>
            IconGpsNotFixed
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGpsOff />
          <FigCaption>
            IconGpsOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconGraphicEq />
          <FigCaption>
            IconGraphicEq
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLocationDisabled />
          <FigCaption>
            IconLocationDisabled
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconLocationSearching />
          <FigCaption>
            IconLocationSearching
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNetworkCell />
          <FigCaption>
            IconNetworkCell
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNetworkWifi />
          <FigCaption>
            IconNetworkWifi
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconNfc />
          <FigCaption>
            IconNfc
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconScreenLockLandscape />
          <FigCaption>
            IconScreenLockLandscape
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconScreenLockPortrait />
          <FigCaption>
            IconScreenLockPortrait
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconScreenLockRotation />
          <FigCaption>
            IconScreenLockRotation
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconScreenRotation />
          <FigCaption>
            IconScreenRotation
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSdStorage />
          <FigCaption>
            IconSdStorage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSettingsSystemDaydream />
          <FigCaption>
            IconSettingsSystemDaydream
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellular0Bar />
          <FigCaption>
            IconSignalCellular0Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellular1Bar />
          <FigCaption>
            IconSignalCellular1Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellular2Bar />
          <FigCaption>
            IconSignalCellular2Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellular3Bar />
          <FigCaption>
            IconSignalCellular3Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellular4Bar />
          <FigCaption>
            IconSignalCellular4Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularConnectedNoInternet0Bar />
          <FigCaption>
            IconSignalCellularConnectedNoInternet0Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularConnectedNoInternet1Bar />
          <FigCaption>
            IconSignalCellularConnectedNoInternet1Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularConnectedNoInternet2Bar />
          <FigCaption>
            IconSignalCellularConnectedNoInternet2Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularConnectedNoInternet3Bar />
          <FigCaption>
            IconSignalCellularConnectedNoInternet3Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularConnectedNoInternet4Bar />
          <FigCaption>
            IconSignalCellularConnectedNoInternet4Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularNoSim />
          <FigCaption>
            IconSignalCellularNoSim
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularNull />
          <FigCaption>
            IconSignalCellularNull
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalCellularOff />
          <FigCaption>
            IconSignalCellularOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi0Bar />
          <FigCaption>
            IconSignalWifi0Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi1Bar />
          <FigCaption>
            IconSignalWifi1Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi1BarLock />
          <FigCaption>
            IconSignalWifi1BarLock
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi2Bar />
          <FigCaption>
            IconSignalWifi2Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi2BarLock />
          <FigCaption>
            IconSignalWifi2BarLock
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi3Bar />
          <FigCaption>
            IconSignalWifi3Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi3BarLock />
          <FigCaption>
            IconSignalWifi3BarLock
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi4Bar />
          <FigCaption>
            IconSignalWifi4Bar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifi4BarLock />
          <FigCaption>
            IconSignalWifi4BarLock
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconSignalWifiOff />
          <FigCaption>
            IconSignalWifiOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStorage />
          <FigCaption>
            IconStorage
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconUsb />
          <FigCaption>
            IconUsb
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWallpaper />
          <FigCaption>
            IconWallpaper
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWidgets />
          <FigCaption>
            IconWidgets
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWifiLock />
          <FigCaption>
            IconWifiLock
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWifiTethering />
          <FigCaption>
            IconWifiTethering
          </FigCaption>
        </Figure>
      </FigContainer>
    </div>
  );
}
