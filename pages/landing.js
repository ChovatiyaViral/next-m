import Banner from "../components/common/banner";
import HeroSection from "../components/common/hero-section";
import Sections from "../components/common/sections";
import Slider from "../components/common/slider";
import Section from "../components/layout/content/section";
import Footer from "../components/layout/footer/footer";
import Header from "../components/layout/header";

export default function Landing() {
  return (
    <div>
      <Header />
      <Banner
        image={["/assets/images/banner.png"]}
        title="Legacy Series"
        subTitle="Distilled at Macallan Distillery"
        linkDetails={{
          title: "explore more",
          path: "/the-octave-premium",
        }}
      />
      <HeroSection
        image={["./assets/images/Macallan52.png"]}
        title="the collection"
        imageStyle={{
            backgroundAttachment: "unset"
          }}
        // subTitle="The Duncan Taylor Story"
        description="The whisky distilled at Macallan Distillery, in the heart of the Scottish Highlands, is one of the most highly sought after in the world. Duncan Taylor has created a unique collection of this world-famous whisky and are now proud to release them."
        linkDetails={{
          title: "explore more",
          path: "/the-rarest",
        }}
      />

      <Section>
        <Sections
          title={
            <span>
              The Octave Premium <br /> Macallan 31 year old
            </span>
          }
          subTitle="Sir Nicks Pick"
          description={
            <span>
              On a recent trip to the Highlands of Scotland, golfing legend, Sir Nick Faldo visited the Duncan Taylor whisky warehouses, to sample a few incredibly old and rare whiskies. One of these
              whiskies really caught his attention, a 31 Year Old Single Malt Scotch Whisky, created at the world-renowned Macallan Distillery. Macallan is a personal favourite of Sir Nick Faldo’s,
              who has always enjoyed the rich and complex flavours of this extraordinary Highland whisky. <br /> In honour of this we have called this release ‘Sir Nick’s Pick’.
            </span>
          }
          images={["./assets/images/macallan-31-section.png"]}
          contentClass="scotchWhisky_Main_Wrapper"
          sectionClasses={["flex-row-reverse"]}
          imageStyle={{
            backgroundPosition: "right"
          }}
          style={{
            paddingTop: 88,
          }}
          backgroundImageURL="/assets/images/macallan_30_bg.png"
          exploreOption={{ display: true, link: "/the-octave-premium" }}
        />

        <Sections
          title={
            <span>
              The Rarest Collection <br /> Macallan 52 year old
            </span>
          }
          subTitle="Legacy Series"
          description="This Rarest Collection 52 year old, is the oldest whisky from Macallan Distillery that Duncan Taylor Scotch Whisky has ever released. Their collection of rare casks from the distillery, dating back to the 1960s, is one of the largest owned by an independent company outside of Macallan itself."
          contentClass="scotchWhisky_Main_Wrapper"
          images={["/assets/images/macallan_50.png"]}
          style={{
            paddingTop: 88,
            height: "100vh",
          }}
          imageStyle={{
            backgroundPosition: "left"
          }}
          exploreOption={{ display: true, link: "/the-rarest" }}
        />
        <div className="mt-[55px] sm:mt-[99px] mb-[24px] sm:mb-[72.94px]">
          <Slider
            sliderDetails={{
              images: ["/assets/images/slider-1.png", "/assets/images/slider-2.png"],
              // slideTitle: "Region Of Glenlivet",
              slideDescription: (
                <span>
                  Established in 1938, Duncan Taylor Scotch Whisky Limited is a specialist independent whisky merchant with one of the largest privately held collections of aged single malt and single
                  grain Scotch whiskies.Today, the company releases these prized spirits via an impressive range of award-winning product brands, all bottled at its headquarters in Huntly. <br />{" "}
                  <br />
                  This collection of whiskies from the Macallan Distillery, has been brought together over the years, as owners of the company had the vision to foresee the importance of this whisky,
                  as it has grown to become an aspirational brand.
                </span>
              ),
            }}
            width={600}
            height={400}
            title="Duncan Taylor Scotch Whisky"
            subTitle="The story of"
          />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
