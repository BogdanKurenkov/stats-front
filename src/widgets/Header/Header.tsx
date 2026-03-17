import { FC } from 'react';
import { MENU_ITEMS } from './Header.constants';

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          {MENU_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};