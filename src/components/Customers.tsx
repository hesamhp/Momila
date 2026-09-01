import { motion } from "framer-motion";
import { Camera, Heart, MapPin, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Customer = {
  name: string;
  city: string;
  likes: string;
  img: string;
  aspect: string;
};

const customers: Customer[] = [
  {
    name: "آوا",
    city: "تهران",
    likes: "",
    img: "https://images.pexels.com/photos/35745616/pexels-photo-35745616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[3/4]",
  },
  {
    name: "کیان",
    city: "اصفهان",
    likes: "",
    img: "https://images.pexels.com/photos/8500628/pexels-photo-8500628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[4/5]",
  },
  {
    name: "باران",
    city: "شیراز",
    likes: "",
    img: "https://images.pexels.com/photos/12886928/pexels-photo-12886928.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-square",
  },
  {
    name: "نیکا",
    city: "مشهد",
    likes: "",
    img: "https://images.pexels.com/photos/5212318/pexels-photo-5212318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[3/4]",
  },
  {
    name: "سام",
    city: "تبریز",
    likes: "",
    img: "https://images.pexels.com/photos/8423909/pexels-photo-8423909.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[4/5]",
  },
  {
    name: "ترانه",
    city: "کرج",
    likes: "",
    img: "https://images.pexels.com/photos/4910506/pexels-photo-4910506.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[3/4]",
  },
  {
    name: "رها",
    city: "رشت",
    likes: "",
    img: "https://images.pexels.com/photos/4964521/pexels-photo-4964521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-square",
  },
  {
    name: "آرتین",
    city: "یزد",
    likes: "",
    img: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[4/5]",
  },
  {
    name: "پارسا",
    city: "قم",
    likes: "",
    img: "https://images.pexels.com/photos/7692511/pexels-photo-7692511.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[3/4]",
  },
  {
    name: "درسا",
    city: "اهواز",
    likes: "",
    img: "https://images.pexels.com/photos/8617947/pexels-photo-8617947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    aspect: "aspect-[4/5]",
  },
];

export default function Customers() {
  return (
    <section
      id="customers"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -start-40 top-20 h-96 w-96 rounded-full bg-lilac-100/90 blur-3xl" />
        <div className="absolute -end-40 bottom-24 h-96 w-96 rounded-full bg-blush-100/80 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="دوستان مومیلا"
          icon={Users}
          title={
            <>
              قاب‌های رنگیِ <span className="marker">مشتری‌های</span> ما
            </>
          }
          description="بیش از ۵۰۰ خانواده هر مهر با مومیلا به مدرسه می‌روند؛ این چند قاب، هدیه‌ی دوستان کوچک و بزرگ ماست."
        />

        <Reveal delay={0.18} className="mt-8 flex justify-center">
          <a
            href="#customers"
            className="inline-flex items-center gap-2.5 rounded-full border border-lilac-200 bg-white px-5 py-3 text-xs font-bold text-lilac-700 shadow-sm shadow-lilac-100 transition hover:border-lilac-400 hover:shadow-md active:scale-95 sm:text-sm"
          >
            <Camera className="h-4 w-4 text-lilac-500" />
            با هشتگ
            <span className="font-black text-blush-400">#مومیلا_ما</span>
            کنار ما باشید
            <span dir="ltr" className="font-black text-lilac-500">
              @momilaland
            </span>
          </a>
        </Reveal>

        {/* masonry gallery */}
        <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
          {customers.map((c, i) => (
            <motion.figure
              key={c.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.65,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[1.75rem] border-4 border-white bg-lilac-100 shadow-lg shadow-lilac-200/60 transition-shadow duration-500 hover:shadow-2xl hover:shadow-lilac-300/60 md:mb-5"
            >
              <img
                src={c.img}
                alt={`${c.name} از ${c.city}؛ مشتری مومیلا`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${c.aspect}`}
              />

              {/* like chip */}
              <span className="absolute start-3 top-3 flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1.5 text-[11px] font-black text-ink shadow-sm backdrop-blur">
                <Heart className="h-3 w-3 fill-blush-400 text-blush-400" />
                {c.likes}
              </span>

              {/* name overlay */}
              <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-lilac-950/80 via-lilac-950/15 to-transparent p-4 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                <p className="text-sm font-extrabold text-white sm:text-base">
                  {c.name}
                </p>
                <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-lilac-200">
                  <MapPin className="h-3 w-3" />
                  {c.city}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-xs font-semibold text-mist sm:text-sm">
           میتونی خودتو تو اینجا پیدا کنی!
          </p>
        </Reveal>
      </div>
    </section>
  );
}
