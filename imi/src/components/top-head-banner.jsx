"use client";
import Slider from "react-slick";
import Image from "next/image";

export default function TopBannerCarousel() {
    const desktopBanners = [
        "https://enewsbharat.com/wp-content/uploads/2025/10/ITMI-Banner-jpg-1.jpg"
    ];

    const mobileBanners = [
        "https://enewsbharat.com/wp-content/uploads/2025/10/ITMI-SMALL-size-post-jpg.jpg"
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="w- ">
            {/* Desktop Carousel */}
            <div className="hidden md:block">
                <Slider {...settings}>
                    {desktopBanners.map((banner, idx) => (
                        <div key={idx}>
                            <Image
                                src={banner}
                                alt={`Desktop Banner ${idx + 1}`}
                                width={1920}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden">
                <Slider {...settings}>
                    {mobileBanners.map((banner, idx) => (
                        <div key={idx}>
                            <Image
                                src={banner}
                                alt={`Mobile Banner ${idx + 1}`}
                                width={600}
                                height={300}
                                className="w-full h-auto object-cover"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
