import "./index.css"
import PatternCard from "@/widgets/cards/PatternCard.jsx";
import {useEffect, useRef, useState} from "react";
import {useParams} from "react-router-dom";

const types = (
    <>
        <PatternCard
            title="الگو های آفرینشی"
            description="الگوهایی که به شما کمک می‌کنند نحوه ایجاد شیء را بهینه‌تر مدیریت کنید"
            imageSRC="/img/shutterstock_752300290.png"
            link="/patterns_catalog/creational"/>
        <PatternCard
            title="الگو های ساختاری"
            description="الگوهایی که به شما کمک می‌کنند ساختارهای مختلف برنامه را بهبود بخشید"
            imageSRC="/img/building-construction-site-white-background_1308-98715.avif"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="الگو های رفتاری"
            description="الگوهایی که بر رفتار و ارتباط بین اشیاء متمرکز می‌شوند"
            imageSRC="/img/Untitled-design.png"
            link="/patterns_catalog/behavioral"/>
    </>
)

const structural = (
    <>
        <PatternCard
            title="Adaptor"
            description="الگوی آداپتور به شما امکان می‌دهد رابطه‌ی ساختاری بین دو کلاس مختلف را تطبیق دهید."
            imageSRC="/img/Adapter.webp"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="Bridge"
            description="الگوی پل به شما امکان می‌دهد ارتباط بین اجزاء مختلف سیستم را جدا کرده و قابلیت تغییرات و انعطاف‌پذیری را فراهم کنید."
            imageSRC="/img/bridge.jpg"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="Composite"
            description="الگوی کامپوزیت به شما اجازه می‌دهد اشیاء را در ساختارهای سلسله‌مراتبی یکپارچه کنید و به آن‌ها به عنوان یک واحد عمل کنید."
            imageSRC="/img/Composite.jpg"
            link="/patterns_catalog/structural"/>
    </>
)

const behavioral = (
    <>
        <PatternCard
            title="Chain of Responsibility"
            description="الگوهایی که به شما کمک می‌کنند نحوه ایجاد شیء را بهینه‌تر مدیریت کنید"
            imageSRC="/img/ChainOfResponsibility.png"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="Command"
            description="الگوهایی که به شما کمک می‌کنند ساختارهای مختلف برنامه را بهبود بخشید"
            imageSRC="/img/Command.webp"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="Interpreter"
            description="الگوهایی که بر رفتار و ارتباط بین اشیاء متمرکز می‌شوند"
            imageSRC="/img/Interpreter.jpg"
            link="/patterns_catalog/structural"/>
    </>
)
const creational = (
    <>
        <PatternCard
            title="Abstract Factory"
            description="الگوهایی که به شما کمک می‌کنند نحوه ایجاد شیء را بهینه‌تر مدیریت کنید"
            imageSRC="/img/AbstractFactory.jpg"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="Builder"
            description="الگوهایی که به شما کمک می‌کنند ساختارهای مختلف برنامه را بهبود بخشید"
            imageSRC="/img/Builder.avif"
            link="/patterns_catalog/structural"/>
        <PatternCard
            title="Factory Method"
            description="الگوهایی که بر رفتار و ارتباط بین اشیاء متمرکز می‌شوند"
            imageSRC="/img/FactoryMethod.png"
            link="/patterns_catalog/structural"/>
    </>
)

export function PatternsCatalog() {
    const {patternType} = useParams();
    const cardContainerRef = useRef(null);
    useEffect(() => {
        const cardContainer = cardContainerRef.current;
        cardContainer.classList.add("card-enter");
    }, [patternType]);
    return (
        <div className="flex items-center justify-center sm:h-screen w-screen bg-gray-200">
            <div ref={cardContainerRef} className="grid sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4 card-container">
                {patternType === undefined && types}
                {patternType === "structural" && structural}
                {patternType === "behavioral" && behavioral}
                {patternType === "creational" && creational}
            </div>
        </div>
    );
}

export default PatternsCatalog;
