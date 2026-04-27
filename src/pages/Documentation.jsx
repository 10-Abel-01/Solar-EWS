import React from 'react';
import { useState } from 'react';
import {
    BookOpen,
    Terminal,
    Cpu,
    Zap,
    AlertTriangle,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

const Documentation = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
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
        <div className="flex min-h-screen bg-gray-100">
            <main
                className={`flex-1 transition-all duration-300 
          ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}
          lg:mt-0`}
            >
                <div className="flex flex-col gap-y-4">
                    {/* sesi diagnostics */}
                    <div className="space-y-8 pb-12">
                        {/* Header */}
                        <div className="bg-gray-950 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <BookOpen size={20} className="text-orange-400" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Knowledge Base</span>
                                </div>
                                <h1 className="text-3xl md:text-4xl font-black italic">Documentation & Guide</h1>
                                <p className="text-gray-400 mt-2 max-w-xl font-medium">
                                    Panduan teknis pengoperasian dan pemahaman algoritma Solar-EWS.
                                </p>
                            </div>
                            {/* Background Accent */}
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                        </div>

                        {/* Quick Start Guide */}
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

                        {/* Technical Specs Detail */}
                        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
                            <div className="p-8 md:p-12">
                                <h3 className="text-2xl font-black text-gray-950 mb-8 flex items-center gap-3">
                                    <Zap size={28} className="text-orange-500" />
                                    Technical Architecture
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex gap-6 items-start">
                                        <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-orange-600 font-black text-sm">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 italic">Frontend Layer</h4>
                                            <p className="text-sm text-gray-500 mt-1">Dibangun dengan React + Vite untuk performa tinggi. Tailwind CSS v4 digunakan untuk manajemen styling berbasis @theme.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 font-black text-sm">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 italic">Logic & Hooks</h4>
                                            <p className="text-sm text-gray-500 mt-1">Algoritma AI diletakkan di dalam Custom Hooks untuk memisahkan antara pengambilan data dan tampilan UI.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 font-black text-sm">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 italic">Security & Safety</h4>
                                            <p className="text-sm text-gray-500 mt-1">Setiap anomali akan terekam dalam log sistem di halaman Diagnostics untuk audit performa.</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-10 flex items-center gap-2 px-6 py-3 bg-gray-950 text-white rounded-2xl font-bold text-sm hover:gap-4 transition-all">
                                    Download Full PDF Report <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Documentation;