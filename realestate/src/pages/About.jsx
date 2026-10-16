import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import FeatureItem from "../components/FeatureItem";
import CallToAction from "../components/CallToAction";
import storyImg from "../assets/images/type-villa.jpg";

function About() {
  return (
    <>
      <PageBanner title="About Urban Nest" subtitle="Making property search simple and honest." />

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="mb-4 font-heading text-4xl font-bold">Our story</h2>
          <p className="mb-4 text-lg">
            Urban Nest started with one idea: finding a home should not be stressful.
            We bring clear listings, honest prices and friendly agents together in one place.
          </p>
          <p className="text-lg">
            [YOUR STORY: add two or three sentences about your company here.]
          </p>
        </div>
        <div className="w-full flex-1">
          <img
            src={storyImg}
            alt="A modern villa"
            className="h-80 w-full rounded-3xl object-cover shadow-xl shadow-navy/20 md:h-[420px]"
          />
        </div>
      </section>

      <section className="bg-navy px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading light title="What we stand for" />
          <div className="grid gap-10 md:grid-cols-3">
            <FeatureItem number="01" title="Honesty" text="Clear prices and real photos, always." />
            <FeatureItem number="02" title="Service" text="We answer quickly and follow up with you." />
            <FeatureItem number="03" title="Local knowledge" text="Our agents know every neighbourhood well." />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default About;