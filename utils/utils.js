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

export async function getClientInfo() {
  try {
    const response = await fetch("https://ipinfo.io/json?token=ac691a586be4fe");
    const data = await response.json();

    const clientInfo = {
      ip: data.ip,
      hostname: data.hostname,
      city: data.city,
      region: data.region,
      country: data.country,
      loc: data.loc,
      org: data.org,
      postal: data.postal,
      timezone: data.timezone,
      asn: data.asn
        ? {
            asn: data.asn.asn,
            name: data.asn.name,
            domain: data.asn.domain,
            route: data.asn.route,
            type: data.asn.type,
          }
        : null,
      company: data.company
        ? {
            name: data.company.name,
            domain: data.company.domain,
            type: data.company.type,
          }
        : null,
      privacy: data.privacy
        ? {
            vpn: data.privacy.vpn,
            proxy: data.privacy.proxy,
            tor: data.privacy.tor,
            relay: data.privacy.relay,
            hosting: data.privacy.hosting,
            service: data.privacy.service,
          }
        : null,
      abuse: data.abuse
        ? {
            address: data.abuse.address,
            country: data.abuse.country,
            email: data.abuse.email,
            name: data.abuse.name,
            network: data.abuse.network,
            phone: data.abuse.phone,
          }
        : null,
    };

    return clientInfo;
  } catch (error) {
    console.error("Erro ao obter o endereço IP:", error);
    return {};
  }
}

export async function getSystemInfo() {
  const systemInfo = {
    osType: _type(),
    osPlatform: platform(),
    osRelease: release(),
    totalMemory: totalmem(),
    freeMemory: freemem(),
    cpuCores: cpus().length,
    cpuModel: cpus()[0].model,
    uptime: _uptime(),
    architecture: arch(),
    networkInterfaces: _networkInterfaces(),
  };

  return systemInfo;
}

export async function getLanguageInfo() {
  const language = await osLocale();
  const languageInfo = {
    language,
    encoding: process.stdout.encoding,
  };

  return languageInfo;
}

export async function getUserInfo() {
  const userInfo = {
    username: _userInfo().username,
    homedir: _userInfo().homedir,
    shell: _userInfo().shell,
  };

  return userInfo;
}

export async function getDateTimeInfo() {
  const now = new Date();
  const dateTimeInfo = {
    currentDate: now.toLocaleDateString(),
    currentTime: now.toLocaleTimeString(),
    timezoneOffset: now.getTimezoneOffset(),
  };

  return dateTimeInfo;
}

export async function getUsageInfo() {
  const cpuUsage = process.cpuUsage();
  const memoryUsage = process.memoryUsage();

  const usageInfo = {
    cpuUsage: ((cpuUsage.user + cpuUsage.system) / 1000000).toFixed(2) + "%",
    memoryUsage: (memoryUsage.heapUsed / (1024 * 1024)).toFixed(2) + " MB",
  };

  return usageInfo;
}
