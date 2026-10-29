import { CategoryInfo } from '@/lib/types';

export const categories: CategoryInfo[] = [
  {
    id: 'criminal_code',
    title: 'Уголовный кодекс',
    description: 'Преступления против жизни, свободы, собственности, общественной безопасности и государственной власти',
    icon: 'Scale',
  },
  {
    id: 'admin_code',
    title: 'Административный кодекс',
    description: 'Административные правонарушения в области дорожного движения, общественного порядка и управления',
    icon: 'FileWarning',
  },
  {
    id: 'procedure',
    title: 'Уголовно-процессуальный кодекс',
    description: 'Порядок уголовного судопроизводства, задержание, следственные действия и меры пресечения',
    icon: 'Gavel',
  },
  {
    id: 'constitution',
    title: 'Конституция РФ',
    description: 'Основы конституционного строя, права и свободы, судебная защита и органы власти',
    icon: 'Landmark',
  },
  {
    id: 'labor',
    title: 'Трудовой кодекс',
    description: 'Трудовые отношения, права работников, рабочее время, дисциплина и увольнение',
    icon: 'Briefcase',
  },
  {
    id: 'government',
    title: 'ФЗ — Правительство РФ',
    description: 'Состав, полномочия и организация деятельности Правительства Российской Федерации',
    icon: 'Building2',
  },
  {
    id: 'judiciary',
    title: 'ФЗ — Судебная система',
    description: 'Судебная власть, статус судей, суды и принципы судопроизводства',
    icon: 'Scale',
  },
  {
    id: 'civil_service',
    title: 'ФЗ — Государственная служба',
    description: 'Гражданская служба, должности, права и обязанности, дисциплина и противодействие коррупции',
    icon: 'Users',
  },
  {
    id: 'fsb',
    title: 'ФЗ — Федеральная служба безопасности (ФСБ)',
    description: 'Полномочия, направления деятельности, применение силы и контроль ФСБ',
    icon: 'Shield',
  },
  {
    id: 'weapons',
    title: 'ФЗ — Оборот оружия',
    description: 'Виды оружия, лицензирование, хранение, ношение и ответственность',
    icon: 'Crosshair',
  },
  {
    id: 'police',
    title: 'ФЗ — Полиция',
    description: 'Назначение, принципы, права и обязанности, применение силы и структура МВД',
    icon: 'ShieldCheck',
  },
  {
    id: 'prosecutor',
    title: 'ФЗ — Прокуратура',
    description: 'Надзор, система, полномочия прокурора и участие в судебных делах',
    icon: 'FileSearch',
  },
  {
    id: 'fso',
    title: 'ФЗ — Федеральная служба охраны (ФСО)',
    description: 'Государственная охрана, объекты охраны, полномочия и применение силы',
    icon: 'Lock',
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.id, c])
) as Record<string, CategoryInfo>;
