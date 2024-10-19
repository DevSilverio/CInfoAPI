import {
  type as _type,
  platform,
  release,
  totalmem,
  freemem,
  cpus,
  uptime as _uptime,
  arch,
  networkInterfaces as _networkInterfaces,
  userInfo as _userInfo,
} from "os";
import fetch from "node-fetch";
import pidusage from "pidusage";
import { osLocale } from "os-locale";
import {
  getClientInfo,
  getSystemInfo,
  getLanguageInfo,
  getUserInfo,
  getDateTimeInfo,
  getUsageInfo,
} from "../utils/utils.js";

import { storeClientInfo } from "../utils/db.js";
import ClientInfo from "../models/ClientInfoModel.js";

async function main() {
  try {
    const clientInfo = await getClientInfo();
    const systemInfo = await getSystemInfo();
    const languageInfo = await getLanguageInfo();
    const userInfo = await getUserInfo();
    const dateTimeInfo = await getDateTimeInfo();
    const usageInfo = await getUsageInfo();

    const combinedInfo = {
      ...clientInfo,
      system: systemInfo,
      user: userInfo,
      dateTime: dateTimeInfo,
      usage: usageInfo,
      language: languageInfo,
    };

    await storeClientInfo(combinedInfo);

    console.log(
      "Informações do Cliente armazenadas com sucesso no banco de dados:",
      combinedInfo
    );
  } catch (error) {
    console.error("Erro ao obter ou armazenar informações:", error);
  }
}

export default main;
