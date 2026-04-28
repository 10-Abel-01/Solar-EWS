import React from 'react';
import { useState } from 'react';
import {
    Terminal,
    Zap,
    AlertTriangle,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

import Header from '../components/documentation/Header';
import Labels from '../components/documentation/Labels';
import TechSpec from '../components/documentation/TechSpec';

const Documentation = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

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
                        <Header />
                        <Labels />
                        <TechSpec/>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Documentation;