if(!self.define){let e,a={};const i=(i,o)=>(i=new URL(i+".js",o).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let d={};const s=e=>i(e,n),l={module:{uri:n},exports:d,require:s};a[n]=Promise.all(o.map((e=>l[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android/android-launchericon-144-144.png",revision:"61f0d270c87e498a1db896868ab1ef49"},{url:"android/android-launchericon-192-192.png",revision:"83cad7cff4a103155dbafc5297c568b0"},{url:"android/android-launchericon-48-48.png",revision:"6c1e8943b12dcf71a8e0dfe1228fa237"},{url:"android/android-launchericon-512-512.png",revision:"bfa2002d15940285e8fab7ff224d38ba"},{url:"android/android-launchericon-72-72.png",revision:"ab47e5c148de3ba6585ecbaa5cd39af6"},{url:"android/android-launchericon-96-96.png",revision:"65908a79f69968a8bb72df3b801a3bbd"},{url:"assets/about-person.6a3434a6.png",revision:null},{url:"assets/bg-header.771fde14.png",revision:null},{url:"assets/citybuild.f935060d.png",revision:null},{url:"assets/dungeon.446a228a.png",revision:null},{url:"assets/index.9b74beea.css",revision:null},{url:"assets/index.c5e9807a.js",revision:null},{url:"assets/logo.116d291e.png",revision:null},{url:"assets/mine.e8a3e7d1.png",revision:null},{url:"favicon.ico",revision:"5d23ddcc7e1f781e213414679f80b03f"},{url:"index.html",revision:"531bebdeb8c14524930d671604cd9b66"},{url:"ios/100.png",revision:"a0cec3043078d29b9dbda9710662c20e"},{url:"ios/1024.png",revision:"14e91600d8d16a3ad08d9104f1fc55c5"},{url:"ios/114.png",revision:"9a06c4e34729f3479552c013c931eec2"},{url:"ios/120.png",revision:"53b74282ede912e45e1accf679d2d969"},{url:"ios/128.png",revision:"4e316a52faa685082bef7693329a8aa7"},{url:"ios/144.png",revision:"61f0d270c87e498a1db896868ab1ef49"},{url:"ios/152.png",revision:"2ec3c2170a05bcf042361e82680747c8"},{url:"ios/16.png",revision:"cd0257f6738dd72d1ed6bf06cb42fc22"},{url:"ios/167.png",revision:"b0b8b9dc9a3d0e8dca4b1b30556d8e68"},{url:"ios/180.png",revision:"b62ce84c53e136634ff64555bae38c4a"},{url:"ios/192.png",revision:"83cad7cff4a103155dbafc5297c568b0"},{url:"ios/20.png",revision:"a863c541607e53ccf87b76e203139615"},{url:"ios/256.png",revision:"e2ee49193787228fafc3463dc945c26e"},{url:"ios/29.png",revision:"c29c54e10ff399bf1d281068ac4c8063"},{url:"ios/32.png",revision:"8b9b3ecd1c726de24814dba04eb2db86"},{url:"ios/40.png",revision:"19562f736e1fa2f61e0f2632dfa27d6d"},{url:"ios/50.png",revision:"4227ea1a94d202e97448cffe836bb7ff"},{url:"ios/512.png",revision:"bfa2002d15940285e8fab7ff224d38ba"},{url:"ios/57.png",revision:"ba74d6c24cd7bef76c0e91b70bbdd005"},{url:"ios/58.png",revision:"d71f8d54a5388c1dcfa1b36ba93cadce"},{url:"ios/60.png",revision:"e265c622f6580589ddce66339b487a64"},{url:"ios/64.png",revision:"0d88914f62c2ae2bab5d03ebd2bae098"},{url:"ios/72.png",revision:"ab47e5c148de3ba6585ecbaa5cd39af6"},{url:"ios/76.png",revision:"b1c7dc63314b0b086b972a108fc1c4cf"},{url:"ios/80.png",revision:"4dbe626b91e3620a0dd2bdd827db561a"},{url:"ios/87.png",revision:"a5350d340c29fe5f4c89aa1bbd22bfe2"},{url:"logo.png",revision:"688bc00f83be8683bf5f3e5c5e989747"},{url:"registerSW.js",revision:"fd405ef7caa7a433fe11e9208f882f02"},{url:"windows11/LargeTile.scale-100.png",revision:"b9a5027d72de247dd93c2971533472a3"},{url:"windows11/LargeTile.scale-125.png",revision:"a28bc147dc2dd265961fda77ef50bbf6"},{url:"windows11/LargeTile.scale-150.png",revision:"f395a2f27a58df507d12527a3d4d254c"},{url:"windows11/LargeTile.scale-200.png",revision:"bd3056dfb0c3d2412bebd10bd9eba472"},{url:"windows11/LargeTile.scale-400.png",revision:"fc63286eea710157a67957f329768d04"},{url:"windows11/SmallTile.scale-100.png",revision:"685d75874d9da961e6ae77bc993be849"},{url:"windows11/SmallTile.scale-125.png",revision:"40cb9d068c2bc8083bbf878e46b62aae"},{url:"windows11/SmallTile.scale-150.png",revision:"443f8683ca926f026900c6c12c068713"},{url:"windows11/SmallTile.scale-200.png",revision:"8756e56115bd52b04dbd8f03df706164"},{url:"windows11/SmallTile.scale-400.png",revision:"89eee3a065e996cf597f3dfd955bfbf7"},{url:"windows11/SplashScreen.scale-100.png",revision:"2e35cf0d6be525312f50b4a0f523a5ea"},{url:"windows11/SplashScreen.scale-125.png",revision:"08d07afff4bd4af3a81b8f173b47afb7"},{url:"windows11/SplashScreen.scale-150.png",revision:"eb98c0a515b73a8b3cdd1afe473a5a39"},{url:"windows11/SplashScreen.scale-200.png",revision:"1978c01907036b11537535c5feb631d6"},{url:"windows11/SplashScreen.scale-400.png",revision:"bbcc5cc9457183816f1179860c43ccde"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"4a7eba5484f6fcbe8046e72bca6e9f89"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"47a8c2a6c03cb63814f125e3a128325f"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"1a5c618513a92dbcdbb4440bb98cdf59"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"489004cc8814168582e4f9e6696cc0c4"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"56441d10d82c22fab879951692709521"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"dcdad95c97d5af6ccda4cabad3943e4f"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"bb88f5d92178a41d5aa198789b7c802e"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"b74cf7778436b55e4b52485825e63e61"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"9ab533dbb0d7832b56a9dc14d5b6b5fb"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"4e3963efd196b20f863d884c9fee53e7"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"eacd0601e509637f7c1a6ff4ae0c6443"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"b164c463ddece74983be4e40dd596847"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"ad303eb7f214f6d9387e7a3aeef5ed8c"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"79a5fe8996ddbc0a026f4971bb9426dc"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"efb6864d964535843dd926b92794642e"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"6fca26e7229b1e789adb81f946ad667a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"f61caef1136801b8ea1a0569faeb5baf"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"be279c032172d78784d0b4a08ef17cc2"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"38ed322e59e5872a174990774434748a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"8dcab0153ab5b40336535b419362d035"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"dcdad95c97d5af6ccda4cabad3943e4f"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"bb88f5d92178a41d5aa198789b7c802e"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"b74cf7778436b55e4b52485825e63e61"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"9ab533dbb0d7832b56a9dc14d5b6b5fb"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"4e3963efd196b20f863d884c9fee53e7"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"eacd0601e509637f7c1a6ff4ae0c6443"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"b164c463ddece74983be4e40dd596847"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"ad303eb7f214f6d9387e7a3aeef5ed8c"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"79a5fe8996ddbc0a026f4971bb9426dc"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"efb6864d964535843dd926b92794642e"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"6fca26e7229b1e789adb81f946ad667a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"f61caef1136801b8ea1a0569faeb5baf"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"be279c032172d78784d0b4a08ef17cc2"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"38ed322e59e5872a174990774434748a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"8dcab0153ab5b40336535b419362d035"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"79a5fe8996ddbc0a026f4971bb9426dc"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"afd3432d5862403a3d55b6253c4ad238"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"c4813a54e214c7b5916a2cb18f586fa7"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"f88eb7f20969ec81a2600358b8ea115e"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"ee0a960d3d559ab1d6fc9db256e9e890"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"dcdad95c97d5af6ccda4cabad3943e4f"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"bb88f5d92178a41d5aa198789b7c802e"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"b74cf7778436b55e4b52485825e63e61"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"9ab533dbb0d7832b56a9dc14d5b6b5fb"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"4e3963efd196b20f863d884c9fee53e7"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"eacd0601e509637f7c1a6ff4ae0c6443"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"b164c463ddece74983be4e40dd596847"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"ad303eb7f214f6d9387e7a3aeef5ed8c"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"79a5fe8996ddbc0a026f4971bb9426dc"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"efb6864d964535843dd926b92794642e"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"6fca26e7229b1e789adb81f946ad667a"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"f61caef1136801b8ea1a0569faeb5baf"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"be279c032172d78784d0b4a08ef17cc2"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"38ed322e59e5872a174990774434748a"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"8dcab0153ab5b40336535b419362d035"},{url:"windows11/StoreLogo.scale-100.png",revision:"4227ea1a94d202e97448cffe836bb7ff"},{url:"windows11/StoreLogo.scale-125.png",revision:"65106bd39abac7a497083f72a87f21ad"},{url:"windows11/StoreLogo.scale-150.png",revision:"50420b08537b5c4a920781514846ecea"},{url:"windows11/StoreLogo.scale-200.png",revision:"a0cec3043078d29b9dbda9710662c20e"},{url:"windows11/StoreLogo.scale-400.png",revision:"a6fd1ef0535d78781833b1065af498b5"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"b83764ff070affeca6903b248eb0fa52"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"3a07bf8f8c1abf5831136339e0bcf03a"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"028323dcc961fe3ebeca191a4d43a276"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"2e35cf0d6be525312f50b4a0f523a5ea"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"1978c01907036b11537535c5feb631d6"},{url:"manifest.webmanifest",revision:"ea01984f2849d0646965e034c0066127"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
