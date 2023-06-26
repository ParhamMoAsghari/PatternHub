import PatternCard from "@/widgets/cards/PatternCard.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import serverUrl from "@/config.js";

const types = (
    <>
        <PatternCard
            title="الگو های آفرینشی"
            description="الگوهایی که به شما کمک می‌کنند نحوه ایجاد شیء را بهینه‌تر مدیریت کنید"
            imageSRC="/img/shutterstock_752300290.jpg"
            link="/patterns_catalog/creational"/>
        <PatternCard
            title="الگو های ساختاری"
            description="الگوهایی که به شما کمک می‌کنند ساختارهای مختلف برنامه را بهبود بخشید"
            imageSRC="public/img/building-construction-site-white-background_1308-98715.avif"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="الگو های رفتاری"
            description="الگوهایی که بر رفتار و ارتباط بین اشیاء متمرکز می‌شوند"
            imageSRC="/img/Untitled-design.jpg"
            link="/patterns_catalog/behavioral"/>
    </>
)

export function PatternsCatalog() {
    const { patternType } = useParams();
    const cardContainerRef = useRef(null);
    const [patterns, setPatterns] = useState([]);

    useEffect(() => {
        const cardContainer = cardContainerRef.current;
        cardContainer.classList.add("card-enter");

        // Fetch pattern data from the server
        const fetchPatterns = async () => {
            try {
                if (patternType !== undefined) {
                    const response = await axios.get(
                        serverUrl + `/patterns/list?type=${patternType}`
                    );
                    setPatterns(response.data);
                } else {
                    setPatterns(types);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchPatterns();
    }, [patternType]);

    return (
        <>
            <section className="relative block h-[50vh]">
                <div
                    className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/DesignPatterns.jpg')] bg-cover bg-center"
                />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4 content-center">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center bg-gray-200 -mt-64 rounded-3xl">
                        <div
                            ref={cardContainerRef}
                            className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-12 card-container justify-center align-middle"
                        >
                            {patternType && patterns.length > 0 ? (
                                patterns.map((pattern) => (
                                    <PatternCard
                                        key={pattern.name}
                                        title={pattern.name}
                                        description={pattern.description}
                                        imageBase64={pattern.image}
                                        link={`/pattern/${patternType}/${pattern.name}`}
                                    />
                                ))
                            ) : (
                                patternType === undefined && types
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
