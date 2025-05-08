
import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [route, setRoute] = useState('Auto');

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl mb-6 font-bold">Nexora</h1>
      <ConnectButton />
      <div className="mt-8 w-full max-w-md space-y-4">
        <input
          className="w-full p-3 bg-gray-800 rounded"
          placeholder="From Token"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          className="w-full p-3 bg-gray-800 rounded"
          placeholder="To Token"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <select
          className="w-full p-3 bg-gray-800 rounded"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        >
          <option value="Auto">Auto</option>
          <option value="1inch">1inch</option>
          <option value="Pancake">PancakeSwap</option>
        </select>
        <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded">Swap</button>
      </div>
    </div>
  );
}
