import react from 'react';
import { Info } from 'lucide-react';

const Labels = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Irradiance', 'Voltage Out', 'Current', 'Humidity'].map((label, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm group hover:border-orange-200 transition-all cursor-help">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</span>
                        <Info size={14} className="text-gray-300 group-hover:text-orange-400" />
                    </div>
                    <p className="text-xl font-black text-gray-900">
                        {i === 0 ? '840 W/m²' : i === 1 ? '12.6 V' : i === 2 ? '4.8 A' : '42%'}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default Labels;