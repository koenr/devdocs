"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[42214],{35540:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),l=a(13904),i=["components"],n={title:"Moodle 1.9.6",tags:["Release notes","Moodle 1.9"],sidebar_position:6,moodleVersion:"1.9.6"},d=void 0,p={unversionedId:"releases/1.9/1.9.6",id:"releases/1.9/1.9.6",title:"Moodle 1.9.6",description:"Release date: 21st October 2009",source:"@site/general/releases/1.9/1.9.6.md",sourceDirName:"releases/1.9",slug:"/releases/1.9/1.9.6",permalink:"/devdocs/general/releases/1.9/1.9.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.9/1.9.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.9",permalink:"/devdocs/general/tags/moodle-1-9"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654876964,formattedLastUpdatedAt:"10/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 1.9.6",tags:["Release notes","Moodle 1.9"],sidebar_position:6,moodleVersion:"1.9.6"},sidebar:"releaseNotes",previous:{title:"Moodle 1.9.5",permalink:"/devdocs/general/releases/1.9/1.9.5"},next:{title:"Moodle 1.9.7",permalink:"/devdocs/general/releases/1.9/1.9.7"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"New language strings",id:"new-language-strings",level:2},{value:"New language packs",id:"new-language-packs",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 21st October 2009"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/browse/MDL/fixforversion/10340"},"the full list of fixed issues in 1.9.6"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19145"},"MDL-19145")," - Integration with ",(0,s.kt)("a",{parentName:"li",href:"http://www.safeexambrowser.org/"},"Safe Exam Browser")," (requires enabling in ",(0,s.kt)("em",{parentName:"li"},"Site Administration > Miscellaneous > ",(0,s.kt)("a",{parentName:"em",href:"https://docs.moodle.org/en/Experimental"},"Experimental")),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19460"},"MDL-19460")," - Wiki module: unsupported feature, interwiki links, ",(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=125870"},"disabled by default")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19274"},"MDL-19274")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Blog"},"Blog")," RSS feeds now include tag information for each post"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-18658"},"MDL-18658")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Multimedia_plugins"},"Multimedia plugins")," filter now supports mp4 and m4v"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19231"},"MDL-19231")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Multimedia_plugins"},"Multimedia plugins")," filter includes option for processing YouTube links and auto-embedding the video in the text with correct XHTML"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-11896"},"MDL-11896")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Database_activity_module"},"Database activity module")," entries awaiting approval display and 'Entry is not approved yet' message"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-12922"},"MDL-12922")," - New capability ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/restore/rolldates"},"moodle/restore:rolldates")," to control who can ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Roll_courses_forward"},"roll courses forward")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-15262"},"MDL-15262")," - New capabilities ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/course/changecategory"},"moodle/course:changecategory")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/Capabilities/moodle/course/changesummary"},"moodle/course:changesummary")," to control who can edit the course category and summary in the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Course_settings"},"Course settings")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19078"},"MDL-19078")," - Course search now includes search of course idnumber and shortname too"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20371"},"MDL-20371")," - ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Site_files"},"Site files")," has a secure backupdata folder for saving course backups")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=136879"},"MSA-09-0016")," - Email not properly escaped on user edit page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=136880"},"MSA-09-0017")," - Upgrade code in 1.9 does not escape tags properly"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=136881"},"MSA-09-0018")," - Incorrect escaping when updating first post in a single simple discussion forum type"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=136882"},"MSA-09-0019")," - SQL injection in update_record"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=136884"},"MSA-09-0020")," - Teachers can view students' grades in all courses in the overview report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=136886"},"MSA-09-0021")," - Error in ADODB OCI8/MSSQL drivers allows SQL injection vulnerability")),(0,s.kt)("h2",{id:"new-language-strings"},"New language strings"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20371"},"MDL-20371")," - publicsitefileswarning3 in ",(0,s.kt)("em",{parentName:"li"},"moodle.php")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19145"},"MDL-19145")," - several strings and a new help file. Please check CVS history.")),(0,s.kt)("h2",{id:"new-language-packs"},"New language packs"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Marathi - Usha Deo"),(0,s.kt)("li",{parentName:"ul"},"Urdu - Faisal Kaleem")),(0,s.kt)("p",null,"(See ",(0,s.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Translation_credits"},"Translation credits")," for additional details.)"),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/19/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.9.6"},"French version of this page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.9.6"},"Notas de Moodle 1.9.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.9.6_Versionsinformationen"},"Moodle 1.9.6 Versionsinformationen"))))}h.isMDXComponent=!0}}]);