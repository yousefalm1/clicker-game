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
    id: 'clicker_cookie',
    name: 'Cookie Clicker',
    description: 'A tasty clicker for sweet rewards.',
    cost: 250,
    IconComponent: CookieIcon,
  },
  {
    id: 'clicker_boxer',
    name: 'Boxer Clicker',
    description: 'Punch your way to success!',
    cost: 1250,
    IconComponent: BoxerIcon,
  },
  {
    id: 'clicker_zombie',
    name: 'Zombie Clicker',
    description: 'Rise to the top with the undead.',
    cost: 6250,
    IconComponent: ZombieIcon,
  },
  {
    id: 'clicker_monster',
    name: 'Monster Clicker',
    description: 'Unleash the beast within.',
    cost: 31250,
    IconComponent: MonsterIcon,
  },
  {
    id: 'clicker_react',
    name: 'React Clicker',
    description: 'Component-driven clicking fun.',
    cost: 156250,
    IconComponent: ReactIcon,
  },
  {
    id: 'clicker_treasure_chest',
    name: 'Treasure Chest Clicker',
    description: 'Unlock treasures with each click.',
    cost: 781250,
    IconComponent: TreasureChestIcon,
  },
  {
    id: 'clicker_tree',
    name: 'Tree Clicker',
    description: 'Grow your fortune organically.',
    cost: 3906250,
    IconComponent: TreeIcon,
  },
  {
    id: 'clicker_diamond',
    name: 'Diamond Clicker',
    description: 'Shine bright with each click.',
    cost: 19531250,
    IconComponent: DiamondIcon,
  },
];

export default cosmeticUpgrades;
