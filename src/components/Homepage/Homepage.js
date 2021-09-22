import React from 'react'
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro";//eslint-disable-line
import AnimationRevealPage from "components/Treact/helpers/AnimationRevealPage.js"
import Hero from "components/Treact/components/hero/BackgroundAsImageNoNav.js"
import Features from "components/Treact/components/features/DashedBorderSixFeatures"
import MainFeature from "components/Treact/components/features/TwoColSingleFeatureWithStats2.js"
import MainFeature2 from "components/Treact/components/features/TwoColWithTwoFeaturesAndButtons.js"
import Portfolio from "components/Treact/components/cards/PortfolioTwoCardsWithImage.js"
import Blog from "components/Treact/components/blogs/ThreeColSimpleWithImageAndDashedBorder.js"
import Testimonial from "components/Treact/components/testimonials/TwoColumnWithImageAndProfilePictureReview.js"
import FAQ from "components/Treact/components/faqs/SimpleWithSideImage.js"
import ContactUsForm from "components/Treact/components/forms/TwoColContactUsWithIllustration.js"
import Footer from "components/Treact/components/footers/MiniCenteredFooter.js"
import customerSupportIllustrationSrc from "components/Treact/images/customer-support-illustration.svg"

export default function Homepage() {
  return(
    <AnimationRevealPage>
      <Hero />
      <MainFeature />
      <Features />
      <MainFeature2 />
      <Portfolio />
      <Testimonial
        subheading="Testimonials"
        heading={
          <>
            Our Clients <span tw="text-primary-500">Love Us.</span>
          </>
        }
        description="Here are what some of our amazing customers are saying about our marketing professionals. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        testimonials={[
          {
            imageSrc:
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Charlotte Hale",
            customerTitle: "CEO, Tesla Inc."
          },
          {
            imageSrc:
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, Nestle"
          }
        ]}
        textOnLeft={true}
      />
      <FAQ
        imageSrc={customerSupportIllustrationSrc}
        imageContain={true}
        imageShadow={false}
        subheading="FAQs"
        heading={
          <>
            Do you have <span tw="text-primary-500">Questions ?</span>
          </>
        }
      />
      <Blog />
      <ContactUsForm />
      <Footer />
    </AnimationRevealPage>
  );
}
