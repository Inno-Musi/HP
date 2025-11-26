import Link from 'next/link';
import type { Job } from '@/features/recruit/_assets/data/jobs';
import { Button } from '@/components/button';

type Props = {
  job: Job;
  language: 'ja' | 'en';
};

export const JobCard = ({ job, language }: Props) => {
  const title = language === 'ja' ? job.titleJa : job.titleEn;
  const content = language === 'ja' ? job.contentJa : job.contentEn;
  const skillsHeader = language === 'ja' ? job.skillsJaHeader : job.skillsEnHeader;
  const skills = language === 'ja' ? job.skillsJa : job.skillsEn;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-6 flex flex-col h-full min-h-[480px]">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-darkNavy mb-3 group-hover:text-emerald transition-colors duration-300">{title}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald to-lightBlue rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* 職務内容 */}
          <div>
            <h4 className="text-sm font-semibold text-darkNavy mb-2 flex items-center">
              <div className="w-2 h-2 bg-emerald rounded-full mr-2"></div>
              {language === 'ja' ? '職務内容' : 'Job Description'}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">{content}</p>
          </div>

          {/* 歓迎スキル */}
          <div>
            <h4 className="text-sm font-semibold text-darkNavy mb-3 flex items-center">
              <div className="w-2 h-2 bg-lightBlue rounded-full mr-2"></div>
              {skillsHeader}
            </h4>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-xs text-gray-600 flex items-start">
                  <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                  <span className="leading-relaxed">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link href={`/${language}/recruit/apply/${job.id}`} className="block">
            <Button 
              text={language === 'ja' ? '応募する' : 'Apply Now'} 
              className="w-full bg-gradient-to-r from-darkNavy to-emerald hover:from-emerald hover:to-darkNavy text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
}; 
