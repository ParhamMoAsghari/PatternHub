import "./card.css";
export function PatternsCatalog () {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="grid sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <div
                    className="card bg-white rounded-lg shadow-lg px-4 transform hover:scale-105 transition-transform duration-300">
                    <img src="/img/shutterstock_752300290.png" className="rounded pb-2" style={{width: 280 + 'px', height: 200 + 'px',}} alt="الگو های آفرینشی"/>
                        <h2 className="text-xl font-semibold mb-2">الگو های آفرینشی</h2>
                        <p className="text-gray-600">الگوهایی که به شما کمک می‌کنند نحوه ایجاد شیء را بهینه‌تر مدیریت
                            کنید</p>
                        <a href="https://example.com" className="text-blue-500 hover:underline mt-4">بیشتر بخوانید</a>
                </div>
                <div
                    className="card bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
                    <img src="/img/building-construction-site-white-background_1308-98715.avif" className="rounded pb-2"
                         style={{width: 280 + 'px', height: 200 + 'px',}} alt="الگو های ساختاری"/>
                        <h2 className="text-xl font-semibold mb-2">الگو های ساختاری</h2>
                        <p className="text-gray-600">الگوهایی که به شما کمک می‌کنند ساختارهای مختلف برنامه را بهبود
                            بخشید</p>
                        <a href="https://example.com" className="text-blue-500 hover:underline mt-4">بیشتر بخوانید</a>
                </div>
                <div
                    className="card bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
                    <img src="/img/Untitled-design.png" className="rounded pb-2" style={{width: 280 + 'px', height: 200 + 'px',}} alt="الگو های رفتاری"/>
                        <h2 className="text-xl font-semibold mb-2">الگو های رفتاری</h2>
                        <p className="text-gray-600">الگوهایی که بر رفتار و ارتباط بین اشیاء متمرکز می‌شوند</p>
                        <a href="https://example.com" className="text-blue-500 hover:underline mt-4">بیشتر بخوانید</a>
                </div>
            </div>
        </div>
    );
}

export default PatternsCatalog;
