import { BreadCrumbs } from '@/components/bread-crumbs';
import { GeometricBackground } from '@/components/geometric-background';
import { TitleMain } from '@/components/title-main';
import { FormRecruitEn } from '@/features/recruit/_components/form-recruit-en';
import { FormRecruitJa } from '@/features/recruit/_components/form-recruit-ja';
import { jobs } from '@/features/recruit/_assets/data/jobs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ language: 'ja' | 'en'; jobId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language, jobId } = await params;
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    return {
      title: language === 'ja' ? '応募フォーム | 株式会社MUSICO' : 'Application Form | MUSICO Inc.',
      description: language === 'ja' ? '選択された職種が見つかりませんでした。' : 'The selected position was not found.',
    };
  }

  const title = language === 'ja' ? `${job.titleJa} - 応募フォーム` : `${job.titleEn} - Application Form`;
  const description = language === 'ja' ? `${job.titleJa}への応募はこちらから。` : `Apply for the ${job.titleEn} position here.`;

  return {
    title: `${title} | ${language === 'ja' ? '株式会社MUSICO' : 'MUSICO Inc.'}`,
    description,
  };
}


export default async function RecruitApplyPage({ params }: Props) {
  const { language, jobId } = await params;
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
    notFound();
  }

  const pageTitleJa = `${job.titleJa} - 応募フォーム`;
  const pageTitleEn = `${job.titleEn} - Application Form`;

  return (
    <>
      <div className="relative max-w-[calc(100vw-32px)] mx-auto py-16 md:py-20 flex flex-col gap-y-6 md:gap-y-12">
        <GeometricBackground className="fixed" />
        <TitleMain
          titleJa={pageTitleJa}
          titleEn={pageTitleEn}
          language={language}
          className="text-white"
        />
        <div className="max-w-[800px] w-full mx-auto text-sm md:text-base text-center leading-6 md:leading-7 text-white px-4">
          {language === 'ja' ? (
            <p>以下のフォームにご入力の上、ご応募ください。</p>
          ) : (
            <p>Please fill out the form below to apply.</p>
          )}
        </div>
        {language === 'ja' ? <FormRecruitJa job={job} /> : <FormRecruitEn job={job} />}
      </div>
      <BreadCrumbs
        language={language}
        crumbs={[
          { labelJa: '採用情報', labelEn: 'Careers', href: '/recruit' },
          {
            labelJa: language === 'ja' ? job.titleJa : job.titleEn,
            labelEn: language === 'en' ? job.titleEn : job.titleJa,
            href: `/recruit/apply/${jobId}`,
          },
        ]}
      />
    </>
  );
} 
