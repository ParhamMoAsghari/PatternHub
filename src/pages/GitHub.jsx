import React from 'react';
import bgImage from '/img/bg-github.jpeg';

export function GitHub() {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col items-center space-y-6">
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <a
                        href="https://github.com/ParhamMoAsghari"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/96473677?v=4"
                            alt="Parham's GitHub"
                            className="w-48 h-48 rounded-full"
                        />
                    </a>
                    <p className="text-center">Parham's GitHub</p>
                </div>
                <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                    <a
                        href="https://github.com/ramtin-mhd"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://avatars.githubusercontent.com/u/135214372?v=4"
                            alt="Ramtin's GitHub"
                            className="w-48 h-48 rounded-full"
                        />
                    </a>
                    <p className="text-center">Ramtin's GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default GitHub;
