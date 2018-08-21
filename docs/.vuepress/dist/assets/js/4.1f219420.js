(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{314:function(e,n,t){},316:function(e,n,t){"use strict";var o=t(314);t.n(o).a},318:function(e,n,t){"use strict";t.r(n);var o={data:function(){return{editor:[],platform:[],language:[],generate_from:{editor:{name:"Xcode",path:"gitignore-master/Global/Xcode.gitignore",content:"##  Xcode\n```\n\n# Xcode\n#\n# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore\n\n## User settings\nxcuserdata/\n\n## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)\n*.xcscmblueprint\n*.xccheckout\n\n## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)\nbuild/\nDerivedData/\n*.moved-aside\n*.pbxuser\n!default.pbxuser\n*.mode1v3\n!default.mode1v3\n*.mode2v3\n!default.mode2v3\n*.perspectivev3\n!default.perspectivev3\n\n\n```\n\n"},language:{name:"Swift",path:"gitignore-master/Swift.gitignore",content:"##  Swift\n```\n\n# Xcode\n#\n# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore\n\n## Build generated\nbuild/\nDerivedData/\n\n## Various settings\n*.pbxuser\n!default.pbxuser\n*.mode1v3\n!default.mode1v3\n*.mode2v3\n!default.mode2v3\n*.perspectivev3\n!default.perspectivev3\nxcuserdata/\n\n## Other\n*.moved-aside\n*.xccheckout\n*.xcscmblueprint\n\n## Obj-C/Swift specific\n*.hmap\n*.ipa\n*.dSYM.zip\n*.dSYM\n\n## Playgrounds\ntimeline.xctimeline\nplayground.xcworkspace\n\n# Swift Package Manager\n#\n# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.\n# Packages/\n# Package.pins\n# Package.resolved\n.build/\n\n# CocoaPods\n#\n# We recommend against adding the Pods directory to your .gitignore. However\n# you should judge for yourself, the pros and cons are mentioned at:\n# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control\n#\n# Pods/\n#\n# Add this line if you want to avoid checking in source code from the Xcode workspace\n# *.xcworkspace\n\n# Carthage\n#\n# Add this line if you want to avoid checking in source code from Carthage dependencies.\n# Carthage/Checkouts\n\nCarthage/Build\n\n# fastlane\n#\n# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the\n# screenshots whenever they are needed.\n# For more information about the recommended setup visit:\n# https://docs.fastlane.tools/best-practices/source-control/#source-control\n\nfastlane/report.xml\nfastlane/Preview.html\nfastlane/screenshots/**/*.png\nfastlane/test_output\n\n# Code Injection\n#\n# After new code Injection tools there's a generated folder /iOSInjectionProject\n# https://github.com/johnno1962/injectionforxcode\n\niOSInjectionProject/\n\n\n```\n\n"},platform:{name:"macOS",path:"gitignore-master/Global/macOS.gitignore",content:"##  macOS\n```\n\n# General\n.DS_Store\n.AppleDouble\n.LSOverride\n\n# Icon must end with two \\r\nIcon\r\r\n\n# Thumbnails\n._*\n\n# Files that might appear in the root of a volume\n.DocumentRevisions-V100\n.fseventsd\n.Spotlight-V100\n.TemporaryItems\n.Trashes\n.VolumeIcon.icns\n.com.apple.timemachine.donotpresent\n\n# Directories potentially created on remote AFP share\n.AppleDB\n.AppleDesktop\nNetwork Trash Folder\nTemporary Items\n.apdisk\n\n\n```\n\n"}}}},computed:{code:function(){this.generate_from.editor.content}},created:function(){var e=this;this.$http.get("/data.json").then(function(n){e.editor=n.data.editor,e.language=n.data.language,e.platform=n.data.platform},function(e){})},methods:{}},a=(t(316),t(0)),r=Object(a.a)(o,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"generate"},[t("el-form",{staticClass:"form-generate",attrs:{inline:!0,model:e.generate_from}},[t("el-form-item",{attrs:{label:"I USE"}},[t("el-select",{attrs:{"value-key":"name",ilterable:"",filterable:"",placeholder:"PLEASE INPUT"},model:{value:e.generate_from.editor,callback:function(n){e.$set(e.generate_from,"editor",n)},expression:"generate_from.editor"}},e._l(e.editor,function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"WRITE"}},[t("el-select",{attrs:{"value-key":"name",ilterable:"",filterable:"",placeholder:"PLEASE INPUT"},model:{value:e.generate_from.language,callback:function(n){e.$set(e.generate_from,"language",n)},expression:"generate_from.language"}},e._l(e.language,function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"ON"}},[t("el-select",{attrs:{"value-key":"name",ilterable:"",filterable:"",placeholder:"PLEASE INPUT"},model:{value:e.generate_from.platform,callback:function(n){e.$set(e.generate_from,"platform",n)},expression:"generate_from.platform"}},e._l(e.platform,function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e}})}))],1)],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{staticClass:"language-text"},[t("code",{domProps:{textContent:e._s(e.generate_from.editor.content+e.generate_from.language.content+e.generate_from.platform.content)}})])])],1)},[],!1,null,"2553f446",null);r.options.__file="Generate.vue";n.default=r.exports}}]);