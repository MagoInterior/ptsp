/* Codded by @sisula
cobra bot developer
2021 cobra bot project

*/
const cobra = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const cnfg = require('../config');
const Language = require('../language');
const Lang = Language.getString('admin');
var _0x505ea9=_0x2df4,_0x24f8e3=_0x2df4;(function(_0x5bc6ab,_0x5c1f3a){var _0x375be6=_0x2df4,_0x484d6d=_0x2df4,_0x4321d4=_0x5bc6ab();while(!![]){try{var _0x1703ce=-parseInt(_0x375be6(0x144))/(0x4b7*-0x7+-0xd*0x1d3+-0x1*-0x38b9)+parseInt(_0x375be6(0x150))/(-0x12cb+-0x13dc+0x26a9)*(parseInt(_0x375be6(0x153))/(0x1*0x1f0+0x325+-0x512))+-parseInt(_0x484d6d(0x164))/(-0x19e0+0x67*-0x11+0x20bb)+parseInt(_0x375be6(0x13e))/(0x1ae*0x13+0x1b69+-0x3b4e)*(-parseInt(_0x375be6(0x13d))/(-0x2483+0x66*-0x55+0x4667))+-parseInt(_0x375be6(0x14a))/(-0x23bb+-0x785+0x2b47)+parseInt(_0x484d6d(0x167))/(-0xc*0xbb+-0xb0b*-0x3+0x1*-0x1855)+parseInt(_0x484d6d(0x12f))/(-0x238*-0xd+0x23bd+-0x408c);if(_0x1703ce===_0x5c1f3a)break;else _0x4321d4['push'](_0x4321d4['shift']());}catch(_0x3c0e3c){_0x4321d4['push'](_0x4321d4['shift']());}}}(_0x1e87,0xd5e98+0x2dc1b*-0x3+0x8c156));var _0x535aea=function(){var _0x4d5813=_0x2df4,_0x18d270=_0x2df4,_0x14f6b1={};_0x14f6b1[_0x4d5813(0x133)]='4|5|1|3|2|'+'0',_0x14f6b1[_0x4d5813(0x13a)]=function(_0x2e2406,_0x48de4d){return _0x2e2406!==_0x48de4d;},_0x14f6b1[_0x4d5813(0x136)]=_0x4d5813(0x140);var _0x5c4b79=_0x14f6b1,_0x3f1521=!![];return function(_0x4d1326,_0x3404e7){var _0x2e3428=_0x18d270,_0x341ea5=_0x18d270,_0x1e9e0e={'rgwyM':_0x5c4b79[_0x2e3428(0x133)],'mFBYQ':function(_0x5112cf,_0x5d37ec){var _0x365d00=_0x2e3428;return _0x5c4b79[_0x365d00(0x13a)](_0x5112cf,_0x5d37ec);},'LNyIB':_0x341ea5(0x152)};if(_0x5c4b79['LMXDc']!==_0x2e3428(0x140)){var _0x102cd9=_0x3a4a38?function(){var _0x984255=_0x341ea5;if(_0x528022){var _0x451031=_0x9fe151[_0x984255(0x15a)](_0x10dd41,arguments);return _0x14541f=null,_0x451031;}}:function(){};return _0x5b5e27=![],_0x102cd9;}else{var _0x1292ea=_0x3f1521?function(){var _0x521bb3=_0x2e3428,_0x1ab962=_0x2e3428,_0x18cd65={};_0x18cd65[_0x521bb3(0x15b)]=_0x1e9e0e[_0x521bb3(0x160)];var _0x407690=_0x18cd65;if(_0x3404e7){if(_0x1e9e0e['mFBYQ'](_0x1e9e0e['LNyIB'],_0x521bb3(0x152))){var _0x13d277=_0x407690['tECYC'][_0x521bb3(0x149)]('|'),_0x151e90=0x1e80+0x35*-0x39+-0x1*0x12b3;while(!![]){switch(_0x13d277[_0x151e90++]){case'0':_0x241a4a[_0x42673a]=_0xea6c8a;continue;case'1':var _0x13f2bc=_0x54fb99[_0x42673a]||_0xea6c8a;continue;case'2':_0xea6c8a[_0x521bb3(0x166)]=_0x13f2bc[_0x521bb3(0x166)][_0x1ab962(0x165)](_0x13f2bc);continue;case'3':_0xea6c8a[_0x1ab962(0x13f)]=_0x3e9613[_0x521bb3(0x165)](_0x1d5364);continue;case'4':var _0xea6c8a=_0x3e72a5[_0x521bb3(0x13c)+'r'][_0x521bb3(0x15f)]['bind'](_0x2152b8);continue;case'5':var _0x42673a=_0x5584c8[_0xcb8b58];continue;}break;}}else{var _0x4287cc=_0x3404e7[_0x1ab962(0x15a)](_0x4d1326,arguments);return _0x3404e7=null,_0x4287cc;}}}:function(){};return _0x3f1521=![],_0x1292ea;}};}(),_0xc25f8e=_0x535aea(this,function(){var _0x1c8b1a=_0x2df4,_0x509741=_0x2df4,_0x49991f={'WFaEv':_0x1c8b1a(0x142),'OmJMD':_0x1c8b1a(0x147),'rPFJT':_0x509741(0x143),'WhbCv':_0x509741(0x158),'RKhYR':_0x509741(0x15d),'DwBjf':function(_0x2f8c1c,_0x480801){return _0x2f8c1c+_0x480801;},'qbtCP':_0x1c8b1a(0x151)+'ctor(\x22retu'+_0x509741(0x15e)+'\x20)','ryTZh':_0x509741(0x137),'Uxfym':'BdlMS','FwxPN':function(_0x46b1de,_0x548b8e){return _0x46b1de(_0x548b8e);},'AhWcL':_0x509741(0x15c)+_0x509741(0x145),'ILmDX':function(_0x3cb2f8){return _0x3cb2f8();},'xpoXt':_0x509741(0x135),'hKCEV':_0x1c8b1a(0x157),'AzryO':function(_0x5dc192,_0x2fba6d){return _0x5dc192===_0x2fba6d;},'sJeZv':_0x1c8b1a(0x14d),'fWZht':_0x509741(0x13b)+'0'},_0x19498d;try{if(_0x49991f[_0x1c8b1a(0x132)]===_0x49991f[_0x1c8b1a(0x163)]){var _0x18fbd0=_0x49991f[_0x509741(0x162)]['split']('|'),_0x5062cd=0x1d0b+-0x114d+0x6*-0x1f5;while(!![]){switch(_0x18fbd0[_0x5062cd++]){case'0':var _0x14fa6a=[_0x49991f[_0x1c8b1a(0x131)],_0x49991f[_0x509741(0x14e)],_0x509741(0x148),_0x1c8b1a(0x135),_0x1c8b1a(0x157),_0x49991f[_0x509741(0x139)],_0x49991f[_0x1c8b1a(0x14f)]];continue;case'1':for(var _0x296e20=0x44*0x27+0x1*-0x204b+-0x15ef*-0x1;_0x296e20<_0x14fa6a[_0x1c8b1a(0x146)];_0x296e20++){var _0x5d8859=_0x81f902[_0x1c8b1a(0x13c)+'r'][_0x509741(0x15f)][_0x509741(0x165)](_0x4cf922),_0x1eae21=_0x14fa6a[_0x296e20],_0x315c75=_0x2ecd92[_0x1eae21]||_0x5d8859;_0x5d8859[_0x1c8b1a(0x13f)]=_0x20e712['bind'](_0x442f18),_0x5d8859[_0x1c8b1a(0x166)]=_0x315c75['toString'][_0x509741(0x165)](_0x315c75),_0x2ecd92[_0x1eae21]=_0x5d8859;}continue;case'2':var _0x231698;continue;case'3':try{var _0x4e975d=_0x61177d(_0x49991f['DwBjf'](_0x1c8b1a(0x15c)+_0x1c8b1a(0x145)+_0x49991f['qbtCP'],');'));_0x231698=_0x4e975d();}catch(_0x5cfa52){_0x231698=_0x21ed1a;}continue;case'4':var _0x2ecd92=_0x231698[_0x1c8b1a(0x154)]=_0x231698[_0x509741(0x154)]||{};continue;}break;}}else{var _0x558c3f=_0x49991f[_0x1c8b1a(0x130)](Function,_0x49991f[_0x1c8b1a(0x156)](_0x49991f[_0x509741(0x156)](_0x49991f[_0x1c8b1a(0x14b)],_0x49991f['qbtCP']),');'));_0x19498d=_0x49991f['ILmDX'](_0x558c3f);}}catch(_0x4326ef){_0x19498d=window;}var _0x47422b=_0x19498d[_0x1c8b1a(0x154)]=_0x19498d[_0x1c8b1a(0x154)]||{},_0x2dab1c=[_0x49991f[_0x509741(0x131)],_0x49991f[_0x509741(0x14e)],'info',_0x49991f[_0x509741(0x12e)],_0x49991f['hKCEV'],_0x49991f[_0x509741(0x139)],_0x49991f[_0x1c8b1a(0x14f)]];for(var _0x4f2bf8=-0x1668+0x28c+0x13dc;_0x4f2bf8<_0x2dab1c[_0x509741(0x146)];_0x4f2bf8++){if(_0x49991f[_0x509741(0x134)]('FLoGa',_0x49991f[_0x509741(0x159)])){var _0xc36d5b=_0x49991f[_0x509741(0x138)][_0x509741(0x149)]('|'),_0x21428b=0x1*-0x2161+0xfd6+0x118b;while(!![]){switch(_0xc36d5b[_0x21428b++]){case'0':_0x47422b[_0x4d22d6]=_0x27103a;continue;case'1':_0x27103a['__proto__']=_0x535aea[_0x509741(0x165)](_0x535aea);continue;case'2':var _0x4d22d6=_0x2dab1c[_0x4f2bf8];continue;case'3':_0x27103a[_0x1c8b1a(0x166)]=_0xca2c11['toString']['bind'](_0xca2c11);continue;case'4':var _0xca2c11=_0x47422b[_0x4d22d6]||_0x27103a;continue;case'5':var _0x27103a=_0x535aea[_0x1c8b1a(0x13c)+'r'][_0x1c8b1a(0x15f)][_0x1c8b1a(0x165)](_0x535aea);continue;}break;}}else _0x108481=_0x5cc24e;}});_0xc25f8e();function _0x1e87(){var _0xc154c5=['t213sva','nxWYFdr8mxWZFa','y29UC3rYDwn0BW','mJy3mJeWBhrVCKPZ','mtq1tu5dtMDA','x19WCM90B19F','suz1u1O','mdmWoq','mNWZFdr8mhWX','D2fYBG','mti1otu3ne5NA2L3Aq','BMn0Aw9UkcKG','BgvUz3rO','Bg9N','Aw5MBW','C3bSAxq','ndmYotu5mu5Hqwzfza','qwHxy0W','x1Dbsvq','rKXVr2e','CLbgsLq','uKTOwvi','nZe3nenUExzeEq','E30Uy29UC3rYDq','C2L1DKi','mJe5CvLcBLjc','y29UC29Szq','mJa4nde5nteYma','rhDcAMy','zxHJzxb0Aw9U','DgfIBgu','C0PLwNy','yxbWBhK','Devdwum','CMv0DxjUicHMDq','DhjHy2u','CM4GDgHPCYiPka','ChjVDg90ExbL','CMD3Eu0','vKvssuzzsu5hxW','v0zHrxy','vxHMEw0','nJGYmtGXnMX3B29Tqq','yMLUza','Dg9tDhjPBMC','odeZmZy4ohnis1PzwG','EhbVwhq','ndaZntC4mJDkDeHtuvK','rND4ue4','t21ktuq','CNLuwMG','DKfOz3m','qxPYEu8','zxjYB3i','te1yrgm','Dvf6Dg4','zLDAAhq','v2HIq3y'];_0x1e87=function(){return _0xc154c5;};return _0x1e87();}function _0x2df4(_0x991a83,_0x1dbd6f){var _0x142d74=_0x1e87();return _0x2df4=function(_0x2292d3,_0x51bf60){_0x2292d3=_0x2292d3-(-0x914+-0x4d0+-0x1*-0xf12);var _0x2636d3=_0x142d74[_0x2292d3];if(_0x2df4['DTgvXE']===undefined){var _0x3e72a5=function(_0x54fb99){var _0x3e9613='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1d5364='',_0x241a4a='';for(var _0x53ff89=-0xe0f+-0x16c+0xf7b,_0x521aa6,_0x1ab9ea,_0x24e38b=-0x10e5+0x8*0x45a+-0x11eb*0x1;_0x1ab9ea=_0x54fb99['charAt'](_0x24e38b++);~_0x1ab9ea&&(_0x521aa6=_0x53ff89%(0x2*0x59d+-0x1ec7+-0x1391*-0x1)?_0x521aa6*(0x5f7*0x6+0x1c86+-0x4010)+_0x1ab9ea:_0x1ab9ea,_0x53ff89++%(-0x1941+0x166b*-0x1+0x2fb0))?_0x1d5364+=String['fromCharCode'](-0x24cd*-0x1+0x1*-0x16b7+0x3*-0x45d&_0x521aa6>>(-(-0x5*0x471+-0x85*0xd+-0x9a8*-0x3)*_0x53ff89&-0x26b6+-0x3b9*-0x3+0x1b91)):0x1*-0x1097+-0xc9*0xd+-0x55c*-0x5){_0x1ab9ea=_0x3e9613['indexOf'](_0x1ab9ea);}for(var _0x55024e=-0x1acb+-0x1*0xb47+-0x1bb*-0x16,_0x49336a=_0x1d5364['length'];_0x55024e<_0x49336a;_0x55024e++){_0x241a4a+='%'+('00'+_0x1d5364['charCodeAt'](_0x55024e)['toString'](-0x2300+-0xcdb*-0x2+0x156*0x7))['slice'](-(-0x1a51+0xff1+0xa62));}return decodeURIComponent(_0x241a4a);};_0x2df4['NGVYGh']=_0x3e72a5,_0x991a83=arguments,_0x2df4['DTgvXE']=!![];}var _0x2152b8=_0x142d74[-0x120d*0x2+-0x116*-0x19+0x8f4],_0x5584c8=_0x2292d3+_0x2152b8,_0xcb8b58=_0x991a83[_0x5584c8];return!_0xcb8b58?(_0x2636d3=_0x2df4['NGVYGh'](_0x2636d3),_0x991a83[_0x5584c8]=_0x2636d3):_0x2636d3=_0xcb8b58,_0x2636d3;},_0x2df4(_0x991a83,_0x1dbd6f);}if(cnfg[_0x505ea9(0x161)+'YOUR_USER_'+'BOT_PLEASE'+_0x24f8e3(0x14c)]!==_0x24f8e3(0x155)+_0x505ea9(0x141))return;
if (cnfg.WORKTYPE == 'private') {

    cobra.addCommand({pattern: 'admin$', fromMe: true, desc: Lang.ADMIN_DESC}, (async (message, match) => {    
        if (cnfg.LANG == 'SI'){
            await message.sendMessage('*◁ 🔧 COBRA BOT Admin Panel▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_');
        } else { 
            await message.sendMessage('*◁ 🔧 COBRA BOT Admin Panel▷*\n\n*🧞‍♀️command* : .ban\n*💠usage* : ```Remove someone from the group. Mention the message or tag a person to use the command```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```Adds someone to the group```\n\n*🧞‍♀️command* : .mute\n*💠usage* : ```Mute group chat. Only admin can send message```\n\n*🧞‍♀️command* : .unmute\n*💠ussage* : ```Remove group chat mute. Anyone can send a messae```\n\n*🌀command* : .clear\n*💠ussage* : ```Chat clear.```\n\n*🧞‍♀️command* : .promote\n*💠ussage* : ```Members admin.```\n\n*🧞‍♀️command* : .demote\n*💠ussage* : ```Makes the admin a member.```\n\n*🧞‍♀️command* : .plugin\n*💠ussage* : ```Install the plugin.```\n\n*🧞‍♀️command* : .remove\n*💠ussage* : ```remove plugin.```\n\n*🧞‍♀️command* : .invite\n*💠ussage* : ```Provides group invitation link.```\n\n*🧞‍♀️command* : .afk\n*💠ussage* : ```It turns bot bot AFK.```\n\n*🧞‍♀️command* : .restart\n*💠ussage* : ```Restart the bot.```\n\n*🧞‍♀️command* : .shutdown\n*💠ussage* : ```Shutdown the Bot.```\n\n*🧞‍♀️command* : .setvar\n*💠ussage* : ```Heroku config vars.```\n\n*🧞‍♀️command* : .getvar\n*💠ussage* : ```Get Heroku config var. ```\n\n*🧞‍♀️command* : .speedtest\n*💠ussage* : ``` Measuring download and upload speeds.```\n\n*🧞‍♀️command* : .filter\n*💠ussage* : ```It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.```\n\n*🧞‍♀️command* :  .stop\n*💠ussage* : ``` Stops the filters you added earlier.```\n\n*🧞‍♀️command* :  .welcome\n*💠ussage* : ``` It sets the welcome message.```\n\n*🧞‍♀️command* : .goodbye\n*💠ussage* : ```In sets the goodbye message.```\n\n*🧞‍♀️command* : .kickme\n*💠ussage* : ```It removes the bot from the command group.```\n\n*🧞‍♀️command* : .pp\n*💠ussage* : ```The photo you mention mentions the bot profile photo.```\n\n*🧞‍♀️command* : .block\n*💠ussage* : ```Block tagged user.```\n\n*🧞‍♀️command* : .unblock\n*💠ussage* : ```Unblock tagged user.```\n\n*🧞‍♀️command* : .jid\n*💠ussage* : ```Provides the user Jid```\n\n*🧞‍♀️command* : .tagall\n*💠ussage* : ```tag all members in the grp.```\n\n*🧞‍♀️command* : .update\n*💠ussage* : ```check updates.```\n\n*🧞‍♀️command* : .update now\n*💠ussage* : ```update your bot.```\n\n*🧞‍♀️command* : .dyno\n*💠ussage* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```add user in group```\n\n*🧞‍♀️command* : .sysd\n*💠ussage* : ```Displaying system statistics```\n\n_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_');
        }
    }));
}
else if (cnfg.WORKTYPE == 'public') {

    cobra.addCommand({pattern: 'admin$', fromMe: true, desc: Lang.ADMIN_DESC}, (async (message, match) => {    
        if (cnfg.LANG == 'SI') {
            await message.sendMessage('*◁ 🔧 COBRA BOT Admin Panel▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_');
        } else { 
            await message.sendMessage('*◁ 🔧 COBRA BOT Admin Panel▷*\n\n*🧞‍♀️command* : .ban\n*💠usage* : ```Remove someone from the group. Mention the message or tag a person to use the command```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```Adds someone to the group```\n\n*🧞‍♀️command* : .mute\n*💠usage* : ```Mute group chat. Only admin can send message```\n\n*🧞‍♀️command* : .unmute\n*💠ussage* : ```Remove group chat mute. Anyone can send a messae```\n\n*🌀command* : .clear\n*💠ussage* : ```Chat clear.```\n\n*🧞‍♀️command* : .promote\n*💠ussage* : ```Members admin.```\n\n*🧞‍♀️command* : .demote\n*💠ussage* : ```Makes the admin a member.```\n\n*🧞‍♀️command* : .plugin\n*💠ussage* : ```Install the plugin.```\n\n*🧞‍♀️command* : .remove\n*💠ussage* : ```remove plugin.```\n\n*🧞‍♀️command* : .invite\n*💠ussage* : ```Provides group invitation link.```\n\n*🧞‍♀️command* : .afk\n*💠ussage* : ```It turns bot bot AFK.```\n\n*🧞‍♀️command* : .restart\n*💠ussage* : ```Restart the bot.```\n\n*🧞‍♀️command* : .shutdown\n*💠ussage* : ```Shutdown the Bot.```\n\n*🧞‍♀️command* : .setvar\n*💠ussage* : ```Heroku config vars.```\n\n*🧞‍♀️command* : .getvar\n*💠ussage* : ```Get Heroku config var. ```\n\n*🧞‍♀️command* : .speedtest\n*💠ussage* : ``` Measuring download and upload speeds.```\n\n*🧞‍♀️command* : .filter\n*💠ussage* : ```It adds filters. If someone writes your filter word, it sends the answer. If you write a .filter it will show your list of filters.```\n\n*🧞‍♀️command* :  .stop\n*💠ussage* : ``` Stops the filters you added earlier.```\n\n*🧞‍♀️command* :  .welcome\n*💠ussage* : ``` It sets the welcome message.```\n\n*🧞‍♀️command* : .goodbye\n*💠ussage* : ```In sets the goodbye message.```\n\n*🧞‍♀️command* : .kickme\n*💠ussage* : ```It removes the bot from the command group.```\n\n*🧞‍♀️command* : .pp\n*💠ussage* : ```The photo you mention mentions the bot profile photo.```\n\n*🧞‍♀️command* : .block\n*💠ussage* : ```Block tagged user.```\n\n*🧞‍♀️command* : .unblock\n*💠ussage* : ```Unblock tagged user.```\n\n*🧞‍♀️command* : .jid\n*💠ussage* : ```Provides the user Jid```\n\n*🧞‍♀️command* : .tagall\n*💠ussage* : ```tag all members in the grp.```\n\n*🧞‍♀️command* : .update\n*💠ussage* : ```check updates.```\n\n*🧞‍♀️command* : .update now\n*💠ussage* : ```update your bot.```\n\n*🧞‍♀️command* : .dyno\n*💠ussage* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️command* : .add\n*💠ussage* : ```add user in group```\n\n*🧞‍♀️command* : .sysd\n*💠ussage* : ```Displaying system statistics```\n\n_*🌍ᴅᴇᴠᴇʟᴏᴘᴇʀ ꜱɪꜱᴜʟᴀ ᴡᴇʟɢᴀᴍᴀɢᴇ*_');
        }
    }));
}
