import BoxerIcon from '../assets/svg/Boxer.svg';
import CookieIcon from '../assets/svg/Cookie.svg';
import DiamondIcon from '../assets/svg/diamond.svg';
import MonsterIcon from '../assets/svg/Monster.svg';
import ReactIcon from '../assets/svg/React.svg';
import TreasureChestIcon from '../assets/svg/TreasureChest.svg';
import TreeIcon from '../assets/svg/tree.svg';
import ZombieIcon from '../assets/svg/Zombie.svg';

const cosmeticUpgrades = [
  {
    id: 'clicker_boxer',
    name: 'Boxer Clicker',
    description: 'Punch your way to success!',
    cost: 500,
    IconComponent: BoxerIcon,
  },
  {
    id: 'clicker_cookie',
    name: 'Cookie Clicker',
    description: 'A tasty clicker for sweet rewards.',
    cost: 200,
    IconComponent: CookieIcon,
  },
  {
    id: 'clicker_diamond',
    name: 'Diamond Clicker',
    description: 'Shine bright with each click.',
    cost: 1000,
    IconComponent: DiamondIcon,
  },
  {
    id: 'clicker_monster',
    name: 'Monster Clicker',
    description: 'Unleash the beast within.',
    cost: 700,
    IconComponent: MonsterIcon,
  },
  {
    id: 'clicker_react',
    name: 'React Clicker',
    description: 'Component-driven clicking fun.',
    cost: 400,
    IconComponent: ReactIcon,
  },
  {
    id: 'clicker_treasure_chest',
    name: 'Treasure Chest Clicker',
    description: 'Unlock treasures with each click.',
    cost: 800,
    IconComponent: TreasureChestIcon,
  },
  {
    id: 'clicker_tree',
    name: 'Tree Clicker',
    description: 'Grow your fortune organically.',
    cost: 250,
    IconComponent: TreeIcon,
  },
  {
    id: 'clicker_zombie',
    name: 'Zombie Clicker',
    description: 'Rise to the top with the undead.',
    cost: 550,
    IconComponent: ZombieIcon,
  },
];

export default cosmeticUpgrades;
