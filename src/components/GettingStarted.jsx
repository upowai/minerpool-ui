import React, { useState } from "react";
import config from "../config";

const GettingStarted = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [includeIp, setIncludeIp] = useState(true);
  const [ip, setIp] = useState(config.ip);
  const [includePort, setIncludePort] = useState(true);
  const [port, setPort] = useState(config.port);
  const [command, setCommand] = useState("");

  const generateCommand = () => {
    let cmd = `python miner.py`;
    if (walletAddress) cmd += ` --WALLET_ADDRESS "${walletAddress}"`;
    if (includeIp) cmd += ` --MINER_POOL_IP "${ip}"`;
    if (includePort) cmd += ` --MINER_POOL_PORT ${port}`;
    setCommand(cmd);
  };

  const handleCopy = async () => {
    if (command) {
      await navigator.clipboard.writeText(command);
      alert("Command copied to clipboard!");
    }
  };

  const resetForm = () => {
    setWalletAddress("");
    setIncludeIp(true);
    setIp(config.ip);
    setIncludePort(true);
    setPort(config.port);
    setCommand("");
  };

  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Instructions for starting Ai-miner
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl">
              Enter your wallet address and click on Generate Command
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto my-10 p-5 border rounded-lg shadow-lg bg-white">
        <div className="mb-5">
          <label
            htmlFor="walletAddress"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            placeholder="Wallet Address"
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>

        <div className="flex items-center mb-4">
          <input
            id="includeIp"
            type="checkbox"
            checked={includeIp}
            onChange={(e) => setIncludeIp(e.target.checked)}
            className="checkbox checkbox-primary"
          />
          <label
            htmlFor="includeIp"
            className="ml-2 text-sm font-medium text-gray-700"
          >
            Include IP
          </label>
        </div>
        {includeIp && (
          <input
            type="text"
            placeholder="IP"
            className="input input-bordered w-full mb-4 p-2 border-gray-300 rounded-md shadow-sm text-gray-700"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
        )}

        <div className="flex items-center mb-4">
          <input
            id="includePort"
            type="checkbox"
            checked={includePort}
            onChange={(e) => setIncludePort(e.target.checked)}
            className="checkbox checkbox-primary"
          />
          <label
            htmlFor="includePort"
            className="ml-2 text-sm font-medium text-gray-700"
          >
            Include Port
          </label>
        </div>
        {includePort && (
          <input
            type="text"
            placeholder="Port"
            className="input input-bordered w-full mb-4 p-2 border-gray-300 rounded-md shadow-sm text-gray-700"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        )}

        <button
          className="btn btn-primary w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
          onClick={generateCommand}
        >
          Generate Command
        </button>
        {command && (
          <div className="flex flex-col">
            <textarea
              className="textarea textarea-bordered w-full p-2 border-gray-300 rounded-md shadow-sm text-gray-700 mb-2"
              readOnly
              value={command}
              onClick={handleCopy}
            />
            <button
              className="btn btn-secondary w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={handleCopy}
            >
              Copy Command
            </button>
          </div>
        )}
        <button
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default GettingStarted;
