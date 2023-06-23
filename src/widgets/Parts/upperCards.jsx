import React from 'react';
import {underHeaderExp} from "@/data/index.js";
import {FeatureCard} from "@/widgets/cards/index.js";

export function upperCards() {
    return (
        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {underHeaderExp.map(({color, title, icon, description}) => (
                        <FeatureCard
                            key={title}
                            color={color}
                            title={title}
                            icon={React.createElement(icon, {
                                className: "w-5 h-5 text-white",
                            })}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default upperCards;