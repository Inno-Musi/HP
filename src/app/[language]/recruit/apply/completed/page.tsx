import { BreadCrumbs } from '@/components/bread-crumbs';
import { GeometricBackground } from '@/components/geometric-background';
import Link from 'next/link';
import { jobs } from '@/features/recruit/_assets/data/jobs';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ language: 'ja' | 'en' }>;
  searchParams: Promise<{ jobId?: string }>;
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { language } = await params;
  const { jobId } = await searchParams;
  const job = jobId ? jobs.find(j => j.id === jobId) : undefined;
  const jobTitle = job ? (language === 'ja' ? job.titleJa : job.titleEn) : (language === 'ja' ? '採用' : 'Recruitment');

  if (language === 'ja') {
    return {
      title: `応募完了 - ${jobTitle} | 株式会社MUSICO`,
      description: '株式会社MUSICOへの採用応募が完了しました。',
      robots: {
        index: false,
        follow: false,
      }
    };
  }
  return {
    title: `Application Completed - ${jobTitle} | MUSICO Inc.`,
    description: 'Your application to MUSICO Inc. has been completed.',
     robots: {
        index: false,
        follow: false,
      }
  };
}

export default async function RecruitApplyCompletedPage({ params, searchParams }: Props) {
  const { language } = await params;
  const { jobId } = await searchParams;
  const job = jobId ? jobs.find(j => j.id === jobId) : undefined;
  const jobTitle = job ? (language === 'ja' ? job.titleJa : job.titleEn) : '';

  return (
    <>
      <GeometricBackground className="fixed" />
      <div className="py-[100px] md:py-[160px] px-4">
        <div className="bg-white max-w-[800px] w-full mx-auto px-4 md:px-10 py-8 md:py-10 rounded-md flex flex-col gap-y-6 text-center">
          <h1 className="text-center text-2xl md:text-3xl font-bold">
            {language === 'ja' ? 'ご応募ありがとうございます' : 'Thank You for Applying'}
          </h1>
          {jobTitle && (
            <p className="text-lg">
              {language === 'ja' ? `「${jobTitle}」へのご応募を受け付けました。` : `We have received your application for the "${jobTitle}" position.`}
            </p>
          )}
          <div className="leading-7 md:leading-8 tracking-wide text-sm md:text-base">
            {language === 'ja' ? (
              <>
                <p>ご入力いただいた内容を確認の上、担当者より追ってご連絡いたします。</p>
                <p>選考結果については、書類選考通過者の方へのみご連絡させていただきます。</p>
                <p>今しばらくお待ちください。</p>
              </>
            ) : (
              <>
                <p>We will review your application and contact you shortly.</p>
                <p>Regarding the selection results, we will only contact candidates who pass the document screening.</p>
                <p>Thank you for your patience.</p>
              </>
            )}
          </div>
          <Link
            href={language === 'ja' ? '/ja' : '/en'}
            className="flex items-center gap-x-1 font-bold text-darkNavy hover:underline underline-offset-2 mx-auto"
          >
            {language === 'ja' ? 'トップページへ戻る' : 'Back to Homepage'}
          </Link>
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
          {
            labelJa: language === 'ja' ? '応募完了' : 'Application Completed',
            labelEn: language === 'en' ? 'Application Completed' : '応募完了',
            href: `/recruit/apply/completed${jobId ? `?jobId=${jobId}` : ''}`,
          },
        ]}
      />
    </>
  );
} 
