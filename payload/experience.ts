import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    // {
    //   title: 'Linux Foundation',
    //   positions: [
    //     {
    //       title: 'System Engineer',
    //       startedAt: '1996-05',
    //       descriptions: [
    //         'Steering Kernel patching and updates for various distributions',
    //         'Automating deployment and integration processes for Linux servers',
    //         'Spearheading initiatives to enhance Linux kernel security',
    //         'Collaborating with global developers to coordinate code contributions',
    //       ],
    //       skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
    //     },
    //     {
    //       title: 'System Engineer Intern',
    //       startedAt: '1996-02',
    //       endedAt: '1996-05',
    //       descriptions: [
    //         'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
    //         'Supported deployment and integration tasks for Linux server environments',
    //         'Conducted research on Linux kernel security practices and presented findings to the team',
    //       ],
    //       skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
    //     },
    //   ],
    // },
    {
      title: '체인팜 주식회사(ChainFarm)',
      positions: [
        {
          title: '플랫폼 사업부 풀스택 개발자',
          startedAt: '2024-04',
          endedAt: '2025-10',
          descriptions: [
            'Promoted the use and development of Linux globally.',
            'Developed automated scripts to streamline system configuration.',
            'Facilitated live patching systems, reducing downtime.',
          ],
          skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
        },
      ],
    },
  ],
};

export default experience;
