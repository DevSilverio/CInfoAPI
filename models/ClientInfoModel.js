import mongoose from "mongoose";

const clientInfoSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    hostname: { type: String, required: false },
    city: { type: String, required: false },
    region: { type: String, required: false },
    country: { type: String, required: false },
    loc: { type: String, required: false },
    org: { type: String, required: false },
    postal: { type: String, required: false },
    timezone: { type: String, required: false },
    asn: {
      asn: { type: String, required: false },
      name: { type: String, required: false },
      domain: { type: String, required: false },
      route: { type: String, required: false },
      type: { type: String, required: false },
    },
    company: {
      name: { type: String, required: false },
      domain: { type: String, required: false },
      type: { type: String, required: false },
    },
    privacy: {
      vpn: { type: Boolean, required: false },
      proxy: { type: Boolean, required: false },
      tor: { type: Boolean, required: false },
      relay: { type: Boolean, required: false },
      hosting: { type: Boolean, required: false },
      service: { type: String, required: false },
    },
    abuse: {
      address: { type: String, required: false },
      country: { type: String, required: false },
      email: { type: String, required: false },
      name: { type: String, required: false },
      network: { type: String, required: false },
      phone: { type: String, required: false },
    },
    system: {
      osType: { type: String, required: false },
      osPlatform: { type: String, required: false },
      osRelease: { type: String, required: false },
      totalMemory: { type: Number, required: false },
      freeMemory: { type: Number, required: false },
      cpuCores: { type: Number, required: false },
      cpuModel: { type: String, required: false },
      uptime: { type: Number, required: false },
      architecture: { type: String, required: false },
      networkInterfaces: { type: Object, required: false },
    },
    user: {
      username: { type: String, required: false },
      homedir: { type: String, required: false },
      shell: { type: String, required: false },
    },
    dateTime: {
      currentDate: { type: String, required: false },
      currentTime: { type: String, required: false },
      timezoneOffset: { type: Number, required: false },
    },
    usage: {
      cpuUsage: { type: String, required: false },
      memoryUsage: { type: String, required: false },
    },
  },
  { timestamps: true }
);

const ClientInfo = mongoose.model("ClientInfo", clientInfoSchema);

export default ClientInfo;
