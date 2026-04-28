import React from "react";
import { ArrowRight } from "lucide-react";

const TechSpec = () => {
    return (
        <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
                <h3 className="text-2xl font-black text-gray-950 mb-8 flex items-center gap-3">
                    Technical Architecture
                </h3>

                <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                        <div className="h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-orange-600 font-black text-sm">1</div>
                        <div>
                            <h4 className="font-bold text-gray-900">Frontend Layer</h4>
                            <p className="text-sm text-gray-500 mt-1">Dibangun dengan React + Vite untuk performa tinggi. Tailwind CSS v4 digunakan untuk manajemen styling berbasis @theme.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 font-black text-sm">2</div>
                        <div>
                            <h4 className="font-bold text-gray-900">Logic & Hooks</h4>
                            <p className="text-sm text-gray-500 mt-1">Algoritma AI diletakkan di dalam Custom Hooks untuk memisahkan antara pengambilan data dan tampilan UI.</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 text-emerald-600 font-black text-sm">3</div>
                        <div>
                            <h4 className="font-bold text-gray-900">Security & Safety</h4>
                            <p className="text-sm text-gray-500 mt-1">Setiap anomali akan terekam dalam log sistem di halaman Diagnostics untuk audit performa.</p>
                        </div>
                    </div>
                </div>

                <button className="mt-10 flex items-center gap-2 px-6 py-3 bg-gray-950 text-white rounded-2xl font-bold text-sm hover:gap-4 transition-all">
                    Download Full PDF Report <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};
export default TechSpec;