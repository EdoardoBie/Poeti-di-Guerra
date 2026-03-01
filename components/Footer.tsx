import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0F0F0F] text-[#444] py-24 px-8 text-center font-mono text-xs border-t border-[#222]">
            <div className="max-w-md mx-auto space-y-4">
                <p>CHEN JINGRONG (1917–1989)</p>
                <p>NINE LEAVES SCHOOL</p>
                <div className="w-8 h-[1px] bg-[#333] mx-auto my-8"></div>
                <p>A digital tribute to the resilience of poetry in the face of history.</p>
                <p className="pt-12 opacity-50">SCROLL TO TOP TO REASSEMBLE</p>
            </div>
        </footer>
    );
};
export default Footer;