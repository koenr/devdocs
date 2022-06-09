"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[18616],{74160:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),i=["components"],l={title:"Moodle 3.7.1",tags:["Release notes","Moodle 3.7"],sidebar_position:1,moodleVersion:"3.7.1"},d=void 0,m={unversionedId:"releases/3.7/3.7.1",id:"releases/3.7/3.7.1",title:"Moodle 3.7.1",description:"Release date: 8 July 2019",source:"@site/general/releases/3.7/3.7.1.md",sourceDirName:"releases/3.7",slug:"/releases/3.7/3.7.1",permalink:"/devdocs/general/releases/3.7/3.7.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.7/3.7.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.7",permalink:"/devdocs/general/tags/moodle-3-7"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654755163,formattedLastUpdatedAt:"09/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 3.7.1",tags:["Release notes","Moodle 3.7"],sidebar_position:1,moodleVersion:"3.7.1"},sidebar:"releaseNotes",previous:{title:"Moodle 3.7",permalink:"/devdocs/general/releases/3.7"},next:{title:"Moodle 3.7.2",permalink:"/devdocs/general/releases/3.7/3.7.2"}},p={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security fixes and improvements",id:"security-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:3},{value:"Security improvements",id:"security-improvements",level:3},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 8 July 2019"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.7.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.7.1"),"."),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59650"},"MDL-59650")," - Calendar export no longer limited to 40 events"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64935"},"MDL-64935")," - Jump to dropdown menu no longer overlaps before / next activity links"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53778"},"MDL-53778")," - Quiz with activity completion 'Or all available attempts completed' no longer possible with unlimited attempts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65101"},"MDL-65101")," - Users with capability moodle/site:messageanyuser are no longer restricted from messaging users with 'My contacts only' messaging privacy enabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65660"},"MDL-65660")," - Guest users prompted to enrol in order to post in a forum"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65675"},"MDL-65675")," - 'Re' no longer duplicated in forum post subject line"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65249"},"MDL-65249")," - Redis cache store correctly displays exception after failed connections"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65084"},"MDL-65084")," - Recently accessed items block no longer attempts to load items from deleted courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57729"},"MDL-57729")," - Ampersand in site title no longer breaks LTI provider cartridge XML"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65655"},"MDL-65655")," - Forum mailings and maintenance jobs no longer fail with 'Suspended account' exception"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55821"},"MDL-55821")," - The individual assignment grading page when using marking workflow and rubrics now displays the current gradebook grade"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65696"},"MDL-65696")," - PDF annotation comments no longer expand unexpectedly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64784"},"MDL-64784")," - Enrolled users list sort order no longer changes after adding or removing a user"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55197"},"MDL-55197")," - Multi-lang filter no longer ignores 'en' parent language"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65829"},"MDL-65829")," - Enrolments whose start date is after the analytics analysis start time are no longer discarded"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65708"},"MDL-65708")," - Child themes have base layouts loaded"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65888"},"MDL-65888")," - Fix for 'error/usernotconfirmed' exception in forum mailings and maintenance jobs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65661"},"MDL-65661")," - Long course names in 'Recently accessed courses' block correctly displayed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65839"},"MDL-65839")," - Improved memory usage of analytics evaluation and initial training processes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65705"},"MDL-65705")," - Badges from other sites which are displayed via a backpack no longer show date in the future"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65326"},"MDL-65326")," - Restore process no longer fails if a capability it is attempting to assign does not exist"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65665"},"MDL-65665")," - Quick reply now respects subscribe on reply user preference"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65814"},"MDL-65814")," - Item counts for action events are now shown in the timeline block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65666"},"MDL-65666")," - Unread forum posts are once again highlighted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65883"},"MDL-65883")," - Quiz navigation buttons once again scroll to the correct question on the page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65901"},"MDL-65901")," - Forum advanced search form styling improvements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65634"},"MDL-65634")," - Analytics 'students at risk' models now discard user enrolments whose start and end dates fall outside of the analysed time interval"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65297"},"MDL-65297")," - Atto 'Manage files' now detects filenames containing a hash symbol (#)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65591"},"MDL-65591")," - Language customisation page once again displays the correct buttons"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65606"},"MDL-65606")," - Database activity unapproved entries are once again highlighted")),(0,s.kt)("h2",{id:"security-fixes-and-improvements"},"Security fixes and improvements"),(0,s.kt)("h3",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388567"},"MSA-19-0013")," Missing sesskey (CSRF) token in loading/unloading XML files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388568"},"MSA-19-0014")," Ability to delete glossary entries that belong to another glossary"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388569"},"MSA-19-0015")," Quiz group overrides did not observe groups membership or accessallgroups"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388570"},"MSA-19-0016")," Assignment group overrides did not observe separate groups mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=388571"},"MSA-19-0017")," Upgrade TCPDF library for PHP 7.3 and bug fixes (upstream)")),(0,s.kt)("h3",{id:"security-improvements"},"Security improvements"),(0,s.kt)("p",null,"The following bug fixes or improvements were made, which contribute to improving security or privacy best practices:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65779"},"MDL-65779")," - Forum backup and restore now retains any private replies as private"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60347"},"MDL-60347")," - SMTP debugging now also requires developer level debugging messages to be enabled before being displayed. Although SMTP debugging is not intended for production site use, this provides an additional fallback measure to prevent verbose debugging from being unintentionally being visible to users.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.7.1"},"Notes de mise \xe0 jour de Moodle 3.7.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.7.1"},"Notas de Moodle 3.7.1"))))}k.isMDXComponent=!0}}]);