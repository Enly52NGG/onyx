import { CategoryInfo } from '@/lib/types';

export const categories: CategoryInfo[] = [
  { id: 'constitution', title: 'Конституция РФ', description: 'Основы конституционного строя (RMRP)', icon: 'Landmark' },
  { id: 'criminal_code', title: 'Уголовный кодекс', description: 'Преступления и наказания (RMRP)', icon: 'Scale' },
  { id: 'admin_code', title: 'Административный кодекс', description: 'Административные правонарушения (RMRP)', icon: 'FileWarning' },
  { id: 'procedure', title: 'Процессуальный кодекс', description: 'Процессуальный порядок (RMRP)', icon: 'Gavel' },
  { id: 'labor', title: 'Трудовой кодекс', description: 'Трудовые отношения (RMRP)', icon: 'Briefcase' },
  { id: 'budget', title: 'Бюджетный кодекс', description: 'Бюджетное устройство (RMRP)', icon: 'File' },
  { id: 'government', title: 'ФКЗ — Правительство', description: 'ФКЗ «О Правительстве» № 2-ФКЗ', icon: 'Building2' },
  { id: 'judiciary', title: 'ФКЗ — Судебная система', description: 'ФКЗ «О судебной системе» № 64-ФКЗ', icon: 'Scale' },
  { id: 'special_regimes', title: 'ФКЗ — Особые режимы', description: 'ФКЗ № 28-ФКЗ', icon: 'Shield' },
  { id: 'state_property', title: 'ФЗ — Госсобственность', description: 'ФЗ № 86-ФЗ', icon: 'Lock' },
  { id: 'document_flow', title: 'ФЗ — Документооборот', description: 'ФЗ № 42-ФЗ', icon: 'File' },
  { id: 'civil_service', title: 'ФЗ — Госслужба', description: 'ФЗ № 54-ФЗ', icon: 'Users' },
  { id: 'fsb', title: 'ФЗ — ФСБ', description: 'ФЗ № 78-ФЗ (ФСБ)', icon: 'Shield' },
  { id: 'weapons', title: 'ФЗ — Оружие', description: 'ФЗ № 34-ФЗ', icon: 'Crosshair' },
  { id: 'police', title: 'ФЗ — Полиция', description: 'ФЗ № 74-ФЗ', icon: 'ShieldCheck' },
  { id: 'prosecutor', title: 'ФЗ — Прокуратура', description: 'ФЗ № 14-ФЗ', icon: 'FileSearch' },
  { id: 'fso', title: 'ФЗ — ФСО', description: 'ФЗ № 22-ФЗ (ФСО)', icon: 'Lock' },
  { id: 'traffic', title: 'ФЗ — ПДД', description: 'ФЗ № 90-ФЗ', icon: 'File' },
  { id: 'state_secret', title: 'ФЗ — Гостайна', description: 'ФЗ № 10-ФЗ', icon: 'Lock' },
  { id: 'mass_media', title: 'ФЗ — СМИ', description: 'О средствах массовой информации', icon: 'File' },
  { id: 'commercial', title: 'ФЗ — Коммерция', description: 'ФЗ № 12-ФЗ', icon: 'Briefcase' },
  { id: 'health', title: 'ФЗ — Здравоохранение', description: 'ФЗ № 29-ФЗ', icon: 'File' },
  { id: 'road_org', title: 'ФЗ — Организация ДД', description: 'ФЗ № 99-ФЗ', icon: 'File' },
  { id: 'advocacy', title: 'ФЗ — Адвокатура', description: 'ФЗ № 50-ФЗ', icon: 'Scale' },
  { id: 'penal', title: 'ФЗ — УИН', description: 'ФЗ № 66-ФЗ', icon: 'Lock' },
  { id: 'investigative', title: 'ФЗ — СК', description: 'ФЗ № 88-ФЗ', icon: 'FileSearch' },
  { id: 'airspace', title: 'ФЗ — Воздушное пространство', description: 'ФЗ № 95-ФЗ', icon: 'File' },
];

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.id, c])
) as Record<string, CategoryInfo>;
