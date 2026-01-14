import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'JavaScript',
    },
  ],
};

const backEnd: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Spring Framework',
    },
    {
      title: 'Spring boot',
    },
    {
      title: 'eGov Framework',
    },
    {
      title: 'MyBatis',
    },
    {
      title: 'JPA',
    },
  ],
};

const frontEnd: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
    },
    {
      title: 'jQuery',
    },
    {
      title: 'JSP',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MariaDB',
    },
    {
      title: 'MongoDB',
    },
    {
      title: 'Oracle',
    },
  ],
};

const versionControlAndTool: ISkill.Skill = {
  category: 'Version Control & Tool',
  items: [
    {
      title: 'GitHub',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Apache Tomcat 9.0',
    },
    {
      title: 'Swagger',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, backEnd, frontEnd, database, versionControlAndTool],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
