export type LeadField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'number' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  full?: boolean;
};

export const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

export const foodSegments = [
  'Açaiteria',
  'Bar ou pub',
  'Bistrô',
  'Churrascaria',
  'Cafeteria',
  'Delivery',
  'Doceria',
  'Food truck',
  'Hamburgueria',
  'Lanchonete',
  'Loja de conveniência',
  'Marmitaria',
  'Padaria',
  'Pastelaria',
  'Pizzaria',
  'Posto de combustível',
  'Restaurante',
  'Rede ou franquia de alimentação',
  'Salgaderia',
  'Sorveteria',
  'Outro',
];

export const deadlines = [
  'O mais rápido possível',
  'Em até 30 dias',
  'De 1 a 3 meses',
  'Mais de 3 meses',
  'Ainda estou avaliando',
];

const contactFields: LeadField[] = [
  { name: 'nome', label: 'Nome', type: 'text', required: true, autoComplete: 'name', placeholder: 'Seu nome completo' },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    required: true,
    autoComplete: 'email',
    placeholder: 'voce@empresa.com.br',
  },
  {
    name: 'telefone',
    label: 'Telefone / WhatsApp',
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    placeholder: '(41) 99999-9999',
  },
  { name: 'estado', label: 'Estado', type: 'select', required: true, options: states, autoComplete: 'address-level1' },
  { name: 'segmento', label: 'Segmento do negócio', type: 'select', required: true, options: foodSegments, full: true },
];

export const totemFormFields: LeadField[] = [
  ...contactFields,
  { name: 'unidades', label: 'Quantidade de unidades', type: 'number', placeholder: 'Ex.: 3' },
  { name: 'caixas', label: 'Quantidade de caixas', type: 'number', placeholder: 'Ex.: 2' },
  { name: 'totens', label: 'Quantidade de totens', type: 'number', placeholder: 'Ex.: 2' },
  { name: 'pdv', label: 'Sistema de gestão / PDV', type: 'text', placeholder: 'Qual sistema você usa hoje?' },
  { name: 'prazo', label: 'Prazo de implantação', type: 'select', options: deadlines, full: true },
];

export const catracaFormFields: LeadField[] = [
  ...contactFields,
  {
    name: 'tipo',
    label: 'Qual catraca você precisa?',
    type: 'select',
    options: ['Catraca Expedidora', 'Catraca Receptora', 'As duas (expedidora e receptora)', 'Ainda não sei'],
    full: true,
  },
  { name: 'unidades', label: 'Quantidade de unidades', type: 'number', placeholder: 'Ex.: 3' },
  { name: 'catracas', label: 'Quantidade de catracas', type: 'number', placeholder: 'Ex.: 2' },
  { name: 'pdv', label: 'Sistema de gestão / PDV', type: 'text', placeholder: 'Qual sistema você usa hoje?' },
  { name: 'prazo', label: 'Prazo de implantação', type: 'select', options: deadlines },
];

export const comandaFormFields: LeadField[] = [
  ...contactFields,
  { name: 'unidades', label: 'Quantidade de unidades', type: 'number', placeholder: 'Ex.: 3' },
  { name: 'comandas', label: 'Quantidade de comandas', type: 'number', placeholder: 'Ex.: 200' },
  { name: 'pdv', label: 'Sistema de gestão / PDV', type: 'text', placeholder: 'Qual sistema você usa hoje?' },
  { name: 'prazo', label: 'Prazo de implantação', type: 'select', options: deadlines },
];

export const partnerFormFields: LeadField[] = [
  { name: 'nome', label: 'Nome', type: 'text', required: true, autoComplete: 'name', placeholder: 'Seu nome completo' },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    required: true,
    autoComplete: 'email',
    placeholder: 'voce@empresa.com.br',
  },
  {
    name: 'telefone',
    label: 'Telefone / WhatsApp',
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    placeholder: '(41) 99999-9999',
  },
  {
    name: 'razaoSocial',
    label: 'Razão Social',
    type: 'text',
    required: true,
    autoComplete: 'organization',
    placeholder: 'Nome da sua empresa',
  },
  { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
  { name: 'estado', label: 'Estado', type: 'select', required: true, options: states, autoComplete: 'address-level1' },
  {
    name: 'cidade',
    label: 'Cidade',
    type: 'text',
    required: true,
    autoComplete: 'address-level2',
    placeholder: 'Sua cidade',
  },
  {
    name: 'modalidade',
    label: 'Modalidade de interesse',
    type: 'select',
    required: true,
    options: ['Indicação', 'Revenda', 'Ainda não decidi'],
  },
  {
    name: 'interesse',
    label: 'O que você busca com a nossa parceria?',
    type: 'textarea',
    required: true,
    placeholder: 'Conte um pouco sobre o seu negócio e o que espera da parceria',
    full: true,
  },
];

// General contact page: same identity fields, but a free message instead of product details.
export const contactPageFields: LeadField[] = [
  { name: 'nome', label: 'Nome', type: 'text', required: true, autoComplete: 'name', placeholder: 'Seu nome completo' },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    required: true,
    autoComplete: 'email',
    placeholder: 'voce@empresa.com.br',
  },
  {
    name: 'telefone',
    label: 'Telefone / WhatsApp',
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    placeholder: '(41) 99999-9999',
  },
  { name: 'estado', label: 'Estado', type: 'select', required: true, options: states, autoComplete: 'address-level1' },
  {
    name: 'mensagem',
    label: 'Mensagem',
    type: 'textarea',
    required: true,
    placeholder: 'Como podemos ajudar?',
    full: true,
  },
];

// The API only accepts these products and only the fields defined here.
export const leadFormsByProduct: Record<string, LeadField[]> = {
  totem: totemFormFields,
  catraca: catracaFormFields,
  comanda: comandaFormFields,
  contato: contactPageFields,
  parceria: partnerFormFields,
};
