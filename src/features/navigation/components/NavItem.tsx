import { MenuItem } from '@/types/navigation';
import { MegaMenu } from './MegaMenu';

interface NavItemProps {
  item: MenuItem;
}

export function NavItem({ item }: NavItemProps) {
  return <MegaMenu item={item} />;
}