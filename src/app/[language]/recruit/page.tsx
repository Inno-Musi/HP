import { BreadCrumbs } from '@/components/bread-crumbs';
import { TitleMain } from '@/components/title-main';
import { jobs, commonRecruitInfo } from '@/features/recruit/_assets/data/jobs';
import { JobCard } from '@/features/recruit/_components/job-card';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language } = await params;
  if (language === 'ja') {
    return {
      title: '採用情報 | 株式会社MUSICO',
      description: '株式会社MUSICOの募集職種一覧です。',
    };
  }
  return {
    title: 'Careers | MUSICO Inc.',
    description: 'List of open positions at MUSICO Inc.',
  };
}

export default async function RecruitPage({ params }: Props) {
  const { language } = await params;

  const commonInfo = {
    workLocation: language === 'ja' ? commonRecruitInfo.workLocationJa : commonRecruitInfo.workLocationEn,
    workHours: language === 'ja' ? commonRecruitInfo.workHoursJa : commonRecruitInfo.workHoursEn,
    treatment: language === 'ja' ? commonRecruitInfo.treatmentJa : commonRecruitInfo.treatmentEn,
    languageRequirement: language === 'ja' ? commonRecruitInfo.languageJa : commonRecruitInfo.languageEn,
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-darkNavy via-darkNavy to-emerald py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-lightBlue/20 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <TitleMain
            titleJa="採用情報"
            titleEn="Careers"
            language={language}
            className="text-white mb-6"
          />
        </div>
      </div>

      {/* Jobs Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-darkNavy mb-4">
                {language === 'ja' ? '募集職種一覧' : 'Open Positions'}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald to-lightBlue rounded-full mx-auto mb-6"></div>
            </div>

            {/* Jobs Grid - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} language={language} />
              ))}
            </div>

            {/* Common Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-darkNavy mb-2">
                  {language === 'ja' ? '共通情報' : 'Common Information'}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald to-lightBlue rounded-full mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{commonInfo.workLocation}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{commonInfo.workHours}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{commonInfo.treatment}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{commonInfo.languageRequirement}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BreadCrumbs
        language={language}
        crumbs={[
          {
            labelJa: '採用情報',
            labelEn: 'Careers',
            href: '/recruit',
          },
        ]}
      />
    </>
  );
} 
