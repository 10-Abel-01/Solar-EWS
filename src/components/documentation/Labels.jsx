import React from "react";
import {
    Cpu,
    AlertTriangle,
    ShieldCheck,
    Terminal
} from 'lucide-react';


const Labels = () => {
    const sections = [
        {
            title: "System Overview",
            icon: <Cpu className="text-blue-500" />,
            content: "Solar-EWS adalah sistem peringatan dini yang memantau kesehatan panel surya secara real-time menggunakan integrasi AI untuk mendeteksi anomali suhu dan efisiensi."
        },
        {
            title: "Early Warning Logic",
            icon: <AlertTriangle className="text-orange-500" />,
            content: "Sistem akan memicu status 'CRITICAL' jika suhu unit melebihi 50°C atau efisiensi turun di bawah 75% secara mendadak dalam waktu 5 menit."
        },
        {
            title: "Data Integration",
            icon: <Terminal className="text-emerald-500" />,
            content: "Menggunakan pnpm, Vite, dan Tailwind v4. Data disimulasikan melalui AI Traffic Logic sebelum dihubungkan ke API sensor fisik."
        }
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sections.map((section, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                    <div className="mb-4 p-3 bg-gray-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                        {section.icon}
                    </div>
                    <h3 className="font-black text-gray-900 mb-2">{section.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {section.content}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default Labels;