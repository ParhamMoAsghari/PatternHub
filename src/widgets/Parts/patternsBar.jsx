import React from 'react';
import {PageTitle} from "@/widgets/layout/index.js";
import {patternsInMainPage} from "@/data/index.js";
import {TeamCard} from "@/widgets/cards/index.js";
import {IconButton} from "@material-tailwind/react";

export function patternsBar() {
    return (
        <section className="px-4 pt-20 pb-48">
            <div className="container mx-auto">
                <PageTitle heading="انواع دیزاین پترن ها">
                    همراه با توضیحات و مثال های متنوع
                </PageTitle>
                <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
                    {patternsInMainPage.map(({img, name, position, socials,link}) => (
                        <TeamCard
                            key={name}
                            img={img}
                            name={name}
                            position={position}
                            link={link}
                            socials={
                                <div className="flex items-center gap-2">
                                    {socials.map(({color, name}) => (
                                        <IconButton key={name} color={color} variant="text">
                                            <i className={`fa-brands text-lg fa-${name}`}/>
                                        </IconButton>
                                    ))}
                                </div>
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default patternsBar;