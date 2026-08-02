"use client";

export default function IntroSection({ t }) {
  const { mainText, subText, techText } = t;

  return (
    <section className="shell flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start justify-between mb-16 md:mb-24 w-full">
      <div className="w-full lg:w-1/2">
        <p className="font-michroma body-lg mb-6 md:mb-8">{mainText}</p>
        <p className="body-sm text-muted-foreground">{subText}</p>
      </div>

      <div className="w-full lg:w-1/2 body-sm text-muted-foreground">
        <p>{techText}</p>
      </div>
    </section>
  );
}
