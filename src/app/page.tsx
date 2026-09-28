import Hero from '@/components/Hero';
import AppScreenshots from '@/components/AppScreenshots';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import AnalyticsSection from '@/components/AnalyticsSection';
import PrivacySection from '@/components/PrivacySection';
import DownloadSection from '@/components/DownloadSection';
import SupportDeveloper from '@/components/SupportDeveloper';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AppScreenshots />
      <Features />
      <HowItWorks />
      <AnalyticsSection />
      <PrivacySection />
      <DownloadSection />
      <SupportDeveloper />
      <FAQSection />
    </>
  );
}
