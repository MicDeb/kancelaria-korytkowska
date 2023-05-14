import format from 'date-fns/format';

export const postDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};
