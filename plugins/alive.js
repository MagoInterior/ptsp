/* Copyright (C) 2021 cobra bot
coded by yusuf usta
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
cobrabot2021
cobra dev.
*/

const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    cobra.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {caption: "*⚔️  𝓒𝓞𝓑𝓡𝓐  ⚔️*\n*🍁 User Bot 🍁*\n\n*Version:* ```1.0 Public Stable```\n\n*Branch:* ```master```\n\n*Developer:* ```SISULA WELGAMAGE```\n\n*WhatsApp Group 1 :* https://chat.whatsapp.com/COKDKG5IJojA5OMXmX5ANx\n\n*WORK TYPE :* private\n\n*Thank You For Using COBRA BOT♥️*", thumbnail: Buffer.from(image.data)})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {caption: Config.ALIVEMSG + '\n\n*ᴄᴏʙʀᴀʙᴏᴛ*', thumbnail: Buffer.from(image.data) })
     }
    }));

    cobra.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    cobra.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {caption: "*⚔️  𝓒𝓞𝓑𝓡𝓐  ⚔️*\n*🍁 User Bot 🍁*\n\n*Version:* ```1.0 Public Stable```\n\n*Branch:* ```master```\n\n*Developer:* ```SISULA WELGAMAGE```\n\n*WhatsApp Group 1 :* https://chat.whatsapp.com/COKDKG5IJojA5OMXmX5ANx\n\n*WORK TYPE :* public\n\n*Thank You For Using COBRA BOT♥️*", thumbnail: Buffer.from(image.data)})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {caption: Config.ALIVEMSG + '\n\n*ᴄᴏʙʀᴀʙᴏᴛ*', thumbnail: Buffer.from(image.data) })
     }
    }));

    cobra.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
} 