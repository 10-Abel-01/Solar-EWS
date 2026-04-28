import React from "react";
import { BookOpen } from "lucide-react";

const Header = () => {
    return (
        <div className="bg-gray-950 p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <BookOpen size={20} className="text-orange-400" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Knowledge Base</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black">Documentation & Guide</h1>
                <p className="text-gray-400 mt-2 max-w-xl font-medium">
                    Panduan teknis pengoperasian dan pemahaman algoritma Solar-EWS.
                </p>
            </div>
            {/* Background Accent */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>
    );
};
export default Header;