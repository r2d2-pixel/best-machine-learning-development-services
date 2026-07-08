export type { Company } from '../data/companies';
export { companies, getCompany, getAllSlugs, getComparisons } from '../data/companies';
import { companies } from '../data/companies';

export function getCompanies() {
  return companies;
}

export const SERVICE_LABELS: Record<string, string> = {
  'custom-ml':           'Custom ML Development',
  'computer-vision':     'Computer Vision',
  'nlp':                 'NLP & Text Analytics',
  'deep-learning':       'Deep Learning',
  'mlops':               'MLOps & Deployment',
  'generative-ai':       'Generative AI',
  'data-engineering':    'Data Engineering',
  'ml-consulting':       'ML Consulting',
  'predictive-analytics':'Predictive Analytics',
  'staff-aug':           'Staff Augmentation',
};
