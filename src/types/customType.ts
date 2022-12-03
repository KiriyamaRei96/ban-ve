export type objectType = {
  [key: string]: any;
};

export interface I_OptionsGetList {
  limit: number;
  page: number;
  search?: string;
  order_by?: string;
  order?: 'desc' | 'asc';
}

export interface I_OptionDelete {
  id: string | number;
}
