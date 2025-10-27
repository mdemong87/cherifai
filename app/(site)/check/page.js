"use client";



import { BarChart, Home, Settings, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export default function DashboardPage() {
    return (
        <div className="flex min-h-screen bg-[#0f0f0f] text-white">
            <Sidebars />
            <main className="flex-1 p-6 overflow-y-auto">
                <Headers />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <StatCard
                        title="Completed Deals"
                        value="1,250"
                        progress={60}
                        color="green"
                    />
                    <StatCard
                        title="Total Revenue"
                        value="$1,25,541"
                        progress={34}
                        color="blue"
                    />
                    <div className="bg-[#181818] p-4 rounded-2xl flex flex-col justify-between">
                        <h3 className="text-lg font-semibold mb-2">New AI Feature</h3>
                        <p className="text-sm text-gray-400">
                            Leads and Property Search
                        </p>
                        <button className="mt-4 bg-[#00c896] hover:bg-[#00a97f] text-black font-semibold py-2 px-4 rounded-lg">
                            Search Now
                        </button>
                    </div>
                </div>

                <div className="mt-8 bg-[#181818] rounded-2xl p-6">
                    <RevenueChart />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    <StatCard title="Total Profit" value="$24.9k" progress={76} color="green" />
                    <StatCard title="Visit Rate" value="32.4%" progress={32} color="yellow" />
                    <StatCard title="New Visitors" value="12,480" progress={48} color="blue" />
                </div>

                <ListingBoard />
            </main>
        </div>
    );
}





































const menuItems = [
    { icon: <Home />, label: "Dashboard" },
    { icon: <BarChart />, label: "Order" },
    { icon: <ShoppingBag />, label: "Property" },
    { icon: <Settings />, label: "Settings" },
];

function Sidebars() {
    return (
        <aside className="w-64 bg-[#141414] p-6 flex flex-col border-r border-[#222]">
            <h1 className="text-2xl font-bold text-[#00c896] mb-8">Logo</h1>
            <nav className="space-y-3">
                {menuItems.map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#222] cursor-pointer transition"
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </aside>
    );
}




















function Headers() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-gray-400">Welcome back, Angel 👋</p>
            </div>
            <div className="flex items-center gap-3">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="bg-[#181818] text-sm px-3 py-2 rounded-lg outline-none"
                />
                <Image
                    src="/avatar.png"
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </div>
        </div>
    );
}















const data = [
    { month: "Jan", income: 26000, expense: 18000, profit: 8000 },
    { month: "Feb", income: 24000, expense: 16000, profit: 8000 },
    { month: "Mar", income: 25000, expense: 17000, profit: 8000 },
    { month: "Apr", income: 21000, expense: 15000, profit: 6000 },
    { month: "May", income: 27000, expense: 19000, profit: 8000 },
    { month: "Jun", income: 26000, expense: 18000, profit: 8000 },
];

function RevenueChart() {
    return (
        <div className="h-72">
            <h3 className="text-lg font-semibold mb-4">Revenue</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke="#555" />
                    <YAxis stroke="#555" />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#00c896" strokeWidth={2} />
                    <Line type="monotone" dataKey="expense" stroke="#ff5a5a" strokeWidth={2} />
                    <Line type="monotone" dataKey="profit" stroke="#f9d23c" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}










function StatCard({ title, value, progress, color }) {
    const colorClass =
        color === "green"
            ? "bg-green-500"
            : color === "blue"
                ? "bg-blue-500"
                : color === "yellow"
                    ? "bg-yellow-400"
                    : "bg-gray-400";

    return (
        <div className="bg-[#181818] p-4 rounded-2xl flex flex-col justify-between">
            <h3 className="text-sm text-gray-400">{title}</h3>
            <p className="text-2xl font-bold mt-2">{value}</p>
            <div className="w-full bg-[#222] h-2 rounded-lg mt-3">
                <div
                    className={`${colorClass} h-2 rounded-lg`}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}













const listings = [
    { id: 1, img: "/house1.jpg", title: "Modern Villa" },
    { id: 2, img: "/house2.jpg", title: "Oceanfront House" },
    { id: 3, img: "/house3.jpg", title: "Mountain Cabin" },
];

function ListingBoard() {
    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Listing Board</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {listings.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#181818] p-3 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="rounded-xl object-cover"
                        />
                        <h4 className="mt-3 font-semibold">{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
