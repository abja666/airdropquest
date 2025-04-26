// Copy dari file dashboard yang tadi aku buat
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Bell } from "lucide-react";

export default function AirdropDashboard() {
  const [airdrops, setAirdrops] = useState([
    { id: 1, name: "Airdrop Alpha", tasks: ["Join Telegram", "Follow Twitter"], completed: false },
    { id: 2, name: "Airdrop Beta", tasks: ["Register Wallet", "Like Tweet"], completed: false },
  ]);

  const [wallets, setWallets] = useState([
    { id: 1, name: "Main Wallet", address: "0x123...abc" }
  ]);

  const handleComplete = (id) => {
    setAirdrops(prev => prev.map(ad => ad.id === id ? { ...ad, completed: !ad.completed } : ad));
  };

  const statisticsData = [
    { day: 'Mon', completed: 1 },
    { day: 'Tue', completed: 2 },
    { day: 'Wed', completed: 3 },
    { day: 'Thu', completed: 2 },
    { day: 'Fri', completed: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">AirdropQuest</h1>
        <button className="border px-3 py-1 rounded-md hover:bg-gray-700 flex items-center">
          <Bell className="mr-2" />Reminder
        </button>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-gray-800 p-4 mb-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Daily Airdrops</h2>
            {airdrops.map(ad => (
              <div key={ad.id} className="flex items-center justify-between py-2 border-b border-gray-700">
                <div>
                  <p className="font-medium">{ad.name}</p>
                  <ul className="text-sm text-gray-400 list-disc ml-6">
                    {ad.tasks.map((task, idx) => <li key={idx}>{task}</li>)}
                  </ul>
                </div>
                <input type="checkbox" checked={ad.completed} onChange={() => handleComplete(ad.id)} />
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Wallet Notes</h2>
            {wallets.map(wallet => (
              <div key={wallet.id} className="mb-2">
                <p className="font-medium">{wallet.name}</p>
                <p className="text-sm text-gray-400">{wallet.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <LineChart width={300} height={200} data={statisticsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="day" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Line type="monotone" dataKey="completed" stroke="#00BFFF" strokeWidth={2} />
            </LineChart>
          </div>
        </div>
      </section>
    </div>
  );
}
